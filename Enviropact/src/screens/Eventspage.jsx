import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Calendar, Users, Search, Plus, ArrowRight, Leaf } from "lucide-react";
import { notification } from "antd";

const MOCK_EVENTS = [
  {
    id: "1",
    title: "Beach Cleanup at Santa Monica",
    organization: "SoCal Green Initiative",
    description: "Join us for a morning cleanup along the Santa Monica shoreline. Gloves and bags provided. All are welcome!",
    location: "Santa Monica, CA",
    date: "Nov 15, 2024",
    time: "8:00 AM",
    rsvpCount: 42,
    tag: "Cleanup",
    tagColor: "#3b82f6",
  },
  {
    id: "2",
    title: "Tree Planting in Griffith Park",
    organization: "LA Urban Forestry",
    description: "Help us plant 200 native trees throughout Griffith Park to restore the local ecosystem.",
    location: "Los Angeles, CA",
    date: "Nov 22, 2024",
    time: "9:00 AM",
    rsvpCount: 67,
    tag: "Planting",
    tagColor: "#22c55e",
  },
  {
    id: "3",
    title: "Community Garden Volunteer Day",
    organization: "Eastside Roots",
    description: "Volunteer at our community garden — weeding, planting, and composting. Great for families!",
    location: "Boyle Heights, CA",
    date: "Dec 1, 2024",
    time: "10:00 AM",
    rsvpCount: 28,
    tag: "Garden",
    tagColor: "#a3e635",
  },
  {
    id: "4",
    title: "E-Waste Recycling Drive",
    organization: "TechCycle LA",
    description: "Drop off old electronics for responsible recycling. We accept phones, laptops, monitors, and more.",
    location: "Westwood, CA",
    date: "Dec 7, 2024",
    time: "11:00 AM",
    rsvpCount: 93,
    tag: "Recycling",
    tagColor: "#f59e0b",
  },
  {
    id: "5",
    title: "Zero-Waste Cooking Workshop",
    organization: "Sustainable Table",
    description: "Learn how to cook delicious meals using every part of your ingredients and reduce food waste at home.",
    location: "Silver Lake, CA",
    date: "Dec 14, 2024",
    time: "2:00 PM",
    rsvpCount: 35,
    tag: "Workshop",
    tagColor: "#ec4899",
  },
  {
    id: "6",
    title: "Bike & Eco-Commuting Fair",
    organization: "CicLAvia × EnviroPact",
    description: "Free bike tune-ups and a showcase on how switching to cycling can cut your carbon footprint significantly.",
    location: "Downtown LA, CA",
    date: "Dec 21, 2024",
    time: "10:00 AM",
    rsvpCount: 51,
    tag: "Fair",
    tagColor: "#8b5cf6",
  },
];

function EventCard({ event, index }) {
  const [rsvped, setRsvped] = useState(false);

  const handleRsvp = () => {
    if (rsvped) return;
    setRsvped(true);
    notification.success({
      message: "You're in!",
      description: `RSVP confirmed for "${event.title}"`,
      placement: "bottomRight",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="group relative rounded-2xl p-6 border transition-all duration-300 hover:border-white/10 hover:-translate-y-0.5"
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      {/* Top row */}
      <div className="flex items-start justify-between gap-4 mb-3">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span
              className="text-xs font-medium px-2.5 py-0.5 rounded-full"
              style={{ background: `${event.tagColor}18`, color: event.tagColor }}
            >
              {event.tag}
            </span>
          </div>
          <h3 className="text-lg font-semibold text-white leading-snug">{event.title}</h3>
          <p className="text-sm text-zinc-500 mt-0.5">{event.organization}</p>
        </div>
        <div className="flex items-center gap-1 text-zinc-500 text-sm shrink-0">
          <Users size={14} />
          <span>{event.rsvpCount}</span>
        </div>
      </div>

      <p className="text-sm text-zinc-400 leading-relaxed mb-4">{event.description}</p>

      {/* Footer */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4 text-xs text-zinc-500">
          <span className="flex items-center gap-1.5">
            <MapPin size={12} />
            {event.location}
          </span>
          <span className="flex items-center gap-1.5">
            <Calendar size={12} />
            {event.date} · {event.time}
          </span>
        </div>
        <button
          onClick={handleRsvp}
          disabled={rsvped}
          className="text-xs font-semibold px-4 py-2 rounded-lg transition-all duration-200 active:scale-95"
          style={
            rsvped
              ? { background: "rgba(163,230,53,0.15)", color: "#a3e635" }
              : { background: "#a3e635", color: "#0a1f0e" }
          }
        >
          {rsvped ? "✓ RSVPed" : "RSVP"}
        </button>
      </div>
    </motion.div>
  );
}

export default function Eventspage() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const openDemoToast = () => {
    notification.info({
      message: "Demo Mode",
      description: "Sign-in is disabled in this demo. In the live app you could create events too!",
      placement: "bottomRight",
    });
  };

  const filtered = MOCK_EVENTS.filter(
    (e) =>
      e.title.toLowerCase().includes(query.toLowerCase()) ||
      e.organization.toLowerCase().includes(query.toLowerCase())
  );

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
          <button onClick={() => navigate("/events")} className="text-sm text-white font-medium">Events</button>
          <button onClick={() => navigate("/about")} className="text-sm text-zinc-400 hover:text-white transition-colors">About</button>
          <button
            onClick={openDemoToast}
            className="text-sm font-medium px-4 py-2 rounded-lg bg-lime-400 text-zinc-900 hover:bg-lime-300 transition-colors"
          >
            Sign in
          </button>
        </nav>
      </motion.header>

      <div className="pt-28 pb-24 px-6 max-w-4xl mx-auto">
        {/* Page header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-lime-400/30 bg-lime-400/10 text-lime-400 text-xs font-medium mb-5">
            <Leaf size={12} />
            Community events near you
          </div>
          <h1 className="text-5xl font-bold text-white mb-3 tracking-tight">Find your next event.</h1>
          <p className="text-zinc-400 text-lg">Make an impact. Plant your seed.</p>
        </motion.div>

        {/* Search + create */}
        <motion.div
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex gap-3 mb-10"
        >
          <div className="flex-1 relative">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" />
            <input
              type="text"
              placeholder="Search events..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-xl text-sm text-white placeholder-zinc-500 outline-none transition-all border focus:border-lime-400/40"
              style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
            />
          </div>
          <button
            onClick={openDemoToast}
            className="flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium text-zinc-900 transition-colors hover:bg-lime-300"
            style={{ background: "#a3e635" }}
          >
            <Plus size={16} />
            Create
          </button>
        </motion.div>

        {/* Count */}
        <div className="text-xs text-zinc-600 mb-5 font-medium">
          {filtered.length} event{filtered.length !== 1 ? "s" : ""}
        </div>

        {/* Cards */}
        <div className="flex flex-col gap-4">
          <AnimatePresence>
            {filtered.map((event, i) => (
              <EventCard key={event.id} event={event} index={i} />
            ))}
          </AnimatePresence>
          {filtered.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="text-center py-20 text-zinc-600"
            >
              <Leaf size={32} className="mx-auto mb-3 opacity-40" />
              <p>No events found for "{query}"</p>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
