import React from "react";

import "@/app/globals.css";

export default async function Rootlayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
