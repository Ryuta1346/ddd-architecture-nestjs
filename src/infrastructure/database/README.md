## Database
this `database` directory has files to define database schema.

Entity defined in this directory don't use inside project code without repositories.

In repositories, all value fetched by database have to converted to domain entity because database schema and entities are independent and separate each other.