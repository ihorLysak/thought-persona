import { Header } from "./components/components";

import styles from "./styles.module.css";

export const metadata = {
  title: "ThoughtPersona",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={styles["container"]} lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
