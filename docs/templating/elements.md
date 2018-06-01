# Elements

The `craft.organizations.elements` tag enables interaction with [Organization Elements].  Commonly, these tags are used to retrieve one or many [Organization Elements].

[[toc]]

### `find( $identifier, int $siteId = null )`

Returns an [Organization Element] by its Id or slug.

```twig
{% set element = craft.organizations.elements.find(1) %}
{% set element = craft.organizations.elements.find('flipbox') %}
```


### `getQuery( $criteria )`

Returns a [Organization Query].

```twig
{% set element = craft.organizations.elements.getQuery({
    id: 1
}) %}
```

### `create( $config = [] )`

Creates (but does not save) a new [Organization Element].

```twig
{% set element = craft.organizations.elements.create({
    title: 'Flipbox Digital'
}) %}
```

[Organization Query]: ../queries/organization.md "Organization Query"
[Organization Element]: ../objects/organization.md "Organization Element"
[Organization Elements]: ../objects/organization.md "Organization Element"