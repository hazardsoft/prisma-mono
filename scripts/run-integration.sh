#!/usr/bin/env bash
DIR="$(cd "$(dirname "$0")" && pwd)"
source $DIR/db-startup.sh
vitest -c ./vitest.config.integration.ts