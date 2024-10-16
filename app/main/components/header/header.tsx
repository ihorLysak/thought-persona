import Link from "next/link";

import { AppRoute } from "~/app/libs/enums/app-route.enum";

import styles from "./styles.module.css";

const Header: React.FC = () => {
  return (
    <header className={styles["container"]}>
      <Link href={AppRoute.feed} className={styles["title"]}>
        FeedPersona
      </Link>
      <div className={styles["buttons-container"]}>
        <Link href={AppRoute.settings} className={styles["settings-btn"]}>
          settings
        </Link>
        <Link href={AppRoute.profile} className={styles["avatar"]}></Link>
      </div>
    </header>
  );
};

export { Header };
