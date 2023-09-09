#!/usr/bin/env bash
SCRIPT_DIR="$(dirname "$(readlink -f "$0")")"
echo "Healthcheck script is located at: $SCRIPT_DIR"

CONTAINER_NAME=prisma-vitest-db
HEALTHY_STATUS='"healthy"'

until [ $(docker inspect --format='{{json .State.Health.Status}}' $CONTAINER_NAME) == $HEALTHY_STATUS ]
do
  echo '🟡 - Waiting for database to be ready...'
  sleep 1
done
echo '🟢 - Database is ready!'