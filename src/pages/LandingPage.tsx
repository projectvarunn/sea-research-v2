import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Globe, BarChart3, Target, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";

const activeCountries = [
  {
    flag: "🇸🇬",
    name: "Singapore",
    path: "/singapore",
    teaser: "USD 4.0B corporate education market with 14–15% CAGR in EdTech, powered by SkillsFuture's SGD 1B+ government commitment.",
  },
  {
    flag: "🇮🇩",
    name: "Indonesia",
    path: "/indonesia",
    teaser: "USD 1.8B EdTech market growing to USD 4.5B by 2029 at ~20% CAGR, driven by Prakerja 3.0 and PP 46/2023 corporate mandates.",
  },
  {
    flag: "🇧🇩",
    name: "Bangladesh",
    path: "/bangladesh",
    teaser: "~USD 1.2B market projected to ~USD 3.8B by 2031 at 21% CAGR under Smart Bangladesh Vision 2041.",
  },
  {
    flag: "🇲🇾",
    name: "Malaysia",
    path: "/malaysia",
    teaser: "RM 2.62B HRD Corp approved in 2025 (+32% YoY), driven by NIMP 2030, Care Economy, and AI upskilling policies.",
  },
  {
    flag: "🇵🇭",
    name: "Philippines",
    path: "/philippines",
    teaser: "US$40B+ BPO sector facing AI disruption, creating urgent demand for 1.8M workers to reskill alongside NAISR 2.0 mandates.",
  },
];

const inactiveCountries = [
  { flag: "🇻🇳", name: "Vietnam" },
  { flag: "🇹🇭", name: "Thailand" },
];

const stats = [
  { icon: MapPin, label: "Markets Active", value: "5" },
  { icon: BarChart3, label: "Sub-Sectors Analysed Per Market", value: "6" },
  { icon: Target, label: "TAM Tracked", value: "USD 2.5B+" },
  { icon: Globe, label: "Countries Mapped", value: "7" },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-br from-secondary via-navy-light to-secondary">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, hsl(168 80% 28% / 0.3) 0%, transparent 50%)" }} />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="font-heading text-4xl font-extrabold tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl">
              Higher Skilling Sector Intelligence Hub
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-primary-foreground/80">
              Strategic market intelligence across Southeast Asia's skilling economy — by Imarticus Learning Research
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-b border-border bg-card">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-border sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="flex items-center gap-3 px-4 py-5 sm:px-6">
              <s.icon className="h-5 w-5 shrink-0 text-primary" />
              <div>
                <p className="font-heading text-xl font-bold text-foreground">{s.value}</p>
                <p className="text-xs text-muted-foreground">{s.label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Country Grid */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="mb-8 font-heading text-2xl font-bold text-foreground">Country Reports</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {activeCountries.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
            >
              <Link
                to={c.path}
                className="group flex h-full flex-col rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:border-primary/40 hover:shadow-md"
              >
                <div className="flex items-center gap-3">
                  <span className="text-4xl">{c.flag}</span>
                  <h3 className="font-heading text-xl font-bold text-foreground">{c.name}</h3>
                </div>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{c.teaser}</p>
                <div className="mt-4 flex items-center gap-1 text-sm font-semibold text-primary transition-colors group-hover:text-primary/80">
                  View Report <ArrowRight className="h-4 w-4" />
                </div>
              </Link>
            </motion.div>
          ))}

          {inactiveCountries.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: (activeCountries.length + i) * 0.1, duration: 0.4 }}
            >
              <div className="flex h-full flex-col rounded-xl border border-border bg-muted/50 p-6 opacity-60">
                <div className="flex items-center gap-3">
                  <span className="text-4xl grayscale">{c.flag}</span>
                  <h3 className="font-heading text-xl font-bold text-muted-foreground">{c.name}</h3>
                </div>
                <p className="mt-3 flex-1 text-sm text-muted-foreground">Report data is being compiled for this market.</p>
                <div className="mt-4">
                  <span className="inline-flex items-center rounded-full bg-muted px-3 py-1 text-xs font-semibold text-muted-foreground">
                    Coming Soon
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card py-8">
        <div className="mx-auto max-w-7xl px-4 text-center text-xs text-muted-foreground sm:px-6">
          © {new Date().getFullYear()} Imarticus Learning Research. Confidential — Not for distribution.
        </div>
      </footer>
    </div>
  );
}
