/**
 * @module Config
 * @see Application
 * @param {Object} stateHelperProvider - Ui-router module for right nesting.
 * @param {Object} $urlRouterProvider - Configures how the application routing.
 * @param {Object} $locationProvider - Configures how the application deep linking paths are stored.
 * @param {Object} $logProvider - Configures how the application logs messages.
 */
const Config = (stateHelperProvider, $urlRouterProvider, $locationProvider, $logProvider) => {
  "ngInject";

  $logProvider.debugEnabled(true);  /** Turn debug mode on/off */
  $locationProvider.html5Mode(true);  /** Turn html5 mode on */
  $urlRouterProvider.otherwise('/');  /** If current route not in routes then redirect to home */

  /**
   * Url processing.
   * @param {Object} $injector - Ability to inject providers.
   * @param {Object} $location - Current location.
   */
  $urlRouterProvider.rule(($injector, $location) => {
    const path = $location.path();
    $location.path(path[path.length - 1] === '/' ? path.slice(0, -1) : path); /** If route like as /home/ then /home */
  });

  stateHelperProvider /** Describe our states */
    .state({
      url: '/',
      name: 'home',
      controller: 'HomeController',
      template: require('./modules/Home/views/home.jade')()
    })
    .state({
      url: '/press',
      name: 'press',
      controller: 'PressController',
      template: require('./modules/Press/views/press.jade')()
    })
    .state({
      url: '/about',
      name: 'about',
      controller: 'AboutController',
      template: require('./modules/About/views/about.jade')()
    })
    .state({
      url: '/business',
      name: 'business',
      controller: 'BusinessController',
      template: require('./modules/Business/views/business.jade')()
    })
    .state({
      url: '/contacts',
      name: 'contacts',
      controller: 'ContactsController',
      template: require('./modules/Contacts/views/contacts.jade')()
    });
};

/** Export our config */
export default Config;
