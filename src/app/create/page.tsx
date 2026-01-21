import CreateForm from "@/components/Forms/CreateForm";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "@/components/shadcnui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Create | CRUD Project",
	description: "Create Form of CRUD Project",
};

const page = () => {
	return (
		<section className="grid h-[90dvh] place-items-center">
			<Card className="w-md">
				<CardHeader className="text-center text-2xl">
					<CardTitle>Create</CardTitle>
				</CardHeader>
				<CardContent>
					<CreateForm />
				</CardContent>
			</Card>
		</section>
	);
};

export default page;
