import { Section } from "@/components/ui/Section";
import { POINTS } from "@/lib/constants";
import { RouteSteps, type RouteStep } from "./RouteSteps";

const STEPS: RouteStep[] = [
  {
    title: "Scan the item",
    body: "Take a photo. GARBO names the item and tells you which waste stream it belongs to.",
    chip: "Clear iced plastic cup, 99% confident",
    tone: "neutral",
  },
  {
    title: "Follow the map to the right bin",
    body: "The campus map shows the closest bin that accepts that stream, and how long it takes to walk there.",
    chip: "Station #024, 18 m away",
    tone: "neutral",
  },
  {
    title: "Scan the QR code on the bin",
    body: "Every bin has its own code. Scanning it proves you were there and used the right one.",
    chip: "Station #024 verified",
    tone: "success",
  },
  {
    title: "Collect your points",
    body: "Points, streak days, and mission progress update the moment your disposal is confirmed.",
    chip: `+${POINTS.DISPOSAL} pts`,
    tone: "points",
  },
];

export function HowItWorks() {
  return (
    <Section id="how" className="grid gap-9 lg:grid-cols-[5fr_7fr] lg:gap-18">
      <div className="lg:sticky lg:top-24 lg:self-start">
        <h2>From trash to points in four steps</h2>
        <p className="mt-5 max-w-[52ch] text-lg text-soft">
          You never have to memorize the sorting rules. GARBO handles the guessing, and the bin’s own
          QR code confirms you did it.
        </p>
      </div>
      <RouteSteps steps={STEPS} />
    </Section>
  );
}
