import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { ROUTES } from "@/lib/constants";
import { CollegePicker } from "./CollegePicker";

export function FinalCta() {
  return (
    <Section id="start" className="grid gap-9 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-16">
      <div>
        <h2>Your next cup has a bin waiting</h2>
        <p className="mt-5 max-w-[52ch] text-lg text-soft">
          Sign in with your school email, pick your college, and scan your first item. Allow camera
          access when your browser asks.
        </p>
        <CollegePicker />
      </div>
      <div className="grid justify-items-start gap-4">
        <Button href={ROUTES.login} size="lg">
          Sign in with school email
        </Button>
        <p className="text-sm text-soft">Works in your phone’s browser.</p>
      </div>
    </Section>
  );
}
