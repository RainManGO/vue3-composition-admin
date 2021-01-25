FROM nginx:1.14-alpine

ARG PROJECT_DIR="dist"

COPY --chown=nginx:nginx ${PROJECT_DIR} /usr/share/nginx/html/release
COPY default.conf /etc/nginx/conf.d/
WORKDIR /usr/share/nginx/html/release
