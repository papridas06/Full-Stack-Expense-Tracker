const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 80,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: Number,
      maxlength: 25,
      minlength: 6,
      required: true,
    },
  },
  { timestamps: true }, //Automatically adds createdAt and updatedAt dates to each user document.
);

module.exports = mongoose.model("User", userSchema);

//mongoose.model("User", userSchema) creates a Mongoose model from your schema.
// module.exports makes that model available to other files, such as authRoutes.js.
