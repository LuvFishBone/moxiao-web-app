# Stage 0, "build-stage", based on Node.js, to build and compile the frontend
FROM node:9.5 as build-stage

RUN mkdir /usr/src/app
WORKDIR /usr/src/app
COPY . .
ADD package.json /usr/src/app/package.json
RUN npm install -g cnpm --registry=https://registry.npm.taobao.org
RUN cnpm install
RUN npm run build

# Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
FROM nginx:1.13.3-alpine

RUN rm -rf /usr/share/nginx/html/*
RUN rm -rf /etc/nginx/conf.d/*
COPY --from=build-stage /usr/src/app/dist /usr/share/nginx/html
COPY --from=build-stage nginx/default.conf /etc/nginx/conf.d/

CMD ["nginx", "-g", "daemon off;"]
