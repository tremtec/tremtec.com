import { getContent, RenderContent } from "@builder.io/sdk-solid";
import { createEffect, createSignal } from "solid-js";
import { config } from "~/settings";

const { VITE_BUILDER_API_KEY: VITE_BUILDER_API_KEY } = config;

export const setupBuilderIO = () => {
  const [content, setContent] = createSignal(null);

  createEffect(() => {
    getContent({
      model: "page",
      apiKey: VITE_BUILDER_API_KEY,
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
    <RenderContent model="page" apiKey={VITE_BUILDER_API_KEY} {...props} />
  );
};
