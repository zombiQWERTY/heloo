import ResponsiveClasses from './ResponsiveClassesDirective';

describe('Directive: ResponsiveClasses', () => {
  let $compile, $rootScope;

  beforeEach(angular.mock.module(ResponsiveClasses));

  beforeEach(inject((_$compile_, _$rootScope_) => {
    $compile   = _$compile_;
    $rootScope = _$rootScope_;
  }));

  it('should be defined', () => {
    expect($compile).toBeDefined();
  });
});
