FROM node:20-slim AS builder

WORKDIR /usr/src/app

COPY package*.json .npmrc ./
RUN npm install

COPY . .
RUN npm run build

FROM node:20-slim AS runner

WORKDIR /usr/src/app

COPY --from=builder /usr/src/app/.next/standalone ./
COPY --from=builder /usr/src/app/.next/static ./.next/static
COPY --from=builder /usr/src/app/public ./public

EXPOSE 3000
ENV NODE_ENV=production
CMD ["node", "server.js"]