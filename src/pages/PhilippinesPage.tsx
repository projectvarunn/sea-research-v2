import CountryPageLayout from "@/components/CountryPageLayout";
import SectionHeader from "@/components/SectionHeader";
import KpiCard from "@/components/KpiCard";
import PriorityBadge from "@/components/PriorityBadge";
import ImpactDots from "@/components/ImpactDots";
import TimelineBadge from "@/components/TimelineBadge";
import AlertBox from "@/components/AlertBox";
import TrendHorizonMap from "@/components/TrendHorizonMap";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useState } from "react";
import { motion } from "framer-motion";

const sections = [
  { id: "header", label: "Overview & KPIs" },
  { id: "executive-summary", label: "Executive Summary" },
  { id: "macro-trends", label: "Macro Trends" },
  { id: "micro-trends", label: "Micro Trends" },
  { id: "tech-disruptions", label: "Technology Disruptions" },
  { id: "regulatory", label: "Regulatory Shifts" },
  { id: "consumer", label: "Consumer Behaviour" },
  { id: "investment", label: "Investment Signals" },
  { id: "horizon-map", label: "Trend Timeline Map" },
  { id: "edtech-companies", label: "Philippines EdTech Companies" },
  { id: "strategic", label: "Strategic Synthesis" },
];

const staggerContainer = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function PhilippinesPage() {
  const [regFilter, setRegFilter] = useState("all");

  return (
    <CountryPageLayout sections={sections}>
      {/* HEADER & KPIs */}
      <motion.div id="header" className="scroll-mt-20" initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
        <motion.div variants={fadeUp} className="flex items-center gap-4">
          <span className="text-5xl">🇵🇭</span>
          <div>
            <h1 className="font-heading text-3xl font-extrabold text-foreground">Philippines Higher Skilling Market</h1>
            <p className="text-sm text-muted-foreground">Trend Intelligence Brief · March 2026 · Global Investment Research · Confidential</p>
          </div>
        </motion.div>
        <motion.div variants={fadeUp} className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <KpiCard label="Market Potential" value="US$ 3.2-4.8B" subtitle="Target Skilling TAM by 2030" />
          <KpiCard label="BPO Disruption" value="1.8M+" subtitle="Workers facing AI reskilling urgency" />
          <KpiCard label="Digital Economy" value="US$ 31B" subtitle="GMV 2024 (SEA's fastest growing)" />
          <KpiCard label="AI Market" value="US$ 1.025B" subtitle="Projected market by 2026 (28% CAGR)" />
        </motion.div>
      </motion.div>

      {/* EXECUTIVE SUMMARY */}
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
        <motion.div variants={fadeUp}>
          <SectionHeader id="executive-summary" number="ES" title="Executive Summary" />
          <div className="mt-4 space-y-4 text-sm leading-relaxed text-foreground">
            <p>The Philippines is at a structural inflection point in its higher skilling ecosystem. Converging pressures from AI-driven automation of its US$40B+ IT-BPO sector, a 1.8 million-strong BPO workforce facing reskilling urgency, healthcare export demands, and a government-led NAISR 2.0 pivot are collectively creating one of Southeast Asia's most dynamic skilling markets in 2026-2031.</p>
            <p>Companies operating across our six target sub-sectors are positioned to capture outsized returns if they align with the government's priority-skill verticals, ride the B2B corporate upskilling wave, and leverage AI-powered adaptive learning infrastructure.</p>
          </div>
          <div className="mt-4">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Across 6 Sub-Sectors</p>
            <div className="flex flex-wrap gap-2">
              <PriorityBadge level="critical" label="Technology & Digital/AI Skilling" />
              <PriorityBadge level="critical" label="Healthcare & Care Economy" />
              <PriorityBadge level="high" label="B2B Services (LMS/Corporate Training)" />
              <PriorityBadge level="high" label="Soft Skills Training" />
              <PriorityBadge level="medium" label="Advanced Manufacturing & Engineering" />
              <PriorityBadge level="medium" label="Business & Professional Services" />
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* MACRO TRENDS */}
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
        <motion.div variants={fadeUp}>
          <SectionHeader id="macro-trends" number="1" title="Macro Trends — 5 Global Forces Shaping Higher Skilling" subtitle="Structural, multi-year tailwinds reshaping the higher skilling landscape in the Philippines." />
          <Accordion type="multiple" className="mt-4">
            {[
              { id: "m1", title: "M1. AI-Driven Workforce Displacement — The BPO Reskilling Emergency", horizon: "Short-to-Mid Term", impact: 9, content: "The Philippines' IT-BPM sector employed 1.8M workers in 2024. GenAI is automating up to 89% of routine tasks. An IMF working paper found 40% of all jobs are significantly exposed to AI. This creates dual demand: reskilling displaced workers and training newly hired AI operators.", sowhat: "For a skilling company operating across Tech/AI, B2B LMS, and Soft Skills, this is the highest urgency opportunity. B2B contracts for AI literacy, prompt engineering, and automation tooling are immediately actionable." },
              { id: "m2", title: "M2. Government-Led Digital & AI Skills Mandate (NAISR 2.0)", horizon: "Short-to-Long Term", impact: 8, content: "The Philippines launched NAISR 2.0 in 2025. The National Digital Skills and AI Readiness Act mandates Future Skills Centers per region offering free training. A standardized skills taxonomy (PSF-AAI) provides guidelines for employers and schools.", sowhat: "Government-mandated skills frameworks create a procurement pipeline. B2B LMS providers with government-compliant modules and certification-mapping are well-positioned for public-sector contracting." },
              { id: "m3", title: "M3. Healthcare Export Demand & UHC Workforce Buildout", horizon: "Mid-to-Long Term", impact: 8, content: "The Philippines is a top global exporter of healthcare workers. Domestically, the Universal Health Care (UHC) Act has expanded capacity needs, creating shortfalls in clinical personnel. Tightening CME requirements and AHP certification pathways create massive recurring demand.", sowhat: "The healthcare skilling sub-sector offers captive domestic demand and strong export incentives. End-to-end CME platforms, NLE/NCLEX test prep, and AHP competency certification offer a structurally privileged position." },
              { id: "m4", title: "M4. Southeast Asia's Fastest-Growing Digital Economy", horizon: "Short-to-Mid Term", impact: 7, content: "Digital economy GMV grew 20% to US$31B in 2024. Accelerating FDI inflows in semiconductor and electronics sectors require trained engineering talent. The AI market revenue is projected to reach US$1.025B in 2026 (28% CAGR).", sowhat: "Rising FDI creates a B2B training pull from multinational employers. Corporate learning outsourcing and staffing partnerships with FDI-entering companies represent a high-margin, scalable revenue stream." },
              { id: "m5", title: "M5. Demographic Dividend & Structural Skills Gap", horizon: "Mid-to-Long Term", impact: 7, content: "Median age of 25.7 years. 2 million Filipinos turn 18 each year. Despite high internet penetration, ~90% lack basic ICT skills. WEF states 60% of the workforce needs training by 2027.", sowhat: "A youth-heavy demographic creates durable long-term demand. Income Share Agreement (ISA) and deferred payment models can dramatically expand the addressable market by removing upfront cost barriers." },
            ].map((m) => (
              <AccordionItem key={m.id} value={m.id}>
                <AccordionTrigger className="text-left">
                  <div className="flex items-center gap-3">
                    <span className="text-lg">○</span>
                    <div>
                      <span className="font-semibold">{m.title}</span>
                      <div className="mt-1 flex items-center gap-2">
                        <ImpactDots score={m.impact} />
                        <TimelineBadge timeline={m.horizon} />
                      </div>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="space-y-3 text-sm leading-relaxed">{m.content}</p>
                  <div className="mt-3">
                    <AlertBox type="signal" title="SO WHAT">
                      {m.sowhat}
                    </AlertBox>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </motion.div>

      {/* MICRO TRENDS */}
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
        <motion.div variants={fadeUp}>
          <SectionHeader id="micro-trends" number="2" title="Micro Trends — 7 Emerging Patterns (Last 12 Months)" subtitle="Real-time market signals shaping the market." />
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {[
              { id: "µ1", title: "Mandatory Corporate AI Literacy", timeline: "Short-Term (0–1 Yr)", impact: 9, content: "70% of Filipino business leaders intend to hire AI-skilled talent. 75% of CEOs trust AI integration, driving B2B corporate upskilling budgets from discretionary to mandatory.", sowhat: "Prioritize AI literacy module development for IBPAP and PEZA employers. Stackable micro-credentials integrated with HR tech." },
              { id: "µ2", title: "Healthcare Licensing & Test Prep Surge", timeline: "Short-Term (0–1 Yr)", impact: 8, content: "NLE, NCLEX, and OET for US/UK/Australia migration seeing surging enrollment. CME platform providers are experiencing recurring demand.", sowhat: "Healthcare test prep offers high willingness-to-pay driven by OFW remittances. AI-adaptive NCLEX/OET test prep is highly scalable." },
              { id: "µ3", title: "Rise of Micro-Credentials", timeline: "Short-Term (0–1 Yr)", impact: 8, content: "Employers increasingly accepting short-form certifications over degrees. TESDA is modularizing frameworks for stackable certificates aligned to AWS/Google/Microsoft.", sowhat: "Modular course architecture with government-compliant mapped credentials. Credential wallet functionality will drive platform stickiness." },
              { id: "µ4", title: "Advanced Manufacturing Skilling Demand", timeline: "Mid-Term (1–3 Yrs)", impact: 7, content: "High FDI inflows in SATS (Semiconductor Assembly) and Renewables creating shortages in precision engineering, solar installation, and automation technicians.", sowhat: "Partner with PEZA-zone employers and SEIPI. Simulation-based learning (VR/AR) is the most valued delivery format here." },
              { id: "µ5", title: "Soft Skills as Enterprise Differentiator", timeline: "Short-Term (0–1 Yr)", impact: 7, content: "BPO changing to KPO (Knowledge Process Outsourcing) roles demands upskilling in communication, leadership, and cross-cultural competency to complement AI tasks.", sowhat: "Soft skills are highest margin. Combine communication and leadership with AI roleplay practice tools for a compelling enterprise product." },
              { id: "µ6", title: "EdFinTech & ISA Models", timeline: "Short-to-Mid Term", impact: 6, content: "Income Share Agreements (ISA) via providers like Bukas and Avion School demonstrate strong unit economics. They eliminate upfront cost barriers.", sowhat: "Embed an EdFinTech solution (BNPL/ISA) to 3-5x the addressable market size." },
              { id: "µ7", title: "Regional Skilling Expansion", timeline: "Mid-to-Long Term", impact: 6, content: "FDI and Digital Hubs expanding beyond Metro Manila to Cebu, Davao, Pampanga, and Iloilo. Improved digital infrastructure enables online delivery in Visayas/Mindanao.", sowhat: "Lower-capex growth via online-first delivery models partnering with regional LGUs and universities." },
            ].map((t) => (
              <motion.div key={t.id} variants={fadeUp} className="group rounded-lg border border-border bg-card p-5 transition-colors hover:border-primary/40">
                <div className="mb-2 flex flex-wrap items-center gap-2">
                  <span className="rounded bg-primary/10 px-2 py-0.5 text-xs font-bold text-primary">{t.id}</span>
                  <TimelineBadge timeline={t.timeline} />
                  <ImpactDots score={t.impact} />
                </div>
                <h3 className="mb-2 font-heading text-sm font-bold text-foreground">{t.title}</h3>
                <p className="text-xs leading-relaxed text-muted-foreground">{t.content}</p>
                <div className="mt-3">
                  <AlertBox type="signal" title="SO WHAT"><p>{t.sowhat}</p></AlertBox>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* TECHNOLOGY DISRUPTIONS */}
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
        <motion.div variants={fadeUp}>
          <SectionHeader id="tech-disruptions" number="3" title="Technology Disruptions" subtitle="Actively reshaping delivery modes." />
          <div className="mt-4 space-y-4">
            {[
              { id: "T1", name: "Agentic AI & Personalised Adaptive Learning", timing: "Mainstream 2026-2027", desc: "AI orchestrating learning pathways, reducing dropout by identifying gaps and triggering assistance. Creates strong proprietary data moats." },
              { id: "T2", name: "AI-Powered Simulation & Virtual Labs", timing: "Mainstream 2026-2028", desc: "VR/AR simulation enhanced by AI scenario generation. Precedents like CloudSwyft prove viability in manufacturing and healthcare." },
              { id: "T3", name: "AI Roleplay & Conversational Practice", timing: "Mainstream 2025-2026", desc: "Infinite on-demand AI conversational scenarios. Transformative for soft skills and BPO upskilling." },
              { id: "T4", name: "Blockchain-Verified Credentials", timing: "Mainstream 2027-2029", desc: "Portable digital skill wallets adopting standardisation as TESDA digitalises qualifications." },
              { id: "T5", name: "Large-Scale LMS + HRIS Integration", timing: "Mainstream 2026", desc: "Enterprise LMS integrated into HR systems (Workday, SuccessFactors) is a bare minimum required to win BPO or corporate procurement RFPs." },
            ].map((tech) => (
              <motion.div key={tech.id} variants={fadeUp} className="rounded-lg border border-border bg-card p-5 hover:border-primary/40 transition-colors">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-bold text-primary">{tech.id}</span>
                  <h3 className="font-heading text-sm font-bold text-foreground">{tech.name}</h3>
                </div>
                <p className="mt-1 text-xs font-medium text-muted-foreground">{tech.timing}</p>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{tech.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* REGULATORY SHIFTS */}
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
        <motion.div variants={fadeUp}>
          <SectionHeader id="regulatory" number="4" title="Regulatory Shifts — Policy Changes" />
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b border-border bg-muted/50">
                  <th className="px-3 py-2 text-left font-semibold">Policy / Regulation</th>
                  <th className="px-3 py-2 text-left font-semibold">Timeline</th>
                  <th className="px-3 py-2 text-left font-semibold">Impact on Skilling Market</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: "National Digital Skills and AI Readiness Act", time: "Pending 2026-2027", impact: "Mandates Future Skills Centers per region offering free training. Subsidises certificates from BigTech." },
                  { name: "NAISR 2.0 (National AI Roadmap)", time: "Active 2025-2028", impact: "Mandatory AI integration in TVET curricula. Creates Philippine Skills Framework for Analytics & AI taxonomy." },
                  { name: "Trabaho Para sa Bayan Act", time: "Under Review", impact: "Job protection/retraining mandates for automated roles. Direct compliance trigger for L&D spend." },
                  { name: "UHC Act Phase 2 Implementation", time: "Active 2026-2028", impact: "Expands coverage to specialists. DOH tightening CME points for renewal. Demand surge for AHP training." },
                  { name: "TESDA Micro-Credential Integration", time: "Active Ongoing", impact: "TESDA accommodating short-course, competency-based programs instead of just traditional certificates." },
                ].map((r, i) => (
                  <tr key={i} className="border-b border-border">
                    <td className="px-3 py-2 font-medium text-foreground">{r.name}</td>
                    <td className="px-3 py-2"><TimelineBadge timeline={r.time} /></td>
                    <td className="max-w-md px-3 py-2 text-muted-foreground">{r.impact}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </motion.div>

      {/* CONSUMER & BUYER BEHAVIOR */}
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
        <motion.div variants={fadeUp}>
          <SectionHeader id="consumer" number="5" title="Consumer & Buyer Behavior Changes" />
          <div className="mt-4 grid gap-6 lg:grid-cols-2">
            <div className="rounded-lg border border-border bg-card p-5">
              <h3 className="font-heading text-lg font-bold text-foreground mb-3 border-b border-border pb-2">B2C (Individual Learner) Shifts</h3>
              <ul className="space-y-3 text-xs leading-relaxed text-muted-foreground">
                <li><strong className="text-foreground">Outcome-Orientation:</strong> Evaluating skilling by employment outcomes (job placement rate, salary uplift) instead of purely credentials.</li>
                <li><strong className="text-foreground">Mobile-First Consumption:</strong> Best format is under 10-minute micro-lectures due to massive mobile phone usage index.</li>
                <li><strong className="text-foreground">Community & Cohort Value:</strong> Discord/Slack-based learner communities outperform pure content libraries.</li>
                <li><strong className="text-foreground">OFW Upskilling Demand:</strong> 10M+ OFW diaspora represents a premium willingness-to-pay segment for asynchronous learning.</li>
              </ul>
            </div>
            <div className="rounded-lg border border-border bg-card p-5">
              <h3 className="font-heading text-lg font-bold text-foreground mb-3 border-b border-border pb-2">B2B (Corporate Buyer) Shifts</h3>
              <ul className="space-y-3 text-xs leading-relaxed text-muted-foreground">
                <li><strong className="text-foreground">CLOs & HR Tech Integration:</strong> Buyers demand analytics, SCORM compatibility, HRIS integration, and ROI reporting tied to KPIs. Plaftorms missing this fail to win enterprise RFPs.</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* INVESTMENT SIGNALS */}
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
        <motion.div variants={fadeUp}>
          <SectionHeader id="investment" number="6" title="Investment Signals" />
          <div className="mt-4 space-y-4 text-sm leading-relaxed text-foreground">
            <p>Active investment themes include AI-First Corporate Upskilling Platforms, EdFinTech / BNPL for Education (e.g., ErudiFi), Healthcare Skilling & Test Prep, and Virtual Labs.</p>
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-lg border border-border bg-muted/50 p-4">
                <h4 className="font-bold mb-2">Key Venture Backers</h4>
                <p className="text-xs text-muted-foreground">Foxmont Capital, Monk's Hill Ventures, Gobi-Core Philippine Fund, Felicis Ventures, Y Combinator.</p>
              </div>
              <div className="rounded-lg border border-border bg-muted/50 p-4">
                <h4 className="font-bold mb-2">EdFinTech Traction</h4>
                <p className="text-xs text-muted-foreground">ErudiFi/Bukas with strong models raising multi-million series A funding.</p>
              </div>
              <div className="rounded-lg border border-border bg-muted/50 p-4">
                <h4 className="font-bold mb-2">Impact & DFI Capital</h4>
                <p className="text-xs text-muted-foreground">Lorinet Foundation, EduLab Capital, and ADB looking for measurable access-to-education results.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* TREND TIMELINE MAP */}
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
        <motion.div variants={fadeUp}>
          <SectionHeader id="horizon-map" number="7" title="Trend Timeline Map" />
          <div className="mt-4">
            <TrendHorizonMap data={[
              { trend: "M1: AI-Driven BPO Disruption", category: "Macro", shortTerm: "Immediate (Now)", midTerm: "2026–2028", longTerm: "2028-2031", impact: 9, detail: "1.8M workers facing automation risks." },
              { trend: "M2: NAISR 2.0 AI Mandate", category: "Macro", shortTerm: "Policy Active", midTerm: "Full Rollout", longTerm: "Systemic Shift", impact: 8, detail: "Standardized skills taxonomy and regulation." },
              { trend: "M3: Healthcare Export/UHC", category: "Macro", shortTerm: "Growing", midTerm: "Peak Growth", longTerm: "Sustained", impact: 8, detail: "Nurses and AHPs demand surge globally and locally." },
              { trend: "µ1: Corporate AI Literacy", category: "Micro", shortTerm: "Urgent", midTerm: "Standard", longTerm: "Commoditised", impact: 9, detail: "B2B Upskilling wave." },
              { trend: "µ2: Healthcare Test Prep", category: "Micro", shortTerm: "Growing", midTerm: "Peak Demand", longTerm: "Sustained", impact: 8, detail: "NCLEX, OET, NLE prep needs." },
              { trend: "T1: GenAI Adaptive Learning", category: "Tech", shortTerm: "Early Adopters", midTerm: "Mainstream", longTerm: "Standard", impact: 9, detail: "Agentic AI orchestrated learning paths." },
              { trend: "T3: AI Roleplay Simulation", category: "Tech", shortTerm: "Mainstream", midTerm: "Ubiquitous", longTerm: "Commoditised", impact: 7, detail: "Soft skills practice at scale." },
            ]} />
          </div>
        </motion.div>
      </motion.div>

      {/* PHILIPPINES EDTECH COMPANIES */}
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
        <motion.div variants={fadeUp}>
          <SectionHeader id="edtech-companies" number="8" title="PHILIPPINES EdTech COMPANIES — FUNDED (2015–2026)" subtitle="Funded EdTech and adjacent ecosystem companies." />
          <div className="mt-4 overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b border-border bg-muted/50">
                  <th className="px-3 py-2 text-left font-semibold">Company Name</th>
                  <th className="px-3 py-2 text-left font-semibold">Funding & Year</th>
                  <th className="px-3 py-2 text-left font-semibold">Company Website</th>
                  <th className="px-3 py-2 text-left font-semibold">Investors</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: "Edukasyon.ph", funding: "~US$ 3.37M–7.97M (7 rounds)", website: "edukasyon.ph", inv: "Mustard Seed, Gobi-Core, Foxmont, Lorinet" },
                  { name: "ErudiFi / Bukas", funding: "US$ 5M Series A (2021) + YC W18", website: "bukas.ph", inv: "Monk's Hill, Qualgro, Y Combinator" },
                  { name: "CloudSwyft", funding: "US$ 125K (YC) + prior funding", website: "cloudswyft.com", inv: "Y Combinator, Fourth Realm VC" },
                  { name: "Edusuite", funding: "US$ 235K Seed (2019)", website: "edusuite.com.ph", inv: "Angel investors" },
                  { name: "SiM Learning Technologies", funding: "Undisclosed (Series A stage)", website: "sim.edu.ph", inv: "Undisclosed" },
                  { name: "Avion School", funding: "Bootstrapped / ISA Revenue", website: "avionschool.com", inv: "Self-funded / ISA Model" },
                  { name: "Lyon LMS", funding: "Angel Investment (2019)", website: "lyon.ph", inv: "Amino Labs" },
                  { name: "Kalibrr", funding: "US$ 6M+ (Multiple rounds)", website: "kalibrr.com", inv: "Y Combinator, Felicis Ventures, 500 Startups" },
                  { name: "Sinag Learning", funding: "Undisclosed Seed", website: "sinag.com.ph", inv: "Angel/Seed investors" },
                  { name: "KITE", funding: "Strategic Investment (2021)", website: "kite.ph", inv: "Alibaba Cloud, DITO CME" },
                  { name: "Edukasyon EDGE Tutor", funding: "Acquired (2023)", website: "edukasyon.ph", inv: "Post-acquisition" },
                  { name: "Uplift Code Camp", funding: "Revenue-funded / ErudiFi Partner", website: "upliftcodecamp.com", inv: "Revenue-funded" },
                ].map((c, i) => (
                  <tr key={i} className="border-b border-border transition-colors hover:bg-muted/30">
                    <td className="px-3 py-2 font-medium text-foreground">{c.name}</td>
                    <td className="px-3 py-2 text-muted-foreground">{c.funding}</td>
                    <td className="px-3 py-2">
                       <a href={`https://${c.website}`} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">
                         {c.website}
                       </a>
                    </td>
                    <td className="px-3 py-2 text-muted-foreground">{c.inv}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </motion.div>

      {/* STRATEGIC SYNTHESIS */}
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
        <motion.div variants={fadeUp}>
          <SectionHeader id="strategic" number="9" title="Strategic Synthesis — So What Analysis" subtitle="Cross-cutting strategic implications." />
          <div className="mt-6 space-y-4">
            {[
              { level: "critical", label: "Priority 1: Tech / AI Skilling", detail: "Launch a modular AI Literacy for Business programme targeting IBPAP members. Pursue PSF-AAI curriculum alignment." },
              { level: "critical", label: "Priority 2: Healthcare & Care Economy", detail: "Build or license NLE, NCLEX, and OET adaptive test prep with AI personalized mock testing. Pursue PRC/PNA accreditation." },
              { level: "high", label: "Priority 3: B2B LMS & Corporate Training", detail: "Build HRIS integration APIs (SAP, Workday). Develop CLO-grade dashboards and end-to-end managed programs." },
              { level: "high", label: "Priority 4: Soft Skills", detail: "Package communication leadership with AI roleplay tools. Position as a bridge between BPO voice roles and KPO jobs." },
              { level: "medium", label: "Priority 5: Advanced Manufacturing", detail: "Build partnerships with PEZA-zone employers and SEIPI. Develop simulation-based learning." }
            ].map((p, i) => (
              <motion.div key={i} variants={fadeUp} className="flex gap-4 rounded-lg border border-border bg-card p-5 hover:border-primary/40 transition-colors">
                <div className="mt-1"><PriorityBadge level={p.level as any} label={`P${i+1}`} /></div>
                <div>
                  <h4 className="font-heading text-sm font-bold text-foreground">{p.label}</h4>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{p.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </CountryPageLayout>
  );
}
