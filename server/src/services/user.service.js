import { ApiError } from "../utils/api/ApiError.js";
import { User } from "../models/user.model.js";
import validator from "validator";
import { handleError } from "../utils/api/HandleError.js";

const userRegisterService = async (name, email, password) => {
  try {
    const existUser = await User.findOne({ email });

    if (existUser) {
      throw new ApiError(400, "User already exist");
    }

    if (!validator.isEmail(email)) {
      throw new ApiError(409, "Please enter a valid email address");
    }

    if (password.length < 8) {
      throw new ApiError(
        409,
        "Password is too short. It must be at least 8 characters"
      );
    }

    const newUser = await User.create({
      name,
      email,
      password,
    });

    const createdUser = await User.findById(newUser._id).select("-password");
    if (!createdUser) throw new ApiError(500, "User not found");

    return createdUser;
  } catch (error) {
    handleError(error);
  }
};

export { userRegisterService };
