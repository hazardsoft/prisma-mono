#!/usr/bin/env bash
DIR="$(cd "$(dirname "$0")" && pwd)"
source $DIR/db-startup.sh
echo "Database start-up script is located at: $DIR"
npx playwright test