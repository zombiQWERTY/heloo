import angular      from 'angular';
import FastClick    from 'Fastclick';

/**
 * Enable all third-party scripts
 * @module ThirdParties
 */
const ThirdParties = () => {
  return {
    restrict: 'A',
    link() {
      new FastClick(document.body);
    }
  };
};

/**
 * Define ThirdParties module.
 * @param {String} moduleName.
 * @param {Array} dependencies.
 * @export Module name - name of this module
 */
export default angular.module('Heloo.App.ThirdParties', []).directive('thirdParties', ThirdParties).name;
