FROM node:20.15.1-alpine AS builder

# ENTRYPOINT ["tail", "-f", "/dev/null"]

ARG PORT=3000
ENV NODE_ENV=production

WORKDIR /app
COPY ./package*.json ./
# RUN npm install --packge-only
# RUN npm ci
COPY ./dist/ .
COPY ./prisma/ /app/prisma
COPY ./node_modules/ ./node_modules/

EXPOSE ${PORT}
CMD ["node", "/app/index.js"]
