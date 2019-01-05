# Evicertia Calculator

## Introduction

This project was built to solve the Evicertia Calculator Coding Challenge.

## Installing

You need to have installed [node](https://nodejs.org/es/) and [npm](https://www.npmjs.com/). The project has been built with versions 11.6 of node and 6.5 of npm. You can install and manage node versions with [nvm](https://github.com/creationix/nvm).

Once installed, you have to install the project dependencies with:

```sh
npm install
```

### PostgreSQL (optional)

If you want to use the PostgreSQL Database Connector you'll need to have PostgreSQL installed. You can read instructions on how to install PostgreSQL [in this guide](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-postgresql-on-ubuntu-16-04).

Once installed you'll have to create a new DB for the project and a table called `TrackRecord`.

## Setting the environment

The project uses dotenv files to fill in the needed environment variables. Rename the `.env.example` file to `.env` and fill in the variables with the correspondig info.

If you are not using the PostgreSQL Database Connector you don't need to fill in the variables related to PostgreSQL.

## The Server

To launch the Calculator server you can run:

```sh
npm start
```

You can change the Database Connector used for the Journal to one of `memory`, `file` or `postgresql`.
To change it you can set the `DB_CONNECTOR` variable in the `.env` file, or set it as an inline option:

```sh
DB_CONNECTOR=postgresql npm start
```

By default, the File Connector is used.

### Development mode

You can start the Calculator server in development mode with:

```sh
npm run dev
```

This will watch for any changes in the files and restart the server.

## The Client

To launch the console client you need to run:

```sh
npm run client
```

A text menu will appear next and you'll have to select an option. Then, depending on the operation, you'll be expected to input a list of numbers separated by spaces.

To store the operations in the Journal you'll have to enter a Tracking ID.

## The Connectors

To store the Journal a DB Connector interface has been implemented in three different ways.

Currently the Journal only has a store operation that will be called when the "X-Evi-Tracking-Id" header is specify, so the connectors only implement a `save` operation.

### Memory Connector

The Memory Connector does NOT persist the data and only stores the Journal in an in memory store.

To use it you can set `DB_CONNECTOR=memory` in the `.env` file or inline.

### The File Connector

The File Connector is a subclass of the Memory Connector. It uses an in memory store but persists the operations to a local file.
The file path can be configuring by setting the `FILE_CONNECTOR_PATH` variable in the `.env` file or inline.

To use it you can set `DB_CONNECTOR=file` in the `.env` file or inline.

### The PostgreSQL Connector

The PostgreSQL connector makes a connection to a PostgreSQL database to persist every operation from the Journal.

To configure the connector you must specify this properties:

```sh
POSTGRESQL_HOST=
POSTGRESQL_PORT=
POSTGRESQL_DATABASE=
POSTGRESQL_USER=
POSTGRESQL_PASSWORD=
```

To use it you can set `DB_CONNECTOR=postgresql` in the `.env` file or inline.
