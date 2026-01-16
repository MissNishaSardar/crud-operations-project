import ReadUserCard from "@/components/ReadUserCard";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Home | CRUD Project",
	description: "Home page of CRUD Project",
};

const page = () => {
	return (
		<section className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
			<ReadUserCard />
			<ReadUserCard />
			<ReadUserCard />
		</section>
	);
};

export default page;
