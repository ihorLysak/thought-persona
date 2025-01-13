import React from "react";

import "@/app/globals.css";

export default async function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="min-h-full h-full" lang="en">
      <body className="flex flex-col  h-full bg-gradient-to-b from-[#FFB2DF] to-[#FF67C0]">
        {children}
      </body>
    </html>
  );
}
