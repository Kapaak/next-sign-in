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
`;

export const Submit = styled.button`
	${ButtonMixin}

	background-color: var(--dark-blue);
	color: var(--white);
`;

export const Google = styled.button`
	${ButtonMixin}

	border: 1px solid var(--light-blue);
	background-color: var(--white);
	color: var(--black);
`;
