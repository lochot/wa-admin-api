const express  = require("express")
const cors = require('cors')
const app      = express()
const wokaList   = require('./woka.json')
const companions = require("./companions.json")

function getAllTextures() {
    let wokas = []
    Object.keys(wokaList).forEach(groupName => {
        let group = wokaList[groupName]
        group.collections.forEach(collection => {
            collection.textures.forEach(texture => {
                wokas.push({
                    id: texture.id,
                    url: texture.url,
                    layer: groupName
                })
            })
        })
    })
    return wokas
}

app.use(cors())

app.use(express.static('public'))

app.get("/api/capabilities", (req, res) => {
    res.send({
        "api/companion/list": "v1"
    })
})

app.get("/api/companion/list", (req, res) => {
    res.send(companions)
})

app.get("/api/map", (req, res) => {
    console.debug("Receive map request with parameters:", req.query)
console.debug("ADMIN_LOADING_LOGO: "+ADMIN_LOADING_LOGO);
console.debug("YOUR_DEFAULT_MAP: "+YOUR_DEFAULT_MAP);
    res.send(JSON.stringify({
//	mapUrl: YOUR_DEFAULT_MAP,
	wamUrl: YOUR_DEFAULT_MAP,
        group : "wa",
        authenticationMandatory: false,
        redirectUrl: null,
        mucRooms: null,
        loadingLogo: ADMIN_LOADING_LOGO,
        loginSceneLogo: ADMIN_LOADING_LOGO,
        loadingCowebsiteLogo: ADMIN_LOADING_LOGO,
        miniLogo: ADMIN_MENU_LOGO,
        activatedInviteUser: false,
        editable: true
    }
    ))
})

app.get("/api/woka/list", (req, res) => {
    // You receive the userId 
    res.send(wokaList)
})

app.get("/api/room/access", (req, res) => {
    console.debug("Receive map access request with parameters:", req.query)
    let characterTextureIds = req.query.characterTextureIds || []
    let isCharacterTexturesValid = false

    textures = [{       "id": "male1",
                        "name": "male1",
                        "url": "resources/characters/pipoya/Male 01-1.png",
                        "position": 0
                   } ]

    if (typeof characterTextureIds !== 'undefined' && characterTextureIds.length > 0) {isCharacterTexturesValid = true;}
    res.send(
        {
	    status: "ok",
            email: "someuser@iamokay",
            userUuid: req.query.userIdentifier,
            tags: ["admin"],
            visitCardUrl: `http://alink-to-the-user-profile.cool?user=${req.query.userIdentifier}`,
            isCharacterTexturesValid: isCharacterTexturesValid,
            characterTextures: textures,
            textures: textures,
            isCompanionTextureValid: true,
            messages:[],
            anonymous: false,
            canEdit: true,
            mucRooms: [{ name: "Connected Users", type: "default", "url": req.query.playUri }]
        }
    )
})


app.get("*", (req, res) => {
    console.debug("Request not handled:", req.url)
    console.debug(req.method)
    console.debug(req.query)

    res.send("{}")
})

const ADMIN_URL = process.env.ADMIN_URL
const YOUR_DEFAULT_MAP = process.env.YOUR_DEFAULT_MAP
const ADMIN_LOADING_LOGO = process.env.ADMIN_LOADING_LOGO
const ADMIN_MENU_LOGO = process.env.ADMIN_MENU_LOGO

app.listen(8080, ()=> {

    companions.push({
        name: "extra",
        "textures": [
            {
                "name": "blauhai3.png",
                "img": `${ADMIN_URL}/companions/blauhai3.png`
            },
            {
                "name": "Smiley.png",
                "img": `${ADMIN_URL}/companions/Smiley.png`
            }
        ]
    })
    wokaList["woka"]["collections"].push({
        "name": "extra",
        "position": 1,
        "textures": [
            {
                "id": "pipo-nekonin001",
                "name": "pipo-nekonin001",
                "url": `${ADMIN_URL}/wokas/pipo-nekonin001.png`,
                "position": 0
            }
        ]
    })

    wokaList["hair"]["collections"].push({
        "name": "extra",
        "position": 1,
        "textures": [
            {
                "id": "samurai-dark",
                "name": "samurai-dark",
                "url": `${ADMIN_URL}/hair/_samurai_dark.png`,
                "position": 0
            },
            {
                "id": "samurai-white",
                "name": "samurai-white",
                "url": `${ADMIN_URL}/hair/_samurai_white.png`,
                "position": 1
            }
        ]
    })
})
