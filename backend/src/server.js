const app = require('./app');
const { port } = require('./config/env');

app.listen(port, () => {
  console.log(`🍔 food-app API running on http://localhost:${port}`);
});
