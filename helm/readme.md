## Installation

> Note: These instructions are for deploying the UI-only version

The application can be deployed with a simple helm install command:

```bash
helm upgrade --install mothership-assistant ./helm -n mothership-assistant --create-namespace
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

```bash
npm run build

DOCKER_REGISTRY="gitea.pixelparasol.com/nathan/mothership-assistant" && CI_COMMIT_SHORT_SHA=$(git rev-parse --short HEAD)

docker buildx build --no-cache -f Dockerfile . --platform linux/amd64 -t $DOCKER_REGISTRY:latest -t $DOCKER_REGISTRY:$CI_COMMIT_SHORT_SHA

docker login gitea.pixelparasol.com

docker push $DOCKER_REGISTRY:$CI_COMMIT_SHORT_SHA; docker push $DOCKER_REGISTRY:latest
```

### Deployment

The UI component can be deployed with a specific tag:

```bash
helm upgrade mothership-assistant ./helm -n mothership-assistant --set deploy.ui.tag="v1.0.4"
```

### Troubleshooting

You can check the deployment status with:

```bash
helm upgrade mothership-assistant ./helm -n mothership-assistant --dry-run=server
```

## Helm Diff

Install the `helm-diff` plugin:

```bash
helm plugin install https://github.com/databus23/helm-diff
```

View the diff if an upgrade were issued:

```bash
helm diff upgrade mothership-assistant ./helm -n mothership-assistant
```

## Debugging

Check pod status:

```bash
kubectl get pods -n mothership-assistant
```

Check service status:

```bash
kubectl get svc -n mothership-assistant
```

Check ingress status:

```bash
kubectl get ingress -n mothership-assistant
```

View application logs:

```bash
kubectl logs -n mothership-assistant deployment/mothership-assistant
```
