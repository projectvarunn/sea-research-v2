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
  { id: "edtech-companies", label: "Malaysia EdTech Companies" },
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

export default function MalaysiaPage() {
  const [regFilter, setRegFilter] = useState("all");

  return (
    <CountryPageLayout sections={sections}>
      {/* HEADER & KPIs */}
      <motion.div id="header" className="scroll-mt-20" initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
        <motion.div variants={fadeUp} className="flex items-center gap-4">
          <span className="text-5xl">🇲🇾</span>
          <div>
            <h1 className="font-heading text-3xl font-extrabold text-foreground">Malaysia Higher Skilling Market</h1>
            <p className="text-sm text-muted-foreground">Trend Intelligence Brief · March 2026 · Global Investment Research · Confidential</p>
          </div>
        </motion.div>
        <motion.div variants={fadeUp} className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <KpiCard label="HRD Corp Approvals" value="RM 2.62B" subtitle="Training Assistance in 2025 (+32% YoY)" />
          <KpiCard label="Approved Places" value="2.8M+" subtitle="Training places approved in 2025" />
          <KpiCard label="Digital Economy" value="23.4%" subtitle="Contribution to GDP (2024)" />
          <KpiCard label="Budget 2025" value="RM 1.5B" subtitle="Skilling Allocation" />
        </motion.div>
      </motion.div>

      {/* EXECUTIVE SUMMARY */}
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
        <motion.div variants={fadeUp}>
          <SectionHeader id="executive-summary" number="ES" title="Executive Summary" />
          <div className="mt-4 space-y-4 text-sm leading-relaxed text-foreground">
            <p>Malaysia's Higher Skilling sector is at a critical point. With HRD Corp (Human Resources Development Corporation) approving RM 2.62 billion in training assistance in 2025 — a 32% year-on-year increase — the market is structurally expanding across all six sub-sectors. The convergence of Malaysia's ASEAN Chairmanship (2025), the National Industrial Master Plan (NIMP) 2030 targets, the MADANI Economy Framework, and accelerating AI adoption is creating a generational opportunity for higher-skilling platform operators.</p>
            <p>Companies that can navigate HRD Corp claimability, deliver measurable outcomes, and operate across B2B and B2C channels simultaneously will capture a disproportionate share of this expanding market.</p>
          </div>
          <div className="mt-4">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Across 6 Sub-Sectors</p>
            <div className="flex flex-wrap gap-2">
              <PriorityBadge level="critical" label="Technology & Digital/AI Skilling" />
              <PriorityBadge level="critical" label="Healthcare & Care Economy" />
              <PriorityBadge level="high" label="B2B Services (LMS/Corporate Training/Staffing)" />
              <PriorityBadge level="high" label="Soft Skills" />
              <PriorityBadge level="medium" label="Advanced Manufacturing" />
              <PriorityBadge level="medium" label="Business & Professional Services" />
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* MACRO TRENDS */}
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
        <motion.div variants={fadeUp}>
          <SectionHeader id="macro-trends" number="1" title="Macro Trends — 5 Global Forces Shaping Higher Skilling in Malaysia" subtitle="Structural, multi-year tailwinds reshaping the higher skilling landscape in Malaysia." />
          <Accordion type="multiple" className="mt-4">
            {[
              { id: "m1", title: "M1. The AI-Driven Skills Obsolescence Imperative", horizon: "Short-Term (0–1 Yr)", impact: 9, content: "The World Economic Forum's Future of Jobs Report 2025 estimates that 39% of global workers' core skills will be disrupted or made obsolete within 5 years. In Malaysia, the digital economy contributed 23.4% to GDP in 2024 and is projected to reach 25% by 2025, creating acute demand for technology reskilling across all industries. The manufacturing sector — Malaysia's largest employer — faces particular pressure as Industry 4.0 (4IR) automation accelerates. HRD Corp approved RM 130 million specifically for 4IR initiative training in 2025, covering 103,000+ training places in digital economy and ICT sectors. The result: skilling providers offering AI, data analytics, cloud computing, and cybersecurity curricula are experiencing a demand surge that is unlikely to plateau in the near term.", sowhat: "For a multi-sub-sector skilling platform, AI obsolescence anxiety is the most powerful demand driver. Orienting all six sub-sectors around 'future-proof' skill certifications, and building strong HRD Corp claimability for tech curricula, directly monetizes this macro force." },
              { id: "m2", title: "M2. ASEAN Economic Integration and Talent Mobility", horizon: "Mid-Term (1–3 Yrs)", impact: 8, content: "Malaysia's ASEAN Chairmanship in 2025, under the theme 'Inclusivity and Sustainability', has brought workforce mobility and mutual recognition of qualifications into sharp regional focus. The ASEAN Year of Skills (AYOS) 2025 initiative, hosted by Malaysia, aims to equip ASEAN Member States with resilient, adaptable skilled workforces. This creates structural cross-border demand for recognized certifications and standardized skilling frameworks. The ASEAN Mutual Recognition Arrangements (MRAs) now cover engineering, architecture, nursing, medicine, dental practitioners, and accountancy. Countries with internationally recognized, stackable micro-credentials gain significant competitive advantage in attracting regional talent pipelines.", sowhat: "Positioning certifications and credentials as regionally recognized (via ASEAN MRA alignment or international awarding bodies) unlocks both inbound learners from neighboring markets and outbound partnerships with regional employers seeking to hire from a common talent pool." },
              { id: "m3", title: "M3. Malaysia's National Industrial Master Plan 2030 and Green Economy Transition", horizon: "Long-Term (3–5 Yrs)", impact: 8, content: "The National Industrial Master Plan (NIMP) 2030 is Malaysia's overarching industrial policy targeting high-value manufacturing, advanced services, and sustainability. It directly mandates workforce upskilling in aerospace, medical devices, chemicals, and electric vehicles. Separately, the MADANI Economy Framework emphasizes inclusive growth, green jobs, and digital transformation — all requiring new skilling competencies. The push toward ESG compliance and net-zero commitments by 2050 is generating demand for green manufacturing training, environmental auditing skills, and sustainable business management programs — particularly in the Advanced Manufacturing and Business/Professional Services sub-sectors.", sowhat: "Sub-sector strategies in Advanced Manufacturing and B2B Services should be aligned to NIMP 2030's priority industries. Green skills training is an emerging white space with minimal competition but growing government procurement interest — an early-mover advantage opportunity." },
              { id: "m4", title: "M4. Post-Pandemic Behavioral Normalization of Online and Hybrid Learning", horizon: "Short-Term (0–1 Yr)", impact: 7, content: "The COVID-19 pandemic catalyzed a permanent behavioral shift toward digital-first learning. Malaysia's EdTech market is projected to reach US$ 2.5 billion by 2025, with sustained demand for flexible, self-paced, and mobile-accessible learning formats. Corporate learners now expect 'Netflix-style' on-demand content delivery, while the B2B LMS market has matured significantly, with organizations integrating learning directly into daily workflows. HRD Corp has formally recognized LMS platform subscriptions and virtual training as first-class claimable investments — a structural policy shift that legitimizes digital skilling infrastructure spend for 12,500+ HRD Corp-registered employers.", sowhat: "HRD Corp claimability for LMS and digital training is a direct revenue enabler. Building a platform architecture that generates the attendance tracking, completion data, and audit-ready reporting required for eTRiS claims significantly reduces buyer friction and shortens sales cycles." },
              { id: "m5", title: "M5. Demographic Dividend and Rising Middle-Class Skilling Aspirations", horizon: "Mid-Term (1–3 Yrs)", impact: 7, content: "Malaysia's median age of 30.5 years creates a large, productivity-oriented workforce cohort seeking career advancement through credentials. The national literacy rate exceeds 95%, smartphone penetration surpasses 82%, and internet connectivity covers 92% of the population — creating ideal conditions for mass-market digital skilling adoption. The expanding middle class, particularly in Tier 2 cities beyond Kuala Lumpur (Johor Bahru, Penang, Ipoh, Kota Kinabalu), represents an underserved market for professional upskilling. Additionally, Malaysia's 300,000+ annual university graduates face a structural mismatch between academic qualifications and employer skill requirements — creating persistent demand for post-graduation skilling programs across technology, business, and healthcare sub-sectors.", sowhat: "Geographic expansion beyond Klang Valley and targeting the 'recently graduated' demographic cohort with outcome-linked programs (job placement, salary increment guarantees) are high-leverage growth vectors." },
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
          <SectionHeader id="micro-trends" number="2" title="Micro Trends — 7 Emerging Patterns (Last 12 Months)" subtitle="Real-time market signals shaping sub-sectors in Malaysia." />
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {[
              { id: "µ1", title: "HRD Corp Hourly-Based Claim Reform and Raised Fee Ceiling", timeline: "Short-Term (0–1 Yr)", impact: 9, content: "HRD Corp introduced an enhanced Allowable Cost Matrix, enabling employers to claim training on an hourly basis, and raised the daily training fee ceiling to RM 10,500 per participant. This eliminates cost-prohibitiveness for high-value, specialist programs (AI, cybersecurity, healthcare CME).", sowhat: "Immediately re-price premium content to the new ceiling. Build RM 10,500/day programs in high-demand niches. The levy-funded buyer behaves like an institutional purchaser — higher conversions and deal sizes." },
              { id: "µ2", title: "AI Literacy Mandates Becoming Corporate Standard", timeline: "Short-Term (0–1 Yr)", impact: 9, content: "Malaysian corporates (banking, shared services, manufacturing) have begun mandating AI literacy training across non-technical staff. MDEC actively promotes AI certification through D200. AI literacy is increasingly written into KPIs and HR frameworks for mid-level managers.", sowhat: "Develop modular AI literacy curricula specifically designed for non-technical professionals. Sell as annual corporate licenses — recurring revenue at meaningful deal sizes." },
              { id: "µ3", title: "Healthcare Workforce Skilling a National Emergency Priority", timeline: "Short-Term (0–1 Yr)", impact: 8, content: "Malaysia faces a shortage of 30,000+ Allied Health Professionals (AHPs) by 2030. Malaysian Medical Council (MMC) tightened CME point requirements for license renewal. Care Economy is the fastest-growing healthcare sub-segment requiring new competency frameworks.", sowhat: "Healthcare skilling is a protected, non-cyclical market with mandatory demand. Building an accredited CME and AHP training vertical creates highly defensible recurring revenue." },
              { id: "µ4", title: "Corporate L&D Budget Consolidation Toward Platform Vendors", timeline: "Mid-Term (1–3 Yrs)", impact: 8, content: "Malaysian enterprises are consolidating fragmented training spend onto 2–3 preferred platform partners. Driven by CFO pressure for ROI visibility, HRD Corp audit compliance, and centralized LMS efficiency. Buyers want a single vendor for content, reporting, and eTRiS claims.", sowhat: "Platform positioning is more valuable than content-only. Investing in LMS infrastructure, outcome dashboards, and HRD Corp eTRiS integration creates high switching costs." },
              { id: "µ5", title: "Rise of Industry-Embedded Micro-Credentials", timeline: "Mid-Term (1–3 Yrs)", impact: 7, content: "MoHE and MQA actively piloting micro-credential frameworks for MQF recognition. Public universities (UM, UTM, APU) partnering with private providers. Employers, particularly MNCs in Penang and Iskandar Malaysia, formally recognize these in hiring.", sowhat: "University partnerships for co-branded micro-credentials create institutional credibility, access to students, and MQF recognition. Prioritize partnerships near industrial clusters." },
              { id: "µ6", title: "Soft Skills Training Experiencing Renewed Corporate Demand", timeline: "Short-Term (0–1 Yr)", impact: 7, content: "As AI handles routine tasks, demand for uniquely human soft skills (critical thinking, leadership, empathy) is accelerating. TalentCorp 2025 Skills Demand Report identifies communication/leadership as top gaps in SMEs. HRD Corp data shows soft skills as second-highest category.", sowhat: "High-margin, low-content-cost programs with strong repeat rates. Industry-vertical framing (healthcare leadership, B2B negotiation) commands 40–60% pricing premiums." },
              { id: "µ7", title: "B2B Staffing and Workforce Solutions Converging with Training", timeline: "Mid-Term (1–3 Yrs)", impact: 8, content: "Professional staffing industry converging with training platforms ('train-to-deploy' model). Reduces time-to-productivity for employers, creates second revenue stream (placement fees) for platforms, and generates verifiable outcome data.", sowhat: "'Train-to-deploy' is the highest-defensibility positioning in B2B. Demonstrating graduates are hired within 90 days becomes the most powerful conversion tool in enterprise sales." },
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
          <SectionHeader id="tech-disruptions" number="3" title="Technology Disruptions" subtitle="Actively reshaping the higher skilling delivery model, learner experience, and institutional operations." />
          <div className="mt-4 space-y-4">
            {[
              { id: "T1", name: "Generative AI Content and Curriculum Tools", timing: "Mainstream Now (2025)", desc: "Tools like GPT-4o, Claude, Gemini deployed to auto-generate course content, simulations, and assessments at a fraction of traditional costs. MDEC's AI programmes actively subsidize adoption. Immediate impact for content creation; 12–18 months for full curriculum automation." },
              { id: "T2", name: "Adaptive Learning Engines and Personalized Learning Paths", timing: "Early Adoption (2025–2026)", desc: "AI-driven systems adjust content difficulty, pacing based on learner data. Area9 Rhapsode and D2L Brightspace beginning SEA expansion. For corporate B2B, reduces completion time by 30–40% and improves retention. Compelling ROI for L&D buyers." },
              { id: "T3", name: "Extended Reality (XR) and Immersive Simulation", timing: "Mid-Term (2026–2028)", desc: "VR/AR simulations gaining traction in Advanced Manufacturing (equipment operation) and Healthcare (surgical technique). Enterprise VR hardware costs declining ~30% per year. Government-linked manufacturing training centers are likely first-movers." },
              { id: "T4", name: "Skills Intelligence and Workforce Analytics Platforms", timing: "Early Adoption (2025–2026)", desc: "Platforms mapping employee skill inventories, identifying gaps, and recommending pathways (Lightcast, Eightfold AI). Connecting HR strategy to L&D investment. Highly strategic for embedding into enterprise workforce planning." },
              { id: "T5", name: "Blockchain-Verified Credentials and Digital Wallets", timing: "Long-Term (2027–2030)", desc: "Eliminates fraudulent certificates—a persistent problem in Malaysia. MQA exploring digital credential frameworks. Elevates perceived credential value and network effects (employers prefer easy-to-verify platforms)." },
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
          <SectionHeader id="regulatory" number="4" title="Regulatory Shifts — Policy Changes to Watch" />
          <div className="mt-4 flex flex-wrap items-center gap-2 text-xs">
            <span className="font-medium text-muted-foreground">Filter:</span>
            {["all", "2025", "2026", "2027", "Ongoing"].map((f) => (
              <button key={f} onClick={() => setRegFilter(f)} className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${regFilter === f ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-border"}`}>
                {f === "all" ? "All" : f}
              </button>
            ))}
          </div>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b border-border bg-muted/50">
                  <th className="px-3 py-2 text-left font-semibold">Policy / Regulation</th>
                  <th className="px-3 py-2 text-left font-semibold">Authority</th>
                  <th className="px-3 py-2 text-left font-semibold">Timeline</th>
                  <th className="px-3 py-2 text-left font-semibold">Impact on Skilling Market</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: "PSMB Act 2001 Amendment — Expanded Levy Scope to All Industries", auth: "HRD Corp / Ministry of Human Resources", time: "Active (2021–Present)", impact: "12,500+ new registered employers now mandated to contribute and utilize levy funds. Massive increase in addressable B2B training market." },
                  { name: "MQF 3.0 Micro-Credential Pilot", auth: "MQA (Malaysian Qualifications Agency)", time: "2025–2026 Pilot, 2027 Rollout", impact: "Formalizes short-form learning within national qualifications structure. Providers offering recognized micro-credentials gain institutional legitimacy." },
                  { name: "NIMP 2030 Workforce Skills Annex", auth: "MIDA / MOSTI", time: "2025–2030 (Phased)", impact: "Designates priority skills for national industrial clusters. Aligned providers gain preferential access to government procurement." },
                  { name: "Medical Act 1971 — CME Point Amendments", auth: "Malaysian Medical Council (MMC)", time: "2025–2026 Implementation", impact: "Tightens minimum annual CME points for medical license renewal. Structurally expands addressable market for accredited healthcare skilling." },
                  { name: "Allied Health Professions Act — AHP Licensing Tightening", auth: "Ministry of Health Malaysia", time: "2025–2027 Phased", impact: "New minimum training hours and re-certification requirements for 18 AHP categories. Creates recurring mandatory demand for AHP skilling programs." },
                  { name: "MyDigital Blueprint 2021–2030 — Digital Skills Mandate", auth: "MDEC", time: "Ongoing (2021–2030)", impact: "National target: 500,000 new digital economy jobs by 2025. Technology skilling providers aligned are prioritized for government-linked contracts." },
                  { name: "Employment Act 1955 (2022 Amendment) — Structured L&D", auth: "Ministry of Human Resources", time: "Under Discussion (2026–2027)", impact: "Proposals circulating to mandate structured individual development plans for employees in large enterprises. Dramatically expands mandatory L&D spending." },
                  { name: "Budget 2025 — RM 1.5 Billion Skills Allocation", auth: "Ministry of Finance Malaysia", time: "FY 2025", impact: "Direct government funding for upskilling initiatives across priority sectors. Registered training providers gain access to this capital pool." },
                ].filter(r => regFilter === "all" ? true : r.time.includes(regFilter)).map((r, i) => (
                  <tr key={i} className="border-b border-border">
                    <td className="px-3 py-2 font-medium text-foreground">{r.name}</td>
                    <td className="px-3 py-2 text-muted-foreground">{r.auth}</td>
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
          <SectionHeader id="consumer" number="5" title="Consumer & Buyer Behavior Changes" subtitle="Distinct buyer journeys across B2C and B2B." />
          <div className="mt-4 grid gap-6 lg:grid-cols-2">
            <div className="rounded-lg border border-border bg-card p-5">
              <h3 className="font-heading text-lg font-bold text-foreground mb-3 border-b border-border pb-2">B2C (Individual Learner) Shifts</h3>
              <ul className="space-y-3 text-xs leading-relaxed text-muted-foreground">
                <li><strong className="text-foreground">Outcome-First Decision Making:</strong> Learners enroll based on verifiable post-program outcomes (employment rate, salary uplift) rather than brand prestige.</li>
                <li><strong className="text-foreground">Mobile-First, Microlearning:</strong> 78% of EdTech users access via smartphone. 5–15 min modules with progress badges vastly outperform long-form content.</li>
                <li><strong className="text-foreground">Community & Cohort Value:</strong> Willingness to pay premium for cohort-based learning + networking, especially among urban 25–40 yr olds.</li>
                <li><strong className="text-foreground">Credential Portability:</strong> Demand for internationally or specific-employer recognized credentials over purely domestic ones.</li>
                <li><strong className="text-foreground">Outcome Purchasing vs Subscription:</strong> Broad 'all-access' subscriptions losing to specific outcome-purchasing models.</li>
              </ul>
            </div>
            <div className="rounded-lg border border-border bg-card p-5">
              <h3 className="font-heading text-lg font-bold text-foreground mb-3 border-b border-border pb-2">B2B (Corporate Buyer) Shifts</h3>
              <ul className="space-y-3 text-xs leading-relaxed text-muted-foreground">
                <li><strong className="text-foreground">Procurement Consolidation:</strong> Reducing vendor lists to 2-3 strategic platform partners. LMS, analytics, and HRD Corp integration are now table stakes.</li>
                <li><strong className="text-foreground">ROI Accountability:</strong> CFOs require measurable training ROI (completion rates, competency assessments) before renewals.</li>
                <li><strong className="text-foreground">Speed-to-Deployment:</strong> Prioritize providers who can deploy a full program within 2–4 weeks. Long timelines kill deals.</li>
                <li><strong className="text-foreground">ESG & Workforce Equity:</strong> Large corporates on Bursa Malaysia counting training hours as ESG metrics, creating new L&D budget justifications.</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* INVESTMENT SIGNALS */}
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
        <motion.div variants={fadeUp}>
          <SectionHeader id="investment" number="6" title="Investment Signals — Where Smart Money is Flowing" />
          <div className="mt-4 space-y-4 text-sm leading-relaxed text-foreground">
            <p>Malaysia's EdTech investment landscape remains early-stage relative to regional peers, but structural signals indicate an impending acceleration. The HRD Corp-funded B2B training market creates a more defensible revenue base than pure B2C EdTech.</p>
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-lg border border-border bg-muted/50 p-4">
                <h4 className="font-bold mb-2">VC & PE Signals</h4>
                <p className="text-xs text-muted-foreground">Quest Ventures, Gobi Partners, 500 Global active. Indelible Ventures, RHL Ventures backing B2B. Owl Ventures increasing SEA deployment for workforce platforms.</p>
              </div>
              <div className="rounded-lg border border-border bg-muted/50 p-4">
                <h4 className="font-bold mb-2">M&A & Corporate Activity</h4>
                <p className="text-xs text-muted-foreground">Consolidation beginning: larger HRD Corp providers acquiring niche content houses. Global LMS (SAP, Cornerstone) distributors scaling. YTL Corp & Healthcare groups expanding internal academies.</p>
              </div>
              <div className="rounded-lg border border-border bg-muted/50 p-4">
                <h4 className="font-bold mb-2">Gov & Development Finance</h4>
                <p className="text-xs text-muted-foreground">RM 2.62B HRD Corp approved in 2025. MDEC Blueprint grants. World Bank (GEMS) and ADB loans signaling multilateral confidence.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* TREND TIMELINE MAP */}
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
        <motion.div variants={fadeUp}>
          <SectionHeader id="horizon-map" number="7" title="Trend Timeline Map" subtitle="Strategic planning timeline." />
          <div className="mt-4">
            <TrendHorizonMap data={[
              { trend: "M1: AI-Driven Skills Obsolescence", category: "Macro", shortTerm: "● Peak demand now", midTerm: "Sustained", longTerm: "New equilibrium", impact: 9, detail: "Core skills disrupted within 5 years." },
              { trend: "M2: ASEAN Talent Mobility", category: "Macro", shortTerm: "ASEAN Chair momentum", midTerm: "● MRA expansion", longTerm: "Regional standard", impact: 8, detail: "Cross-border demand for recognized certifications." },
              { trend: "M3: NIMP 2030 & Green Economy", category: "Macro", shortTerm: "Policy rollout", midTerm: "● Budget cycles", longTerm: "● Full adoption", impact: 8, detail: "Manufacturing upskilling and ESG commitments." },
              { trend: "µ1: HRD Corp Claim Reform", category: "Micro", shortTerm: "● Price ceiling impact", midTerm: "Policy iteration", longTerm: "Institutionalized", impact: 9, detail: "Hourly claims and RM 10,500/day fee ceiling." },
              { trend: "µ2: AI Literacy Corporate Mandates", category: "Micro", shortTerm: "● Rapid adoption", midTerm: "Curriculum maturation", longTerm: "Baseline req.", impact: 9, detail: "Non-technical AI training written into KPIs." },
              { trend: "µ3: Healthcare AHP Skilling", category: "Micro", shortTerm: "● Shortage crisis", midTerm: "● Accreditation race", longTerm: "Market leaders emerge", impact: 8, detail: "30,000+ AHP shortage by 2030." },
              { trend: "T1: GenAI Content Tools", category: "Tech", shortTerm: "● Deployed now", midTerm: "Cost parity", longTerm: "Commoditized", impact: 10, detail: "Auto-generating curricula at fraction of traditional costs." },
              { trend: "T3: XR/VR Training Simulations", category: "Tech", shortTerm: "Hardware pilots", midTerm: "● Manufacturing/Health", longTerm: "● Mass adoption", impact: 8, detail: "Immersive simulations for high-stakes skilling." },
            ]} />
          </div>
        </motion.div>
      </motion.div>

      {/* MALAYSIA EDTECH COMPANIES */}
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
        <motion.div variants={fadeUp}>
          <SectionHeader id="edtech-companies" number="8" title="Malaysia EdTech Companies — Funded (2015–2025)" subtitle="EdTech and higher skilling-adjacent companies with venture/grant funding." />
          <div className="mt-4 overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b border-border bg-muted/50">
                  <th className="px-3 py-2 text-left font-semibold">Company Name</th>
                  <th className="px-3 py-2 text-left font-semibold">Funding & Year</th>
                  <th className="px-3 py-2 text-left font-semibold">Company Website</th>
                  <th className="px-3 py-2 text-left font-semibold">Investors</th>
                  <th className="px-3 py-2 text-left font-semibold">Description</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: "Pandai", funding: "US$ 2.03M (Seed, Jan 2022)", website: "pandai.org", inv: "Y Combinator, 500 Global, Gobi Partners, Cradle Fund", desc: "SaaS-based platform for school students" },
                  { name: "Easyuni", funding: "US$ 1.37M (Series A, 2016)", website: "easyuni.com", inv: "Intres Capital Partners", desc: "Discovery platform for universities" },
                  { name: "Mindvalley", funding: "Undisclosed — bootstrapped/strategic", website: "mindvalley.com", inv: "Self-funded / Strategic operators", desc: "Global online learning platform for personal growth" },
                  { name: "FrogAsia", funding: "Corporate-backed, RM 1.5B+ gov contract", website: "frogasia.com", inv: "YTL Corporation", desc: "Cloud-based virtual learning (Frog VLE) for government schools" },
                  { name: "ReSkills", funding: "Bootstrapped + Cradle CIP300 (~RM 300K, 2020)", website: "reskills.com", inv: "Cradle Fund Sdn Bhd", desc: "Multi disciplinary learning solutions" },
                  { name: "eLearningMinds", funding: "Undisclosed early-stage (2017)", website: "learnxasiapacific.com", inv: "Gobi Partners, angel investors", desc: "Digital learning content design, LMS consulting" },
                  { name: "Accredify (Malaysia ops)", funding: "SGD 3.5M (Series A, 2021)", website: "accredify.io", inv: "Quest Ventures, East Ventures", desc: "Blockchain-powered digital credentials" },
                  { name: "TalentLabs", funding: "Undisclosed Seed (2021)", website: "talentlabs.org", inv: "Cradle Fund, angels", desc: "Full-stack technology career platform" },
                  { name: "NEXT Academy", funding: "Undisclosed early-stage (2015)", website: "nextacademy.com", inv: "1337 Ventures, angels", desc: "Coding bootcamp and tech school" },
                  { name: "GoGet (Learning Vertical)", funding: "US$ 2M+ (Series A, 2019)", website: "goget.my", inv: "Cradle Seed Ventures, RHL Ventures", desc: "On-demand gig workforce with upskilling vertical" },
                  { name: "Pintar", funding: "Undisclosed Seed (2021–2022)", website: "pintar.com.my", inv: "Gobi Partners, Cradle Seed Ventures", desc: "Workforce development platform" },
                  { name: "JobStreet Malaysia — Learning", funding: "Corporate acquisition (A$ 524M, 2014) + learning built", website: "jobstreet.com.my", inv: "SEEK Limited", desc: "Career platform with professional development courses" },
                  { name: "Mereka", funding: "$1.05M total (Seed 2019, ECF 2025)", website: "mereka.io", inv: "Pitch Nominees", desc: "Platform connecting individuals to educational experts" }
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
                    <td className="max-w-xs px-3 py-2 text-muted-foreground">{c.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-2 text-[10px] text-muted-foreground italic">Note: Table shows a representative selection. Malaysia's EdTech ecosystem is predominantly early-stage.</p>
        </motion.div>
      </motion.div>

      {/* STRATEGIC SYNTHESIS */}
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
        <motion.div variants={fadeUp}>
          <SectionHeader id="strategic" number="9" title="Strategic Synthesis — So What Analysis For Your Company" subtitle="Aggregating signal across all trends for multi-sector higher skilling operation." />
          <div className="mt-6 space-y-4">
            {[
              { level: "critical", label: "Priority 1: Become HRD Corp-Native (0–6 Months)", detail: "The single highest-leverage action is full HRD Corp integration — registered provider status, eTRiS-compatible reporting, and courses priced up to RM 10,500/day ceiling. Claimable programs reduce buyer friction by ~70%. This is the baseline requirement to compete in B2B." },
              { level: "critical", label: "Priority 2: Build the Healthcare + AHP Vertical Now (0–12 Months)", detail: "Most underserved, highest-margin, fastest-growing. Mandatory CME + 30,000 AHP shortage creates structural moat. First-mover advantage in MMC-recognized CME and Allied Health Division accreditation takes 12-18 months to replicate." },
              { level: "high", label: "Priority 3: Position as a Platform, Not Content Provider (12–24 Months)", detail: "Corporate L&D is consolidating. Require LMS with eTRiS integration, outcome tracking, and skills gap analytics. Investment is significant but resulting multi-year enterprise contracts justify it." },
              { level: "high", label: "Priority 4: Develop a Train-to-Deploy Product Line (12–24 Months)", detail: "Where program completion leads to employer placement. Strongest B2B positioning. Build dedicated pipelines with anchor employers and use placement stats as primary marketing asset." },
              { level: "medium", label: "Priority 5: University Micro-Credential Partnerships (12–36 Months)", detail: "Co-branded micro-credentials with UM, UTM, UPM provide MQF recognition and institutional credibility. First-movers in MQA's 2026-2027 formalization will have structural advantages." }
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
