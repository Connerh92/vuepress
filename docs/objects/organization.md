# Organization

While templating, you may access the following public attributes and methods on a [Organization Element].

## Properties
All of the standard [Element](https://docs.craftcms.com/api/v3/craft-base-element.html) public properties are available.  In addition, the following properties are also available:

| Property              | Type                                  | Description
| --------------------- | ------------------------------------- | ---------------------------------------------------------------------------------
| `state`               | `[string]`|`[null]`                   | The organization's state (custom defined) |
| `dateJoined`          | `[DateTime]`|`[null]`                 | The date the organization joined

[integer]: http://www.php.net/language.types.integer
[string]: http://www.php.net/language.types.string
[null]: http://www.php.net/language.types.null
[DateTime]: http://php.net/manual/en/class.datetime.php

## Methods
All of the standard [Element](https://docs.craftcms.com/api/v3/craft-base-element.html) public methods are available.  In addition, the following methods are also available:

### `getUsers( $criteria = [] ): [User Query]`

::: code
```twig
{% set element = craft.organizations.elements.find('flipbox') %} // Get an Organization Element
{% set users = element.getUsers({status: null}).all() %}
<ul>
{% for user in users %}
    <li>{{ user.id }} - {{ user.getFullName() }}</li>
{% endfor %}
</ul>
```

```php
use flipbox\organizations\Organizations;

$element = Organizations::getInstance()->getOrganizations()->get([
    'slug' => 'flipbox'
]);

$users = $element->getUsers([
    'status' => null
]);

foreach ($users as $user) {
    // $user is a /craft/elements/User
}
```
:::


### `getTypes( $criteria = [] ): [Organization Type Query]`

::: code
```twig
{% set element = craft.organizations.elements.find('flipbox') %} // Get an Organization Element
{% set users = element.getTypes({status: null}).all() %}
<ul>
{% for type in types %}
    <li>{{ type.id }} - {{ type.name }}</li>
{% endfor %}
</ul>
```

```php
use flipbox\organizations\Organizations;

$element = Organizations::getInstance()->getOrganizations()->get([
    'slug' => 'flipbox'
]);

$types = $element->getTypes([
    'status' => null
]);

foreach ($types as $type) {
    // $type is a /flipbox/organizations/records/OrganizationType
}
```
:::


### `getType( $identifier ): [Organization Type]`

::: code
```twig
{% set element = craft.organizations.elements.find('flipbox') %} // Get an Organization Element
{% set type = element.getType('technology') %}
<p>{{ type.id }} - <strong>{{ type.name }}</strong></p>
```

```php
use flipbox\organizations\Organizations;

$element = Organizations::getInstance()->getOrganizations()->get([
    'slug' => 'flipbox'
]);

/** @var /flipbox/organizations/records/OrganizationType $type */
$type = $element->getType('technology');
```
:::


### `getPrimaryType(): [Organization Type]`

::: code
```twig
{% set element = craft.organizations.elements.find('flipbox') %} // Get an Organization Element
{% set type = element.getPrimaryType() %}
<p>{{ type.id }} - <strong>{{ type.name }}</strong></p>
```

```php
use flipbox\organizations\Organizations;

$element = Organizations::getInstance()->getOrganizations()->get([
    'slug' => 'flipbox'
]);

/** @var /flipbox/organizations/records/OrganizationType $type */
$type = $element->getPrimaryType();
```
:::

[User]: https://docs.craftcms.com/api/v3/craft-elements-user.html "User Element"
[User Query]: https://docs.craftcms.com/api/v3/craft-elements-db-userquery.html "User Query"
[Organization Type Query]: /query/organization-type-query/ "Organization Type Query"
[Organization Type]: /objects/organization-type/ "Organization Type"
[Organization Element]: /objects/organization/ "Organization"


