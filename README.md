# Building the Nestjs Microservices Example

## Installation
Install the nestjs cli
```bash
npm i -g @nestjs/cli
```

Create the project
```bash
nest new "project name"
```

## Creating the Common Modules

Generate a common library
```bash
nest generate library common
```

Generate a common database module inside the Common module
```bash
nest generate module database -p common
```
where `database` is the module name and `-p` specifies in which project the module should be created

Generate a config module which will be a wrapper around the nestjs config module
```bash
nest generate module config -p config
```

Mongodb is setuped using docker. Run
```bash
docker compose up -d
```

Installing `joi` package to perform the env validation

Let's create a Microservice
```bash
nest g app reservations
```

It creates a boilerplate resource module with http client
```bash
nest g resource reservations
```

Add the reservations to the docker compose file and run
```bash
docker compose up 
```

Create auth service using
```bash
nest g app auth
```