import Heloo from '../Index';

describe('Controller: Heloo', () => {
  let $scope, $controller, controller;

  beforeEach(angular.mock.module(Heloo));

  beforeEach(angular.mock.inject((_$controller_, _$rootScope_) => {
    $controller = _$controller_;
    $scope      = _$rootScope_.$new();

    controller  = $controller('HelooController', { $scope });
    $scope.$digest();
  }));

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should have scope', () => {
    expect(typeof controller.$scope).toBe('object');
  });
});
