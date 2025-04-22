"use client";

import React from 'react';

export function Button({ children, onClick }: { children: React.ReactNode; onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className="bg-black text-white px-4 py-2 rounded-xl hover:opacity-80 transition"
    >
      {children}
    </button>
  );
}
