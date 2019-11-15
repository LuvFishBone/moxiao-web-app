FROM nginx:1.13.3-alpine
RUN rm -rf /usr/share/nginx/html/*
RUN rm -rf /etc/nginx/conf.d/*
COPY --from=build-stage /usr/src/app/dist /usr/share/nginx/html
COPY --from=build-stage nginx/default.conf /etc/nginx/conf.d/
CMD ["nginx", "-g", "daemon off;"]
