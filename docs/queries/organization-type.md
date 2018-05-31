# Organization Type Query

The Organization Type Query provides 
 
## Params
All of the standard [Active Record](https://www.yiiframework.com/doc/api/2.0/yii-db-activerecord) public properties are available.  In addition, the following properties are also available:

| Property              | Type                                  | Description
| --------------------- | ------------------------------------- | ---------------------------------------------------------------------------------
| `handle`              | [string], [string][], [null]                                                        | The handle that the resulting organization types must have
| `fieldLayoutId`       | [integer], [integer][], [null]                                                      | The field layout id that the resulting organization types must have
| `organization`        | [string], [string][], [integer], [integer][], [Organization], [Organization][], [null]  | The organization(s) that the resulting organization types must be associated to
| `id`                  | [integer], [integer][], [null]                                                      | The id that the resulting organization types must have
| `name`                | [string], [string][], [null]                                                        | The name that the resulting organization types must have
| `uid`                 | [string], [string][], [null]                                                        | The uid that the resulting organization types must have
| `dateCreated`         | [string], [array], [DateTime], [null]                                                | The creation date that the resulting organization types must have
| `dateUpdated`         | [string], [array], [DateTime], [null]                                                | The updated date that the resulting organization types must have

[integer]: http://www.php.net/language.types.integer "Integer"
[array]: http://www.php.net/language.types.array "Array"
[string]: http://www.php.net/language.types.string "String"
[null]: http://www.php.net/language.types.null "Null"

[Organization]: /objects/organization "Organization"