## Installation

> Note: These instructions are for deploying the UI

With the first install, it is `crucial` to set the secrets for the database.

```
helm upgrade --install mothership-assistant ./helm -n mothership-assistant --create-namespace \
  --set components.db.secrets.POSTGRES_PASSWORD="<redacted>" \
  --set components.db.secrets.POSTGRES_USER="<redacted>" \
  --set components.db.secrets.POSTGRES_NAME="<redacted>" \
  --set components.redis.secrets.REDIS_PASSWORD="<redacted>"
  --set components.api.secrets.KEYCLOAK_SESSION_SECRET="<redacted>"
```

## Secrets

> The karns-online group access token in gitea is used here

You will need to create the secrets for the application to use.

Gitea Auth secret for pulling the container from the private registry

```
kubectl -n mothership-assistant \
  create secret docker-registry gitea-auth \
  --docker-server=https://gitea.pixelparasol.com \
  --docker-username=nathan \
  --docker-password=<redacted> \
  --docker-email=nathan@pixelparasol.com
```

## Build the image

### UI Instructions

```
cd ui

npm run build

DOCKER_REGISTRY="gitea.pixelparasol.com/nathan/mothership-assistant" && CI_COMMIT_SHORT_SHA=$(git rev-parse --short HEAD)

docker buildx build --no-cache -f Dockerfile . --platform linux/amd64 -t $DOCKER_REGISTRY/ui:latest -t $DOCKER_REGISTRY/ui:$CI_COMMIT_SHORT_SHA

docker login gitea.pixelparasol.com

docker push $DOCKER_REGISTRY/ui:$CI_COMMIT_SHORT_SHA; docker push $DOCKER_REGISTRY/ui:latest
```

### API Instructions

```
cd api

npm run build

DOCKER_REGISTRY="gitea.pixelparasol.com/nathan/mothership-assistant" && CI_COMMIT_SHORT_SHA=$(git rev-parse --short HEAD)

docker buildx build --no-cache -f Dockerfile . --platform linux/amd64 -t $DOCKER_REGISTRY/api:latest -t $DOCKER_REGISTRY/api:$CI_COMMIT_SHORT_SHA

docker login gitea.pixelparasol.com

docker push $DOCKER_REGISTRY/api:$CI_COMMIT_SHORT_SHA; docker push $DOCKER_REGISTRY/api:latest
```

### mothership-assistant Secrets

```
helm upgrade mothership-assistant ./helm -n mothership-assistant \
  --set components.api.secrets.TOKEN_REFRESH_SECRET="<redacted>" \
  --set components.api.secrets.TOKEN_SECRET="<redacted>"
```

### Database Secrets

> this is the db string that the api uses for prisma

```
helm upgrade mothership-assistant ./helm -n mothership-assistant \
  --set components.db.secrets.DATABASE_URL="<redacted>"
```

### Troubleshooting

You may find yourself in a state where you need to do secret checks to see how they render.
adding the `--dry-run=server` argument to your upgrade will render the secret checks.

```
helm upgrade mothership-assistant ./helm -n mothership-assistant --dry-run=server
```

## Helm Diff

Install the `helm-diff` plugin

```
helm plugin install https://github.com/databus23/helm-diff
```

view the diff if an upgrade were issued

> NOTE: this will show that secrets will be removed but thats not true

```
helm diff upgrade mothership-assistant ./helm -n mothership-assistant
```

## Deployment

Each component can be deployed individually by tag by specifiying it with `--set`

```
helm upgrade mothership-assistant ./helm -n mothership-assistant --set deploy.api.tag="v1.0.4"
helm upgrade mothership-assistant ./helm -n mothership-assistant --set deploy.db.tag="v1.0.4"
helm upgrade mothership-assistant ./helm -n mothership-assistant --set deploy.ui.tag="v1.0.4"
```
