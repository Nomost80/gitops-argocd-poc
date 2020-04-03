# Node.js v10.16.3 (https://github.com/GoogleContainerTools/distroless/blob/master/experimental/nodejs/README.md)
FROM gcr.io/distroless/nodejs
ARG env
WORKDIR /usr/src/app
COPY dist/* ./
EXPOSE 3000
ENV NODE_ENV $env
CMD [ "index.js" ]