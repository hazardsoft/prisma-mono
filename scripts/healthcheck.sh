CONTAINER_NAME=prisma-vitest-db
HEALTHY_STATUS='"healthy"'

until [ $(docker inspect --format='{{json .State.Health.Status}}' $CONTAINER_NAME) == $HEALTHY_STATUS ]
do
  echo '🟡 - Waiting for database to be ready...'
  sleep 1
done
echo '🟢 - Database is ready!'