/*
 * Javascripts
 * ========================================================================== */

import angular           from 'angular';
import HelooController   from './controller/HelooCtrl';

import PointerEvents     from './directives/PointerEvents/PointerEventsDirective';
import ThirdParties      from './directives/ThirdParties/ThirdPartiesDirective';
import ResponsiveClasses from './directives/ResponsiveClasses/ResponsiveClassesDirective';

/*
 * Stylesheets
 * ========================================================================== */

/* Base
 * ===================================== */

import './stylesheets/reset.scss';
import './stylesheets/fonts.scss';
import './stylesheets/globals.scss';

/* Header
 * ===================================== */

import './subModules/Header/header.scss';

/* Footer
 * ===================================== */

import './subModules/Footer/footer.scss';

/* Layout
 * ===================================== */

import './stylesheets/layout.scss';

/* ========================================================================== */

/**
 * Define app module.
 * @param {String} moduleName.
 * @param {Array} dependencies.
 * @export Module name - name of root module
 */
export default angular.module('Heloo.App', [
  PointerEvents, ResponsiveClasses, ThirdParties
]).controller('HelooController', HelooController).name;
