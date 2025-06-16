import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email("กรุณาใส่อีเมลให้ถูกต้อง"),
  password: z.string().min(5, "รหัสผ่านต้องอย่างน้อย 5 ตัว"),
});

export const signupSchema = z.object({
  email: z.string().email("อีเมลไม่ถูกต้อง"),
  password: z.string().min(5, "รหัสผ่านสั้นเกินไป"),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "รหัสผ่านไม่ตรงกัน",
  path: ["confirmPassword"],
});