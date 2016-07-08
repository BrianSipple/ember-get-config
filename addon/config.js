export default {
  "modulePrefix": "foo-app",
  "environment": "development",
  "rootURL": "/",
  "locationType": "auto",
  "EmberENV": {
    "FEATURES": {}
  },
  "APP": {
    "LOG_TRANSITIONS": true,
    "name": "fooApp",
    "version": "0.0.0+bcbf0427"
  },
  "ember-simple-auth": {
    "authenticationRoute": "login",
    "guestRoute": "homepage",
    "routeAfterAuthentication": "protected.dashboard",
    "routeIfAlreadyAuthenticated": "protected.notebooks"
  },
  "ember-cli-mirage": {
    "enabled": true,
    "usingProxy": false,
    "useDefaultPassthroughs": true
  },
  "ember-a11y-testing": {
    "componentOptions": {}
  },
  "exportApplicationGlobal": true
}
