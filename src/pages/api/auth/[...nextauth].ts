import NextAuth, { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import login from "@/pages/auth/login/api/login";
import { BASE_URL } from "@/utils/constants";

export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "jsmith@gmail.com",
        },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials: any, req) {
        const { email, password } = credentials;

        if (!email || !password) return null;
        // Add logic here to look up the user from the credentials supplied
        try {
          const response = await login(email, password);
          console.log(response);
          return response;
        } catch (e) {
          console.error(e);
          return e;
        }
      },
    }),
    // ...add more providers here
  ],
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },

    async session({ session, token, user }) {
      session.user = token as any;
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,

  pages: {
    signIn: "/signin",
  },
  session: {
    strategy: "jwt",
  },
};

export default NextAuth(authOptions);
