describe('Directive: ResponsiveClasses', () => {
  beforeEach(() => {
    browser.get('/home');
  });

  it('should add class wrapper_desktop on desktop', () => {
    expect(element(by.css('.wrapper_desktop')).isPresent()).toEqual(true);
  });

  it('should not add class wrapper_mobile on desktop', () => {
    expect(element(by.css('.wrapper_mobile')).isPresent()).toEqual(false);
  });

  it('should add class wrapper_medium on load (default) (desktop)', () => {
    expect(element(by.css('.wrapper_medium')).isPresent()).toEqual(true);
  });

  it('should add class wrapper_large on 1350 - ∞ range (desktop)', () => {
    const height = 1000;

    browser.driver.manage().window().setSize(1350, height);
    const on1350 = element(by.css('.wrapper_large')).isPresent();

    browser.driver.manage().window().setSize(2000, height);
    const on2000 = element(by.css('.wrapper_large')).isPresent();

    expect(on1350 && on2000).toEqual(true);
  });

  it('should add class wrapper_medium on 992 - 1349 range (desktop)', () => {
    const height = 1000;

    browser.driver.manage().window().setSize(992, height);
    const on992 = element(by.css('.wrapper_medium')).isPresent();

    browser.driver.manage().window().setSize(1100, height);
    const on1100 = element(by.css('.wrapper_medium')).isPresent();

    browser.driver.manage().window().setSize(1349, height);
    const on1349 = element(by.css('.wrapper_medium')).isPresent();

    expect(on992 && on1100 && on1349).toEqual(true);
  });

  it('shouldnt add class wrapper_xsmall on (desktop)', () => {
    expect(element(by.css('.wrapper_xsmall')).isPresent()).toEqual(false);
  });

  it('shouldnt add class wrapper_small on (desktop)', () => {
    expect(element(by.css('.wrapper_small')).isPresent()).toEqual(false);
  });
});
