import React from "react";
import { Button } from "@/components";
import Link from "next/link";

import { AppRoute } from "@/libs/enums";

export default function SignIn() {
  return (
    <div className="flex items-center justify-center h-full">
      <form className="flex flex-col gap-4 bg-white p-5 rounded-lg shadow-2xl">
        <h1 className="text-3xl">Sign In</h1>
        <span>
          do not have an account?{" "}
          <Link
            className="text-pink-400 hover:underline"
            href={AppRoute.SIGN_UP}
          >
            Sign Up
          </Link>
        </span>
        <div className="flex flex-col">
          <label className="text-lg" htmlFor="email">
            Email:
          </label>
          <input
            className="border-2 p-1 border-slate-600 rounded-md"
            type="email"
            name="email"
            id="email"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-lg" htmlFor="password">
            Password:
          </label>
          <input
            className="border-2 p-1 border-slate-600 rounded-md"
            type="password"
            name="password"
            id="password"
          />
        </div>
        <Button label="sign in" />
      </form>
    </div>
  );
}
