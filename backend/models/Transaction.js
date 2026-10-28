const mongoose = required("mongoose");

const transactionSchema = new mongoose.transactionSchema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId, //this field stores a MongoDB document's unique ID.
      ref: "User",
      required: true, //ref: "User": indicates that the ID refers to your User model.
      index: true, //index: true: creates a database index on this field to help MongoDB find a user's transactions efficiently.
    },
    title: {
      type: String,
      required: true,
      trim: true,
      maxlength: 120,
    },
    amount: {
      type: Number,
      required: true,
      min: 0.01,
    },
    type: {
      type: String,
      enum: ["income", "expense"],
      required: true,
    },
    category: {
      type: String,
      required: true,
      trim: true,
    },
    date: {
      type: Date,
      default: Date.now, //default: Date.now: automatically sets the current date and time if you don't provide a date.
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Transaction", transactionSchema);
