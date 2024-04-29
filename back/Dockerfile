
FROM node:21.6.2-alpine
# FROM node:18-alpine
WORKDIR /back
RUN npm install nodemon -g
COPY package*.json /back/
COPY . /back/
RUN npm install

# Expose port 5000
EXPOSE 9000

# Command to start the server using nodemon
CMD ["nodemon", "--watch", ".", "--legacy-watch", "server.js"]
# if want to want make it this in windows for nodemon CMD