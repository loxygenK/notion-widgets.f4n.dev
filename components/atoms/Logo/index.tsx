import Image from "next/image";
import React from "react";

import { stylable, StylableFC } from "~/helper/stylable";

export const Logo: StylableFC = stylable(({ className }) => {
  return (
    <div className={`relative aspect-square ${className}`}>
      <Image src="/logo.svg" layout="fill" alt="logo image" />
    </div>
  );
});
