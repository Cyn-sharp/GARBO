import { Container } from "@/components/ui/Container";
import { ROUTES } from "@/lib/constants";

export function SiteFooter() {
  return (
    <footer className="border-t border-line pt-7 pb-safe text-sm text-soft">
      <Container className="flex flex-wrap justify-between gap-x-6 gap-y-2 pb-7">
        <span>GARBO 2.0. Campus waste management and student engagement.</span>
        <a href={ROUTES.contact} className="text-link underline">
          Contact
        </a>
      </Container>
    </footer>
  );
}
