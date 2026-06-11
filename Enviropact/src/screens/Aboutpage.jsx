import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Github, Linkedin, Leaf, Lightbulb, Wrench, Zap, BookOpen } from "lucide-react";

const team = [
  {
    name: "Stanley Ke",
    role: "Frontend",
    img: "/assets/images/stanley.jpg",
    linkedin: "https://www.linkedin.com/in/stanley-ke/",
    github: "https://github.com/SobaSkee",
  },
  {
    name: "Logan Bjork",
    role: "Frontend",
    img: "/assets/images/logan.jpg",
    linkedin: "https://www.linkedin.com/in/loganbjork/",
    github: "https://github.com/loganjaymes",
  },
  {
    name: "Adrian Moreno",
    role: "Backend",
    img: "/assets/images/adrian.jpg",
    linkedin: "https://www.linkedin.com/in/adrian-moreno25/",
    github: "https://github.com/adriantoby",
  },
  {
    name: "Kavi Patel",
    role: "Backend",
    img: "/assets/images/kavi.jpg",
    linkedin: "https://www.linkedin.com/in/kavip05/",
    github: "https://github.com/Kavipatel0",
  },
];

const qa = [
  {
    icon: <Lightbulb size={18} />,
    question: "Inspiration",
    answer:
      `Upon encountering the theme "Stages of Life," we were reminded of a fragile, helpless sapling—one that possesses the potential to flourish into something truly beautiful but lacks the opportunity to do so. This vision inspired us to champion the preservation of our shared home: the Earth. Together, with the collective efforts of our local communities, we can create a meaningful and lasting impact.`,
  },
  {
    icon: <Wrench size={18} />,
    question: "How It's Built",
    answer:
      "For our frontend, we built EnviroPact using React.js, Tailwind CSS, and the Ant Design and Framer Motion libraries. For the backend, we utilized JavaScript, Firestore as a database, and Firebase as a BaaS and authenticator.",
  },
  {
    icon: <Zap size={18} />,
    question: "Challenges",
    answer:
      "One of our main challenges was using Git, as this was our first time using multiple branches in a project. What should have been a relatively simple process led to a lot of merge conflicts, resulting in several branch resets. Our very limited knowledge on building projects and hackathons also slowed us down, with a lot of the first day being spent on just figuring out a roadmap.",
  },
  {
    icon: <BookOpen size={18} />,
    question: "What We Learned",
    answer:
      "With this being the first hackathon for all four of us, we learned so much about what goes into designing and implementing a project and the tools needed to do so. We expanded our toolset as courses do not give you this real-world experience, and we now have a better understanding going into future projects.",
  },
];

export default function Aboutpage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen" style={{ background: "#040f07" }}>
      {/* Nav */}
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 border-b border-white/5"
        style={{ background: "rgba(4,15,7,0.85)", backdropFilter: "blur(16px)" }}
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <button onClick={() => navigate("/")} className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-lime-400 flex items-center justify-center">
            <img src="/assets/images/tree-icon.svg" className="w-5 h-5" />
          </div>
          <span className="text-white font-bold text-lg tracking-tight">EnviroPact</span>
        </button>
        <nav className="flex items-center gap-8">
          <button onClick={() => navigate("/events")} className="text-sm text-zinc-400 hover:text-white transition-colors">Events</button>
          <button onClick={() => navigate("/about")} className="text-sm text-white font-medium">About</button>
        </nav>
      </motion.header>

      <div className="pt-28 pb-24 px-6 max-w-5xl mx-auto">

        {/* Page header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-lime-400/30 bg-lime-400/10 text-lime-400 text-xs font-medium mb-5">
            <Leaf size={12} />
            SASEHacks 2024
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight mb-4">
            Meet <span style={{ color: "#a3e635" }}>Team SLAK</span>
          </h1>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto">
            Four first-time hackathon builders who built EnviroPact in 48 hours.
          </p>
        </motion.div>

        {/* Team grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-28">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group rounded-2xl overflow-hidden border border-white/6 transition-all duration-300 hover:border-lime-400/20"
              style={{ background: "rgba(255,255,255,0.03)" }}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-100"
                />
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-white text-base">{member.name}</h3>
                <p className="text-xs text-zinc-500 mt-0.5 mb-4">{member.role}</p>
                <div className="flex items-center gap-3">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="w-8 h-8 rounded-lg flex items-center justify-center border border-white/8 hover:border-lime-400/30 hover:bg-lime-400/10 transition-all"
                  >
                    <Linkedin size={14} className="text-zinc-400 group-hover:text-lime-400" />
                  </a>
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noreferrer"
                    className="w-8 h-8 rounded-lg flex items-center justify-center border border-white/8 hover:border-lime-400/30 hover:bg-lime-400/10 transition-all"
                  >
                    <Github size={14} className="text-zinc-400 group-hover:text-lime-400" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Q&A */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }} viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white tracking-tight">About the project</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {qa.map((item, i) => (
            <motion.div
              key={item.question}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08 }} viewport={{ once: true }}
              className="rounded-2xl p-7 border border-white/6"
              style={{ background: "rgba(255,255,255,0.03)" }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-lime-400/10 text-lime-400 flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-white">{item.question}</h3>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed">{item.answer}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8 px-6">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-6 h-6 rounded-md bg-lime-400 flex items-center justify-center">
              <img src="/assets/images/tree-icon.svg" className="w-4 h-4" />
            </div>
            <span className="text-sm font-semibold text-white">EnviroPact</span>
          </div>
          <p className="text-xs text-zinc-600">© 2024 EnviroPact · Built at SASEHacks</p>
        </div>
      </footer>
    </div>
  );
}
