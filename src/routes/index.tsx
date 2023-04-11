import { z } from "zod";
import { zfd } from "zod-form-data";
import { Container } from "~/components/shared";

type Service = {
  title: string;
  description: string;
}

const services: Service[] = [
  {
    title: "Tech Team Outsourcing",
    description:
      "Scale your business by hiring remote developers, designers, and product owners with the skills your team needs to succeed.",
  },
  {
    title: "CTO as a Service",
    description:
      "Leverage the expertise of an experienced CTO without the expense of hiring one full-time.",
  },
  {
    title: "Tech Consultancy",
    description:
      "Get expert guidance on software development, architecture, and technology strategy to help your business grow.",
  },
  {
    title: "Business Training",
    description:
      "Improve your team's business acumen and increase productivity with our tailored training programs.",
  },
];

const contactFormSchema = zfd.formData({
  email: zfd.text(z.string().min(6).max(50)),
  subject: zfd.text(z.string().min(8).max(120)),
  message: zfd.text(z.string().min(10).max(400)),
})

export default function Home() {
  return (
    <main class="text-center mx-auto p-4">
      <Container class=" grid gap-16">
        <h1 class="max-6-xs text-6xl text-white font-thin my-48">
          <p> Build <span class="text-sky-700">your produt</span> </p>
          <p> Leave the tech <span class="text-sky-700">with us</span> </p>
        </h1>

        <h2 class="text-2xl font-semibold">We can help you with...</h2>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
          {services.map((service) => (
            <div>
              <h3 class="text-xl py-4">{service.title}</h3>
              <p class="text-md text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </main >
  );
}
