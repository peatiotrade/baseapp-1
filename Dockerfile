FROM node:12.13.1 AS builder

WORKDIR /home/node
COPY --chown=node:node . .

ARG BUILD_EXPIRE
ARG BUILD_DOMAIN
ARG REACT_APP_SENTRY_KEY=${REACT_APP_SENTRY_KEY:-""}
ARG REACT_APP_SENTRY_ORGANIZATION=${REACT_APP_SENTRY_ORGANIZATION:-""}
ARG REACT_APP_SENTRY_PROJECT=${REACT_APP_SENTRY_PROJECT:-""}

RUN npm i -g yarn

USER node

ENV REACT_APP_SENTRY_KEY=${REACT_APP_SENTRY_KEY}
ENV REACT_APP_SENTRY_ORGANIZATION=${REACT_APP_SENTRY_ORGANIZATION}
ENV REACT_APP_SENTRY_PROJECT=${REACT_APP_SENTRY_PROJECT}

RUN yarn install
RUN ./scripts/build.sh

FROM node:12.13.1 AS app-builder

WORKDIR /home/node/app
COPY --chown=node:node . .

RUN npm install -g ionic
RUN npm install
RUN ionic cordova build ios --prod

FROM nginx:mainline-alpine

COPY --from=builder /home/node/build /usr/share/nginx/html
COPY --from=app-builder /home/node/app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 3000
