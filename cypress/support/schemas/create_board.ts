
const schema_create_board = {
    "title": "Root Schema",
    "type": "object",
    "default": {},
    "required": [
        "id",
        "name",
        "desc",
        "descData",
        "closed",
        "idOrganization",
        "idEnterprise",
        "pinned",
        "url",
        "shortUrl",
        "prefs",
        "labelNames",
        "limits"
    ],
    "properties": {
        "id": {
            "title": "The id Schema",
            "type": "string",
            "default": ""
        },
        "name": {
            "title": "The name Schema",
            "type": "string",
            "default": ""
        },
        "desc": {
            "title": "The desc Schema",
            "type": "string",
            "default": ""
        },
        "descData": {
            "title": "The descData Schema",
            "type": "null",
            "default": null
        },
        "closed": {
            "title": "The closed Schema",
            "type": "boolean",
            "default": false
        },
        "idOrganization": {
            "title": "The idOrganization Schema",
            "type": "string",
            "default": ""
        },
        "idEnterprise": {
            "title": "The idEnterprise Schema",
            "type": "null",
            "default": null
        },
        "pinned": {
            "title": "The pinned Schema",
            "type": "boolean",
            "default": false
        },
        "url": {
            "title": "The url Schema",
            "type": "string",
            "default": ""
        },
        "shortUrl": {
            "title": "The shortUrl Schema",
            "type": "string",
            "default": ""
        },
        "prefs": {
            "title": "The prefs Schema",
            "type": "object",
            "default": {},
            "required": [
                "permissionLevel",
                "hideVotes",
                "voting",
                "comments",
                "invitations",
                "selfJoin",
                "cardCovers",
                "cardCounts",
                "isTemplate",
                "cardAging",
                "calendarFeedEnabled",
                "hiddenPluginBoardButtons",
                "switcherViews",
                "background",
                "backgroundColor",
                "backgroundImage",
                "backgroundTile",
                "backgroundBrightness",
                "sharedSourceUrl",
                "backgroundImageScaled",
                "backgroundBottomColor",
                "backgroundTopColor",
                "canBePublic",
                "canBeEnterprise",
                "canBeOrg",
                "canBePrivate",
                "canInvite"
            ],
            "properties": {
                "permissionLevel": {
                    "title": "The permissionLevel Schema",
                    "type": "string",
                    "default": ""
                },
                "hideVotes": {
                    "title": "The hideVotes Schema",
                    "type": "boolean",
                    "default": false
                },
                "voting": {
                    "title": "The voting Schema",
                    "type": "string",
                    "default": ""
                },
                "comments": {
                    "title": "The comments Schema",
                    "type": "string",
                    "default": ""
                },
                "invitations": {
                    "title": "The invitations Schema",
                    "type": "string",
                    "default": ""
                },
                "selfJoin": {
                    "title": "The selfJoin Schema",
                    "type": "boolean",
                    "default": false
                },
                "cardCovers": {
                    "title": "The cardCovers Schema",
                    "type": "boolean",
                    "default": false
                },
                "cardCounts": {
                    "title": "The cardCounts Schema",
                    "type": "boolean",
                    "default": false
                },
                "isTemplate": {
                    "title": "The isTemplate Schema",
                    "type": "boolean",
                    "default": false
                },
                "cardAging": {
                    "title": "The cardAging Schema",
                    "type": "string",
                    "default": ""
                },
                "calendarFeedEnabled": {
                    "title": "The calendarFeedEnabled Schema",
                    "type": "boolean",
                    "default": false
                },
                "hiddenPluginBoardButtons": {
                    "title": "The hiddenPluginBoardButtons Schema",
                    "type": "array",
                    "default": [],
                    "items": {}
                },
                "switcherViews": {
                    "title": "The switcherViews Schema",
                    "type": "array",
                    "default": [],
                    "items": {
                        "title": "A Schema",
                        "type": "object",
                        "required": [
                            "viewType",
                            "enabled"
                        ],
                        "properties": {
                            "viewType": {
                                "title": "The viewType Schema",
                                "type": "string"
                            },
                            "enabled": {
                                "title": "The enabled Schema",
                                "type": "boolean"
                            }
                        }
                    }
                },
                "background": {
                    "title": "The background Schema",
                    "type": "string",
                    "default": ""
                },
                "backgroundColor": {
                    "title": "The backgroundColor Schema",
                    "type": "string",
                    "default": ""
                },
                "backgroundImage": {
                    "title": "The backgroundImage Schema",
                    "type": "null",
                    "default": null
                },
                "backgroundTile": {
                    "title": "The backgroundTile Schema",
                    "type": "boolean",
                    "default": false
                },
                "backgroundBrightness": {
                    "title": "The backgroundBrightness Schema",
                    "type": "string",
                    "default": ""
                },
                "sharedSourceUrl": {
                    "title": "The sharedSourceUrl Schema",
                    "type": "null",
                    "default": null
                },
                "backgroundImageScaled": {
                    "title": "The backgroundImageScaled Schema",
                    "type": "null",
                    "default": null
                },
                "backgroundBottomColor": {
                    "title": "The backgroundBottomColor Schema",
                    "type": "string",
                    "default": ""
                },
                "backgroundTopColor": {
                    "title": "The backgroundTopColor Schema",
                    "type": "string",
                    "default": ""
                },
                "canBePublic": {
                    "title": "The canBePublic Schema",
                    "type": "boolean",
                    "default": false
                },
                "canBeEnterprise": {
                    "title": "The canBeEnterprise Schema",
                    "type": "boolean",
                    "default": false
                },
                "canBeOrg": {
                    "title": "The canBeOrg Schema",
                    "type": "boolean",
                    "default": false
                },
                "canBePrivate": {
                    "title": "The canBePrivate Schema",
                    "type": "boolean",
                    "default": false
                },
                "canInvite": {
                    "title": "The canInvite Schema",
                    "type": "boolean",
                    "default": false
                }
            }
        },
        "labelNames": {
            "title": "The labelNames Schema",
            "type": "object",
            "default": {},
            "required": [
                "green",
                "yellow",
                "orange",
                "red",
                "purple",
                "blue",
                "sky",
                "lime",
                "pink",
                "black",
                "green_dark",
                "yellow_dark",
                "orange_dark",
                "red_dark",
                "purple_dark",
                "blue_dark",
                "sky_dark",
                "lime_dark",
                "pink_dark",
                "black_dark",
                "green_light",
                "yellow_light",
                "orange_light",
                "red_light",
                "purple_light",
                "blue_light",
                "sky_light",
                "lime_light",
                "pink_light",
                "black_light"
            ],
            "properties": {
                "green": {
                    "title": "The green Schema",
                    "type": "string",
                    "default": ""
                },
                "yellow": {
                    "title": "The yellow Schema",
                    "type": "string",
                    "default": ""
                },
                "orange": {
                    "title": "The orange Schema",
                    "type": "string",
                    "default": ""
                },
                "red": {
                    "title": "The red Schema",
                    "type": "string",
                    "default": ""
                },
                "purple": {
                    "title": "The purple Schema",
                    "type": "string",
                    "default": ""
                },
                "blue": {
                    "title": "The blue Schema",
                    "type": "string",
                    "default": ""
                },
                "sky": {
                    "title": "The sky Schema",
                    "type": "string",
                    "default": ""
                },
                "lime": {
                    "title": "The lime Schema",
                    "type": "string",
                    "default": ""
                },
                "pink": {
                    "title": "The pink Schema",
                    "type": "string",
                    "default": ""
                },
                "black": {
                    "title": "The black Schema",
                    "type": "string",
                    "default": ""
                },
                "green_dark": {
                    "title": "The green_dark Schema",
                    "type": "string",
                    "default": ""
                },
                "yellow_dark": {
                    "title": "The yellow_dark Schema",
                    "type": "string",
                    "default": ""
                },
                "orange_dark": {
                    "title": "The orange_dark Schema",
                    "type": "string",
                    "default": ""
                },
                "red_dark": {
                    "title": "The red_dark Schema",
                    "type": "string",
                    "default": ""
                },
                "purple_dark": {
                    "title": "The purple_dark Schema",
                    "type": "string",
                    "default": ""
                },
                "blue_dark": {
                    "title": "The blue_dark Schema",
                    "type": "string",
                    "default": ""
                },
                "sky_dark": {
                    "title": "The sky_dark Schema",
                    "type": "string",
                    "default": ""
                },
                "lime_dark": {
                    "title": "The lime_dark Schema",
                    "type": "string",
                    "default": ""
                },
                "pink_dark": {
                    "title": "The pink_dark Schema",
                    "type": "string",
                    "default": ""
                },
                "black_dark": {
                    "title": "The black_dark Schema",
                    "type": "string",
                    "default": ""
                },
                "green_light": {
                    "title": "The green_light Schema",
                    "type": "string",
                    "default": ""
                },
                "yellow_light": {
                    "title": "The yellow_light Schema",
                    "type": "string",
                    "default": ""
                },
                "orange_light": {
                    "title": "The orange_light Schema",
                    "type": "string",
                    "default": ""
                },
                "red_light": {
                    "title": "The red_light Schema",
                    "type": "string",
                    "default": ""
                },
                "purple_light": {
                    "title": "The purple_light Schema",
                    "type": "string",
                    "default": ""
                },
                "blue_light": {
                    "title": "The blue_light Schema",
                    "type": "string",
                    "default": ""
                },
                "sky_light": {
                    "title": "The sky_light Schema",
                    "type": "string",
                    "default": ""
                },
                "lime_light": {
                    "title": "The lime_light Schema",
                    "type": "string",
                    "default": ""
                },
                "pink_light": {
                    "title": "The pink_light Schema",
                    "type": "string",
                    "default": ""
                },
                "black_light": {
                    "title": "The black_light Schema",
                    "type": "string",
                    "default": ""
                }
            }
        },
        "limits": {
            "title": "The limits Schema",
            "type": "object",
            "default": {},
            "required": [],
            "properties": {}
        }
    }
}

export default schema_create_board;
