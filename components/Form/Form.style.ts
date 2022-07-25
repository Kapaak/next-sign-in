import styled from "styled-components";

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
	width: 100%;
`;

export const ButtonContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
	margin-top: 6rem;
`;

export const ItemContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;
	margin-top: 6rem;
`;

//proc tohle neni v style/form ? Protoze ItemContainer a ButtonContainer .. atd
//muzou vzdy vypadat jinak -> jinaci rozestupy atd, ale formItemy jsou vzdy stejny
