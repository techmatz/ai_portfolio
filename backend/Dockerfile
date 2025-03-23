FROM node:20-alpine

ENV NODE_ENV=production

WORKDIR /home/node/app
COPY --chown=node:node . .

RUN npm ci --only=production \
    && npx prisma generate \
    && npm run build \
    && npm prune --omit=dev

CMD ["node", "dist/backend/src/main.js"]
