FROM node:13.12.0-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
RUN npm install react-scripts@4.0.3 -g --silent

# add app
COPY . ./
EXPOSE 3000

# ENV REACT_APP_HOST=$FACE_BACK_SERVICE_SERVICE_HOST
# ENV REACT_APP_PORT=$FACE_BACK_SERVICE_SERVICE_PORT
# start app
CMD ["npm", "start"]
# CMD REACT_APP_HOST=$FACE_BACK_SERVICE_SERVICE_HOST REACT_APP_PORT=$FACE_BACK_SERVICE_SERVICE_PORT npm start