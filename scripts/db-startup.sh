#!/usr/bin/env bash
docker compose up --detach
SCRIPT_DIR="$(dirname "$(readlink -f "$0")")"
echo "Healthcheck script is assumed to be found at:"
echo $SCRIPT_DIR
. $SCRIPT_DIR/healthcheck.sh
npx prisma migrate deploy