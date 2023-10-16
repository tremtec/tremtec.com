import { getContent, RenderContent } from "@builder.io/sdk-solid";
import { createEffect, createSignal } from "solid-js";
import { config } from "~/settings";

const { BUILDER_PUBLIC_API_KEY } = config;

export const setupBuilderIO = () => {
  const [content, setContent] = createSignal(null);

  createEffect(() => {
    getContent({
      model: "page",
      apiKey: BUILDER_PUBLIC_API_KEY,
      userAttributes: {
        urlPath: window.location.pathname,
      },
    }).then((content) => {
      setContent(content);
    });
  });

  return { content };
};

export const BuilderPageContent: typeof RenderContent = (props) => {
  return (
    <RenderContent model="page" apiKey={BUILDER_PUBLIC_API_KEY} {...props} />
  );
};
