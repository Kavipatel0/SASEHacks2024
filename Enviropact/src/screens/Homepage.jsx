import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Leaf, Users, CalendarCheck } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

const features = [
  {
    icon: <Leaf size={24} />,
    step: "01",
    title: "Plant the seed",
    body: "Create and manage sustainability events in minutes. Clean-up drives, eco workshops, green meetups — our platform handles the logistics so you can focus on impact.",
  },
  {
    icon: <Users size={24} />,
    step: "02",
    title: "Grow the community",
    body: "Join local efforts and build a network of people who care. Every event you attend plants deeper roots in your community's commitment to the planet.",
  },
  {
    icon: <CalendarCheck size={24} />,
    step: "03",
    title: "Preserve the forest",
    body: "Track your impact over time. Collective small actions compound into real change — and EnviroPact keeps the momentum going, one event at a time.",
  },
];

function Navbar({ navigate }) {
  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4"
      style={{ background: "linear-gradient(to bottom, rgba(4,15,7,0.95) 0%, rgba(4,15,7,0) 100%)" }}
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <button
        onClick={() => navigate("/")}
        className="flex items-center gap-2.5 group"
      >
        <div className="w-8 h-8 rounded-lg bg-lime-400 flex items-center justify-center">
          <img src="/assets/images/tree-icon.svg" className="w-5 h-5" />
        </div>
        <span className="text-white font-bold text-lg tracking-tight">EnviroPact</span>
      </button>

      <nav className="flex items-center gap-8">
        <button
          onClick={() => navigate("/events")}
          className="text-sm text-zinc-400 hover:text-white transition-colors"
        >
          Events
        </button>
        <button
          onClick={() => navigate("/about")}
          className="text-sm text-zinc-400 hover:text-white transition-colors"
        >
          About
        </button>
        <button
          onClick={() => navigate("/events")}
          className="text-sm font-medium px-4 py-2 rounded-lg bg-lime-400 text-zinc-900 hover:bg-lime-300 transition-colors"
        >
          Get started
        </button>
      </nav>
    </motion.header>
  );
}

export default function Homepage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen" style={{ background: "#040f07" }}>
      <Navbar navigate={navigate} />

      {/* ── Hero ── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        {/* Glow blobs */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-20 blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(circle, #a3e635 0%, transparent 70%)" }} />

        {/* Badge */}
        <motion.div
          custom={0} variants={fadeUp} initial="hidden" animate="show"
          className="mb-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-lime-400/30 bg-lime-400/10 text-lime-400 text-xs font-medium"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-lime-400 animate-pulse" />
          SASEHacks 2024 · Best Environmental Hack
        </motion.div>

        <motion.h1
          custom={1} variants={fadeUp} initial="hidden" animate="show"
          className="text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.05] tracking-tight max-w-4xl"
        >
          Preserve your
          <br />
          <span style={{ color: "#a3e635" }}>pact</span> with Earth.
        </motion.h1>

        <motion.p
          custom={2} variants={fadeUp} initial="hidden" animate="show"
          className="mt-6 text-lg text-zinc-400 max-w-xl leading-relaxed"
        >
          A community platform for organizing and joining sustainability events —
          clean-ups, plantings, and more. One trash bag at a time.
        </motion.p>

        <motion.div
          custom={3} variants={fadeUp} initial="hidden" animate="show"
          className="mt-8 flex items-center gap-4"
        >
          <button
            onClick={() => navigate("/events")}
            className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-zinc-900 transition-all hover:scale-105 active:scale-95"
            style={{ background: "linear-gradient(135deg, #a3e635, #84cc16)" }}
          >
            Browse events
            <ArrowRight size={16} />
          </button>
          <button
            onClick={() => navigate("/about")}
            className="px-6 py-3 rounded-xl font-medium text-zinc-300 border border-zinc-700 hover:border-zinc-500 transition-colors"
          >
            Meet the team
          </button>
        </motion.div>

        {/* Hero image */}
        <motion.div
          custom={4} variants={fadeUp} initial="hidden" animate="show"
          className="mt-20 relative"
        >
          <div className="absolute inset-0 rounded-3xl blur-2xl opacity-30"
            style={{ background: "radial-gradient(circle, #a3e635, transparent)" }} />
          <img
            src="/assets/images/hero-home-background.svg"
            alt="EnviroPact hero"
            className="relative w-full max-w-3xl rounded-3xl opacity-90"
          />
        </motion.div>
      </section>

      {/* ── Features ── */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }} viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-lime-400 text-sm font-medium tracking-widest uppercase mb-3">How it works</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Everything you need to<br />make an impact
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.step}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }} viewport={{ once: true }}
                className="group relative rounded-2xl p-7 border border-white/5 hover:border-lime-400/20 transition-all duration-300"
                style={{ background: "rgba(255,255,255,0.03)" }}
              >
                <div className="w-10 h-10 rounded-xl bg-lime-400/10 text-lime-400 flex items-center justify-center mb-5 group-hover:bg-lime-400/20 transition-colors">
                  {f.icon}
                </div>
                <span className="text-xs font-mono text-zinc-600 mb-2 block">{f.step}</span>
                <h3 className="text-xl font-semibold text-white mb-3">{f.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{f.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="py-24 px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }} viewport={{ once: true }}
          className="max-w-4xl mx-auto rounded-3xl p-12 text-center relative overflow-hidden"
          style={{ background: "linear-gradient(135deg, #0d3b1a 0%, #1a5c2a 100%)", border: "1px solid rgba(163,230,53,0.15)" }}
        >
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl opacity-20 pointer-events-none"
            style={{ background: "#a3e635", transform: "translate(30%, -30%)" }} />
          <h2 className="text-4xl font-bold text-white mb-4">Ready to make an impact?</h2>
          <p className="text-zinc-400 mb-8 text-lg">
            Join thousands of community members already making a difference.
          </p>
          <button
            onClick={() => navigate("/events")}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-zinc-900 transition-all hover:scale-105 active:scale-95"
            style={{ background: "linear-gradient(135deg, #a3e635, #84cc16)" }}
          >
            Find events near you
            <ArrowRight size={16} />
          </button>
        </motion.div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-white/5 py-8 px-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
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
