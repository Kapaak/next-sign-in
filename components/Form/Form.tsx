import Image from "next/image";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
//components
import FormActions from "./FormActions/FormActions";
//styles
import * as S from "./Form.style";
import * as Form from "@/styles/Form";
import * as Button from "@/styles/Button";
import { useState } from "react";

type Inputs = {
	email: string;
	password: string;
};

export const Login = () => {
	const revealPasswordIcon = "/icons/eye-open.svg";
	const hidePasswordIcon = "/icons/eye-closed.svg";

	const [toggle, setToggle] = useState(false);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Inputs>();

	const onSubmit: SubmitHandler<Inputs> = data => {
		console.log(data, "data");
		console.log(errors, "errors");
	};

	return (
		<S.Form onSubmit={handleSubmit(onSubmit)}>
			<S.ItemContainer>
				<Form.Item>
					<label htmlFor="email">email</label>
					<input
						type="email"
						placeholder="enter your email"
						{...register("email", { required: true })}
					/>
				</Form.Item>
				<Form.Item>
					<label htmlFor="password">password</label>
					<div style={{ position: "relative" }}>
						<input
							type={toggle ? "text" : "password"}
							placeholder="password"
							{...register("password", { required: true })}
						/>
						<S.VisibilityToggle onClick={() => setToggle(prev => !prev)}>
							<Image
								src={toggle ? hidePasswordIcon : revealPasswordIcon}
								width={20}
								height={20}
								alt="eye open"
							/>
						</S.VisibilityToggle>
					</div>
				</Form.Item>
			</S.ItemContainer>
			<FormActions />
			<S.ButtonContainer>
				<Button.Submit type="submit">login</Button.Submit>
				<Button.Google>
					<Image
						src="/icons/google.svg"
						width={20}
						height={20}
						alt="google icon"
					/>
					sign in with Google
				</Button.Google>
			</S.ButtonContainer>
		</S.Form>
	);
};

interface RegInputs extends Inputs {
	passwordConfirm: string;
	name: string;
}

export const Register = () => {
	const formSchema = Yup.object().shape({
		name: Yup.string().required("User name cant be blank"), //tady tohle by mohlo prochazet databazi, jestli uz neexistuje stejny jmeno ... to stejny s emailem (to se ale mozna muze handlovat az pri submitu)
		email: Yup.string()
			.required("Email cant be blank")
			.matches(
				/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
				"Email must have correct format"
			),
		password: Yup.string()
			.required("Password is mandatory")
			.min(3, "Password must be atleast 3 chars long"),
		passwordConfirm: Yup.string()
			.required("Password is mandatory")
			.oneOf([Yup.ref("password")], "Passwords does not match"),
	});

	const formOptions = { resolver: yupResolver(formSchema) };
	const { register, handleSubmit, reset, formState } =
		useForm<RegInputs>(formOptions);
	const { errors } = formState;

	const onSubmit: SubmitHandler<RegInputs> = data => {
		console.log(data, "data");
		console.log(errors, "errors");
	};

	return (
		<S.Form onSubmit={handleSubmit(onSubmit)}>
			<S.ItemContainer>
				<Form.Item error={!!errors.name?.message}>
					<label htmlFor="name">user name</label>
					<input type="text" {...register("name")} />
					<Form.ErrorMessage>{errors.name?.message}</Form.ErrorMessage>
				</Form.Item>
				<Form.Item error={!!errors.email?.message}>
					<label htmlFor="email">registration email</label>
					<input type="text" {...register("email")} />
					<Form.ErrorMessage>{errors.email?.message}</Form.ErrorMessage>
				</Form.Item>
				<Form.Item error={!!errors.password?.message}>
					<label htmlFor="password">enter your password</label>
					<input type="password" {...register("password")} />
					<Form.ErrorMessage>{errors.password?.message}</Form.ErrorMessage>
				</Form.Item>
				<Form.Item error={!!errors.passwordConfirm?.message}>
					<label htmlFor="passwordConfirm">confirm your password</label>
					<input type="password" {...register("passwordConfirm")} />
					<Form.ErrorMessage>
						{errors.passwordConfirm?.message}
					</Form.ErrorMessage>
				</Form.Item>
			</S.ItemContainer>
			<S.ButtonContainer>
				<Button.Submit>create account</Button.Submit>
			</S.ButtonContainer>
		</S.Form>
	);
};
