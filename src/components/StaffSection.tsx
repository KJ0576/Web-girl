import { staffMembers } from "@/data/staff";
import StaffCard from "./StaffCard";
import Reveal from "./Reveal";

export default function StaffSection() {
  return (
    <section
      id="staff"
      className="relative bg-[#030303] px-6 py-28 md:px-10 md:py-40"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center md:mb-20">
          <Reveal>
            <p className="font-display text-[10px] tracking-distiny text-ivory/50 md:text-xs">
              The Gentlemen Behind the Night
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <h2 className="font-display mt-4 text-4xl font-semibold tracking-distiny text-ivory md:text-6xl">
              STAFF
            </h2>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="gold-divider-thin mx-auto mt-8 w-16" />
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12">
          {staffMembers.map((member, i) => (
            <Reveal key={member.id} delay={i * 0.15}>
              <StaffCard member={member} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
