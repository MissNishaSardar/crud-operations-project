"use client";

import { formSchema, FormSchemaType } from "@/lib/zodSchema";
import createUser from "@/server/createUser";
import { faker } from "@faker-js/faker/locale/en_IN";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoaderIcon, SparklesIcon, UserRoundPlusIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Button } from "../shadcnui/button";
import { Field, FieldError, FieldLabel } from "../shadcnui/field";
import { Input } from "../shadcnui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "../shadcnui/select";
import { Separator } from "../shadcnui/separator";
import { Textarea } from "../shadcnui/textarea";

const CreateForm = () => {
	const { push } = useRouter();

	const {
		handleSubmit,
		control,
		formState: { isSubmitting },
		reset,
		setValue,
		getValues,
	} = useForm({
		resolver: zodResolver(formSchema),
		defaultValues: {
			uImage: "",
			uName: "",
			uEmail: "",
			uGender: "",
			uBio: "",
			uPhoneNumber: "",
		},
		mode: "all",
	});

	const handleCreateForm = async (userData: FormSchemaType) => {
		const { isSuccess, message } = await createUser(userData);

		await new Promise((r) => setTimeout(r, 1500));

		if (isSuccess) {
			toast.success(message);
			reset();
			push("/");
		} else {
			toast.error(message);
		}
	};

	const generateDetails = () => {
		const { person, internet, phone, image } = faker;
		const current = getValues();

		const uGender = person.sexType();

		const uFirstname = person.firstName(uGender);

		const uLastname = person.lastName(uGender);

		const uFullName = `${uFirstname} ${uLastname}`;

		const uEmail = internet
			.email({
				firstName: uFirstname,
				lastName: uLastname,
			})
			.toLowerCase();

		const uBio = person.bio();

		const uPhoneNumber = phone
			.number({ style: "international" })
			.replace(/\D/g, "")
			.slice(-10);

		const uImage = image.url({ height: 334, width: 334 });

		if (!current.uName) {
			setValue("uName", uFullName);
		}

		if (!current.uEmail) {
			setValue("uEmail", uEmail);
		}

		if (!current.uGender) {
			setValue("uGender", uGender);
		}

		if (!current.uBio) {
			setValue("uBio", uBio);
		}
		if (!current.uPhoneNumber) {
			setValue("uPhoneNumber", uPhoneNumber);
		}
		if (!current.uImage) {
			setValue("uImage", uImage);
		}
	};

	return (
		<form
			className="grid gap-4"
			onSubmit={handleSubmit(handleCreateForm)}
			noValidate>
			<Controller
				name="uName"
				control={control}
				render={({ field, fieldState }) => (
					<Field data-invalid={fieldState.invalid}>
						<FieldLabel htmlFor={field.name}>Name</FieldLabel>
						<Input
							{...field}
							id={field.name}
							type="text"
							aria-invalid={fieldState.invalid}
							placeholder="Enter your full name"
							autoComplete="name"
						/>
						{fieldState.invalid && <FieldError errors={[fieldState.error]} />}
					</Field>
				)}
			/>

			<Controller
				name="uEmail"
				control={control}
				render={({ field, fieldState }) => (
					<Field data-invalid={fieldState.invalid}>
						<FieldLabel htmlFor={field.name}>Email</FieldLabel>
						<Input
							{...field}
							id={field.name}
							type="email"
							aria-invalid={fieldState.invalid}
							placeholder="Enter your email address"
							autoComplete="email"
						/>
						{fieldState.invalid && <FieldError errors={[fieldState.error]} />}
					</Field>
				)}
			/>

			<div className="grid grid-cols-2 gap-4">
				<Controller
					name="uImage"
					control={control}
					render={({ field, fieldState }) => (
						<Field data-invalid={fieldState.invalid}>
							<FieldLabel htmlFor={field.name}>User Image</FieldLabel>
							<Input
								{...field}
								id={field.name}
								type="url"
								aria-invalid={fieldState.invalid}
								placeholder="Image url"
								autoComplete=""
							/>
							{fieldState.invalid && <FieldError errors={[fieldState.error]} />}
						</Field>
					)}
				/>
				<Controller
					name="uGender"
					control={control}
					render={({ field, fieldState }) => (
						<Field data-invalid={fieldState.invalid}>
							<FieldLabel htmlFor={field.name}>Gender</FieldLabel>
							<Select
								name={field.name}
								value={field.value}
								onValueChange={field.onChange}>
								<SelectTrigger
									className="w-full"
									aria-invalid={fieldState.invalid}>
									<SelectValue placeholder="Gender" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="male">Male</SelectItem>
									<SelectItem value="female">Female</SelectItem>
								</SelectContent>
							</Select>
							{fieldState.invalid && <FieldError errors={[fieldState.error]} />}
						</Field>
					)}
				/>
			</div>

			<Controller
				name="uPhoneNumber"
				control={control}
				render={({ field, fieldState }) => (
					<Field data-invalid={fieldState.invalid}>
						<FieldLabel htmlFor={field.name}>Mobile Number</FieldLabel>
						<Input
							{...field}
							type="tel"
							id={field.name}
							aria-invalid={fieldState.invalid}
							placeholder="Enter your mobile number"
							autoComplete="mobile tel"
						/>
						{fieldState.invalid && <FieldError errors={[fieldState.error]} />}
					</Field>
				)}
			/>

			<Controller
				name="uBio"
				control={control}
				render={({ field, fieldState }) => (
					<Field data-invalid={fieldState.invalid}>
						<FieldLabel htmlFor={field.name}>Bio</FieldLabel>
						<Textarea
							{...field}
							id={field.name}
							aria-invalid={fieldState.invalid}
							placeholder="About you"
							autoComplete=""
						/>
						{fieldState.invalid && <FieldError errors={[fieldState.error]} />}
					</Field>
				)}
			/>

			<Button
				type="submit"
				className="cursor-pointer"
				disabled={isSubmitting}>
				{isSubmitting ? (
					<>
						<LoaderIcon className="animate-spin" /> Submitting
					</>
				) : (
					<>
						<UserRoundPlusIcon />
						Submit
					</>
				)}
			</Button>

			<Separator />

			<Button
				type="button"
				onClick={generateDetails}
				variant={"outline"}
				className="cursor-pointer">
				<SparklesIcon /> Generate
			</Button>
		</form>
	);
};

export default CreateForm;
