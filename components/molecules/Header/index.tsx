import React from "react";

import { Logo } from "~/components/atoms/Logo";

export const Header = () => {
  return (
    <header className="flex w-full items-center gap-3 bg-primary-thin px-6 py-4">
      <Logo className="h-8" />
      <span>
        <span className="text-xl font-bold text-primary-base">
          notion-widgets
        </span>
        <span className="text-primary-soft">.f4n.dev.</span>
      </span>
    </header>
  );
};
