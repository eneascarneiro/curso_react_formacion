FROM node:16
WORKDIR /juegos-api-v1
COPY package.json .
RUN npm install
COPY . .
CMD npm start
#FROM: install the image of the Node.js version.
#WORKDIR: path of the working directory.
#COPY: copy package.json file to the container, then the second one copies all the files inside the project directory.
#RUN: execute a command-line inside the container: npm install to install the dependencies in package.json.
#CMD: run script npm start after the image is built.