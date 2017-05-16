# L4A - Garage


## Installation


`edit .env`

```sh
$ cd /var/www/[project]
$ composer update
$ php artisan migrate:refresh --seed 
```

```sh
$ cd /var/www/[project]/public/panel/
$ npm install
$ bower install
```

```sh
php artisan api:generate --routePrefix="api/*"
```

