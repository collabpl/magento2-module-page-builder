/**
 * @category  Collab
 * @package   Collab\PageBuilder
 * @author    Marcin Jędrzejewski <m.jedrzejewski@collab.pl>
 * @copyright 2024 Collab
 * @license   MIT
 */

define([
    'underscore',
    'jquery',
    'mage/apply/main',
    'Magento_Ui/js/lib/view/utils/dom-observer'
], function (_, $, mage, domObserver) {
    'use strict';

    function initializeWidget(el, data, breakpoints, currentViewport) {
        _.each(data, function (config, component) {
            config = config || {};
            config.breakpoints = breakpoints;
            config.currentViewport = currentViewport;
            mage.applyFor(el, config, component);
        });
    }

    function debounce(func, wait) {
        let timeout;
        return function () {
            const context = this, args = arguments;
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(context, args), wait);
        };
    }

    return function (data, contextElement) {
        _.each(data.config, function (componentConfiguration, elementPath) {
            domObserver.get(
                elementPath,
                function (element) {
                    let $element = $(element);

                    if (contextElement) {
                        $element = $(contextElement).find(element);
                    }

                    if ($element.length) {
                        const observerOptions = {
                            root: null,
                            threshold: [0, .25, .5, .75, 1]
                        };
                        const observer = new IntersectionObserver(debounce((entries) => {
                            entries.forEach((entry) => {
                                if (entry.isIntersecting) {
                                    initializeWidget($element, componentConfiguration, data.breakpoints, data.currentViewport);
                                    observer.disconnect();
                                }
                            });
                        }, 100), observerOptions);

                        observer.observe($element[0]);
                    }
                }
            );
        });
    };
});
