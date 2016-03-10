import Home from '../Index';

describe('Controller: Home', () => {
  let $scope, $controller, controller;

  beforeEach(angular.mock.module(Home));

  beforeEach(angular.mock.inject((_$controller_, _$rootScope_) => {
    $controller = _$controller_;
    $scope      = _$rootScope_.$new();

    controller  = $controller('HomeController', { $scope });
    $scope.$digest();
  }));

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should have scope', () => {
    expect(typeof controller.$scope).toBe('object');
  });
});
