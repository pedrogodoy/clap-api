FROM node:10-slim

RUN mkdir -p /home/node/app
WORKDIR /home/node/app

COPY package*.json /home/node/app
RUN npm install

COPY . /home/node/app

RUN npm run typeorm migration:run

CMD "npm" "run" "dev" 