import Image from "next/image";
import { Button } from "./shadcnui/button";
import { Card, CardContent, CardFooter, CardHeader } from "./shadcnui/card";
import { Label } from "./shadcnui/label";

const ReadUserCard = () => {
	return (
		<section className="grid h-[90dvh] place-items-center">
			<Card className="w-xs">
				<CardHeader className="text-center text-2xl">
					<div className="grid place-items-center justify-center">
						<Image
							src={"https://picsum.photos/200"}
							alt=""
							width={200}
							height={200}
						/>
					</div>
				</CardHeader>

				<CardContent>
					<div className="grid gap-2">
						<div className="">User Name</div>
						<Label className="text-xl">User Email</Label>
						<Label className="text-xl">User Gender</Label>
						<Label className="text-xl">Mobile Number</Label>
						<Label className="text-xl">Bio</Label>
					</div>
				</CardContent>

				<CardFooter className="grid grid-cols-2 gap-4">
					<Button
						type="submit"
						className="cursor-pointer">
						Edit
					</Button>

					<Button
						type="submit"
						className="cursor-pointer">
						Submit
					</Button>
				</CardFooter>
			</Card>
		</section>
	);
};

export default ReadUserCard;
