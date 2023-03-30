FROM node:18

COPY ["package-lock.json", "package.json", "/usr/src/"]

WORKDIR /usr/src

RUN npm install

RUN npm install -g nodemon

COPY [".", "/usr/src"]

EXPOSE 8081

CMD ["nodemon", "-L", "./server.js"]