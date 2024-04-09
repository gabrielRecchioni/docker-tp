
# tp docker

 levantar la aplicacion con  docker-compose -up


## API 

#### obtener todos los libros

```http
 curl GET localhost:8080/api/books
```

#### guardar libro

```http
curl -X POST localhost:8080/api/books/ -H 'Content-Type: application/json' -d '{"title":"titulo1", "author":"autor1" }' 
```
```http
curl -X POST localhost:8080/api/books/ -H 'Content-Type: application/json' -d '{"title":"titulo 2", "author":"autor 2" }'  
```
