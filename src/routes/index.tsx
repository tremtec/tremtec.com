import { BuilderPageContent, setupBuilderIO } from "~/services/builder-io";

export default function Home() {
  const { content } = setupBuilderIO();
  return <>{content() && <BuilderPageContent content={content()} />}</>;
}
