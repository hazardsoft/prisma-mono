#!/usr/bin/env bash
SCRIPT_DIR="$(dirname "$(readlink -f "$0")")"
echo "Database start-up script is located at: $SCRIPT_DIR"
source $SCRIPT_DIR/db-startup.sh
i=1;
for user in "$@" 
do
    echo "cli arg - $i: $user";
    i=$((i + 1));
done
npx playwright test