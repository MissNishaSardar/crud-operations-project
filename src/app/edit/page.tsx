import EditForm from "@/components/Forms/EditForm";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "@/components/shadcnui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Edit | CRUD Project",
	description: "Edit form of CRUD Project",
};

const page = () => {
	return (
		<section className="grid h-[90dvh] place-items-center">
			<Card className="w-xs">
				<CardHeader className="text-center text-2xl">
					<CardTitle>Edit</CardTitle>
				</CardHeader>
				<CardContent>
					<EditForm />
				</CardContent>
			</Card>
		</section>
	);
};

export default page;
