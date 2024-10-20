FROM node:20-alpine AS development

EXPOSE 3000

WORKDIR /usr/src/app

COPY package.json ./

RUN yarn install

COPY . .

RUN yarn build

FROM node:20-alpine AS production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package.json ./

RUN yarn install --prod

COPY --from=development /usr/src/app/dist/reservations ./dist

CMD ["node", "dist/apps/reservations/main.js"]
