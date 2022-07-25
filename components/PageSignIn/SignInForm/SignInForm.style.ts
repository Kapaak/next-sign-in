import styled from "styled-components";

export const SignInWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	//ten dont have acc yet bude met mensi flex:1 1 40% .. value nez to nad tim

	padding: 2rem 4rem 2rem 4rem;
	flex: 1 1 65%;
`;

export const FlexContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 50rem;
	margin: 0 auto;
	gap: 2rem;
`;

export const FooterContainer = styled.div`
	position: absolute;
	bottom: 0;
	padding: 2rem 0;
	/* left: 50%; //not necessary, but to know how to do this --- :) , also put posi relative on nearest parent :)
    transform: translateX(-50%); */
	a {
		text-decoration: none;
		color: var(--pink);
		font-weight: 600;
	}
`;
