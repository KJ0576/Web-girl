import { shopInfo } from "@/data/shop";
import Reveal from "./Reveal";

const items = [
  { label: "ADDRESS", value: shopInfo.address },
  { label: "OPEN", value: shopInfo.open },
  { label: "TEL", value: shopInfo.tel },
];

export default function Access() {
  return (
    <section
      id="access"
      className="relative bg-[#050505] px-6 py-28 text-center md:py-40"
    >
      <div className="mx-auto max-w-2xl">
        <Reveal>
          <p className="font-display text-[10px] tracking-distiny text-gold-2/80 md:text-xs">
            ACCESS
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <h2 className="font-display text-gradient-gold mt-4 text-3xl font-semibold tracking-distiny md:text-5xl">
            Club Distiny
            <span className="mt-2 block text-lg font-normal tracking-wide-luxe text-ivory/70 md:text-xl">
              TOKYO
            </span>
          </h2>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="gold-divider-thin mx-auto mt-8 w-16" />
        </Reveal>

        <div className="mt-12 flex flex-col gap-8">
          {items.map((item, i) => (
            <Reveal key={item.label} delay={0.4 + i * 0.1}>
              <div>
                <p className="font-display text-[11px] tracking-wide-luxe text-gold-2/80">
                  {item.label}
                </p>
                <p className="font-jp-sans mt-2 text-base text-ivory/85 md:text-lg">
                  {item.value}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
