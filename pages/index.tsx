import type { NextPage } from "next";

import { Wrapper } from "~/components/template/Wrapper";

const Home: NextPage = () => {
  return (
    <Wrapper>
      <div className="text-green-800">✨ It&apos;s working!</div>
    </Wrapper>
  );
};

export default Home;
