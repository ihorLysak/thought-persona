import { Button } from "~/app/components/components";
import Link from "next/link";

import styles from "./styles.module.css";

const SignUp: React.FC = () => {
  return (
    <main className={styles["container"]}>
      <form className={`white-box ${styles["form"]}`}>
        <h1>Sign in</h1>
        <p>
          already have an account? <Link href="/sign-in">Sign In</Link>
        </p>
        <div className={styles["input-wrapper"]}>
          <label htmlFor="username">Username</label>
          <input type="text" name="username" required />
        </div>
        <div className={styles["input-wrapper"]}>
          <label htmlFor="email">Email</label>
          <input type="text" name="email" required />
        </div>
        <div className={styles["input-wrapper"]}>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" required />
        </div>
        <div className={styles["input-wrapper"]}>
          <label htmlFor="repeat-password">Repeat Password</label>
          <input type="password" name="repeat-password" required />
        </div>
        <Button label="sign in" />
      </form>
    </main>
  );
};

export default SignUp;
