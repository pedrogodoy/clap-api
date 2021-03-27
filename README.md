# Mediumclaps - api

## Database setup
Antes de iniciar a API, é necessário que se crie dois banco de dados no postgres com os nomes: 
 - medium (banco de dados da aplicação)
 - mediumtest (banco de dados para a suite de testes)

As configurações de nome de usuário e host do banco estão presentes no arquivo ormconfig.json
## Setup
Para instalar as dependências do projeto, utlize o comando:

```sh
yarn
```

Ou para NPM

```sh
npm i
```



Antes de iniciar o projeto, as migrations precisam ser executadas para a criação das tabelas no banco de dados:

```sh
yarn typeorm migration:run
```


Para iniciar o projeto no modo de desenvolvimento utilize os seguintes comandos:

```sh
yarn dev
```

Para realizar os testes, utilize o comando:

```sh
yarn test
```

## Docker - Database
Para criar a imagem do banco de dados, utilize:

```sh
docker build -t postgres-image -f /db/Dockerfile
```

Para criar o container do banco de dados Postgres, utilize:
```sh
docker run -v $(pwd)/db/data:/var/lib/postgresql/data -e POSTGRES_PASSWORD=pgroot -e PGDATA=/var/lib/postgresql/data/db-files/ -p 5432:5432 --rm --name postgres-container postgres-image
```

## Docker - API
Para criar a imagem da API, utilize o comando:

```sh
docker build -t node-image -f Dockerfile .
```

Para criar o container da API, utilize:
```sh
docker run -v $(pwd)/sigeauto-api-v2:/home/node/app -p 3333:3333 --rm --name node-container node-image
```

PS: talvez as configurações tenham de ser alteradas dependendo do ambiente

Verificar a aplicação

```sh
localhost:3333
```