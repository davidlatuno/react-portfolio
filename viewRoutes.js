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

  // Fixes error where contact page isnt rendered with extra forward slash
  server.get('/contact/', (req, res) => {
    app.render(req, res, '/contact');
  });

  // Renders contact page no matter what is after
  server.get('/contact/:page', (req, res) => {
    app.render(req, res, '/contact');
  });

  // Fixes error where contact page isnt rendered with extra forward slash
  server.get('/contact', (req, res) => {
    app.render(req, res, '/contact');
  });
};
