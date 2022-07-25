import Link from "next/link";
//components
import * as Form from "../../Form/Form";
//styles
import * as S from "./SignInForm.style";
import * as SForm from "../../../styles/Form";

const SignInForm = () => {
	return (
		<S.SignInWrapper>
			<S.FlexContainer>
				<SForm.Headline>Good to see you again!</SForm.Headline>
				<SForm.SubHeadline>
					It takes only few seconds to experience something insane !
				</SForm.SubHeadline>

				<Form.Register />
			</S.FlexContainer>
			<S.FooterContainer>
				Don't have an account yet?{" "}
				<Link href="/sign-up">
					<a>Sign up</a>
				</Link>
			</S.FooterContainer>
		</S.SignInWrapper>
	);
};

export default SignInForm;
