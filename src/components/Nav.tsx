import { useLocation } from "@solidjs/router";
import Logo from "./Logo";

export default function Nav() {
  const location = useLocation();
  const active = (path: string) =>
    path === location.pathname
      ? "border-yellow-400"
      : "border-transparent hover:border-yellow-400";
  return (
    <nav class="bg-gradient-to-r from-purple-500 via-yellow-500 to-green-500 sticky top-0 shadow-lg">
      <div class="container mx-auto flex items-center justify-between">
        <div class="p-4 flex gap-2 items-center">
          <Logo />
          <span class="text-white flex items-center">TremTec</span>
        </div>

        <ul class="flex items-center p-4 gap-4 text-white">
          <li class={`border-b-2 ${active("/")} mx-2 sm:mx-4`}>
            <a href="/">🏠 Home</a>
          </li>
          <li class={`border-b-2 ${active("/about")} mx-2 sm:mx-4`}>
            <a href="/about">📖 About</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
