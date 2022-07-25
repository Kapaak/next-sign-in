import Image from "next/image";
import { SubmitHandler, useForm } from "react-hook-form";
//components
import FormActions from "./FormActions/FormActions";
//styles
import * as S from "./Form.style";
import * as Form from "@/styles/Form";
import * as Button from "@/styles/Button";

type Inputs = {
	email: string;
	password: string;
};

export const Register = () => {
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
					<input
						type="password"
						placeholder="password"
						{...register("password", { required: true })}
					/>
				</Form.Item>
			</S.ItemContainer>
			<FormActions />
			<S.ButtonContainer>
				<Button.Submit type="submit">login</Button.Submit>
				<Button.Google>
					<Image src="/icons/google.svg" width={20} height={20} />
					sign in with Google
				</Button.Google>
			</S.ButtonContainer>
		</S.Form>
	);
};

// export const LogIn = () =>() // a tady udelam sing in form
