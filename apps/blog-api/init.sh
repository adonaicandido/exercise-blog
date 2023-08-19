#!/bin/sh
set -e

until PGPASSWORD=$POSTGRES_PASSWORD psql postgresql://$DATABASE_USER:$DATABASE_PASS@$DATABASE_HOST:$DATABASE_PORT/$DATABASE_NAME '\q'; do
  >&2 echo "Postgres is unavailable - sleeping"
  sleep 1
done

>&2 echo "Postgres is up - executing command"

CONTAINER_ALREADY_STARTED="CONTAINER_ALREADY_STARTED_PLACEHOLDER"
if [ ! -e $CONTAINER_ALREADY_STARTED ]; then
    touch $CONTAINER_ALREADY_STARTED
    echo "Seeding database..."
    turbo db:seed --filter=blog-api
else
    echo "Skipping seed, container already started."
fi

exec "$@"

