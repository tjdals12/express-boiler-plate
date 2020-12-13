# Express boiler plate

## Stack

-   Nodejs v12.18.4
-   Express
-   MongoDB(+ Mongoose), Redis
-   Webpack, pm2

&nbsp;

## Getting started

Clone this project

```bash
    git clone https://github.com/tjdals12/node-boiler-plate.git
    cd node-boiler-plate
    rm -rf .git
```

&nbsp;

Install dependencies

```bash
    yarn install
```

&nbsp;

Set your .env

```bash
    APP_NAME=PAYMENT_SERVER # Displayed name on console
    HOST=127.0.0.1
    PORT=4000
    LOG_LEVEL=info # Logging Levels in https://github.com/winstonjs/winston
    MONGO_URI= # mongodb
    MONGO_USER=
    MONGO_PASS=
    REDIS_HOST= # redis
    REDIS_PORT=
    REDIS_PASS=
```

&nbsp;

Running locally

```bash
    yarn dev
```

&nbsp;

Running production

```bash
    yarn start
    # or
    yarn build
    pm2 start -i 0 dist/app.js --name app
```
