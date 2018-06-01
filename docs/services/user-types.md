# User Types

The `craft.organizations.userTypes` tag enables interaction with [User Types].  Commonly, these tags are used to retrieve one or many [User Types].

[[toc]]

### `find( $identifier )`

Returns an [User Type] by its Id or handle.

```twig
{% set element = craft.organizations.userTypes.find(1) %}
{% set element = craft.organizations.userTypes.find('president') %}
```

### `findByCondition( $condition )`
Returns a [User Type] or `null` if not found.

```twig
{% set element = craft.organizations.userTypes.findByCondition({
    id: 1
}) %}
```


### `findByCriteria( $criteria )`
Returns a [User Type] or `null` if not found.

```twig
{% set element = craft.organizations.userTypes.findByCriteria({
    id: 1,
    indexBy: 'id'
}) %}
```


### `findAllByCondition( $condition )`
Returns an array of [User Types].

```twig
{% set element = craft.organizations.userTypes.findAllByCondition({
    id: 1
}) %}
```


### `findAllByCriteria( $criteria )`
Returns an array of [User Types].

```twig
{% set element = craft.organizations.userTypes.findAllByCriteria({
    id: 1,
    indexBy: 'id'
}) %}
```

### `getQuery( $criteria )`

Returns a [User Type Query].

```twig
{% set element = craft.organizations.userTypes.getQuery({
    id: 1
}) %}
```

[User Type Query]: ../queries/user-type.md
[User Type]: ../objects/user-type.md
[User Types]: ../objects/user-type.md