FROM node:latest

COPY . /home/app

WORKDIR /home/app

EXPOSE 3000

RUN npm install -g pnpm 

RUN pnpm install

CMD ["npm","run" ,"start"]