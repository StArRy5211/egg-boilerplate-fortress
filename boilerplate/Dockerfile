FROM node:8.11.1

RUN echo "Asia/Shanghai" > /etc/timezone

RUN dpkg-reconfigure -f noninteractive tzdata

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY ./package.json /usr/src/app/

# RUN npm i --production

RUN npm i --production --registry=https://registry.npm.taobao.org

COPY . /usr/src/app

EXPOSE {{port}}

CMD npm run docker
