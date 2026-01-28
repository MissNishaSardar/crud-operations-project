"use server";

import { FormSchemaType } from "@/lib/zodSchema";

const createUser = async (userData: FormSchemaType) => {
	console.log(userData);
};

export default createUser;
