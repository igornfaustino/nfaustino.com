import { NextPage } from "next";

import { Title } from "../src/components/atoms/Title";
import BaseLayout from "../layouts/BaseLayout";

const NotFound: NextPage = function () {
  return (
    <BaseLayout>
      <Title>404</Title>
    </BaseLayout>
  );
};

export default NotFound;
