import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { ROUTES } from "@/lib/constants";
import { CampusPreview } from "./CampusPreview";

export function CampusBand() {
  return (
    <Section id="campus" tone="brand" className="grid gap-9 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-18">
      <div>
        <h2 className="text-on-band">Built for campus sustainability offices, too</h2>
        <p className="mt-5 max-w-[52ch] text-lg text-on-band-soft">
          Every scan and every disposal becomes data your facilities team can act on. Try the tabs to
          see what they’d see.
        </p>
        <Button href={ROUTES.contact} variant="light" className="mt-7">
          Contact the team
        </Button>
      </div>
      <CampusPreview />
    </Section>
  );
}
