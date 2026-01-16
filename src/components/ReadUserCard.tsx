import { MailIcon, PhoneCallIcon, Trash2Icon, UserPenIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./shadcnui/button";
import { Card, CardContent } from "./shadcnui/card";
import { Tooltip, TooltipContent, TooltipTrigger } from "./shadcnui/tooltip";

const ReadUserCard = () => {
	return (
		<Card className="w-sm">
			<CardContent className="grid gap-2">
				<Image
					src={"https://picsum.photos/334"}
					alt=""
					width={334}
					height={334}
					className="h-auto w-full rounded-sm"
				/>

				<div className="flex items-center gap-4">
					<span className="text-3xl font-semibold">
						User Fullname <span className="bg-secondary rounded-full">👩🏻</span>
					</span>
				</div>

				<div className="text-sm">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit.
				</div>

				<div className="grid grid-cols-4 gap-4">
					<Tooltip>
						<TooltipTrigger asChild>
							<Button
								size={"lg"}
								className="cursor-pointer"
								asChild>
								<Link href={`tel:+919876543210`}>
									<PhoneCallIcon />
								</Link>
							</Button>
						</TooltipTrigger>
						<TooltipContent>9876543210</TooltipContent>
					</Tooltip>

					<Tooltip>
						<TooltipTrigger asChild>
							<Button
								size={"lg"}
								className="cursor-pointer">
								<Link href={`mailto:username@gmail.com`}>
									<MailIcon />
								</Link>
							</Button>
						</TooltipTrigger>
						<TooltipContent>username@gmail.com</TooltipContent>
					</Tooltip>

					<Tooltip>
						<TooltipTrigger asChild>
							<Button
								asChild
								size={"lg"}
								className="cursor-pointer">
								<Link href={"/edit"}>
									<UserPenIcon />
								</Link>
							</Button>
						</TooltipTrigger>
						<TooltipContent>Edit</TooltipContent>
					</Tooltip>

					<Tooltip>
						<TooltipTrigger asChild>
							<Button
								className="cursor-pointer"
								size={"lg"}
								variant={"destructive"}>
								<Trash2Icon />
							</Button>
						</TooltipTrigger>
						<TooltipContent>Delete</TooltipContent>
					</Tooltip>
				</div>
			</CardContent>
		</Card>
	);
};

export default ReadUserCard;
