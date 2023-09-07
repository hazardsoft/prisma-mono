#!/usr/bin/env bash
docker compose up --detach
DIR="$(cd "$(dirname "$0")" && pwd)"
echo "Healthcheck script is assumed to be found at:"
echo $DIR
. $DIR/healthcheck.sh
npx prisma migrate deploy