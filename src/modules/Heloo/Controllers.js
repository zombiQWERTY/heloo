/*
 * Javascripts
 * ========================================================================== */

import angular  from 'angular';

import Layout   from './Index';
import Home     from '../Home/Index';
import Contacts from '../Contacts/Index';
import Press    from '../Press/Index';
import About    from '../About/Index';
import Business from '../Business/Index';

/**
 * Define app module.
 * @param {String} moduleName.
 * @param {Array} dependencies.
 * @export Controllers module
 */
export default angular.module('Heloo.App.controllers', [
  Layout, Home, Contacts, Press, About, Business
]).name;
