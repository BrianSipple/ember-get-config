export default {
  "modulePrefix": "real-chat",
  "environment": "development",
  "baseURL": "/",
  "locationType": "auto",
  "EmberENV": {
    "FEATURES": {}
  },
  "APP": {
    "LOG_TRANSITIONS": true,
    "name": "real-chat",
    "version": "0.0.0+a9a1f6b7",
    "autoboot": false
  },
  "apis": {
    "realChat": {
      "HOST": "http://localhost:4000",
      "NAMESPACE": "api/v1"
    }
  },
  "SERVER_PORT": 4000,
  "flashMessageDefaults": {
    "timeout": 5000,
    "extendedTimeout": 375
  },
  "ember-a11y-testing": {
    "componentOptions": {}
  },
  "ember-simple-auth": {
    "authenticationRoute": "auth.login",
    "routeIfAlreadyAuthenticated": "app.index",
    "routeAfterAuthentication": "app.index"
  },
  "exportApplicationGlobal": true
}