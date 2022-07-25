import Image from "next/image";
import { SubmitHandler, useForm } from "react-hook-form";
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

export const Register = () => {
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

export const Login = () => {
	return (
		<S.Form>
			<S.ItemContainer>
				<Form.Item>
					<label htmlFor="reg-name">user name</label>
					<input type="text" name="reg-name" />
				</Form.Item>
				<Form.Item>
					<label htmlFor="reg-email">registration email</label>
					<input type="email" name="reg-email" />
				</Form.Item>
				<Form.Item>
					<label htmlFor="reg-password">enter your password</label>
					<input type="password" name="reg-password" />
				</Form.Item>
				<Form.Item>
					<label htmlFor="reg-password-confirm">confirm your password</label>
					<input type="password" name="reg-password-confirm" />
				</Form.Item>
			</S.ItemContainer>
			<S.ButtonContainer>
				<Button.Submit>create account</Button.Submit>
			</S.ButtonContainer>
		</S.Form>
	);
};
