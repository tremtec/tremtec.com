import { siteTexts } from "~/settings";
import { ButtonLink } from "./shared";

export default function CallToActionSection() {
  return (
    <div class="grid gap-16 my-32 md:my-60">
      <h1 class="max-6-xs text-6xl text-white font-thin">
        {siteTexts.header}
        {siteTexts.subheader}
      </h1>
      <div class="flex gap-8 justify-center">
        <ButtonLink
          to="#contact"
          class="border-orange-300 text-orange-300 hover:border-orange-500 hover:text-orange-500"
        >
          {siteTexts.ctaPrimaryBtn}
        </ButtonLink>
        <ButtonLink
          to="#services"
          class="border-blue-300 text-blue-300 hover:border-blue-400 hover:text-blue-400"
        >
          {siteTexts.ctaSecondaryBtn}
        </ButtonLink>
      </div>
    </div>
  );
}
