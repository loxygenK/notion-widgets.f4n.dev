import Head from "next/head";
import React from "react";

import { Header } from "~/components/molecules/Header";

type Props = {
  children: React.ReactNode;
};
export const Wrapper: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="p-12">{children}</main>
    </>
  );
};
