import type { Component } from "solid-js";
import { Title } from "solid-start";
import { ButtonLink, NotFound } from "~/components/shared";

export const Page404: Component = () => {
  return (
    <>
      <Title>TremTec - Not found</Title>

      <NotFound>
        <ButtonLink to="/" class="border-yellow-600 text-yellow-600">
          Go Home
        </ButtonLink>
      </NotFound>
    </>
  );
};

export default Page404;

