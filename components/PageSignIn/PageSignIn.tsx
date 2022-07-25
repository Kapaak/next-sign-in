import * as S from "./PageSignIn.style";
//components
import SignInForm from "./SignInForm/SignInForm";
import ImageDivider from "components/ImageDivider";

const PageSignIn = () => {
	const imageSrc = "/images/sign-in-bg.jpg";
	const imageAlt = "sign in background";

	return (
		<S.Wrapper>
			<ImageDivider alt={imageAlt} imageSrc={imageSrc}>
				<SignInForm />
			</ImageDivider>
		</S.Wrapper>
	);
};

export default PageSignIn;
