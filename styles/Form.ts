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

export const Item = styled.div`
	input {
		display: block;
		background-color: var(--light-grey);
		border: none;
		width: 100%;
		padding: 1.6rem 2rem;
		border-radius: 0.8rem;
	}
`;
