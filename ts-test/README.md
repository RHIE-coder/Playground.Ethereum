# Awesome Project Build with TypeORM

Steps to run this project:

1. Run `npm i` command
2. Setup database settings inside `data-source.ts` file
3. Run `npm start` command


## sqlite3 이슈
 - global node_modules 설치 후 local node_modules에 이동


```cmd
npm i -g sqlite3    
cp -r $(npm config get prefix)/node_modules/sqlite3 ./node_modules
```