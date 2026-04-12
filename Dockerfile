FROM node:20-slim

WORKDIR /usr/src/app

RUN apt-get update && apt-get install -y \
    build-essential \
    && apt-get clean && rm -rf /var/lib/apt/lists/*

COPY package*.json ./
RUN npm install --no-optional && npm cache clean --force

COPY . .

RUN npm run build

CMD ["npm", "start"]
