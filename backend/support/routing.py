from django.urls import re_path
from . import consumers

websocket_urlpatterns = [
    re_path(r'ws/support/chat/(?P<session_id>[^/]+)/$', consumers.ChatConsumer.as_asgi()),
]
