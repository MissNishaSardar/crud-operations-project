import z from "zod";

export const formSchema = z.object({
	uImage: z.url("Invalid Image url"),
	uName: z.string().min(3, "Full Name must be more than 3 charecters long"),
	uBio: z.string().min(5, "Bio must be more than 5 charecters long"),
	uGender: z.string().min(4, "Gender must be more than 4 charecters long"),
	uEmail: z.email("Invalid Email address"),
	uPhoneNumber: z.string().length(10, "Invalid Phone Number"),
});
