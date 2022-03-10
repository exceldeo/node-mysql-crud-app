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
<<<<<<< HEAD
CMD [ "npm", "run","start" ]
=======
CMD [ "npm", "run","start" ]
>>>>>>> a59ff00e681b596c9f35d7c0ac3a150a9e9b36bb
