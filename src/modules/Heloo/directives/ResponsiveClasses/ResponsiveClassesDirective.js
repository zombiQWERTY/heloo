import angular                 from 'angular';

/**
 * Set responsive classes to .wrapper on resize for
 * declining media queries.
 * @module ResponsiveClasses
 * @param {Object} $window - window object.
 */
const ResponsiveClasses = ($window) => {
  "ngInject";

  /**
   * All values are in pixels.
   * 1. 0 - 640:    xsmall (mobile)
   */
  const breakpoints = {
    small: 640
  };

  const names = Object.keys(breakpoints);

  return {
    restrict: 'A',
    link(scope) {
      let width, breakpoint, conditions;

      const rules = event => {  /** Auto call on init */
        width = $window.innerWidth;

        conditions = {
          small:  width && width <= breakpoints.small
        };

        if (conditions.small) {
          breakpoint = names[0];  /** small */
          scope.breakpoint = `wrapper_${breakpoint}`;
        }

        if (!conditions.small) {
          scope.breakpoint = '';
        }

        if (event) {
          scope.$apply();
        }
      };

      rules();
      $window.addEventListener('resize', event => rules(event));  /** Set on every scroll */
    }
  };
};

/**
 * Define ResponsiveClasses module.
 * @param {String} moduleName.
 * @param {Array} dependencies.
 * @export Module name - name of this module of Simply app
 */
export default angular.module('Heloo.App.ResponsiveClasses', [])
  .directive('responsiveClasses', ResponsiveClasses).name;
