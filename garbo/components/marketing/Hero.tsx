import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ROUTES } from "@/lib/constants";
import { WasteSorter } from "./WasteSorter";

export function Hero() {
  return (
    <section id="top" className="pt-10 pb-14 lg:pt-22 lg:pb-26">
      <Container className="grid gap-10 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:gap-16">
        <div>
          <h1>Not sure which bin? Scan it.</h1>
          <p className="mt-5 max-w-[52ch] text-lg text-soft">
            Point your phone at any piece of trash. GARBO tells you where it goes, walks you to the
            closest bin, and gives you points when you throw it right.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button href={ROUTES.login} size="lg">
              Start scanning
            </Button>
            <Button href="#how" size="lg" variant="ghost">
              See how it works
            </Button>
          </div>
          <p className="mt-4 text-sm text-soft">Runs in your phone’s browser. Nothing to install.</p>
        </div>
        <WasteSorter />
      </Container>
    </section>
  );
}
