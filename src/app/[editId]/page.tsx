import EditForm from "@/components/Forms/EditForm";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "@/components/shadcnui/card";
import prisma from "@/lib/database/dbClient";
import { Metadata } from "next";

type EditPageProps = {
	params: Promise<{ editId: string }>;
};

export const metadata: Metadata = {
	title: "Edit | CRUD Project",
	description: "Edit form of CRUD Project",
};

const page = async ({ params }: EditPageProps) => {
	const { editId } = await params;

	const user = await prisma.user.findUniqueOrThrow({
		where: {
			uid: editId,
		},
	});

	return (
		<section className="grid h-[90dvh] place-items-center">
			<Card className="w-md">
				<CardHeader className="text-center text-2xl">
					<CardTitle>Edit</CardTitle>
				</CardHeader>
				<CardContent>
					<EditForm editUData={user} />
				</CardContent>
			</Card>
		</section>
	);
};

export default page;
