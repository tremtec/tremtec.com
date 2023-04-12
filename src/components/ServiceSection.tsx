import { For, JSX } from "solid-js";

type Service = {
  title: string;
  description: string;
  icon: JSX.Element;
}

const sharedIconStyle = "mx-auto w-8";
const services: Service[] = [
  {
    title: "Tech Team Outsourcing",
    description:
      "Scale your business by hiring remote developers, designers, and product owners with the skills your team needs to succeed.",
    icon: (
      <svg class={sharedIconStyle} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" /></svg>
    )
  },
  {
    title: "CTO as a Service",
    description:
      "Take advantage of the vast expertise and knowledge of a seasoned CTO, without the high cost of hiring a full-time executive.",
    icon: (
      <svg class={sharedIconStyle} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" /></svg>
    )
  },
  {
    title: "Tech Consultancy",
    description:
      "Get expert guidance on software development, architecture, and technology strategy to help your business grow.",
    icon: (
      <svg class={sharedIconStyle} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clip-rule="evenodd" /></svg>
    )
  },
  {
    title: "Business Training",
    description:
      "Boost your team's performance and efficiency by providing them with customized training programs tailored to your specific business needs.",
    icon: (
      <svg class={sharedIconStyle} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" /></svg>
    )
  },
];

export default function ServiceSection() {
  return (
    <>
      <h2 class="text-2xl font-semibold md:py-8" id="services">We can help you with...</h2>

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
