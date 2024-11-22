"use client";

import React from "react";

interface Properties {
  label: string;
  onClick?: () => void;
}

function Button({ label, onClick }: Properties) {
  return (
    <button
      className="transition bg-black border-2 py-1 px-5 border-black text-white text-lg rounded-3xl hover:bg-white hover:text-black"
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export { Button };
