# User Elements

The `craft.organizations.users` tag enables interaction with [User Elements].  Commonly, these tags are used to retrieve one or many [User Elements].

[[toc]]

### `find( $identifier )`

Returns an [User Element] by its Id, email or username.

```twig
{% set element = craft.organizations.users.find(1) %}
{% set element = craft.organizations.users.find('foo@bar.com') %}
```

### `getQuery( $criteria )`

Returns a [User Query].

```twig
{% set element = craft.organizations.users.getQuery({
    id: 1
}) %}
```

### `create( $config = [] )`

Creates (but does not save) a new [User Element].

```twig
{% set element = craft.organizations.elements.create({
    title: 'Flipbox Digital'
}) %}
```

[User Query]: ../queries/user.md
[User Element]: ../objects/user.md
[User Elements]: ../objects/user.md