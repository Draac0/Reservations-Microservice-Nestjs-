FROM node:20-alpine as development

EXPOSE 3001

WORKDIR /usr/src/app

COPY package.json .

RUN yarn install

COPY . .

RUN yarn build

FROM node:20-alpine as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package.json .

RUN yarn install

COPY --from=development /usr/src/app/dist/auth ./dist

CMD ["node", "dist/apps/auth/main.js"]