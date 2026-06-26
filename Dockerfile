FROM node:20-alpine AS base
WORKDIR /app

COPY package.json package-lock.json* ./
COPY pnpm-lock.yaml* ./
RUN npm install

COPY . .
RUN npm run build

FROM node:20-alpine AS runtime
WORKDIR /app
COPY --from=base /app/package.json ./
COPY --from=base /app/node_modules ./node_modules
COPY --from=base /app/.next ./.next
COPY --from=base /app/public ./public
COPY --from=base /app/next.config.mjs ./

EXPOSE 3000
ENV NODE_ENV=production
CMD ["npm", "start"]
