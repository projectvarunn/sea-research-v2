import CountryPageLayout from "@/components/CountryPageLayout";
import KpiCard from "@/components/KpiCard";
import { motion } from "framer-motion";

import BangladeshMacroMicro from "./bangladesh/BangladeshMacroMicro";
import BangladeshTechRegCons from "./bangladesh/BangladeshTechRegCons";
import BangladeshInvestStratRisk from "./bangladesh/BangladeshInvestStratRisk";
import BangladeshFunded from "./bangladesh/BangladeshFunded";
import BangladeshGigFreelance from "./bangladesh/BangladeshGigFreelance";

const sections = [
  { id: "header", label: "Market Context & KPIs" },
  { id: "macro-trends", label: "Macro Trends" },
  { id: "micro-trends", label: "Micro Trends" },
  { id: "tech-disruptions", label: "Tech Disruptions" },
  { id: "regulatory", label: "Regulatory Shifts" },
  { id: "consumer", label: "Consumer Behaviour" },
  { id: "horizon-map", label: "Trend Timeline" },
  { id: "strategic", label: "Strategic Imperatives" },
  { id: "risk-register", label: "Risk Register" },
  { id: "funded-edtech", label: "Funded Companies" },
  { id: "freelancing", label: "Freelancing Economy" },
  { id: "gig-economy", label: "Domestic Gig Economy" },
];

const staggerContainer = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function BangladeshPage() {
  return (
    <CountryPageLayout sections={sections}>
      {/* HEADER & MARKET CONTEXT */}
      <motion.div id="header" className="scroll-mt-20" initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
        <motion.div variants={fadeUp} className="flex items-center gap-4">
          <span className="text-5xl">🇧🇩</span>
          <div>
            <h1 className="font-heading text-3xl font-extrabold text-foreground">Bangladesh Higher Skilling Sector</h1>
            <p className="text-sm text-muted-foreground">Trend Intelligence Brief · March 2026 · Goldman Sachs Research · Confidential</p>
          </div>
        </motion.div>
        <motion.div variants={fadeUp} className="mt-4">
          <p className="text-sm text-muted-foreground bg-muted/30 p-5 border border-border rounded-lg leading-relaxed">
            <strong className="text-foreground">EXECUTIVE SUMMARY:</strong> Bangladesh's higher skilling sector is at a structural inflection point. With a 170M+ population, 67M-strong labour force, and a national digitisation mandate under Smart Bangladesh Vision 2041, the sector is transitioning from an informal tutelage network to a structured, venture-backed digital learning economy. Our analysis projects the combined addressable market for higher skilling—spanning Technology/AI, Healthcare, B2B Corporate Services, Advanced Manufacturing, and the Freelance/Gig economy—to expand from ~USD 1.2B (2025E) to ~USD 3.8B by 2031, representing a ~21% CAGR. Growth is driven acutely by the convergence of a severe structural skills mis-match (particularly in RMG automation and IT/ITES gaps), mass connectivity penetration (44%+), and rapid regulatory mandates (NSDA tiering, BMDC clinical credits).
          </p>
        </motion.div>
        
        <h3 className="font-heading font-bold text-lg mt-6 mb-3">I. Market Context & Core KPIs</h3>
        <motion.div variants={fadeUp} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <KpiCard label="Market Size (2025E)" value="~USD 1.2B" subtitle="Projected ~USD 3.8B by 2031" />
          <KpiCard label="Sector CAGR" value="~21%" subtitle="2026-2031 Growth Projection" />
          <KpiCard label="Target Labour Force" value="67M+" subtitle="Demographic operational base" />
          <KpiCard label="Critical Skill Gap" value="~58%" subtitle="Of workforce requires digital upskilling" />
          <KpiCard label="Internet Penetration" value="~44%" subtitle="Unlocking digital curriculum delivery" />
          <KpiCard label="Active Cloud Workers" value="650,000+" subtitle="Generating ~USD 1B+ Annually" />
        </motion.div>
      </motion.div>

      <BangladeshMacroMicro />
      <BangladeshTechRegCons />
      <BangladeshInvestStratRisk />
      <BangladeshFunded />
      <BangladeshGigFreelance />

    </CountryPageLayout>
  );
}
