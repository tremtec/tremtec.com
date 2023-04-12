// @refresh reload
import { Suspense } from "solid-js";
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
      <Title>TremTec</Title>
      <Meta charset="utf-8" />
      <Meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
  );
}

function NavBar() {
  return (
    <nav>
      <Container class="flex flex-row justify-between items-center py-4">
        <div class="flex">
          <A href="/" class="flex">
            <div class="flex items-center gap-2">
              <Logo size="sm" />
              <h3 class="font-medium">TremTec</h3>
            </div>
          </A>
        </div>

        <div>
          <ButtonLink to="#contact">Join US</ButtonLink>
        </div>
      </Container>
    </nav>
  );
}
