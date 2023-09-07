#!/usr/bin/env bash
SCRIPT_DIR="$(dirname "$(readlink -f "$0")")"
echo "Database start-up script is located at: $SCRIPT_DIR"

docker compose up --detach
source $SCRIPT_DIR/healthcheck.sh
npx prisma migrate deploy