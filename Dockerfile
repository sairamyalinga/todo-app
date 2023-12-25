#Creating node image based on the node image from dockerhub
FROM node:16
#working directory of the application
WORKDIR /todo-app 
#copying package.json file
COPY package.json /todo-app
RUN npm install
COPY . /todo-app
EXPOSE 3000
CMD node index.js