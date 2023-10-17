import { Component, ParentProps } from "solid-js";
import { A } from "solid-start";
import { siteTexts } from "~/settings";
import { Logo } from "./icons";

export type ChildrenProps = ParentProps;

export interface ContainerProps extends ChildrenProps {
  class?: string;
}

export interface ButtonProps extends ContainerProps {
  to?: string;
  target?: string;
}

export const Container: Component<ContainerProps> = (props) => {
  return (
    <div class={`max-w-4xl px-8 mx-auto ${props.class ?? ""}`}>
      {props.children}
    </div>
  );
};

export function ButtonLink(props: ButtonProps) {
  return (
    <A
      class={`btn btn-outline ${props.class}`}
      href={props.to ?? "#"}
      target={props.target}
    >
      {props.children}
    </A>
  );
}

export function NotFound(props: ChildrenProps) {
  return (
    <div class="text-center my-[15vh] text-gray-100 items-center justify-center flex flex-col gap-4">
      <h1 class="text-9xl font-extrabold text-white tracking-widest">404</h1>
      <h2 class="bg-yellow-600 px-2 text-sm rounded rotate-12 absolute">
        Page Not Found
      </h2>
      {props.children}
    </div>
  );
}

type TremTecLogoProps = {
  hideOnSmall: boolean;
};
export function TremTecLogo(props: TremTecLogoProps) {
  return (
    <A href="/" class="flex">
      <div class="flex items-center gap-2" title="TremTec">
        <Logo size="sm" />
        <h3 class={`font-medium ${props.hideOnSmall && "hidden sm:block"}`}>
          {siteTexts.companyName}
        </h3>
      </div>
    </A>
  );
}
