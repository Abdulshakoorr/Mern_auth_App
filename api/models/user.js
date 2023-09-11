import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: function (value) {
          // Custom email validation using regular expression
          return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(value);
        },
        message: "Invalid email format",
      },
    },
    password: {
      type: String,
      required: true,
      validate: {
        validator: function (value) {
          // Custom password validation function
          // You can implement your own password validation logic here
          // Example: Require at least 8 characters and at least one uppercase letter and one digit
          return /^(?=.*[A-Z])(?=.*\d).{8,}$/.test(value);
        },
        message:
          "Password does not meet the required criteria. Require at least 8 characters and at least one uppercase letter and one digit",
      },
    },
  },
  { timestamps: true }
);

// hashing password long method

// userSchema.pre("save", async function (next) {
//   try {
//     if (this.isModified("password")) {
//       // Hash the password
//       const salt = await bcrypt.genSalt(10); // Generate a salt
//       const hashedPassword = await bcrypt.hash(this.password, salt);
//       this.password = hashedPassword;
//     }
//     next();
//   } catch (error) {
//     next(error);
//   }
// });

export const userModel = mongoose.model("User", userSchema);
