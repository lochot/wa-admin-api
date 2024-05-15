## workadventure with Admin

Here is a POC for workadventure with admin API

### sources :    
 - [taksan job](https://github.com/taksan/workadventure-sample-admin-api/tree/main) (thanks to him !)
 - [workadventure](https://github.com/workadventure/workadventure) (so incredible)


### Steps :
1. clone this repo 
2. cp .env.prod.template to .env
3. edit .env
4. fill .env with your own domain
5. run docker-compose up -d
6. enjoy !

**Be careful of new env for admin**   
YOUR_DEFAULT_MAP : (full url of the map)  
ADMIN_LOADING_LOGO : (full url of an image that will be show in loading)  
ADMIN_MENU_LOGO : (full url of image that will be the menu icon)  

**Be carefull to use a json map (not a tmj)**  
-> that is because api has to select what type we need (mapUrl or wamUrl) and i do this repo just for helping, so it is not complete ;)

if you need something more, go ask on the [workadventure discord](https://discord.gg/G6Xh9ZM9aR)


