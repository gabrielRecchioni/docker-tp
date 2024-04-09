
# tp docker

 levantar la aplicacion con  docker-compose -up


## API 

#### obtener todos los libros

```http
 curl GET localhost:8080/api/books
```

#### guardar libro

```http
curl -d '{"title":"titulo1", "author":"autor1" }' --json -X POST http://localhost:8080/api/books
```
```http
curl -d '{"title":"titulo 2", "author":"autor 2" }' --json -X POST http://localhost:8080/api/books
```
