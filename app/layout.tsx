export const metadata = {
  title: "ThoughtPersona",
};
import "./globals.css";
import "./variables.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
