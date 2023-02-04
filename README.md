# Práctica de Despliegue en Servidores

## Frontend con React
Frontend con React desplegado en [http://100.25.162.196/](http://100.25.162.196/)

## Backend con Node
Backend con Node desplegado en [http://ec2-100-25-162-196.compute-1.amazonaws.com/](http://ec2-100-25-162-196.compute-1.amazonaws.com/)
Para acceder a la página que usa la base de datos y que contiene los estáticos (servidos por Nginx) pulsar sobre DEMO o ir a [http://ec2-100-25-162-196.compute-1.amazonaws.com/anuncios](http://ec2-100-25-162-196.compute-1.amazonaws.com/anuncios)


# NodePop

[Demo](/anuncios) of the methods (this link works only if you run the project)

Api for the iOS/Android apps.

## Deploy

### Install dependencies

    npm install

### Configure

Copy .env.example to env.

```sh
cp .env.example .env
```

and review your environment configuration

### Init database

    npm run initDB

## Start

To start a single instance:

    npm start

To start in development mode:

    npm run dev (including nodemon & debug log)

## Test

    npm test (pending to create, the client specified not to do now)

## ESLint

    npm run hints

## API v1 info

### Base Path

/apiv1/

### POST /apiv1/login

The API is protected with JWT.
To [LOGIN](/apiv1/login)

### GET /apiv1/anuncios

API can be used with the path adding your token to headers authorization, body.token or query.token:
[API V1](/apiv1/anuncios)

### Error example

    {
      "error": {
        "code": 401,
        "message": "This is the error message."
      }
    }

### GET /anuncios

**Input Query**:

start: {int} skip records
limit: {int} limit to records
sort: {string} field name to sort by
includeTotal: {bool} whether to include the count of total records without filters
tag: {string} tag name to filter
venta: {bool} filter by venta or not
precio: {range} filter by price range, examples 10-90, -90, 10-
nombre: {string} filter names beginning with the string

Input query example: ?start=0&limit=2&sort=precio&includeTotal=true&tag=mobile&venta=true&precio=-90&nombre=bi

**Result:**

    {
      "result": {
        "rows": [
          {
            "_id": "55fd9abda8cd1d9a240c8230",
            "nombre": "iPhone 3GS",
            "venta": false,
            "precio": 50,
            "foto": "/images/anuncios/iphone.png",
            "__v": 0,
            "tags": [
              "lifestyle",
              "mobile"
            ]
          }
        ],
        "total": 1
      }
    }

### GET /anuncios/tags

Return the list of available tags for the resource anuncios.

**Result:**

    {
      "result": [
        "work",
        "lifestyle",
        "motor",
        "mobile"
      ]
    }
