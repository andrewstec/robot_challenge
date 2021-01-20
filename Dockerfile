## We are using Node 14 because it has LTS support

FROM node:14-alpine

WORKDIR /robot_challenge

COPY ./ ./

RUN npm install
RUN npm run build

EXPOSE 8080

CMD ["node", "/robot_challenge/bin/server.js"]
