import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { COLLEGES } from "@/lib/demo/colleges";
import { GreenCupList } from "./GreenCupList";
import { PanelTitle } from "./PanelTitle";
import { WeekDemo } from "./WeekDemo";

export function CompeteSection() {
  return (
    <Section id="compete" tone="alt">
      <h2>Keep a streak. Beat another college.</h2>
      <p className="mt-5 max-w-[52ch] text-lg text-soft">
        Daily missions keep it quick. Seven days in a row earns a bonus. Every point you earn also
        counts toward your college in the Green Cup.
      </p>

      <div className="mt-9 grid gap-5 md:grid-cols-2 md:items-start">
        <WeekDemo />

        <Card>
          <PanelTitle title="The Green Cup" note="Fall semester" />
          <GreenCupList colleges={COLLEGES} mineRank={1} />
          <p className="mt-1.5 text-sm text-soft">Your college is highlighted.</p>
        </Card>
      </div>
    </Section>
  );
}
