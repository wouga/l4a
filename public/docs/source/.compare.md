---
title: API Reference

language_tabs:
- bash
- javascript

includes:

search: true

toc_footers:
- <a href='http://github.com/mpociot/documentarian'>Documentation Powered by Documentarian</a>
---
<!-- START_INFO -->
# Info

Welcome to the generated API reference.
[Get Postman Collection](http://l4a.localhost/docs/collection.json)
<!-- END_INFO -->

#general
<!-- START_bbae1282a7959533baaa56df48fe8333 -->
## api/auth

> Example request:

```bash
curl -X GET "http://l4a.localhost/api/auth" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://l4a.localhost/api/auth",
    "method": "GET",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```

> Example response:

```json
{
    "message": "User not logged in"
}
```

### HTTP Request
`GET api/auth`

`HEAD api/auth`


<!-- END_bbae1282a7959533baaa56df48fe8333 -->

<!-- START_6b17237687a7324998bea26bc6262684 -->
## api/auth/logout

> Example request:

```bash
curl -X GET "http://l4a.localhost/api/auth/logout" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://l4a.localhost/api/auth/logout",
    "method": "GET",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```

> Example response:

```json
null
```

### HTTP Request
`GET api/auth/logout`

`HEAD api/auth/logout`


<!-- END_6b17237687a7324998bea26bc6262684 -->

<!-- START_a925a8d22b3615f12fca79456d286859 -->
## api/auth/login

> Example request:

```bash
curl -X POST "http://l4a.localhost/api/auth/login" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://l4a.localhost/api/auth/login",
    "method": "POST",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```


### HTTP Request
`POST api/auth/login`


<!-- END_a925a8d22b3615f12fca79456d286859 -->

<!-- START_80c6e9999f4b5c382cc2b64d4cfb729b -->
## api/owner

> Example request:

```bash
curl -X GET "http://l4a.localhost/api/owner" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://l4a.localhost/api/owner",
    "method": "GET",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```

> Example response:

```json
{
    "total": 10,
    "per_page": 5,
    "current_page": 1,
    "last_page": 2,
    "next_page_url": "http:\/\/localhost\/api\/owner?page=2",
    "prev_page_url": null,
    "from": 1,
    "to": 5,
    "data": [
        {
            "id": 1,
            "email": "volkman.miracle@gmail.com",
            "phone": "+81 235497521",
            "name": "Antwon",
            "surname": "Jerde",
            "newsletter": 0,
            "sex": 1,
            "created_at": "1977-05-23 18:10:03",
            "updated_at": "2004-09-08 10:36:17",
            "cars": [
                {
                    "id": 11,
                    "model": "mercedes",
                    "version": "et",
                    "year_of_production": 2012,
                    "color": "4247ff",
                    "vin": "VMANQDRFMZBJQ90PE",
                    "owner_id": 1,
                    "created_at": "1979-07-28 10:23:37",
                    "updated_at": "1979-02-17 22:06:50"
                }
            ]
        },
        {
            "id": 2,
            "email": "huels.jewell@gmail.com",
            "phone": "+33 291499197",
            "name": "Axel",
            "surname": "Satterfield",
            "newsletter": 0,
            "sex": 0,
            "created_at": "1980-12-23 00:50:04",
            "updated_at": "2005-08-30 06:39:36",
            "cars": [
                {
                    "id": 9,
                    "model": "mazda",
                    "version": "molestiae",
                    "year_of_production": 2003,
                    "color": "ac6872",
                    "vin": "EBD68YUGRFGA51ALN",
                    "owner_id": 2,
                    "created_at": "1978-12-21 03:09:04",
                    "updated_at": "2012-05-03 07:15:21"
                },
                {
                    "id": 17,
                    "model": "mazda",
                    "version": "pariatur",
                    "year_of_production": 2007,
                    "color": "6d28dd",
                    "vin": "RUC0RYZOXV62HOC6I",
                    "owner_id": 2,
                    "created_at": "2017-05-10 06:51:09",
                    "updated_at": "1971-04-29 01:43:01"
                }
            ]
        },
        {
            "id": 3,
            "email": "kassandra.sporer@oreilly.com",
            "phone": "+30 786082107",
            "name": "Lenny",
            "surname": "Littel",
            "newsletter": 1,
            "sex": 1,
            "created_at": "2014-06-05 14:42:38",
            "updated_at": "1971-03-26 13:54:36",
            "cars": [
                {
                    "id": 1,
                    "model": "vw",
                    "version": "amet",
                    "year_of_production": 2009,
                    "color": "db66ea",
                    "vin": "MDZ5DUX6XEP5DUR4Q",
                    "owner_id": 3,
                    "created_at": "1986-11-02 10:16:47",
                    "updated_at": "1991-12-09 18:21:24"
                },
                {
                    "id": 8,
                    "model": "audi",
                    "version": "cupiditate",
                    "year_of_production": 1993,
                    "color": "82db19",
                    "vin": "NCKNC1A9K7SUG66YL",
                    "owner_id": 3,
                    "created_at": "1985-01-06 21:50:36",
                    "updated_at": "2005-03-05 15:19:00"
                },
                {
                    "id": 10,
                    "model": "vw",
                    "version": "voluptas",
                    "year_of_production": 1995,
                    "color": "05ac6d",
                    "vin": "YTSN7BRJHU6DVOUCJ",
                    "owner_id": 3,
                    "created_at": "1980-01-29 23:21:27",
                    "updated_at": "1972-11-21 03:41:30"
                },
                {
                    "id": 15,
                    "model": "mazda",
                    "version": "officia",
                    "year_of_production": 1995,
                    "color": "636ad4",
                    "vin": "OBB557JSFMO6MQIW1",
                    "owner_id": 3,
                    "created_at": "1972-05-20 06:42:06",
                    "updated_at": "2009-01-02 20:06:35"
                },
                {
                    "id": 18,
                    "model": "opel",
                    "version": "et",
                    "year_of_production": 1991,
                    "color": "f8a2e0",
                    "vin": "SUYT9X3OJ3HIGMFUN",
                    "owner_id": 3,
                    "created_at": "1986-01-05 13:46:10",
                    "updated_at": "1990-08-07 12:54:23"
                },
                {
                    "id": 20,
                    "model": "opel",
                    "version": "non",
                    "year_of_production": 2002,
                    "color": "3fa317",
                    "vin": "CGUMHNFWKKY03ZT9M",
                    "owner_id": 3,
                    "created_at": "1978-06-25 23:22:34",
                    "updated_at": "1983-08-13 14:59:56"
                }
            ]
        },
        {
            "id": 4,
            "email": "jgoodwin@shanahan.com",
            "phone": "+75 694154901",
            "name": "Woodrow",
            "surname": "Mraz",
            "newsletter": 1,
            "sex": 0,
            "created_at": "1974-01-30 00:29:23",
            "updated_at": "2011-08-23 16:28:18",
            "cars": [
                {
                    "id": 14,
                    "model": "mazda",
                    "version": "ad",
                    "year_of_production": 1992,
                    "color": "791eec",
                    "vin": "MYYYJ2T9E0BYMLEY3",
                    "owner_id": 4,
                    "created_at": "1988-12-04 19:05:34",
                    "updated_at": "1996-01-19 13:09:59"
                },
                {
                    "id": 19,
                    "model": "mercedes",
                    "version": "ex",
                    "year_of_production": 2002,
                    "color": "f8465d",
                    "vin": "ZZY9R9HCBG6RL2MHM",
                    "owner_id": 4,
                    "created_at": "1976-05-20 16:58:37",
                    "updated_at": "1984-05-30 01:09:38"
                }
            ]
        },
        {
            "id": 5,
            "email": "beaulah.brakus@thiel.com",
            "phone": "+27 805356151",
            "name": "Kurtis",
            "surname": "Lynch",
            "newsletter": 0,
            "sex": 0,
            "created_at": "1977-02-18 11:57:25",
            "updated_at": "2008-12-03 09:45:37",
            "cars": [
                {
                    "id": 25,
                    "model": "mazda",
                    "version": "iusto",
                    "year_of_production": 2011,
                    "color": "5bcb06",
                    "vin": "CKSCO0DKS6INO43PW",
                    "owner_id": 5,
                    "created_at": "1973-05-27 14:25:41",
                    "updated_at": "2014-12-21 01:25:30"
                }
            ]
        }
    ]
}
```

### HTTP Request
`GET api/owner`

`HEAD api/owner`


<!-- END_80c6e9999f4b5c382cc2b64d4cfb729b -->

<!-- START_034e512b9d4da6c86699ef8b2f44e297 -->
## api/owner/create

> Example request:

```bash
curl -X GET "http://l4a.localhost/api/owner/create" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://l4a.localhost/api/owner/create",
    "method": "GET",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```

> Example response:

```json
null
```

### HTTP Request
`GET api/owner/create`

`HEAD api/owner/create`


<!-- END_034e512b9d4da6c86699ef8b2f44e297 -->

<!-- START_a13e8d50594199f88e7954a282493cb2 -->
## api/owner

> Example request:

```bash
curl -X POST "http://l4a.localhost/api/owner" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://l4a.localhost/api/owner",
    "method": "POST",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```


### HTTP Request
`POST api/owner`


<!-- END_a13e8d50594199f88e7954a282493cb2 -->

<!-- START_f2b84d6c48cb101a1b9ab196d49b2e10 -->
## api/owner/{owner}

> Example request:

```bash
curl -X GET "http://l4a.localhost/api/owner/{owner}" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://l4a.localhost/api/owner/{owner}",
    "method": "GET",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```

> Example response:

```json
{
    "id": 1,
    "email": "volkman.miracle@gmail.com",
    "phone": "+81 235497521",
    "name": "Antwon",
    "surname": "Jerde",
    "newsletter": 0,
    "sex": 1,
    "created_at": "1977-05-23 18:10:03",
    "updated_at": "2004-09-08 10:36:17"
}
```

### HTTP Request
`GET api/owner/{owner}`

`HEAD api/owner/{owner}`


<!-- END_f2b84d6c48cb101a1b9ab196d49b2e10 -->

<!-- START_f9bbe356a4bd15e994998da91de5f98b -->
## api/owner/{owner}/edit

> Example request:

```bash
curl -X GET "http://l4a.localhost/api/owner/{owner}/edit" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://l4a.localhost/api/owner/{owner}/edit",
    "method": "GET",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```

> Example response:

```json
null
```

### HTTP Request
`GET api/owner/{owner}/edit`

`HEAD api/owner/{owner}/edit`


<!-- END_f9bbe356a4bd15e994998da91de5f98b -->

<!-- START_768440f3037495c90f073f3961a610f6 -->
## api/owner/{owner}

> Example request:

```bash
curl -X PUT "http://l4a.localhost/api/owner/{owner}" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://l4a.localhost/api/owner/{owner}",
    "method": "PUT",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```


### HTTP Request
`PUT api/owner/{owner}`

`PATCH api/owner/{owner}`


<!-- END_768440f3037495c90f073f3961a610f6 -->

<!-- START_b349aa7a3a13b53fe4c5630784888193 -->
## api/owner/{owner}

> Example request:

```bash
curl -X DELETE "http://l4a.localhost/api/owner/{owner}" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://l4a.localhost/api/owner/{owner}",
    "method": "DELETE",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```


### HTTP Request
`DELETE api/owner/{owner}`


<!-- END_b349aa7a3a13b53fe4c5630784888193 -->

<!-- START_a12ed4c7df0642b8dfbcbb994720ac38 -->
## api/car

> Example request:

```bash
curl -X GET "http://l4a.localhost/api/car" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://l4a.localhost/api/car",
    "method": "GET",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```

> Example response:

```json
{
    "total": 25,
    "per_page": 5,
    "current_page": 1,
    "last_page": 5,
    "next_page_url": "http:\/\/localhost\/api\/car?page=2",
    "prev_page_url": null,
    "from": 1,
    "to": 5,
    "data": [
        {
            "id": 1,
            "model": "vw",
            "version": "amet",
            "year_of_production": 2009,
            "color": "db66ea",
            "vin": "MDZ5DUX6XEP5DUR4Q",
            "owner_id": 3,
            "created_at": "1986-11-02 10:16:47",
            "updated_at": "1991-12-09 18:21:24",
            "car_parts": [
                {
                    "id": 7,
                    "model": "eum",
                    "number": 6485,
                    "price": 366,
                    "car_id": 1,
                    "created_at": "2014-09-06 04:40:07",
                    "updated_at": "2010-05-04 20:37:21"
                },
                {
                    "id": 12,
                    "model": "amet",
                    "number": 19572,
                    "price": 243.35,
                    "car_id": 1,
                    "created_at": "2016-07-10 14:15:56",
                    "updated_at": "1990-12-14 20:03:39"
                },
                {
                    "id": 34,
                    "model": "sunt",
                    "number": 18526,
                    "price": 646.96,
                    "car_id": 1,
                    "created_at": "2016-11-14 05:30:33",
                    "updated_at": "2006-06-27 07:06:06"
                },
                {
                    "id": 51,
                    "model": "test",
                    "number": 5555,
                    "price": 1.5,
                    "car_id": 1,
                    "created_at": "2017-05-16 12:06:33",
                    "updated_at": "2017-05-16 12:06:33"
                }
            ],
            "owner": {
                "id": 3,
                "email": "kassandra.sporer@oreilly.com",
                "phone": "+30 786082107",
                "name": "Lenny",
                "surname": "Littel",
                "newsletter": 1,
                "sex": 1,
                "created_at": "2014-06-05 14:42:38",
                "updated_at": "1971-03-26 13:54:36"
            }
        },
        {
            "id": 2,
            "model": "mazda",
            "version": "et",
            "year_of_production": 2013,
            "color": "9dc9c8",
            "vin": "ILYIH473KE3PGMYSU",
            "owner_id": 6,
            "created_at": "1990-02-01 20:02:38",
            "updated_at": "2010-03-11 23:30:20",
            "car_parts": [],
            "owner": {
                "id": 6,
                "email": "qupton@sipes.net",
                "phone": "+67 094670065",
                "name": "Hal",
                "surname": "Kiehn",
                "newsletter": 0,
                "sex": 0,
                "created_at": "1995-05-14 23:32:28",
                "updated_at": "2001-01-30 04:46:39"
            }
        },
        {
            "id": 3,
            "model": "vw",
            "version": "qui",
            "year_of_production": 1997,
            "color": "64e731",
            "vin": "RDIPAWMZP82W8MHYZ",
            "owner_id": 10,
            "created_at": "1980-11-01 00:56:18",
            "updated_at": "2017-04-13 23:12:59",
            "car_parts": [
                {
                    "id": 25,
                    "model": "commodi",
                    "number": 2940,
                    "price": 880.74,
                    "car_id": 3,
                    "created_at": "2001-05-17 21:41:53",
                    "updated_at": "2007-05-16 10:11:41"
                },
                {
                    "id": 26,
                    "model": "alias",
                    "number": 13878,
                    "price": 570.41,
                    "car_id": 3,
                    "created_at": "2014-11-28 17:32:47",
                    "updated_at": "1980-09-21 07:26:41"
                }
            ],
            "owner": {
                "id": 10,
                "email": "lee29@wehner.com",
                "phone": "+53 010763182",
                "name": "Emelia",
                "surname": "Parisian",
                "newsletter": 0,
                "sex": 0,
                "created_at": "1985-10-13 06:36:30",
                "updated_at": "1970-04-14 19:11:58"
            }
        },
        {
            "id": 4,
            "model": "opel",
            "version": "aliquid",
            "year_of_production": 2002,
            "color": "7a72a3",
            "vin": "JFFPX19L8XI9CE2CU",
            "owner_id": 8,
            "created_at": "1980-11-09 04:00:31",
            "updated_at": "2008-01-21 19:31:11",
            "car_parts": [
                {
                    "id": 11,
                    "model": "ut",
                    "number": 18988,
                    "price": 55.5,
                    "car_id": 4,
                    "created_at": "1992-05-12 19:33:07",
                    "updated_at": "2007-05-23 14:51:41"
                },
                {
                    "id": 29,
                    "model": "sit",
                    "number": 7524,
                    "price": 295.46,
                    "car_id": 4,
                    "created_at": "1996-11-12 08:50:37",
                    "updated_at": "1980-06-14 20:45:43"
                }
            ],
            "owner": {
                "id": 8,
                "email": "karlie.parisian@hackett.info",
                "phone": "+11 569612740",
                "name": "Adah",
                "surname": "Russel",
                "newsletter": 0,
                "sex": 1,
                "created_at": "1970-07-14 09:17:36",
                "updated_at": "2016-09-01 18:48:13"
            }
        },
        {
            "id": 5,
            "model": "bmw",
            "version": "saepe",
            "year_of_production": 2014,
            "color": "7e56a3",
            "vin": "TQF00NJAP8PT287E2",
            "owner_id": 8,
            "created_at": "1972-09-09 17:57:26",
            "updated_at": "1970-05-26 02:39:16",
            "car_parts": [
                {
                    "id": 10,
                    "model": "itaque",
                    "number": 11589,
                    "price": 256.79,
                    "car_id": 5,
                    "created_at": "1993-08-29 23:31:08",
                    "updated_at": "2009-05-31 22:24:07"
                },
                {
                    "id": 27,
                    "model": "rerum",
                    "number": 8127,
                    "price": 299.82,
                    "car_id": 5,
                    "created_at": "1974-05-29 08:04:58",
                    "updated_at": "1989-04-13 05:59:49"
                },
                {
                    "id": 50,
                    "model": "eos",
                    "number": 14427,
                    "price": 855.77,
                    "car_id": 5,
                    "created_at": "1973-08-12 20:18:30",
                    "updated_at": "2002-12-14 07:44:09"
                }
            ],
            "owner": {
                "id": 8,
                "email": "karlie.parisian@hackett.info",
                "phone": "+11 569612740",
                "name": "Adah",
                "surname": "Russel",
                "newsletter": 0,
                "sex": 1,
                "created_at": "1970-07-14 09:17:36",
                "updated_at": "2016-09-01 18:48:13"
            }
        }
    ]
}
```

### HTTP Request
`GET api/car`

`HEAD api/car`


<!-- END_a12ed4c7df0642b8dfbcbb994720ac38 -->

<!-- START_631e63a4e956b0ffb9fbc7e89850e2d1 -->
## api/car/create

> Example request:

```bash
curl -X GET "http://l4a.localhost/api/car/create" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://l4a.localhost/api/car/create",
    "method": "GET",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```

> Example response:

```json
null
```

### HTTP Request
`GET api/car/create`

`HEAD api/car/create`


<!-- END_631e63a4e956b0ffb9fbc7e89850e2d1 -->

<!-- START_c16c31bdaf49e1e07a3a9a0d205f8933 -->
## api/car

> Example request:

```bash
curl -X POST "http://l4a.localhost/api/car" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://l4a.localhost/api/car",
    "method": "POST",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```


### HTTP Request
`POST api/car`


<!-- END_c16c31bdaf49e1e07a3a9a0d205f8933 -->

<!-- START_59770b9bba1f1fd52765bc9c9ab96056 -->
## api/car/{car}

> Example request:

```bash
curl -X GET "http://l4a.localhost/api/car/{car}" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://l4a.localhost/api/car/{car}",
    "method": "GET",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```

> Example response:

```json
{
    "id": 1,
    "model": "vw",
    "version": "amet",
    "year_of_production": 2009,
    "color": "db66ea",
    "vin": "MDZ5DUX6XEP5DUR4Q",
    "owner_id": 3,
    "created_at": "1986-11-02 10:16:47",
    "updated_at": "1991-12-09 18:21:24"
}
```

### HTTP Request
`GET api/car/{car}`

`HEAD api/car/{car}`


<!-- END_59770b9bba1f1fd52765bc9c9ab96056 -->

<!-- START_c5cb7804b10ab2d4b9d2a930891212cb -->
## api/car/{car}/edit

> Example request:

```bash
curl -X GET "http://l4a.localhost/api/car/{car}/edit" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://l4a.localhost/api/car/{car}/edit",
    "method": "GET",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```

> Example response:

```json
null
```

### HTTP Request
`GET api/car/{car}/edit`

`HEAD api/car/{car}/edit`


<!-- END_c5cb7804b10ab2d4b9d2a930891212cb -->

<!-- START_b6bdbabb4c65de9cfcb936f223709d8c -->
## api/car/{car}

> Example request:

```bash
curl -X PUT "http://l4a.localhost/api/car/{car}" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://l4a.localhost/api/car/{car}",
    "method": "PUT",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```


### HTTP Request
`PUT api/car/{car}`

`PATCH api/car/{car}`


<!-- END_b6bdbabb4c65de9cfcb936f223709d8c -->

<!-- START_2c08e0e1e506b0481e6ece12a2fcf46c -->
## api/car/{car}

> Example request:

```bash
curl -X DELETE "http://l4a.localhost/api/car/{car}" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://l4a.localhost/api/car/{car}",
    "method": "DELETE",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```


### HTTP Request
`DELETE api/car/{car}`


<!-- END_2c08e0e1e506b0481e6ece12a2fcf46c -->

<!-- START_a4b716d91999bf1f21ef246119d56221 -->
## api/car-part

> Example request:

```bash
curl -X GET "http://l4a.localhost/api/car-part" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://l4a.localhost/api/car-part",
    "method": "GET",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```

> Example response:

```json
{
    "total": 51,
    "per_page": 5,
    "current_page": 1,
    "last_page": 11,
    "next_page_url": "http:\/\/localhost\/api\/car-part?page=2",
    "prev_page_url": null,
    "from": 1,
    "to": 5,
    "data": [
        {
            "id": 1,
            "model": "aut",
            "number": 8912,
            "price": 757.56,
            "car_id": 21,
            "created_at": "2010-08-12 08:46:12",
            "updated_at": "1995-12-11 23:22:11",
            "car": {
                "id": 21,
                "model": "opel",
                "version": "qui",
                "year_of_production": 2010,
                "color": "19a591",
                "vin": "RVHZRIR0FCJDGEBSP",
                "owner_id": 9,
                "created_at": "1978-06-14 15:04:38",
                "updated_at": "1989-10-06 19:50:47"
            }
        },
        {
            "id": 2,
            "model": "corrupti",
            "number": 15701,
            "price": 221.2,
            "car_id": 13,
            "created_at": "1997-04-06 07:30:13",
            "updated_at": "1979-04-07 10:00:15",
            "car": {
                "id": 13,
                "model": "opel",
                "version": "maiores",
                "year_of_production": 2013,
                "color": "c1e898",
                "vin": "REMVAKOCLY9C15P4I",
                "owner_id": 7,
                "created_at": "2015-03-07 07:16:13",
                "updated_at": "2012-04-24 11:37:53"
            }
        },
        {
            "id": 3,
            "model": "officia",
            "number": 15390,
            "price": 743.3,
            "car_id": 19,
            "created_at": "1981-04-24 17:09:39",
            "updated_at": "1988-08-14 23:23:20",
            "car": {
                "id": 19,
                "model": "mercedes",
                "version": "ex",
                "year_of_production": 2002,
                "color": "f8465d",
                "vin": "ZZY9R9HCBG6RL2MHM",
                "owner_id": 4,
                "created_at": "1976-05-20 16:58:37",
                "updated_at": "1984-05-30 01:09:38"
            }
        },
        {
            "id": 4,
            "model": "architecto",
            "number": 2540,
            "price": 556.11,
            "car_id": 11,
            "created_at": "2004-09-19 06:54:28",
            "updated_at": "2007-10-29 06:13:12",
            "car": {
                "id": 11,
                "model": "mercedes",
                "version": "et",
                "year_of_production": 2012,
                "color": "4247ff",
                "vin": "VMANQDRFMZBJQ90PE",
                "owner_id": 1,
                "created_at": "1979-07-28 10:23:37",
                "updated_at": "1979-02-17 22:06:50"
            }
        },
        {
            "id": 5,
            "model": "perspiciatis",
            "number": 13021,
            "price": 619.6,
            "car_id": 18,
            "created_at": "1979-03-17 15:11:31",
            "updated_at": "2015-10-18 07:56:31",
            "car": {
                "id": 18,
                "model": "opel",
                "version": "et",
                "year_of_production": 1991,
                "color": "f8a2e0",
                "vin": "SUYT9X3OJ3HIGMFUN",
                "owner_id": 3,
                "created_at": "1986-01-05 13:46:10",
                "updated_at": "1990-08-07 12:54:23"
            }
        }
    ]
}
```

### HTTP Request
`GET api/car-part`

`HEAD api/car-part`


<!-- END_a4b716d91999bf1f21ef246119d56221 -->

<!-- START_bdb6891f612108a987a4c0357f3644be -->
## api/car-part/create

> Example request:

```bash
curl -X GET "http://l4a.localhost/api/car-part/create" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://l4a.localhost/api/car-part/create",
    "method": "GET",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```

> Example response:

```json
null
```

### HTTP Request
`GET api/car-part/create`

`HEAD api/car-part/create`


<!-- END_bdb6891f612108a987a4c0357f3644be -->

<!-- START_f6de0342505701790c29a3ef56f27fc5 -->
## api/car-part

> Example request:

```bash
curl -X POST "http://l4a.localhost/api/car-part" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://l4a.localhost/api/car-part",
    "method": "POST",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```


### HTTP Request
`POST api/car-part`


<!-- END_f6de0342505701790c29a3ef56f27fc5 -->

<!-- START_f84f90485ab0bc63b6441235e9a3099a -->
## api/car-part/{car_part}

> Example request:

```bash
curl -X GET "http://l4a.localhost/api/car-part/{car_part}" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://l4a.localhost/api/car-part/{car_part}",
    "method": "GET",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```

> Example response:

```json
{
    "id": 1,
    "model": "aut",
    "number": 8912,
    "price": 757.56,
    "car_id": 21,
    "created_at": "2010-08-12 08:46:12",
    "updated_at": "1995-12-11 23:22:11"
}
```

### HTTP Request
`GET api/car-part/{car_part}`

`HEAD api/car-part/{car_part}`


<!-- END_f84f90485ab0bc63b6441235e9a3099a -->

<!-- START_6351fbda64c97d47afa67320f97653d4 -->
## api/car-part/{car_part}/edit

> Example request:

```bash
curl -X GET "http://l4a.localhost/api/car-part/{car_part}/edit" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://l4a.localhost/api/car-part/{car_part}/edit",
    "method": "GET",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```

> Example response:

```json
null
```

### HTTP Request
`GET api/car-part/{car_part}/edit`

`HEAD api/car-part/{car_part}/edit`


<!-- END_6351fbda64c97d47afa67320f97653d4 -->

<!-- START_d85ee8cd95c7375def072761193638cd -->
## api/car-part/{car_part}

> Example request:

```bash
curl -X PUT "http://l4a.localhost/api/car-part/{car_part}" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://l4a.localhost/api/car-part/{car_part}",
    "method": "PUT",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```


### HTTP Request
`PUT api/car-part/{car_part}`

`PATCH api/car-part/{car_part}`


<!-- END_d85ee8cd95c7375def072761193638cd -->

<!-- START_25ed8484b371c8e97131df7c3e00b472 -->
## api/car-part/{car_part}

> Example request:

```bash
curl -X DELETE "http://l4a.localhost/api/car-part/{car_part}" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://l4a.localhost/api/car-part/{car_part}",
    "method": "DELETE",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```


### HTTP Request
`DELETE api/car-part/{car_part}`


<!-- END_25ed8484b371c8e97131df7c3e00b472 -->

