import CreateForm from "@/components/Forms/CreateForm";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "@/components/shadcnui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Create | CRUD Operations Project",
	description: "Create page of CRUD Operations Project",
};

const page = () => {
	return (
		<section className="grid h-[90dvh] place-items-center">
			<Card className="w-xs">
				<CardHeader className="text-center text-2xl">
					<CardTitle>Register</CardTitle>
				</CardHeader>
				<CardContent>
					<CreateForm />
				</CardContent>
			</Card>
		</section>
	);
};

export default page;
