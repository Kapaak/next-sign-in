import ImageDivider from "components/ImageDivider";

import * as S from "./PageSignUp.style";
import SignUpForm from "./SignUpForm/SignUpForm";

const PageSignUp = () => {
	const imageSrc = "/images/sign-up-bg.jpg";
	const imageAlt = "sign up background";

	return (
		<S.Wrapper>
			<ImageDivider alt={imageAlt} imageSrc={imageSrc}>
				<SignUpForm />
			</ImageDivider>
		</S.Wrapper>
	);
};

export default PageSignUp;
