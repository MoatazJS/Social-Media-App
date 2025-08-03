import * as zod from "zod";

export const scheme = zod
  .object({
    name: zod
      .string()
      .nonempty("This Field is required")
      .min(3, "This field must be atleast 3 characters long")
      .max(20, "This field cannot exceed 20 characters"),

    email: zod
      .string()
      .nonempty("This Field is required")
      .email("Invalid email address"),

    password: zod
      .string()
      .nonempty("This Field is required")
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&_-])[A-Za-z\d@$!%*?&_-]{8,}$/,
        "Password must be at least 8 characters and include a capital letter, a lowercase letter, a number, and a special character."
      ),
    rePassword: zod.string().nonempty("This Field is required"),
    dateOfBirth: zod.coerce.date().refine(
      (date) => {
        const birthDate = date.getFullYear();
        const now = new Date().getFullYear();
        const age = now - birthDate;
        return age >= 18;
      },
      { message: "You must be atleast 18 years old" }
    ),
    gender: zod
      .string()
      .nonempty("This Field is required")
      .regex(/^(male|female)$/),
  })
  .refine((data) => data.password === data.rePassword, {
    message: "Password doesn't match.",
    path: ["rePassword"],
  });
