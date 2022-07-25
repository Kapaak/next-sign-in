import Link from "next/link";
//styles
import * as Form from "@/styles/Form";
import * as FormComponent from "../../Form/Form";

const SignUpForm = () => {
	return (
		<Form.Wrapper>
			<Form.FlexContainer>
				<Form.Headline>I welcome you user!</Form.Headline>
				<Form.SubHeadline>
					Your journey can start here and now!
				</Form.SubHeadline>

				<FormComponent.Register />
			</Form.FlexContainer>
			<Form.FooterContainer>
				Already have an account?{" "}
				<Link href="/sign-in">
					<a>Sign in</a>
				</Link>
			</Form.FooterContainer>
		</Form.Wrapper>
	);
};

export default SignUpForm;
