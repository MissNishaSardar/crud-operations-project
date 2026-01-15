import Image from "next/image";
import { Button } from "./shadcnui/button";
import { Card, CardContent, CardFooter, CardHeader } from "./shadcnui/card";
import { Label } from "./shadcnui/label";
import { BookUserIcon, MailCheckIcon, PhoneCallIcon } from "lucide-react";

const ReadUserCard = () => {
	return (
		<section className="grid h-[90dvh] place-items-center">
			<Card className="w-xs">
				<CardHeader className="text-center">
					<div className="grid place-items-center justify-center gap-2">
						<Image
							src={"https://picsum.photos/200"}
							alt=""
							width={200}
							height={200}
							className="rounded-2xl"
						/>
						<h3 className="text-4xl font-semibold">User Fullname</h3>

						<div className="flex gap-2">
							<MailCheckIcon /> username@gmail.com
						</div>
					</div>
				</CardHeader>

				<CardContent className="grid gap-2">
					<div className="gap-2">
						<Label className="text-xl">
							<BookUserIcon /> Bio
						</Label>
						<p className="text-sm">
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam,
							repudiandae!
						</p>
					</div>
					<div className="">User Gender</div>
					<div className="flex gap-2">
						<PhoneCallIcon /> 9876543210
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
						className="cursor-pointer"
						variant={"destructive"}>
						Delete
					</Button>
				</CardFooter>
			</Card>
		</section>
	);
};

export default ReadUserCard;
