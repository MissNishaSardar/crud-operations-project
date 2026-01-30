"use client";

import { formSchema, FormSchemaType } from "@/lib/zodSchema";
import editUser from "@/server/editUser";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoaderIcon, UserPenIcon } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
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
import { Textarea } from "../shadcnui/textarea";

const EditForm = () => {
	const {
		handleSubmit,
		control,
		formState: { isSubmitting },
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

	const handleEditForm = async (editUserData: FormSchemaType) => {
		await new Promise((r) => setTimeout(r, 1500));
		editUser(editUserData);
	};

	return (
		<form
			className="grid gap-4"
			onSubmit={handleSubmit(handleEditForm)}
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
						<LoaderIcon className="animate-spin" /> Editing
					</>
				) : (
					<>
						<UserPenIcon /> Edit
					</>
				)}
			</Button>
		</form>
	);
};

export default EditForm;
