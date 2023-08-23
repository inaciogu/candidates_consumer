# docker file for building typescript project and running it

# base image
FROM node:16.10.0-alpine

# set working directory
WORKDIR /usr/src/app

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json ./

RUN npm install --production
RUN npm install -g typescript

COPY . .

RUN npm run build

# start app
CMD ["node", "./dist/index.js"]
