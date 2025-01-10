
const schema_get_card = {
    "title": "Root Schema",
    "type": "object",
    "default": {},
    "required": [
        "id",
        "badges",
        "checkItemStates",
        "closed",
        "dueComplete",
        "dateLastActivity",
        "desc",
        "descData",
        "due",
        "dueReminder",
        "email",
        "idBoard",
        "idChecklists",
        "idList",
        "idMembers",
        "idMembersVoted",
        "idShort",
        "idAttachmentCover",
        "labels",
        "idLabels",
        "manualCoverAttachment",
        "name",
        "pinned",
        "pos",
        "shortLink",
        "shortUrl",
        "start",
        "subscribed",
        "url",
        "cover",
        "isTemplate",
        "cardRole",
        "mirrorSourceId"
    ],
    "properties": {
        "id": {
            "title": "The id Schema",
            "type": "string",
            "default": ""
        },
        "badges": {
            "title": "The badges Schema",
            "type": "object",
            "default": {},
            "required": [
                "attachmentsByType",
                "externalSource",
                "location",
                "votes",
                "viewingMemberVoted",
                "subscribed",
                "attachments",
                "fogbugz",
                "checkItems",
                "checkItemsChecked",
                "checkItemsEarliestDue",
                "comments",
                "description",
                "due",
                "dueComplete",
                "lastUpdatedByAi",
                "start"
            ],
            "properties": {
                "attachmentsByType": {
                    "title": "The attachmentsByType Schema",
                    "type": "object",
                    "default": {},
                    "required": [
                        "trello"
                    ],
                    "properties": {
                        "trello": {
                            "title": "The trello Schema",
                            "type": "object",
                            "default": {},
                            "required": [
                                "board",
                                "card"
                            ],
                            "properties": {
                                "board": {
                                    "title": "The board Schema",
                                    "type": "integer",
                                    "default": 0
                                },
                                "card": {
                                    "title": "The card Schema",
                                    "type": "integer",
                                    "default": 0
                                }
                            }
                        }
                    }
                },
                "externalSource": {
                    "title": "The externalSource Schema",
                    "type": "null",
                    "default": null
                },
                "location": {
                    "title": "The location Schema",
                    "type": "boolean",
                    "default": false
                },
                "votes": {
                    "title": "The votes Schema",
                    "type": "integer",
                    "default": 0
                },
                "viewingMemberVoted": {
                    "title": "The viewingMemberVoted Schema",
                    "type": "boolean",
                    "default": false
                },
                "subscribed": {
                    "title": "The subscribed Schema",
                    "type": "boolean",
                    "default": false
                },
                "attachments": {
                    "title": "The attachments Schema",
                    "type": "integer",
                    "default": 0
                },
                "fogbugz": {
                    "title": "The fogbugz Schema",
                    "type": "string",
                    "default": ""
                },
                "checkItems": {
                    "title": "The checkItems Schema",
                    "type": "integer",
                    "default": 0
                },
                "checkItemsChecked": {
                    "title": "The checkItemsChecked Schema",
                    "type": "integer",
                    "default": 0
                },
                "checkItemsEarliestDue": {
                    "title": "The checkItemsEarliestDue Schema",
                    "type": "null",
                    "default": null
                },
                "comments": {
                    "title": "The comments Schema",
                    "type": "integer",
                    "default": 0
                },
                "description": {
                    "title": "The description Schema",
                    "type": "boolean",
                    "default": false
                },
                "due": {
                    "title": "The due Schema",
                    "type": "null",
                    "default": null
                },
                "dueComplete": {
                    "title": "The dueComplete Schema",
                    "type": "boolean",
                    "default": false
                },
                "lastUpdatedByAi": {
                    "title": "The lastUpdatedByAi Schema",
                    "type": "boolean",
                    "default": false
                },
                "start": {
                    "title": "The start Schema",
                    "type": "null",
                    "default": null
                }
            }
        },
        "checkItemStates": {
            "title": "The checkItemStates Schema",
            "type": "array",
            "default": [],
            "items": {}
        },
        "closed": {
            "title": "The closed Schema",
            "type": "boolean",
            "default": false
        },
        "dueComplete": {
            "title": "The dueComplete Schema",
            "type": "boolean",
            "default": false
        },
        "dateLastActivity": {
            "title": "The dateLastActivity Schema",
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
            "type": "object",
            "default": {},
            "required": [
                "emoji"
            ],
            "properties": {
                "emoji": {
                    "title": "The emoji Schema",
                    "type": "object",
                    "default": {},
                    "required": [],
                    "properties": {}
                }
            }
        },
        "due": {
            "title": "The due Schema",
            "type": "null",
            "default": null
        },
        "dueReminder": {
            "title": "The dueReminder Schema",
            "type": "null",
            "default": null
        },
        "email": {
            "title": "The email Schema",
            "type": "null",
            "default": null
        },
        "idBoard": {
            "title": "The idBoard Schema",
            "type": "string",
            "default": ""
        },
        "idChecklists": {
            "title": "The idChecklists Schema",
            "type": "array",
            "default": [],
            "items": {}
        },
        "idList": {
            "title": "The idList Schema",
            "type": "string",
            "default": ""
        },
        "idMembers": {
            "title": "The idMembers Schema",
            "type": "array",
            "default": [],
            "items": {}
        },
        "idMembersVoted": {
            "title": "The idMembersVoted Schema",
            "type": "array",
            "default": [],
            "items": {}
        },
        "idShort": {
            "title": "The idShort Schema",
            "type": "integer",
            "default": 0
        },
        "idAttachmentCover": {
            "title": "The idAttachmentCover Schema",
            "type": "null",
            "default": null
        },
        "labels": {
            "title": "The labels Schema",
            "type": "array",
            "default": [],
            "items": {}
        },
        "idLabels": {
            "title": "The idLabels Schema",
            "type": "array",
            "default": [],
            "items": {}
        },
        "manualCoverAttachment": {
            "title": "The manualCoverAttachment Schema",
            "type": "boolean",
            "default": false
        },
        "name": {
            "title": "The name Schema",
            "type": "string",
            "default": ""
        },
        "pinned": {
            "title": "The pinned Schema",
            "type": "boolean",
            "default": false
        },
        "pos": {
            "title": "The pos Schema",
            "type": "integer",
            "default": 0
        },
        "shortLink": {
            "title": "The shortLink Schema",
            "type": "string",
            "default": ""
        },
        "shortUrl": {
            "title": "The shortUrl Schema",
            "type": "string",
            "default": ""
        },
        "start": {
            "title": "The start Schema",
            "type": "null",
            "default": null
        },
        "subscribed": {
            "title": "The subscribed Schema",
            "type": "boolean",
            "default": false
        },
        "url": {
            "title": "The url Schema",
            "type": "string",
            "default": ""
        },
        "cover": {
            "title": "The cover Schema",
            "type": "object",
            "default": {},
            "required": [
                "idAttachment",
                "color",
                "idUploadedBackground",
                "size",
                "brightness",
                "idPlugin"
            ],
            "properties": {
                "idAttachment": {
                    "title": "The idAttachment Schema",
                    "type": "null",
                    "default": null
                },
                "color": {
                    "title": "The color Schema",
                    "type": "null",
                    "default": null
                },
                "idUploadedBackground": {
                    "title": "The idUploadedBackground Schema",
                    "type": "null",
                    "default": null
                },
                "size": {
                    "title": "The size Schema",
                    "type": "string",
                    "default": ""
                },
                "brightness": {
                    "title": "The brightness Schema",
                    "type": "string",
                    "default": ""
                },
                "idPlugin": {
                    "title": "The idPlugin Schema",
                    "type": "null",
                    "default": null
                }
            }
        },
        "isTemplate": {
            "title": "The isTemplate Schema",
            "type": "boolean",
            "default": false
        },
        "cardRole": {
            "title": "The cardRole Schema",
            "type": "null",
            "default": null
        },
        "mirrorSourceId": {
            "title": "The mirrorSourceId Schema",
            "type": "null",
            "default": null
        }
    }
}

export default schema_get_card;
