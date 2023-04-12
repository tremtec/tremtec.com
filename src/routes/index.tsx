import CallToActionSection from "~/components/CallToActionSection";
import ContactSection from "~/components/ContactSection";
import ServiceSection from "~/components/ServiceSection";
import { Container } from "~/components/shared";

export default function Home() {
  return (
    <>
      <main class="text-center mx-auto p-4 my-24">
        <Container class="grid gap-24 md:gap-12">
          <CallToActionSection />

          <ServiceSection />
        </Container>
      </main >

      <ContactSection />
    </>
  );
}
