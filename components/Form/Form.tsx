//components
import FormActions from "./FormActions/FormActions";
//styles
import * as S from "./Form.style";
import * as Form from "@/styles/Form";
import * as Button from "@/styles/Button";

export const Register = () => (
	<S.Form>
		<S.ItemContainer>
			<Form.Item>
				<label htmlFor="email">email</label>
				<input type="email" name="email" placeholder="enter your email" />
			</Form.Item>
			<Form.Item>
				<label htmlFor="password">password</label>
				<input type="password" name="password" placeholder="password" />
			</Form.Item>
		</S.ItemContainer>
		<FormActions />
		<S.ButtonContainer>
			<Button.Submit type="submit">login</Button.Submit>
			<Button.Google>
				{/* <Image src="..cesta ke google icone"/> */}
				sign in with Google
			</Button.Google>
		</S.ButtonContainer>
	</S.Form>
);

// export const LogIn = () =>() // a tady udelam sing in form
