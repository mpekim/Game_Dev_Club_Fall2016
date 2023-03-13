FROM node:18-alpine AS app-base
FROM app-base AS test
RUN yarn install
RUN yarn test