#!/usr/bin/env bash
SCRIPT_DIR="$(dirname "$(readlink -f "$0")")"
echo "Run e2e tests script is located at: $SCRIPT_DIR, args passed to script: '$@'"
source $SCRIPT_DIR/db-startup.sh
npx playwright test $@