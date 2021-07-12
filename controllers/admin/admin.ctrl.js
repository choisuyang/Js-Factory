const models = require("../../models");

exports.get_products = async (_, res) => {
  // res.render("admin/products.html", { message: "hello" });
  const products = await models.Products.findAll();
  try {
    res.render("admin/products.html", { products: products });
  } catch (error) {
    console.log("error", error);
  }
};

exports.get_products_write = (_, res) => {
  res.render("admin/write.html");
};

exports.post_products_write = async (req, res) => {
  await models.Products.create(req.body);
  res.redirect("/admin/products");
};

exports.get_products_detail = async (req, res) => {
  // req.params.id
  const product = await models.Products.findByPk(req.params.id);
  res.render("admin/detail.html", { product: product });
};

exports.get_products_edit = async (req, res) => {
  // req.params.id
  const product = await models.Products.findByPk(req.params.id);
  res.render("admin/write.html", { product: product });
};

exports.post_products_edit = async (req, res) => {
  await models.Products.update(
    {
      name: req.body.name,
      price: req.body.price,
      description: req.body.description,
    },
    {
      where: { id: req.params.id },
    }
  );
  res.redirect("/admin/products/detail/" + req.params.id);
};

exports.get_products_delete = async (req, res) => {
  await models.Products.destroy({
    where: { id: req.params.id },
  });
  res.redirect("/admin/products");
};
