# Organization Query

The Organization Query is an extension of a native [Element Query].  In addition, the following can be utilized:

## Params

| Property              | Type                                  | Description
| --------------------- | ------------------------------------- | ---------------------------------------------------------------------------------
| `state`               | [string],[string][],[null]                       | The organization's state (custom defined)
| `user`                | [array],[[array]],[string],[string][],[integer],[integer][],[User],[User][],[null]                       | The organization's state (custom defined)
| `userGroup`           | [array],[[array]],[string],[string][],[integer],[integer][],[User Group],[User Group][],[null]                       | The organization's state (custom defined)
| `userType`            | [array],[[array]],[string],[string][],[integer],[integer][],[User Type],[User Type][],[null]                       | The organization's state (custom defined)
| `organizationType`    | [array],[[array]],[string],[string][],[integer],[integer][],[Organization Type],[Organization Type][],[null]                       | The organization's state (custom defined)
| `dateJoined`          | [string],[array],[DateTime],[null]                     | The date the organization joined


[integer]: http://www.php.net/language.types.integer "Integer"
[array]: http://www.php.net/language.types.array "Array"
[string]: http://www.php.net/language.types.string "String"
[null]: http://www.php.net/language.types.null "Null"

[User]: https://docs.craftcms.com/api/v3/craft-elements-user.html "User"
[User Group]: https://docs.craftcms.com/api/v3/craft-models-usergroup.html "User Group"
[User Type]: /objects/user-type "User Type"
[Organization Type]: /objects/organization-type "Organization Type"

[Organization]: /objects/organization "Organization"
[Element Query]: https://docs.craftcms.com/v3/element-queries.html "Element Query"
