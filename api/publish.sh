#!/usr/bin/env bash

npm run build

DOCKER_REGISTRY="gitea.pixelparasol.com/nathan/mothership-assistant" && CI_COMMIT_SHORT_SHA=$(git rev-parse --short HEAD)

docker buildx build --no-cache -f Dockerfile . --platform linux/amd64 -t $DOCKER_REGISTRY/api:latest -t $DOCKER_REGISTRY/api:$CI_COMMIT_SHORT_SHA

docker login gitea.pixelparasol.com

docker push $DOCKER_REGISTRY/api:$CI_COMMIT_SHORT_SHA

docker push $DOCKER_REGISTRY/api:latest
