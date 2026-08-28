export type CastMember = {
  id: string;
  no: string;
  name: string;
  catchphrase: string;
  profile: string;
  image: string;
};

export const castMembers: CastMember[] = [
  {
    id: "reina",
    no: "No.01",
    name: "REINA",
    catchphrase: "夜を支配する、絶対的エース。",
    profile:
      "凛とした佇まいと圧倒的な存在感で、店内の空気を一変させる。一度目が合えば、離れられない。",
    image: "/images/cast/reina.jpg",
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
