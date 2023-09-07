#!/usr/bin/env bash
docker compose up --detach
SCRIPT_DIR="$(dirname "$(readlink -f "$0")")"
echo "Healthcheck script is located at: $SCRIPT_DIR"
source $SCRIPT_DIR/healthcheck.sh
npx prisma migrate deploy