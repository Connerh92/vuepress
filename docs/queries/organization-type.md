# Organization Type Query

The Organization Type Query supports all [Active Query] operations.  In addition, the following can be utilized:
 
## Params
All of the standard [Active Query](https://www.yiiframework.com/doc/api/2.0/yii-db-activequery#properties) public properties are available.  In addition, the following properties are also available:

| Property              | Type                                  | Description
| --------------------- | ------------------------------------- | ---------------------------------------------------------------------------------
| `handle`              | [string], [string\[\]], [null]                                                        | The handle that the resulting organization types must have
| `fieldLayoutId`       | [integer], [integer\[\]], [null]                                                      | The field layout id that the resulting organization types must have
| `organization`        | [string], [string\[\]], [integer], [integer\[\]], [Organization], [Organization\[\]], [null]  | The organization(s) that the resulting organization types must be associated to
| `id`                  | [integer], [integer\[\]], [null]                                                      | The id that the resulting organization types must have
| `name`                | [string], [string\[\]], [null]                                                        | The name that the resulting organization types must have
| `uid`                 | [string], [string\[\]], [null]                                                        | The uid that the resulting organization types must have
| `dateCreated`         | [string], [array], [DateTime], [null]                                                | The creation date that the resulting organization types must have
| `dateUpdated`         | [string], [array], [DateTime], [null]                                                | The updated date that the resulting organization types must have

[integer]: http://www.php.net/language.types.integer
[integer\[\]]: http://www.php.net/language.types.integer
[array]: http://www.php.net/language.types.array
[string]: http://www.php.net/language.types.string
[string\[\]]: http://www.php.net/language.types.string
[null]: http://www.php.net/language.types.null
[DateTime]: http://php.net/manual/en/class.datetime.php

[Active Query]: https://www.yiiframework.com/doc/api/2.0/yii-db-activequery
[Active Query]: https://www.yiiframework.com/doc/api/2.0/yii-db-activequery

[Organization]: ../objects/organization.md