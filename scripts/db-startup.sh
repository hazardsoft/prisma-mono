#!/usr/bin/env bash
docker compose up --detach
DIR="$(cd "$(dirname "$0")" && pwd)"
source $DIR/healthcheck.sh
npx prisma migrate deploy