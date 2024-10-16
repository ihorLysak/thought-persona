"use client";

import { useState, useCallback, ChangeEvent } from "react";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { Button } from "~/app/components/components";
import { LocalStorageKey, AppRoute } from "~/app/libs/enums/enums";
import { signIn } from "~/app/libs/server-actions/actions";

import styles from "./styles.module.css";

const SignIn: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleEmailChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setEmail(event.target.value);
    },
    []
  );

  const handlePasswordChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setPassword(event.target.value);
    },
    []
  );

  const handleSignInFormSubmit = useCallback(async () => {
    const response = await signIn({ email, password });

    localStorage.setItem(LocalStorageKey.token, response?.payload as string);

    router.push(AppRoute.feed);
  }, [email, password, router]);

  return (
    <main className={styles["container"]}>
      <form
        action={handleSignInFormSubmit}
        className={`white-box ${styles["form"]}`}
      >
        <h1>Sign in</h1>
        <p>
          Want to create a new account?{" "}
          <Link href={AppRoute.signUp}>Sign Up</Link>
        </p>
        <div className={styles["input-wrapper"]}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className={styles["input-wrapper"]}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            onChange={handlePasswordChange}
            required
          />
        </div>
        <Button label="sign in" />
      </form>
    </main>
  );
};

export default SignIn;
