FROM node:lts-alpine AS base
RUN mkdir front
WORKDIR /front
COPY emociones ./
RUN npm install --no-package-lock
RUN npm run build
FROM nginx:1.31.9-alpine
RUN mkdir /html
COPY --from=base /front/dist /html
COPY nginx_config.conf /etc/nginx/conf.d/default.conf
