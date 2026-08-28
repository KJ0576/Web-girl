export type StaffMember = {
  id: string;
  name: string;
  role: string;
  message: string;
  image: string;
};

export const staffMembers: StaffMember[] = [
  {
    id: "asatama",
    name: "ASATAMA",
    role: "Manager",
    message: "最高の夜を、最後まで。",
    image: "/images/staff/asatama.jpg",
  },
  {
    id: "isozaki",
    name: "ISOZAKI",
    role: "Floor Staff",
    message: "今夜も最高の時間を。",
    image: "/images/staff/isozaki.jpg",
  },
];
