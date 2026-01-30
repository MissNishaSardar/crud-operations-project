"use server";

import { FormSchemaType } from "@/lib/zodSchema";

const editUser = async (editUserData: FormSchemaType) => {
	console.log(editUserData);
};

export default editUser;
