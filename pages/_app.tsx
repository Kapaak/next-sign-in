import type { AppProps } from "next/app";
import { GlobalStyle } from "../styles/Global";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
	return (
		<SessionProvider session={session}>
			<GlobalStyle />
			<Component {...pageProps} />
		</SessionProvider>
	);
}

export default MyApp;
