FROM node:16-slim

WORKDIR /app

COPY package.json ./

RUN npm config set strict-ssl false \
    && npm config set registry http://registry.npmjs.org/ \
    && npm install --verbose

COPY . .

EXPOSE 3000

CMD ["node", "server.js"]
