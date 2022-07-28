import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
//@ts-ignore
import clientPromise from "lib/mongodb";
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
	adapter: MongoDBAdapter(clientPromise),
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID || "",
			clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
		}),
	],
	session: {
		//@ts-ignore
		jwt: true,
	},
	callbacks: {
		// async jwt({ token, user }) {
		// 	console.log(user, "user");

		// 	return { ...token, ...user };
		// },
		//@ts-ignore
		session: async ({ session, user }) => {
			// session.user.admin; //to make admin data available
			// console.log(user, "userinho");
			// console.log(session, "sassyon");

			if (session.user) {
				//@ts-ignore
				session.user.admin = user.admin;
			}

			return session;
		},
	},
	events: {
		createUser: async ({ user }) => {
			//@ts-ignore
			const client = await clientPromise;
			const users = client.db().collection("users");

			//initialize admin permisions to created users
			users.updateOne(
				{
					//@ts-ignore
					email: user.email,
				},
				{
					$set: {
						admin: false,
					},
				}
			);
		},
	},
});
