## workadventure with Admin

Here is a POC for workadventure with admin API

### sources :    
 - [taksan job](https://github.com/taksan/workadventure-sample-admin-api/tree/main) (thanks to him !)
 - [workadventure](https://github.com/workadventure/workadventure) (so incredible)


### Steps :
After cloning this project   
1. cp .env.prod.template to .env
2. edit .env
3. just fill DOMAIN=workadventure.localhost with your own domain (play.yourdomain.tld)
4. save the file
5. run docker-compose up -d
6. Open browser on play.yourdomain.tld (or whtever you choose)
7. enjoy !


## What will be done ?
 - you are admin
 - you can edit your map
 - some entities from limzu are available on the map

## Because this project is only a POC :
 - every user is admin
 - only one map is available
 - it is NOT an full admin usable, just an example on how to create your own with javascript

## what can i do after that ?
 - reading the workadventure doc [here](https://github.com/workadventure/workadventure/blob/develop/docs/others/self-hosting/adminAPI.md) and take a look at the swagger [here](https://play.workadventu.re/swagger-ui/#/ExternalAdminAPI/get_api_mapinformation)


## Knew issues
broken pipe, adress already in use   
--> please docker-compose down before docker-compose up -d   

404, or map not found orsomethings like this  
--> Please be patient after launching docker-compose up -d, and refresh your page  

when i use docker-compose up -d, i see a lot of error   
--> try with sudo docker-compose up -d
