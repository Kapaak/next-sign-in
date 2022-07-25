import Link from "next/link";
//components
import * as FormComponent from "../../Form/Form";
//styles
import * as Form from "@/styles/Form";

const SignInForm = () => {
	return (
		<Form.Wrapper>
			<Form.FlexContainer>
				<Form.Headline>Good to see you again!</Form.Headline>
				<Form.SubHeadline>
					It takes only few seconds to experience something insane !
				</Form.SubHeadline>

				<FormComponent.Login />
			</Form.FlexContainer>
			<Form.FooterContainer>
				Don't have an account yet?{" "}
				<Link href="/sign-up">
					<a>Sign up</a>
				</Link>
			</Form.FooterContainer>
		</Form.Wrapper>
	);
};

export default SignInForm;
