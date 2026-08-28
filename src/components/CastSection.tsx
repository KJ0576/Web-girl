import { castMembers } from "@/data/cast";
import CastCard from "./CastCard";
import Reveal from "./Reveal";

export default function CastSection() {
  return (
    <section
      id="cast"
      className="relative bg-[#050505] px-6 py-28 md:px-10 md:py-40"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center md:mb-20">
          <Reveal>
            <p className="font-display text-[10px] tracking-distiny text-gold-2/80 md:text-xs">
              Meet Our Ladies
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <h2 className="font-display text-gradient-gold mt-4 text-4xl font-semibold tracking-distiny md:text-6xl">
              CAST
            </h2>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="gold-divider-thin mx-auto mt-8 w-16" />
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12">
          {castMembers.map((member, i) => (
            <Reveal key={member.id} delay={i * 0.15}>
              <CastCard member={member} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
