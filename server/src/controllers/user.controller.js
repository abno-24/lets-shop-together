import { asyncHandler } from "../utils/helpers/asyncHandler.js";
import { ApiResponse } from "../utils/api/ApiResponse.js";
import { userRegisterService } from "../services/user.service.js";

const userRegister = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const user = await userRegisterService(name, email, password);

  console.log(userRegisterService(name, email, password));

  return res
    .status(201)
    .json(new ApiResponse(201, user, "User registered successfully"));
});

const userLogin = asyncHandler(async (req, res) => {});

export { userRegister, userLogin };
