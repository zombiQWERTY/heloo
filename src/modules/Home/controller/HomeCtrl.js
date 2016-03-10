/**
 * @module Controller for page home of public section layout.
 * @class HomeController
 */
export default class HomeController {
  /**
   * @constructor
   * @param {object} $scope - Local (in this controller) application model.
   */
  constructor($scope) {
    "@ngInject";

    this.$scope = $scope;
  }
}
