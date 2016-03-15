/*
 * Javascripts
 * ========================================================================== */

import angular            from 'angular';
import ContactsController from './controller/ContactsCtrl';

/*
 * Stylesheets
 * ========================================================================== */

import './stylesheets/contacts.scss';

/* ========================================================================== */

/**
 * Define app public section home page module.
 * @param {String} moduleName.
 * @param {Array} dependencies.
 * @export Module name - name of this module of Workflow app
 */
export default angular.module('Heloo.App.Contacts', []).controller('ContactsController', ContactsController).name;
