FROM node:20-slim AS builder

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install
# explicitně doinstaluj arm64 variantu lightningcss
RUN npm install --cpu=arm64 --os=linux lightningcss

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