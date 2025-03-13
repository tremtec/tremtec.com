import { Title } from "@solidjs/meta";
import { A } from "@solidjs/router";
import Logo from "~/components/Logo";

export default function About() {
  return (
    <>
      <Title>🚅 TremTec - About</Title>

      <main class="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-50 to-blue-100">
        <Logo />

        <h1 class="text-6xl font-extrabold text-blue-800 mb-6">
          Welcome to Tremtec
        </h1>
        <p class="text-xl text-gray-800 mb-10 text-center max-w-3xl leading-relaxed">
          At Tremtec, we are at the forefront of technological innovation,
          dedicated to transforming the world through open-source software. Our
          mission is to empower individuals and organizations by providing
          cutting-edge solutions that drive progress and foster creativity. Join
          us on our journey to innovate and create impactful solutions for a
          better tomorrow.
        </p>
        <div class="flex space-x-4 mb-10">
          <a
            href="https://github.com/tremtec"
            target="_blank"
            class="bg-blue-700 text-white px-8 py-4 rounded-full hover:bg-blue-800 transition shadow-lg"
            rel="noreferrer"
          >
            Explore Our Projects
          </a>
          <a
            href="/contact"
            class="bg-white text-blue-700 px-8 py-4 rounded-full hover:bg-blue-100 transition shadow-lg border border-blue-700"
          >
            Contact Us
          </a>
        </div>
        <section class="bg-white p-6 rounded-lg shadow-md max-w-4xl">
          <h2 class="text-3xl font-bold text-blue-700 mb-4">Our Vision</h2>
          <p class="text-lg text-gray-700 mb-6">
            We envision a world where technology is accessible to everyone,
            enabling people to achieve their fullest potential. Our commitment
            to open-source principles ensures that our innovations are shared
            freely, fostering a community of collaboration and growth.
          </p>
          <h2 class="text-3xl font-bold text-blue-700 mb-4">Our Values</h2>
          <ul class="list-disc list-inside text-lg text-gray-700 space-y-2">
            <li>Innovation: Pushing the boundaries of what's possible.</li>
            <li>Collaboration: Working together to achieve common goals.</li>
            <li>
              Integrity: Upholding the highest standards of honesty and
              transparency.
            </li>
            <li>
              Inclusivity: Embracing diversity and ensuring equal opportunities
              for all.
            </li>
          </ul>
        </section>

        <p class="mt-12 text-gray-600">
          <A href="/about" class="text-blue-600 hover:underline">
            Learn more about us
          </A>
        </p>
      </main>
    </>
  );
}
