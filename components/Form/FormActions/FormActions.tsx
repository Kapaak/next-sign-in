import Link from "next/link";

import * as S from "./FormActions.style";

const FormActions = () => {
	return (
		<S.Wrapper>
			<S.CheckBoxContainer>
				<input type="checkbox" name="checkbox" />
				<label htmlFor="checkbox">remember me</label>
			</S.CheckBoxContainer>
			<S.LinkContainer>
				<Link href="/forgot-password">
					<a>forgot password</a>
				</Link>
			</S.LinkContainer>
		</S.Wrapper>
	);
};

export default FormActions;
