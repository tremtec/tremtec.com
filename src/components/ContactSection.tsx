import { createRouteAction } from "solid-start";
import { z } from "zod";
import { zfd } from "zod-form-data";
import { Container } from "~/components/shared";
import { siteTexts } from "~/settings";

const contactFormSchema = zfd.formData({
  email: zfd.text(z.string().min(6).max(50)),
  subject: zfd.text(z.string().min(8).max(120)),
  message: zfd.text(z.string().min(10).max(400)),
});

export default function ContactSection() {
  const [, { Form }] = createRouteAction(async (formData: FormData) => {
    // FIXME: handle error and show on the screen
    const { email, message, subject } = await contactFormSchema.parseAsync(
      formData
    );

    const params = new URLSearchParams({ subject, cc: email, body: message });
    const mailtoURL = `${siteTexts.mailTo}?${params.toString()}`;

    // open mailto URL
    window.location.replace(mailtoURL);
  });

  return (
    <section
      class="bg-white dark:bg-gray-800 w-full"
      id={siteTexts.links.contact.slice(2)}
    >
      <Container class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
          {siteTexts.contactTitle}
        </h2>
        <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
          {siteTexts.contactSubTitle}
        </p>
        <Form class="space-y-8">
          <div>
            <label
              for="email"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              {siteTexts.inputs.email.label}
            </label>
            <input
              type="email"
              name="email"
              id="email"
              class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder={siteTexts.inputs.email.placeholder}
              required
            />
          </div>
          <div>
            <label
              for="subject"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              {siteTexts.inputs.subject.label}
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder={siteTexts.inputs.subject.placeholder}
              required
            />
          </div>
          <div class="sm:col-span-2">
            <label
              for="message"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              {siteTexts.inputs.message.label}
            </label>
            <textarea
              id="message"
              rows="6"
              name="message"
              class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder={siteTexts.inputs.message.placeholder}
            />
          </div>
          <button
            type="submit"
            class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            {siteTexts.inputs.submit.label}
          </button>
        </Form>
      </Container>
    </section>
  );
}
