import Reveal from "./Reveal";

export default function MessageSection() {
  return (
    <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-black px-6 py-32 text-center">
      <div aria-hidden className="red-glow" />
      <div className="relative z-10">
        <Reveal>
          <h2 className="font-display text-[clamp(2rem,8vw,5.5rem)] font-bold uppercase leading-[1.05] tracking-wide-luxe text-ivory">
            The Night
            <br />
            <span className="text-gradient-gold">Begins Here.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.25}>
          <p className="font-jp-serif mt-8 text-base text-ivory/70 md:text-xl">
            忘れられない夜は、ここから始まる。
          </p>
        </Reveal>
      </div>
    </section>
  );
}
