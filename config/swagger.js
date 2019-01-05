'use strict'

module.exports = {
  /*
  |--------------------------------------------------------------------------
  | Swagger Information
  | Please use Swagger 2 Spesification Docs
  | https://swagger.io/docs/specification/2-0/basic-structure/
  |--------------------------------------------------------------------------
  */

  // enable or disable route '/swagger.json'
  enable: true,

  title: 'App Swagger',
  version: '1.0.0',
  basePath: '/',

  // security definition config
  securityDefinitions: {
    ApiKey: {
      description: 'ApiKey description',
      name: 'Authorization'
    },

    // OAuth2 configuration
    OAuth2: {
      authorizationUrl: 'https://example.com/oauth/authorize',
      tokenUrl: 'https://example.com/oauth/token',

      // define your scopes here
      // remove read, write and admin if not necessary
      scopes: {
        read: 'Grants read access (this is just sample)',
        write: 'Grants write access (this is just sample)',
        admin: 'Grants read and write access to administrative information (this is just sample)'
      }
    },
  },

  apis: [
    'docs/swagger/**/*.yml'
  ]
}
