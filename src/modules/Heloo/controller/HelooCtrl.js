/**
 * @module Root controller
 * @class AppController
 */
export default class HelooController {
  /**
   * @constructor Bootstrap app.
   * @param {object} $scope - Local (in this controller) application model.
   */
  constructor($scope) {
    "@ngInject";

    this.$scope = $scope;
  }
}
