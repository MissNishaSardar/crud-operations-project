"use client";

import deleteUser from "@/server/deleteUser";
import {
	LoaderIcon,
	MailIcon,
	PhoneCallIcon,
	Trash2Icon,
	UserPenIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { toast } from "react-toastify";
import { User } from "../../generated/prisma/client";
import { Button } from "./shadcnui/button";
import { Card, CardContent } from "./shadcnui/card";
import { Tooltip, TooltipContent, TooltipTrigger } from "./shadcnui/tooltip";

type ReadUserCardProps = {
	info: User;
};

const ReadUserCard = ({ info }: ReadUserCardProps) => {
	const { uImage, uName, uGender, uBio, uPhoneNumber, uEmail, uid } = info;

	const [isDeleting, setIsDeleting] = useState(false);

	const handelDelete = async () => {
		setIsDeleting(true);

		const { isSuccess, message } = await deleteUser(uid);

		if (isSuccess) {
			toast.success(message);
		} else {
			toast.error(message);
		}

		setIsDeleting(false);
	};

	return (
		<Card className="w-sm">
			<CardContent className="grid gap-2">
				<Image
					src={uImage}
					alt={`${uName}'s avater`}
					width={334}
					height={334}
					className="h-auto w-full rounded-sm"
				/>

				<div className="flex items-center gap-4">
					<span className="text-3xl font-semibold">
						{uName}{" "}
						<span className="bg-secondary rounded-full">
							{uGender === "male" ? "🧔🏻‍♂️" : "👩🏻"}
						</span>
					</span>
				</div>

				<div className="text-sm">{uBio}</div>

				<div className="grid grid-cols-4 gap-4">
					<Tooltip>
						<TooltipTrigger asChild>
							<Button
								size={"lg"}
								className="cursor-pointer"
								asChild>
								<a href={`tel:+91${uPhoneNumber}`}>
									<PhoneCallIcon />
								</a>
							</Button>
						</TooltipTrigger>
						<TooltipContent>{uPhoneNumber}</TooltipContent>
					</Tooltip>

					<Tooltip>
						<TooltipTrigger asChild>
							<Button
								size={"lg"}
								className="cursor-pointer">
								<Link href={`mailto:${uEmail}`}>
									<MailIcon />
								</Link>
							</Button>
						</TooltipTrigger>
						<TooltipContent>{uEmail}</TooltipContent>
					</Tooltip>

					<Tooltip>
						<TooltipTrigger asChild>
							<Button
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
								onClick={handelDelete}
								className="cursor-pointer"
								size={"lg"}
								variant={"destructive"}
								disabled={isDeleting}>
								{isDeleting ? (
									<>
										<LoaderIcon className="animate-spin" />
									</>
								) : (
									<>
										<Trash2Icon />
									</>
								)}
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
