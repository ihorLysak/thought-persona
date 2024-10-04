import { Button } from "~/app/components/components";
import Link from "next/link";

import styles from "./styles.module.css";

const SignIn: React.FC = () => {
  return (
    <main className={styles["container"]}>
      <form className={`white-box ${styles["form"]}`}>
        <h1>Sign in</h1>
        <p>
          Want to create a new account? <Link href="/sign-up">Sign Up</Link>
        </p>
        <div className={styles["input-wrapper"]}>
          <label htmlFor="username">Username</label>
          <input type="text" name="username" className="" />
        </div>
        <div className={styles["input-wrapper"]}>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" />
        </div>
        <Button label="sign in" />
      </form>
    </main>
  );
};

export default SignIn;
