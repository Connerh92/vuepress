# User Query

::: tip Notice
We have attached an extra `organization` filter criteria to the native [User Query].  You can utilize this param on any [User Query]
:::

## Params

All of the standard [User Query] params are are available.  In addition, the following params are also available:

| Property              | Type                                  | Description
| --------------------- | ------------------------------------- | ---------------------------------------------------------------------------------
| `organization`        | [string], [string]\[\], [integer], [integer]\[\], [Organization], [Organization]\[\], [null] | The organization criteria that the resulting users must have

## Usage

### `setOrganization( $value )`

Returns: [User Query]

| Argument          | Accepts                   | Description
| ----------        | ----------                | ----------
| `$value`          | [string], [string]\[\], [integer], [integer]\[\], [Organization], [Organization]\[\], [null] | The organization criteria that the resulting users must have


::: code
```twig
{% set query = craft.users.find({
    organization: {
        id: 1,
        organizationType: [1,2],
        userType: [1,2]
    }
}) %}
```

```php
$query = User::find()->setOrganization([
    id => 1,
    organizationType => [1,2],
    userType => [1,2]
]);
```
:::

[integer]: http://www.php.net/language.types.integer "Integer"
[array]: http://www.php.net/language.types.array "Array"
[string]: http://www.php.net/language.types.string "String"
[null]: http://www.php.net/language.types.null "Null"

[Organization]: /objects/organization "Organization"
[User Query]: https://docs.craftcms.com/v3/element-query-params/user-query-params.html "User Query"
