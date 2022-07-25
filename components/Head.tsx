//libs
import Head from "next/head";

const HeadSelector = () => {
	return (
		<Head>
			<title>Pavel Zapletal | portfolio</title>
			<link rel="preconnect" href="https://fonts.gstatic.com" />
			<link rel="preconnect" href="https://fonts.googleapis.com" />
			<link
				rel="preconnect"
				href="https://fonts.gstatic.com"
				crossOrigin="true"
			/>
			<link
				href="https://fonts.googleapis.com/css2?family=Titillium+Web:wght@300;400;700&display=swap"
				rel="stylesheet"
			/>
			<meta name="author" content="Pavel Zapletal" />
			<meta
				name="keywords"
				content="Pavel Zapletal, React.js, Next.js, web portfolio"
			/>
			<meta
				name="description"
				content="Hi, my name is Pavel Zapletal and this is my portfolio website. I am a website creator, designer and programmer :)."
			/>
			<meta
				name="google-site-verification"
				content="iHmb0qA_zuGADAzjuGNQhiGb4wx8Y-YK5MYeKgxurqY"
			/>
		</Head>
	);
};

export default HeadSelector;
