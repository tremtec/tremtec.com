import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import Nav from "~/components/Nav";
import "./app.css";
import { MetaProvider } from "@solidjs/meta";

export default function App() {
  return (
    <MetaProvider>
      <Router
        root={(props) => (
          <>
            <Nav />
            <Suspense>{props.children}</Suspense>

            <footer class="bg-blue-800 text-white w-full p-24">
              <div class="container mx-auto flex flex-col items-center">
                <p class="text-lg mb-4">
                  Contact us:{" "}
                  <a href="mailto:contact@tremtec.com" class="hover:underline">
                    contact@tremtec.com
                  </a>
                </p>
                <div class="flex space-x-4">
                  <a
                    href="https://twitter.com/tremtec"
                    target="_blank"
                    rel="noreferrer"
                    class="hover:underline"
                  >
                    Twitter
                  </a>
                  <a
                    href="https://facebook.com/tremtec"
                    target="_blank"
                    rel="noreferrer"
                    class="hover:underline"
                  >
                    Facebook
                  </a>
                  <a
                    href="https://linkedin.com/company/tremtec"
                    target="_blank"
                    rel="noreferrer"
                    class="hover:underline"
                  >
                    LinkedIn
                  </a>
                </div>
                <p class="mt-4 text-sm">© 2025 Tremtec. All rights reserved.</p>
              </div>
            </footer>
          </>
        )}
      >
        <FileRoutes />
      </Router>
    </MetaProvider>
  );
}
