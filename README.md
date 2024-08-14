# Magento 2 Page Builder

The Collab_PageBuilder module overrides some of the default Magento 2 Page Builder functionalities in order to provide
better performance and flexibility for Your Magento 2 app.

## Configuration
Module does not have any configuration options.

## Functionalities
- Overrides [widget-initializer.js](https://github.com/magento/magento2-page-builder/blob/develop/app/code/Magento/PageBuilder/view/base/web/js/widget-initializer.js) in a way that only elements which are within a viewport are initialized. 
This way we are reducing the number of initialized widgets on a page load which positively affects the performance of the page
and PageSpeed Insights score on pages which are solely based on Page Builder.


## Why choose this extension over other solutions?
We don't believe in efficient modules which have tons of options - simple as that - modules which have multiple
options, are prepared for many integrations always have some performance footprint for application. Having this
in mind we are trying to provide simple, portable and independent modules which sometimes require some basic Magento 2 development
skills.

## Installation details
```bash
composer req collab/module-page-builder
bin/magento setup:upgrade
```
