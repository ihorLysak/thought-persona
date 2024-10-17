import styles from "./styles.module.css";

import {
  FollowingCard,
  ThemesCard,
  ThoughtsFeed,
} from "./components/components";

const Feed = () => {
  return (
    <main className={styles["container"]}>
      <FollowingCard />
      <div className={styles["feed-roll"]}>
        <div className="white-box">
          <h1>New Thought</h1>
        </div>
        <ThoughtsFeed />
      </div>
      <ThemesCard />
    </main>
  );
};

export default Feed;
