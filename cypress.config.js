module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
      //
    },
    env: {
      username: '',
      password: 'Aa123123', 
      baseUrl: { 
        ui: 'https://bookcart.azurewebsites.net/',
        apiCreate: 'https://bookcart.azurewebsites.net/api/User',
        apiLogin: 'https://bookcart.azurewebsites.net/api/Login',
      }
    }
  },
};
