FROM node:16-alpine 
WORKDIR /src
COPY . .
RUN yarn
RUN yarn run build
EXPOSE 3000
RUN yarn global add serve
CMD ["serve", "-p", "3000", "-s", "/src/build"]
