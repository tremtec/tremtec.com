// @refresh reload
import { For, Suspense } from "solid-js";
import {
  A,
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Meta,
  Routes,
  Scripts,
  Title,
} from "solid-start";
import { Logo } from "./components/icons";
import { ButtonLink, Container } from "./components/shared";
import "./root.css";
import { siteTexts } from "./settings";
import { navLinks } from "./shared/settings";

export default function Root() {
  const theme = "dark";
  return (
    <Html lang="en" class={theme}>
      <Metadata />

      <Body class="dark:bg-indigo-900 dark:text-gray-200">
        <Suspense>
          <ErrorBoundary>
            <NavBar />
            <Routes>
              <FileRoutes />
            </Routes>
          </ErrorBoundary>
        </Suspense>
        <Scripts />
      </Body>
    </Html>
  );
}

function Metadata() {
  return (
    <Head>
      <Title>{siteTexts.meta.title}</Title>
      <Meta charset="utf-8" />
      <Meta name="viewport" content="width=device-width, initial-scale=1" />
      <Meta name="description" content={siteTexts.meta.description} />
    </Head>
  );
}

function NavBar() {
  return (
    <nav>
      <Container class="flex flex-row justify-between items-center py-8">
        <div class="flex gap-4 items-center">
          <A href="/" class="flex">
            <div class="flex items-center gap-2">
              <Logo size="sm" />
              <h3 class="font-medium">{siteTexts.companyName}</h3>
            </div>
          </A>

          <For each={navLinks}>
            {(link) => (
              <A
                href={link.href}
                target={link.target}
                class="font-thin text-gray-300 px-2 border border-transparent rounded hover:border-gray-300"
              >
                {link.text}
              </A>
            )}
          </For>
        </div>

        <div>
          <ButtonLink to={siteTexts.links.contact}>
            {siteTexts.ctaPrimaryBtn}
          </ButtonLink>
        </div>
      </Container>
    </nav>
  );
}
