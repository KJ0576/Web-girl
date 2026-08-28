const LINKS = [
  { label: "TOP", href: "#top" },
  { label: "CAST", href: "#cast" },
  { label: "STAFF", href: "#staff" },
  { label: "ACCESS", href: "#access" },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#030303] px-6 pb-10 pt-14 text-center">
      <div className="gold-divider mx-auto max-w-4xl" />

      <div className="mx-auto mt-10 flex max-w-4xl flex-col items-center gap-6">
        <p className="font-display text-gradient-gold text-lg tracking-distiny">
          Club Distiny
        </p>
        <p className="font-jp-serif text-sm text-ivory/70">
          最高の女、ここに集まる。
        </p>

        <nav
          aria-label="Footer"
          className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3"
        >
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-display text-[11px] tracking-wide-luxe text-ivory/60 transition-colors duration-300 hover:text-gold"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <p className="font-jp-sans mt-4 text-xs text-ivory/40">
          © 2026 Club Distiny
        </p>
      </div>
    </footer>
  );
}
