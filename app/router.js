import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('recipes');

  this.route('base', function() {
    this.route('ingredients');
  });
  this.route('results');
});

export default Router;
