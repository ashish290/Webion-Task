export interface DetailsProps {
  name: string;
  role: string;
  email: string;
  phone: string;
  course: string;
  status: "Unplaced" | "Placed";
}

export const UserDetails : DetailsProps[]= [
  {
    name: "Tony Stark",
    role: "Backend Developer",
    email: "tony.stark@example.com",
    phone: "1234567890",
    course: "Backend Development",
    status: "Unplaced",
  },
  {
    name: "Steve Rogers",
    role: "Frontend Developer",
    email: "steve.rogers@example.com",
    phone: "1112223334",
    course: "React Basic",
    status: "Placed",
  },
  {
    name: "Natasha Romanoff",
    role: "Full Stack Developer",
    email: "natasha.romanoff@example.com",
    phone: "2223334445",
    course: "JavaScript Fundamentals",
    status: "Placed",
  },
  {
    name: "Bruce Banner",
    role: "UI/UX Designer",
    email: "bruce.banner@example.com",
    phone: "0987654321",
    course: "UI/UX Designer",
    status: "Placed",
  },
  {
    name: "Thor Odinson",
    role: "Cloud Engineer",
    email: "thor.odinson@example.com",
    phone: "3334445556",
    course: "React Basic",
    status: "Unplaced",
  },
  {
    name: "Clint Barton",
    role: "QA Engineer",
    email: "clint.barton@example.com",
    phone: "4445556667",
    course: "JavaScript Fundamentals",
    status: "Unplaced",
  },
  {
    name: "Wanda Maximoff",
    role: "Machine Learning Engineer",
    email: "wanda.maximoff@example.com",
    phone: "5556667778",
    course: "Backend Development",
    status: "Placed",
  },
  {
    name: "Sam Wilson",
    role: "Mobile App Developer",
    email: "sam.wilson@example.com",
    phone: "6667778889",
    course: "Advance CSS",
    status: "Placed",
  }
]