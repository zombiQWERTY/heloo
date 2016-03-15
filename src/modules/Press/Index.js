/*
 * Javascripts
 * ========================================================================== */

import angular         from 'angular';
import PressController from './controller/PressCtrl';

/*
 * Stylesheets
 * ========================================================================== */

import './stylesheets/press.scss';

/* ========================================================================== */

/**
 * Define app public section home page module.
 * @param {String} moduleName.
 * @param {Array} dependencies.
 * @export Module name - name of this module of Workflow app
 */
export default angular.module('Heloo.App.Press', []).controller('PressController', PressController).name;
