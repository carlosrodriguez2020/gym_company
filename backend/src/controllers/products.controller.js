import Product from "../models/product";

export const creatProduct = (req, res) => {
  res.json("producto Creado");
};
export const getProducts = (req, res) => {
  res.json("todos los productos");
};
export const getProductByid = (req, res) => {
  res.json("producto obtenido por ID");
};
export const upDateProductByid = (req, res) => {
  res.json("producto Actualizado por ID");
};
export const deleteProductByid = (req, res) => {
  res.json("producto Eliminado por ID");
};
