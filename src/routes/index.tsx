import { For } from "solid-js";
import { createRouteAction } from "solid-start";
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
});

export default function Home() {
  const [, { Form }] = createRouteAction(async (formData: FormData) => {
    const { email, message, subject } = await contactFormSchema.parseAsync(formData);
    // FIXME: handle error and show on the screen

    const params = new URLSearchParams({
      subject,
      cc: email,
      body: message,
    });

    const mailtoURL = `mailto:root@tremtec.com?${params.toString()}`;
    // open mailto URL
    window.location.replace(mailtoURL);
  });

  return (
    <>
      <main class="text-center mx-auto p-4 my-24">
        <Container class=" grid gap-16">
          <h1 class="max-6-xs text-6xl text-white font-thin my-36 xl:my-48">
            <p> Build <span class="text-sky-400">your produt</span> </p>
            <p> Leave the tech <span class="text-sky-400">with us</span> </p>
          </h1>

          <h2 class="text-2xl font-semibold">We can help you with...</h2>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
            <For each={services}>
              {(service) => (
                <div>
                  <h3 class="text-xl py-4">{service.title}</h3>
                  <p class="text-md text-gray-400">{service.description}</p>
                </div>
              )}
            </For>
          </div>
        </Container>
      </main >

      <section class="bg-white dark:bg-gray-800 w-full" id="contact">
        <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Us</h2>
          <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Need details about our Business plan? Wanna take a coffee and see how we can bring value to your busines? Let us know.</p>
          <Form class="space-y-8">
            <div>
              <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
              <input type="email" name="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required />
            </div>
            <div>
              <label for="subject" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
              <input type="text" id="subject" name="subject" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required />
            </div>
            <div class="sm:col-span-2">
              <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
              <textarea id="message" rows="6" name="message" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..." />
            </div>
            <button type="submit" class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
          </Form>
        </div>
      </section>
    </>
  );
}
