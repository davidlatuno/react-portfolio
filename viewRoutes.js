module.exports = (server, app) => {
  // Fixes error where about page isnt rendered with extra forward slash
  server.get('/about/', (req, res) => {
    app.render(req, res, '/about');
  });

  // Renders about page no matter what is after
  server.get('/about/:page', (req, res) => {
    app.render(req, res, '/about');
  });

  // Fixes error where about page isnt rendered with extra forward slash
  server.get('/about', (req, res) => {
    app.render(req, res, '/about');
  });
};
