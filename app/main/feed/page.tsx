import styles from "./styles.module.css";

import {
  FollowingCard,
  ThemesCard,
  ThoughtsFeed,
  NewThought,
} from "./components/components";

const Feed = () => {
  return (
    <main className={styles["container"]}>
      <FollowingCard />
      <div className={styles["feed-roll"]}>
        <NewThought />
        <ThoughtsFeed />
      </div>
      <ThemesCard />
    </main>
  );
};

export default Feed;
