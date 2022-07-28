import Product from "../models/product";

export const creatProduct = async (req, res) => {
  console.log(req.body);
  const { name, category, price, imgUrl } = req.body;
  console.log(name);
  const newProduct = new Product({ name, category, price, imgUrl });
  const productSaved = await newProduct.save();
  res.json(productSaved);
};

export const getProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};

export const getProductByid = async (req, res) => {
  const product = await Product.findById(req.params.productId);
  res.json(product);
};
export const updateProductByid = async (req, res) => {
  const upDateProduct = await Product.findByIdAndUpdate(
    req.params.productId,
    req.body,
    { new: true }
  );
  console.log(upDateProduct);
  res.json(upDateProduct);
};
export const deleteProductByid = async (req, res) => {
  const { productId } = req.params;
  await Product.findByIdAndDelete(productId);
  res.json("producto Eliminado por ID");
};
