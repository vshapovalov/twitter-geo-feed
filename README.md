Twitter geo feed
================

This project shows user geo-tagged tweets on google map.

How to install
---

- Run `composer install` to install dependencies  
- Run `php artisan migrate` to a apply migrations on your database
- Specify google_api_key and twitter application settings to your `.env` file 

```
TWITTER_API_ID=
TWITTER_API_SECRET=

GOOGLE_MAP_API_KEY=
```
