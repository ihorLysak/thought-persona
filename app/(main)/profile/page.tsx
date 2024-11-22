import React from "react";

export default function Profile() {
  return (
    <main className="flex grow px-10 pb-5 gap-5 h-full justify-center">
      <div className="flex flex-col grow gap-2 p-5 items-center max-w-72 h-96 bg-white rounded-3xl">
        <div className="w-40 h-40 bg-black rounded-full" />
        <div className="flex flex-col items-center">
          <span className="text-2xl font-bold">name surname</span>
          <span className="text-xl text-neutral-400">@userHandle</span>
        </div>
      </div>
      <div className="flex flex-col grow-[2] p-5 h-96 bg-white rounded-3xl">
        <span className="text-3xl font-bold">My thoughts</span>
      </div>
      <div className="flex grow"></div>
    </main>
  );
}
