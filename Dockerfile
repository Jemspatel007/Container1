FROM node:latest

ENV PORT ${PORT}

ENV CONTAINER_2_ENDPOINT ${CONTAINER_2_ENDPOINT}

ENV FILE_DIRECTORY ${FILE_DIRECTORY}

WORKDIR /container1

COPY package*.json ./

RUN npm install

COPY . ./

EXPOSE 6000

CMD ["node", "index.js"]