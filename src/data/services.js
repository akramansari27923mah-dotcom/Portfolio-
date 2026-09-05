import { Brain, Globe, Server } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Web Development",
    icon: Globe,
    description:
      "I create fast, responsive, and modern websites using React.js, Next.js, and Tailwind CSS.",
    features: [
      "Responsive & modern UI",
      "React / Next.js development",
      "API integration",
      "Performance optimization",
    ],
    bg: "bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.20),#050816_60%)]",
  },
  {
    id: 2,
    title: "Backend Development",
    icon: Server,
    description:
      "I build secure and scalable backend systems with REST APIs, authentication, and databases.",
    features: [
      "RESTful API development",
      "Node.js & Express.js",
      "MongoDB integration",
      "Authentication & authorization",
    ],
    bg: "bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.20),#050816_60%)]",
  },
  {
    id: 3,
    title: "AI Integration",
    icon: Brain,
    description:
      "I integrate AI-powered features into web applications to create smarter and more useful digital products.",
    features: [
      "AI chatbot integration",
      "AI text generation",
      "Text summarization",
      "AI API integration",
    ],
    bg: "bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.25),rgba(79,70,229,0.12)_35%,#050816_70%)]",
  },
];

export default services;
