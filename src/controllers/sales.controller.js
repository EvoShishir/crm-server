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

export const getAllSales = async (req, res, next) => {
  try {
    const salesData = await Sale.find();
    if (!salesData) {
      return res.status(404).send("No sales data found");
    }
    res.status(200).send({
      success: true,
      salesData,
    });
  } catch (error) {
    next(error);
  }
};

export const updateSale = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { date, customer, serviceType, amount } = req.body;
    const updatedSale = await Sale.findByIdAndUpdate(
      id,
      {
        date: date,
        customer: customer,
        serviceType: serviceType,
        amount: amount,
      },
      { new: true, runValidators: true }
    );
    if (!updateSale) {
      return res.status(404).send("Sale not found");
    }
    res.status(200).send({
      success: true,
      updatedSale,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteSaleData = async (req, res, next) => {
  try {
    const { id } = req.params;
    const sale = await Sale.findByIdAndDelete(id);
    if (!sale) {
      return res.status(404).send("Sale not found");
    }
    res.status(200).send({
      success: true,
      message: "Deleted",
      sale,
    });
  } catch (error) {
    next(error);
  }
};
