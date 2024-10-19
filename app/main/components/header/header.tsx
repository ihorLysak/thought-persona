"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";

import { AppRoute } from "~/app/libs/enums/app-route.enum";
import { Button } from "~/app/components/components";

import styles from "./styles.module.css";
import { useCallback } from "react";
import { LocalStorageKey } from "~/app/libs/enums/local-storage-key.enum";

const Header: React.FC = () => {
  const handleLogOut = useCallback(() => {
    localStorage.removeItem(LocalStorageKey.token);
  }, []);

  return (
    <header className={styles["container"]}>
      <Link href={AppRoute.feed} className={styles["title"]}>
        FeedPersona
      </Link>
      <div className={styles["buttons-container"]}>
        <Link href={AppRoute.settings} className={styles["settings-btn"]}>
          settings
        </Link>

        <Button
          icon={<FontAwesomeIcon icon={faArrowRightFromBracket} />}
          color="white"
          hasShadow={true}
          onClick={handleLogOut}
        />
        <Link href={AppRoute.profile} className={styles["avatar"]}></Link>
      </div>
    </header>
  );
};

export { Header };
