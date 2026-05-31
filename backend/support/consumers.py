import json
from channels.generic.websocket import AsyncWebsocketConsumer
from channels.db import database_sync_to_async
from .models import ChatSession, ChatMessage
import uuid

class ChatConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        self.session_id = self.scope['url_route']['kwargs'].get('session_id')
        
        if not self.session_id or self.session_id == 'new':
            self.session_id = str(uuid.uuid4())
            await self.create_session(self.session_id)
        
        self.room_group_name = f'chat_{self.session_id}'

        await self.channel_layer.group_add(
            self.room_group_name,
            self.channel_name
        )

        await self.accept()

        # Send back the session ID to the client if they requested a new one
        await self.send(text_data=json.dumps({
            'type': 'session_init',
            'session_id': self.session_id
        }))

    async def disconnect(self, close_code):
        await self.channel_layer.group_discard(
            self.room_group_name,
            self.channel_name
        )

    async def receive(self, text_data):
        data = json.loads(text_data)
        message_type = data.get('type')
        
        if message_type == 'chat_message':
            message = data['message']
            sender = data.get('sender', 'user')
            client_id = data.get('id', None)

            # Save message to DB
            saved_msg = await self.save_message(self.session_id, sender, message)

            # Send message to room group
            await self.channel_layer.group_send(
                self.room_group_name,
                {
                    'type': 'chat_message',
                    'message': message,
                    'sender': sender,
                    'timestamp': saved_msg.timestamp.isoformat(),
                    'id': client_id
                }
            )
        elif message_type == 'typing':
            sender = data.get('sender', 'user')
            is_typing = data.get('is_typing', False)
            
            await self.channel_layer.group_send(
                self.room_group_name,
                {
                    'type': 'typing_indicator',
                    'sender': sender,
                    'is_typing': is_typing
                }
            )

    async def chat_message(self, event):
        message = event['message']
        sender = event['sender']
        timestamp = event.get('timestamp')
        client_id = event.get('id')

        await self.send(text_data=json.dumps({
            'type': 'chat_message',
            'message': message,
            'sender': sender,
            'timestamp': timestamp,
            'id': client_id
        }))

    async def typing_indicator(self, event):
        sender = event['sender']
        is_typing = event['is_typing']

        await self.send(text_data=json.dumps({
            'type': 'typing',
            'sender': sender,
            'is_typing': is_typing
        }))

    @database_sync_to_async
    def create_session(self, session_id):
        return ChatSession.objects.get_or_create(session_id=session_id)

    @database_sync_to_async
    def save_message(self, session_id, sender, content):
        session, _ = ChatSession.objects.get_or_create(session_id=session_id)
        return ChatMessage.objects.create(
            session=session,
            sender=sender,
            content=content
        )
