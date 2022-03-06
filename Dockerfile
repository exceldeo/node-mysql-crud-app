<<<<<<< HEAD
FROM node:12.18.3


RUN mkdir /app
ADD . /app
WORKDIR /app
COPY package*.json ./

RUN npm install
RUN npm install nodemon --save-dev
CMD npm run start-dev

=======
FROM node:16.13.2

# Create app directory
RUN mkdir -p /usr/src/app/run
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE 8000
CMD [ "npm", "run","start-dev" ]
>>>>>>> 6c82196c6675e6b41c371c8ea4f7f47063033d50
