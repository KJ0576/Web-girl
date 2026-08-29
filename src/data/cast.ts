export type CastMember = {
  id: string;
  no: string;
  name: string;
  catchphrase: string;
  profile: string;
  image: string;
  signature?: boolean;
};

export const castMembers: CastMember[] = [
  {
    id: "omuko",
    no: "No.01",
    name: "OMUKO",
    catchphrase: "この店の顔、絶対的看板エース。",
    profile:
      "凛とした佇まいと圧倒的な存在感で、店内の空気を一変させる。Club Distinyを象徴する看板嬢。一度目が合えば、離れられない。",
    image: "1.png",
    signature: true,
  },
  {
    id: "miyu",
    no: "No.02",
    name: "MIYU",
    catchphrase: "一度会えば、忘れられない。",
    profile:
      "柔らかな笑顔の奥に潜む妖艶さ。会話ひとつひとつが、特別な時間を作り上げる。",
    image: "/images/cast/miyu.jpg",
  },
];
