FROM node:12.18.3


RUN mkdir /app
ADD . /app
WORKDIR /app
COPY package*.json ./

RUN npm install
RUN npm install nodemon --save-dev
CMD npm run start-dev

