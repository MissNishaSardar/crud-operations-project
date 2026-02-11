import ReadUserCard from "@/components/ReadUserCard";
import { Card, CardContent } from "@/components/shadcnui/card";
import prisma from "@/lib/database/dbClient";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Home | CRUD Project",
	description: "Home page of CRUD Project",
};

const page = async () => {
	const allUsers = await prisma.user.findMany();

	if (allUsers.length === 0) {
		return (
			<section className="grid h-[90dvh] place-items-center">
				<Card>
					<CardContent className="px-10 py-5 text-5xl">
						No user found 💀
					</CardContent>
				</Card>
			</section>
		);
	}

	return (
		<section className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
			{allUsers.map((item) => (
				<ReadUserCard
					key={item.uid}
					info={item}
				/>
			))}
		</section>
	);
};

export default page;
