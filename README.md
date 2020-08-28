# Event Scheduling 🗓

![Build Status](https://travis-ci.org/luiseduardogfranca/event-scheduling.svg?branch=master)

This project is an event scheduling API, developed in JavaScript, to manage an event list and return all events divided by tracks.

Event Scheduling application: [https://app-scheduling-event.herokuapp.com/](https://app-scheduling-event.herokuapp.com/)

## Front-end repository

This API have a front-end, the [Scheduling Events application](https://github.com/luiseduardogfranca/app-event-scheduling), to manage all events and get a list of tracks.

## Depedencies

- express
- jest
- ramda
- nodemon
- dotenv
- winston

### CI/CD

This project use Travis to Continuos Integration and Heroku to deploy. After tests passed by Travis, the master branch is pushed and deployed in Heroku plataform.

Note: The free dynos enter the sleep mode after time, so the UpTimeRobot is used to ping in dyno every 15min.

## Get started

1. API access
   1. Heroku
   2. Locally
2. Send file with Postman
3. Get response with all events

### 1. API access

#### 1.1 Running by Heroku

API link:

```
https://scheduling-events.herokuapp.com/api/v1
```

To use sendEvents endpoint (POST method):

```
https://scheduling-events.herokuapp.com/api/v1/sendEvents
```

#### 1.2 Running locally

```sh
# First clone this repository in your machine:
$  git clone https://github.com/luiseduardogfranca/event-scheduling.git

# Install depedencies with npm:
$  npm install

# Run the API in localhost:3000 with the following command:
$  npm start

# API access in Postman:
localhost:3000/api/v1/sendEvents
```

### Using API with Curl

1. Replace \$ENDPOINT_URL to sendEvents [endpoint URL](#1-api-access)
2. Replace \$PATH_FILE to directory of your file

```sh
$ curl $ENDPOINT_URL -F file=@$PATH_FILE
```

### Using API with Postman

1. Send a POST request with [link](#1-api-access) of API above
2. Set a key name like "file" and file type
3. Choose file ([example](#file-example))
4. Send request

Example:

![Postman example](./src/assets/image/postman.png)

## File example

Create a file with .txt extension.

```
Diminuindo tempo de execução de testes em aplicações Rails enterprise 60min
Reinventando a roda em ASP clássico 45min
Apresentando Lua para as massas 30min
Erros de Ruby oriundos de versões erradas de gems 45min
Erros comuns em Ruby 45min
Rails para usuários de Django lightning
Trabalho remoto: prós e cons 60min
Desenvolvimento orientado a gambiarras 45min
Aplicações isomórficas: o futuro (que talvez nunca chegaremos) 30min
Codifique menos, Escreva mais! 30min
Programação em par 45min
A mágica do Rails: como ser mais produtivo 60min
Ruby on Rails: Por que devemos deixá-lo para trás 60min
Clojure engoliu Scala: migrando minha aplicação 45min
Ensinando programação nas grotas de Maceió 30min
Ruby vs. Clojure para desenvolvimento backend 30min
Manutenção de aplicações legadas em Ruby on Rails 60min
Um mundo sem StackOverflow 30min
Otimizando CSS em aplicações Rails 30min
```
