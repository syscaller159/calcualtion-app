## Using dependencies:
1. Ubuntu 20.x
2. Postgresql 12.x
3. Nodejs 14.x

## Install and setup Postgresql:
Run command in console: 
``` 
sudo apt install postgresql postgresql-contrib
``` 
Create database with psql:
``` 
CREATE DATABASE test_db OWNER postgres_user;
```
## Install and setup nodejs app:
1) Clone repository

2) Run commands:
```
$ cd calculation-app
```
```
$ yarn install
```
```
$ yarn run build
```
```
$ yarn start
```
 
You can test the api of the application by url: http://195.133.146.146/api/v1/docs/
