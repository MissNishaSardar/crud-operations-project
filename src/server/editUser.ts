"use server";

import prisma from "@/lib/database/dbClient";
import { FormSchemaType } from "@/lib/zodSchema";
import { revalidatePath } from "next/cache";
import { PrismaClientKnownRequestError } from "../../generated/prisma/internal/prismaNamespace";

const editUser = async (editUserData: FormSchemaType, userId: string) => {
	try {
		await prisma.user.update({
			where: {
				uid: userId,
			},
			data: editUserData,
		});

		revalidatePath("/");

		return {
			isSuccess: true,
			message: "🤩 Attempet Successfull",
		};
	} catch (error) {
		if (error instanceof PrismaClientKnownRequestError) {
			return {
				isSuccess: false,
				message: error.message,
			};
		}

		return {
			isSuccess: false,
			message: "Something went wrong! Please try again 👍🏻",
		};
	}
};

export default editUser;
