import { Schema, model } from "mongoose";

function validateEmail(email) {
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  return emailRegex.test(email);
}

const schema = new Schema({
  fullname: { type: String, required: true },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: [validateEmail, "Invalid email format"],
  },
  password: { type: String, required: true },
});

export default model("user", schema);
