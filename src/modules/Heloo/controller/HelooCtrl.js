import smoothScroll from 'smooth-scroll';

/**
 * @module Root controller
 * @class AppController
 */
export default class HelooController {
  /**
   * @constructor Bootstrap app.
   */
  constructor($scope, $location) {
    "ngInject";

    this.scrollToAbout = () => {
      smoothScroll.animateScroll('#aboutHeloo');
    };

    this.getClass = '';

    let locationPath;
    $scope.$on('$stateChangeStart', () => {
      locationPath = $location.path();
      this.getClass = path => {
        if (locationPath.substr(0, path.length) === path) {
          if (path === '/' && locationPath === '/') {
            return 'active';
          }

          if (path === '/') {
            return '';
          }

          return 'active';
        } else {
          return '';
        }
      };
    });
  }
}
