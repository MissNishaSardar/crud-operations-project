import ReadUserCard from "@/components/ReadUserCard";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Home | CRUD Project",
	description: "Home page of CRUD Project",
};

const page = () => {
	return (
		<section className="grid h-[90dvh] place-items-center">
			<ReadUserCard />
		</section>
	);
};

export default page;
