/*
 * Javascripts
 * ========================================================================== */

import angular            from 'angular';
import BusinessController from './controller/BusinessCtrl';

/*
 * Stylesheets
 * ========================================================================== */

import './stylesheets/business.scss';

/* ========================================================================== */

/**
 * Define app public section home page module.
 * @param {String} moduleName.
 * @param {Array} dependencies.
 * @export Module name - name of this module of Workflow app
 */
export default angular.module('Heloo.App.Business', []).controller('BusinessController', BusinessController).name;
