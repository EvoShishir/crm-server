import { Sale } from "../models/sales.model.js";

export const newSale = async (req, res, next) => {
  try {
    const { date, customer, serviceType, amount } = req.body;
    const newSale = new Sale({
      date,
      customer,
      serviceType,
      amount,
    });
    const sale = await newSale.save();
    res.status(200).json({
      success: true,
      sale,
    });
  } catch (error) {
    next(error);
  }
};

export const getSale = async (req, res, next) => {
  try {
    const salesData = await Sale.find();
    if (!salesData) {
      return res.status(404).send("No data found");
    }
    res.status(200).send({
      success: true,
      salesData,
    });
  } catch (error) {
    next(error);
  }
};
