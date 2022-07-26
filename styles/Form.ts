import styled from "styled-components";

export const Headline = styled.h1`
	font-size: 5rem;
	color: var(--dark-blue);
`;

export const SubHeadline = styled.h2`
	font-size: 2rem;
	color: var(--light-blue);
	max-width: 50rem;
	text-align: center;
	font-weight: 400;
`;

export const Item = styled.div<{ error?: boolean }>`
	/* &:focus-within label {
		display: block;
	} */
	input {
		display: block;
		background-color: var(--light-grey);
		width: 100%;
		padding: 1.6rem 2rem;
		border-radius: 0.8rem;
		border: ${({ error }) =>
			error ? "1px solid var(--pink)" : "1px solid transparent"};

		&:focus {
			outline: 1px solid var(--dark-blue);
			border: 1px solid transparent;
		}
	}

	label {
		/* display: none; */
		color: var(--dark-blue);
		padding-left: 2rem;
	}
`;

export const ErrorMessage = styled.p`
	color: var(--red);
	font-size: 1.4rem;
`;

export const Wrapper = styled.div`
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
