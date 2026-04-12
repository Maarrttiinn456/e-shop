# Dockerfile

# Use the official Node.js image.
FROM node:14

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies using npm
# Install build dependencies
RUN apt-get update && apt-get install -y \
    build-essential \
    && npm install --no-optional \
    && npm cache clean --force

# Bundle app source
COPY . .

# Build the project
RUN npm run build

# Start the application
CMD [ "npm", "start" ]
