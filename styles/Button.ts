import styled, { css } from "styled-components";

const ButtonMixin = css`
	display: inline-block;
	width: 100%;
	border: none;
	font-family: "Titillium Web", sans-serif;
	padding: 1.6rem 2rem;
	border-radius: 0.6rem;
	cursor: pointer;
	font-size: 1.6rem;

	transition: all 0.5s ease;

	&:hover {
		transition: all 0.5s ease;
	}
`;

export const Submit = styled.button`
	${ButtonMixin}

	background-color: var(--dark-blue);
	color: var(--white);

	&:hover {
		background-color: var(--hover-dark-blue);
	}
`;

export const Google = styled.button`
	${ButtonMixin}
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 1rem;

	border: 1px solid var(--light-blue);
	background-color: var(--white);
	color: var(--black);

	&:hover {
		background-color: var(--hover-light-grey);
	}
`;
