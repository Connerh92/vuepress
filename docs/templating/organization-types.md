# Organization Types

The `craft.organizations.organizationTypes` tag enables interaction with [Organization Types].  Commonly, these tags are used to retrieve one or many [Organization Types].

[[toc]]

### `find( $identifier )`

Returns an [Organization Element] by its Id or handle.

```twig
{% set element = craft.organizations.organizationTypes.find(1) %}
{% set element = craft.organizations.organizationTypes.find('technology') %}
```


### `findByCondition( $condition )`
Returns a [Organization Type] or `null` if not found.

```twig
{% set element = craft.organizations.organizationTypes.findByCondition({
    id: 1
}) %}
```


### `findByCriteria( $criteria )`
Returns a [Organization Type] or `null` if not found.

```twig
{% set element = craft.organizations.organizationTypes.findByCriteria({
    id: 1,
    indexBy: 'id'
}) %}
```


### `findAllByCondition( $condition )`
Returns an array of [Organization Types].

```twig
{% set element = craft.organizations.organizationTypes.findAllByCondition({
    id: 1
}) %}
```


### `findAllByCriteria( $criteria )`
Returns an array of [Organization Types].

```twig
{% set element = craft.organizations.organizationTypes.findAllByCriteria({
    id: 1,
    indexBy: 'id'
}) %}
```


### `getQuery( $criteria )`

Returns a [Organization Type Query].

```twig
{% set element = craft.organizations.organizationTypes.getQuery({
    id: 1
}) %}
```


[Organization Type Query]: ../queries/organization-type.md
[Organization Type]: ../objects/organization-type.md
[Organization Types]: ../objects/organization-type.md