FROM nginx:1.13.3-alpine

## Remove default nginx website

#USER root

RUN rm -rf /usr/share/nginx/html/*

## From 'builder' stage copy over the artifacts in dist folder to default nginx public folder
RUN chmod -R 777 /usr/share/nginx/*

ADD /dist/* /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]