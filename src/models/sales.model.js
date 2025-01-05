import mongoose from "mongoose";

const salesSchema = new mongoose.Schema(
  {
    date: {
      type: Date,
      required: true,
    },
    customer: {
      type: String,
      required: true,
    },
    serviceType: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export const Sale = mongoose.model("Sale", salesSchema);
