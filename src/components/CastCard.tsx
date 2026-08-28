import Image from "next/image";
import type { CastMember } from "@/data/cast";
import { imageExists } from "@/lib/checkImage";
import { withBasePath } from "@/lib/basePath";

export default function CastCard({ member }: { member: CastMember }) {
  const hasImage = imageExists(member.image);

  return (
    <div className="group relative w-full">
      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-sm bg-[#0a0a0a]">
        {hasImage ? (
          <Image
            src={withBasePath(member.image)}
            alt={`${member.name} のプロフィール写真`}
            fill
            sizes="(min-width: 768px) 45vw, 90vw"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.06]"
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-[linear-gradient(160deg,#0a0a0a_0%,#3a0712_55%,#6b0015_100%)] transition-transform duration-500 ease-out group-hover:scale-[1.05]">
            <span className="font-display text-xs tracking-distiny text-ivory/70">
              CAST PHOTO
            </span>
            <span className="font-display mt-2 text-[10px] tracking-wide-luxe text-gold-2/70">
              COMING SOON
            </span>
          </div>
        )}

        {/* Dark overlay, lightens on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/10 transition-opacity duration-500 group-hover:opacity-70" />

        {/* Gold line reveal */}
        <div className="absolute left-6 right-6 top-6 h-px origin-left scale-x-0 bg-gradient-to-r from-gold-2 to-transparent transition-transform duration-500 ease-out group-hover:scale-x-100" />

        {member.signature && (
          <div className="absolute right-5 top-5 flex items-center gap-1.5 border border-gold-2/60 bg-black/50 px-3 py-1.5 backdrop-blur-sm">
            <span className="font-display text-[10px] tracking-wide-luxe text-gold-2">
              看板
            </span>
            <span className="h-3 w-px bg-gold-2/50" />
            <span className="font-display text-[9px] tracking-widest text-ivory/80">
              SIGNATURE
            </span>
          </div>
        )}

        <div className="absolute inset-x-0 bottom-0 p-6 transition-transform duration-500 ease-out group-hover:-translate-y-2">
          <p className="font-display text-[11px] tracking-wide-luxe text-gold-2/90">
            {member.no}
          </p>
          <h3 className="font-display text-gradient-gold mt-1 text-2xl font-semibold tracking-widest md:text-3xl">
            {member.name}
          </h3>
          <p className="font-jp-serif mt-2 text-sm text-ivory/90 md:text-base">
            「{member.catchphrase}」
          </p>
        </div>
      </div>

      <div className="mt-5 px-1">
        <p className="font-display text-[10px] tracking-distiny text-gold-2/70">
          PROFILE
        </p>
        <p className="font-jp-sans mt-2 text-sm leading-relaxed text-ivory/70">
          {member.profile}
        </p>
      </div>
    </div>
  );
}
