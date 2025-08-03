// schema/loginSchema.js
import * as zod from "zod";

export const loginSchema = zod.object({
  email: zod.email().nonempty("This field is required"),

  password: zod.string().nonempty("This field is required"),
});
