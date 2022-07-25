import Image from "next/image";
import styled from "styled-components";

interface Props {
	children: React.ReactNode;
	imageSrc: string;
	alt: string;
}

const ImageDivider = ({ imageSrc, alt, children }: Props) => {
	return (
		<Divider>
			<ImageWrapper>
				<Image
					src={imageSrc}
					layout="fill"
					objectFit="cover"
					placeholder="blur"
					blurDataURL={imageSrc}
					alt={alt}
				/>
			</ImageWrapper>
			{children}
		</Divider>
	);
};

export default ImageDivider;

const Divider = styled.div`
	display: flex;
	height: 100%;
`;

const ImageWrapper = styled.div`
	position: relative;
	flex: 1 1 35%;
	background: rgb(230, 98, 173);
	background: linear-gradient(
		180deg,
		rgba(230, 98, 173, 1) 0%,
		rgba(49, 56, 115, 1) 100%
	);

	img {
		opacity: 0.5;
	}
`;
