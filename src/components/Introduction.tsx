import Reveal from "./Reveal";

export default function Introduction() {
  return (
    <section
      id="about"
      className="relative flex flex-col items-center bg-[#050505] px-6 py-28 text-center md:py-40"
    >
      <Reveal>
        <p className="font-display text-[10px] tracking-distiny text-gold-2/80 md:text-xs">
          WELCOME TO
        </p>
      </Reveal>

      <Reveal delay={0.15}>
        <h2 className="font-display text-gradient-gold mt-4 text-3xl font-semibold tracking-distiny md:text-5xl">
          Club Distiny
        </h2>
      </Reveal>

      <Reveal delay={0.3}>
        <div className="gold-divider-thin mx-auto mt-8 w-16" />
      </Reveal>

      <Reveal delay={0.4}>
        <p className="font-jp-serif mt-8 text-lg text-ivory md:text-2xl">
          日常を忘れる、特別な夜を。
        </p>
      </Reveal>

      <Reveal delay={0.55}>
        <p className="font-jp-sans mx-auto mt-8 max-w-md text-sm leading-loose text-ivory/70 md:text-base">
          煌めく夜の向こう側へ。
          <br />
          Club Distinyが贈るのは、
          <br />
          ただ過ぎていくだけではない、記憶に残る一夜。
        </p>
      </Reveal>
    </section>
  );
}
