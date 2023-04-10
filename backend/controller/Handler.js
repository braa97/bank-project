import  Transaction from '../models/Transaction.js'

export const getTransactions = async (req, res) => {
  let data = await Transaction.find({});
  res.send(data);
};

export const getBreakDown = async (req, res) => {
  let data = await Transaction.aggregate([
    { $group: { _id: "$category", total: { $sum: "$amount" } } },
  ]);
  res.send(data);
};

export const getBalance = async (req, res) => {
  let data = await Transaction.aggregate([
    { $group: { _id: "balance", total: { $sum: "$amount" } } },
  ]);
  res.send(data);
};

export const createNewTransaction = async (req, res) => {
  let amount = req.body.amount;
  let vendor = req.body.vendor;
  let category = req.body.category;
  let newTransaction = new Transaction({ amount, vendor, category });
  let data = await newTransaction.save();
  res.status(201).send(data);
};

export const deleteTransaction = async(req, res) => {
  let transActionId = req.params.transActionId
  let response = await Transaction.findByIdAndDelete(transActionId)
  res.status(204).send(response)
}