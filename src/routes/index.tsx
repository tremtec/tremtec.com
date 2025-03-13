import { Title } from "@solidjs/meta";
import { A } from "@solidjs/router";
import Logo from "~/components/Logo";

export default function Home() {
  return (
    <>
      <Title>🚅 TremTec - Home</Title>

      <main class="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 gap-12">
        <Logo />

        <h1 class="text-5xl font-bold text-blue-600">Welcome to Tremtec</h1>
        <p class="text-lg text-gray-700 text-center max-w-2xl">
          At Tremtec, we are revolutionizing the world through open-source
          software. Join us on our journey to innovate and create impactful
          solutions for a better tomorrow.
        </p>
        <a
          href="https://github.com/tremtec"
          target="_blank"
          class="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
          rel="noreferrer"
        >
          Explore Our Projects
        </a>
        <p class="text-gray-600">
          <A href="/about" class="text-blue-600 hover:underline">
            Learn more about us
          </A>
        </p>
      </main>
    </>
  );
}
