import { Section } from "@/components/ui/Section";
import { PointsCalculator } from "./PointsCalculator";

const REWARDS = [
  { name: "Print credits", note: "Cover your printing on campus." },
  { name: "Cafeteria vouchers", note: "Take a little off your next meal." },
  { name: "Library credits", note: "Put points toward library services." },
];

export function RewardsSection() {
  return (
    <Section id="rewards" className="grid gap-9 lg:grid-cols-[5fr_7fr] lg:items-start lg:gap-18">
      <div>
        <h2>Spend what you earn</h2>
        <p className="mt-5 max-w-[52ch] text-lg text-soft">
          Points aren’t just a score. Slide to see what yours could get you.
        </p>
        <PointsCalculator />
      </div>

      <dl className="border-t border-line">
        {REWARDS.map((r) => (
          <div
            key={r.name}
            className="group relative border-b border-line py-4.5 pl-0 transition-[padding,background-color] duration-300 before:absolute before:top-3 before:bottom-3 before:left-0 before:w-1 before:origin-center before:scale-y-0 before:rounded-full before:bg-tangerine before:transition-transform before:duration-300 before:content-[''] hover:bg-tint hover:pl-5 hover:before:scale-y-100"
          >
            <dt className="font-display text-xl font-bold text-ink transition-colors duration-200 group-hover:text-link">
              {r.name}
            </dt>
            <dd className="mt-1 text-soft">{r.note}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
