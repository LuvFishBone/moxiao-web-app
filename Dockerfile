FROM nginx

RUN npm install -g cnpm --registry=https://registry.npm.taobao.org
RUN rm -rf ./dist
RUN cnpm install
RUN npm run build

#REPLACE CONF 替换配置文件
RUN rm /usr/local/nginx/conf/nginx.conf
ADD conf/nginx.conf /usr/local/nginx/conf/
 
#ADD RESOUCES 添加静态资源
RUN rm /usr/local/nginx/html/index.html
RUN mkdir -p /usr/local/nginx/html/static
COPY dist/ /usr/local/nginx/html/static

# 容器对外暴露的端口号，要和node项目配置的端口号一致
EXPOSE 3366

# 容器启动时执行的命令
CMD ["nginx"]