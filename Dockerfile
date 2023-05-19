#FROM node:16.13
FROM node:14.16

# Create app directory
RUN mkdir /home/node/app
WORKDIR /home/node/app

# Install dependencies
COPY package.json .
RUN npm install

# Bundle app source
COPY . .

RUN npm run build

# Exports
CMD [ "npm", "run", "start" ]
