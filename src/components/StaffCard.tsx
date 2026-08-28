import Image from "next/image";
import type { StaffMember } from "@/data/staff";
import { imageExists } from "@/lib/checkImage";

export default function StaffCard({ member }: { member: StaffMember }) {
  const hasImage = imageExists(member.image);

  return (
    <div className="group relative w-full">
      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-sm bg-[#050505] ring-1 ring-gold-2/10">
        {hasImage ? (
          <Image
            src={member.image}
            alt={`${member.name} のプロフィール写真`}
            fill
            sizes="(min-width: 768px) 45vw, 90vw"
            className="object-cover grayscale-[15%] transition-transform duration-500 ease-out group-hover:scale-[1.04]"
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-[linear-gradient(160deg,#050505_0%,#0d0d0d_55%,#1a1a1a_100%)] transition-transform duration-500 ease-out group-hover:scale-[1.03]">
            <span className="font-display text-xs tracking-distiny text-ivory/60">
              STAFF PHOTO
            </span>
            <span className="font-display mt-2 text-[10px] tracking-wide-luxe text-gold-2/60">
              COMING SOON
            </span>
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />

        <div className="absolute left-6 right-6 top-6 h-px origin-left scale-x-0 bg-gradient-to-r from-gold-2/70 to-transparent transition-transform duration-500 ease-out group-hover:scale-x-100" />

        <div className="absolute inset-x-0 bottom-0 p-6">
          <p className="font-display text-[10px] tracking-wide-luxe text-gold-2/70">
            {member.role}
          </p>
          <h3 className="font-display mt-1 text-xl font-medium tracking-widest text-ivory md:text-2xl">
            {member.name}
          </h3>
          <p className="font-jp-serif mt-2 text-sm text-ivory/70">
            「{member.message}」
          </p>
        </div>
      </div>
    </div>
  );
}
