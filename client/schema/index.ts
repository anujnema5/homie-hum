import { z } from "zod";


export const phoneNumberSchema = z.object({
    phoneNumber: z.string()
        .min(2, { message: "Phone number must be at least 2 characters." })
})
    .transform(data => {
        const formattedPhoneNumber = data.phoneNumber.slice(3);
        return {
            phoneNumber: formattedPhoneNumber
        };
    });

export const otpSchema = z.object({
    phoneNumber: z.string(),
    otp: z.string().min(6, { message: "Can't be less then 6" }).max(6, { message: "Can't be less than 6" })
})

export const editprofileSchema = z.object({
    firstName: z.string().optional(),
    lastName: z.string().optional(),
    username: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }).optional(),
    phoneNumber: z.string().optional(),
    dateOfBirth: z.date().optional()
})

export type editprofileSchemaType = z.infer<typeof editprofileSchema>;