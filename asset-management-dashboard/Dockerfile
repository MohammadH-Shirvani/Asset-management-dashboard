FROM node:18-alpine
WORKDIR /usr/srs/app
COPY ./package.json .
RUN npm install

COPY . .

RUN npm run build

RUN npm install -g serve

EXPOSE 5000

CMD ["serve", "-s", "build", "-l", "5000"]