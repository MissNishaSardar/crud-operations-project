"use server";

import prisma from "@/lib/database/dbClient";
import { revalidatePath } from "next/cache";
import { PrismaClientKnownRequestError } from "../../generated/prisma/internal/prismaNamespace";

const deleteUser = async (userId: string) => {
	try {
		await prisma.user.delete({
			where: {
				uid: userId,
			},
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

export default deleteUser;
