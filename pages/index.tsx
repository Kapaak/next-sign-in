import type { NextPage } from "next";
import { signIn, signOut, useSession } from "next-auth/react";

const Home: NextPage = () => {
	const { data: session } = useSession();
	return (
		<>
			<h1>logged user: {session?.user?.name || "unknown"}</h1>
			<button onClick={() => signIn("google")}>sign in</button>
			<button onClick={() => signOut()}>sign out</button>
			{/*//@ts-ignore */}
			<button onClick={() => console.log(session, "data")}>
				read data in session
			</button>
			{/*//@ts-ignore */}
			{session?.user.admin && <div>love you Bara </div>}
		</>
	);
};

export default Home;
