#!/bin/bash
until nc -z -v -w3 db 5432; do
  echo "Waiting for database connection..."
  sleep 1
done
echo "DB is up!"
