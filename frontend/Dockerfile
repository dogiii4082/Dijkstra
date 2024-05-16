FROM node:20

WORKDIR /usr/src/app

COPY package.json /usr/src/app/

RUN export NODE_OPTIONS="--max-old-space-size=8192"

RUN npm install

COPY . /usr/src/app/

EXPOSE 3000

CMD ["npm", "start"]