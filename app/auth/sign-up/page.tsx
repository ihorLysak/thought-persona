"use client";

import { ChangeEvent, useCallback, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { Button } from "~/app/components/components";
import { LocalStorageKey, AppRoute } from "~/app/libs/enums/enums";
import { createUser } from "~/app/libs/server-actions/actions";

import styles from "./styles.module.css";

const SignUp: React.FC = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleUsernameChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setUsername(event.target.value);
    },
    []
  );

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

  const handleRegisterFormSubmit = useCallback(async () => {
    const response = await createUser({ username, email, password });

    localStorage.setItem(LocalStorageKey.token, response?.payload as string);

    router.push(AppRoute.feed);
  }, [username, email, password, router]);

  return (
    <main className={styles["container"]}>
      <form
        action={handleRegisterFormSubmit}
        className={`white-box ${styles["form"]}`}
      >
        <h1>Sign Up</h1>
        <p>
          already have an account? <Link href={AppRoute.signIn}>Sign In</Link>
        </p>
        <div className={styles["input-wrapper"]}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            onChange={handleUsernameChange}
            required
          />
        </div>
        <div className={styles["input-wrapper"]}>
          <label htmlFor="email">Email</label>
          <input
            type="text"
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

export default SignUp;
