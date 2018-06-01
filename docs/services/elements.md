# Organization Elements

The `craft.organizations.elements` tag enables interaction with [Organization Elements].  Commonly, these tags are used to retrieve one or many [Organization Elements].

[[toc]]

### `find( $identifier, int $siteId = null )`

Returns an [Organization Element]

| Argument          | Accepts                   | Description
| ----------        | ----------                | ----------
| `$identifier`     | [string], [integer], [Organization] | A unique organization identifier
| `$siteId`         | [integer], [null]         | The [Site] Id that the organization must belong to

::: code
```twig
{% set element = craft.organizations.elements.find(1) %}
{% set element = craft.organizations.elements.find('flipbox') %}
```

```php
use flipbox\organizations\Organizations;

$element = Organizations::getInstance()->getElements()->find(1);
$element = Organizations::getInstance()->getElements()->find('flipbox');
```
:::

### `getQuery( $criteria )`

Returns a [Organization Query].

| Argument          | Accepts                   | Description
| ----------        | ----------                | ----------
| `$criteria`       | [array]                   | An array of [Organization Query] criteria.


::: code
```twig
{% set element = craft.organizations.elements.getQuery({
    id: 1
}) %}
```

```php
use flipbox\organizations\Organizations;

$element = Organizations::getInstance()->getElements()->getQuery([
    'id' => 1
]);
```
:::


### `create( $config = [] )`

Returns a new [Organization Element] (but does not save).

| Argument          | Accepts                   | Description
| ----------        | ----------                | ----------
| `$config`         | [array]                   | An organization configuration

::: code
```twig
{% set element = craft.organizations.elements.create({
    title: 'Flipbox Digital'
}) %}
```

```php
use flipbox\organizations\Organizations;

$element = Organizations::getInstance()->getElements()->create([
    title: 'Flipbox Digital'
]);
```
:::

[Organization Query]: ../queries/organization.md "Organization Query"
[Organization Element]: ../objects/organization.md "Organization Element"
[Organization Elements]: ../objects/organization.md "Organization Element"