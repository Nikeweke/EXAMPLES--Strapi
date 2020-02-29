# Strapi Test

### DB config 
###### `\config\environments\development\database.json`
```json
{
  "defaultConnection": "default",
  "connections": {
    "default": {
      "connector": "bookshelf",
      "settings": {
        "client": "mysql",
        "database": "sweetbooker",
        "host": "127.0.0.1",
        "port": 3306,
        "username": "root",
        "password": "12345"
      },
      "options": {}
    }
  }
}

```

### Инфо 
Изначально контент тайпы не создаються по таблицам из БД
надо использовать комманды strapi
```
strapi generate:model [model-name]
```

а потом добавлять поля по которым данные подтянуться