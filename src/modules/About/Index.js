/*
 * Javascripts
 * ========================================================================== */

import angular         from 'angular';
import AboutController from './controller/AboutCtrl';

/*
 * Stylesheets
 * ========================================================================== */

import './stylesheets/about.scss';

/* ========================================================================== */

/**
 * Define app public section home page module.
 * @param {String} moduleName.
 * @param {Array} dependencies.
 * @export Module name - name of this module of Workflow app
 */
export default angular.module('Heloo.App.About', []).controller('AboutController', AboutController).name;
