import { For } from "solid-js";
import { services, siteTexts } from "~/settings";

export default function ServiceSection() {
  return (
    <>
      <h2
        class="text-2xl font-semibold md:py-8"
        id={siteTexts.links.services.slice(2)}
      >
        We can help you with...
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-24 md:gap-12">
        <For each={services}>
          {(service) => (
            <div class="text-center">
              <div class="border-gray-500 rounded-full">{service.icon}</div>
              <h3 class="text-xl py-4">{service.title}</h3>
              <p class="text-md text-gray-400">{service.description}</p>
            </div>
          )}
        </For>
      </div>
    </>
  );
}
