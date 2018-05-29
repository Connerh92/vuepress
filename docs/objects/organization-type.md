# Organization Type

While templating, you may access the following public attributes and methods on a [Organization Type].

## Properties
The following properties are available:

| Property              | Type                                  | Description
| --------------------- | ------------------------------------- | ---------------------------------------------------------------------------------
| `id`                  | `[integer]`                           | The organization type's Id
| `handle`              | `[string]`                            | The organization type's reference name
| `name`                | `[string]`                            | The organization type's human readable name
| `fieldLayoutId`       | `[integer]`|`[null]`                  | The organization type's layout Id

[integer]: http://www.php.net/language.types.integer
[string]: http://www.php.net/language.types.string
[null]: http://www.php.net/language.types.null
[array]: http://www.php.net/language.types.array

## Methods
The following methods are available:

### `getFieldLayout(): [Field Layout]|null`

::: code
```twig
{% set object = craft.organizations.organizationTypes.get('technology') %} // Get an Organization Type
{% set fieldLayout = object.getFieldLayout() %}
<p>{{ fieldLayout.id }}</p>
```

```php
use flipbox\organizations\Organizations;

$object = Organizations::getInstance()->getOrganizationTypes()->get([
    'handle' => 'technology'
]);

$fieldLayout = $object->getFieldLayout();
```
:::



### `object.getSiteSettings(): [Organization Type Site Settings][]`

::: code
```twig
{% set object = craft.organizations.organizationTypes.find('technology') %} // Get an Organization Type
{% set siteSettings = object.getSiteSettings() %}
<ul>
{% for site in siteSettings %} 
    <li>{{ site.hasUrls }} - {{ site.getUriFormat() }} - {{ site.getTemplate() }}</li>
{% endfor %}
</ul>
```

```php
use flipbox\organizations\Organizations;

$object = Organizations::getInstance()->getOrganizationTypes()->get([
    'handle' => 'technology'
]);

$siteSettings = $object->getSiteSettings();

foreach ($siteSettings as $site) {
    // $site
}
```
:::

[Organization Type]: /objects/organization-type/ "Organization Type"
[Field Layout]: https://docs.craftcms.com/api/v3/craft-models-fieldlayout.html "Field Layout"
[Organization Type Site Settings]: /object/organization-type-site-settings/ "Organization Type Site Settings"
