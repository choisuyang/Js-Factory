const models = require("./models");

async function getProducts() {
  const proudct1 = await models.Products.findByPk(3);
  const proudct3 = await models.Products.findByPk(4);

  console.log(proudct1.dataValues);
  console.log(proudct3.dataValues);
}

getProducts();
