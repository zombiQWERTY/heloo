import angular      from 'angular';

/**
 * Sticky header
 * @module ThirdParties
 */
const Sticky = ($window) => {
  "ngInject";

  return {
    restrict: 'A',
    link(scope, $element) {
      let offset;

      const $headerReplace = document.getElementsByClassName('header_replace')[0];
      document.addEventListener('scroll', () => {
        offset = $window.pageYOffset;
        if ($window.pageYOffset) {
          $element[0].classList.add('header_fixed');
          $headerReplace.style.display = 'block';
        }

        if (!offset) {
          $element[0].classList.remove('header_fixed');
          $headerReplace.style.display = 'none';
        }
      });
    }
  };
};

/**
 * Define Sticky module.
 * @param {String} moduleName.
 * @param {Array} dependencies.
 * @export Module name - name of this module
 */
export default angular.module('Heloo.App.Sticky', []).directive('sticky', Sticky).name;
