/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "gs5qk096ppw1gdn",
    "created": "2023-09-01 00:40:49.055Z",
    "updated": "2023-09-01 00:40:49.055Z",
    "name": "survey",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ycku2sws",
        "name": "first_name",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "0b0nis22",
        "name": "last_name",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "qsicetit",
        "name": "event_interest",
        "type": "bool",
        "required": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "njhorqwe",
        "name": "email",
        "type": "email",
        "required": false,
        "unique": false,
        "options": {
          "exceptDomains": null,
          "onlyDomains": null
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("gs5qk096ppw1gdn");

  return dao.deleteCollection(collection);
})
