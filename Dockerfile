FROM node:20-bookworm-slim

WORKDIR /app

RUN apt-get update \
  && apt-get install -y --no-install-recommends ca-certificates python3 make g++ \
  && rm -rf /var/lib/apt/lists/*

COPY --chown=node:node package.json yarn.lock ./
RUN yarn install --frozen-lockfile --production=true \
  && yarn cache clean

COPY --chown=node:node . .

ENV NODE_ENV=production \
  PORT=3333

RUN mkdir -p /app/src/uploads /app/.adminbro \
  && chown -R node:node /app/src/uploads /app/.adminbro

USER node

EXPOSE 3333

HEALTHCHECK --interval=30s --timeout=5s --start-period=90s --retries=3 \
  CMD node -e "require('http').get({host:'127.0.0.1',port:process.env.PORT,path:'/'},r=>process.exit(r.statusCode===200?0:1)).on('error',()=>process.exit(1))"

CMD ["sh", "-c", "yarn sequelize db:migrate && exec yarn app"]
