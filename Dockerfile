# docker file for building typescript project and running it

# base image
FROM node:12.18.3-alpine3.9

# set working directory
WORKDIR /usr/src/app

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /usr/src/app/package.json

RUN npm install --production

# add app
ADD dist /usr/src/app

# start app
ENTRYPOINT ["node", "./cjs/index.js"]
