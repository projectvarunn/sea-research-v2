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

const sections = [
  { id: "header", label: "Overview & KPIs" },
  { id: "executive-summary", label: "Executive Summary" },
  { id: "macro-trends", label: "Macro Trends" },
  { id: "micro-trends", label: "Micro Trends" },
  { id: "tech-disruptions", label: "Technology Disruptions" },
  { id: "regulatory", label: "Regulatory Shifts" },
  { id: "consumer", label: "Consumer Behaviour" },
  { id: "investment", label: "Investment Signals" },
  { id: "horizon-map", label: "Trend Horizon Map" },
  { id: "strategic", label: "Strategic Imperatives" },
];

export default function IndonesiaPage() {
  const [regFilter, setRegFilter] = useState("all");

  return (
    <CountryPageLayout sections={sections}>
      {/* HEADER */}
      <div id="header" className="scroll-mt-20">
        <div className="flex items-center gap-4">
          <span className="text-5xl">🇮🇩</span>
          <div>
            <h1 className="font-heading text-3xl font-extrabold text-foreground">Indonesia Higher Skilling Sector</h1>
            <p className="text-sm text-muted-foreground">Trend Intelligence Brief · 2025–2030 Strategic Outlook · Q2 2025 · Confidential</p>
          </div>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <KpiCard label="EdTech Market Size (2024E)" value="USD 1.8B" />
          <KpiCard label="Projected 2029 Market" value="USD 4.5B" subtitle="CAGR ~20%" />
          <KpiCard label="Prakerja Annual Beneficiaries" value="3M+" subtitle="2025 Budget: IDR 7.5T" />
          <KpiCard label="AHP Skills Gap" value="160,000" subtitle="Licensed practitioners needed" />
          <KpiCard label="PP 46/2023 New B2B Spend" value="IDR 12T" subtitle="Unlocked corporate training" />
          <KpiCard label="Gen-Z Workforce Entrants" value="67M" subtitle="By 2030" />
        </div>
      </div>

      {/* EXECUTIVE SUMMARY */}
      <div>
        <SectionHeader id="executive-summary" number="ES" title="Executive Summary" />
        <div className="mt-4 space-y-4 text-sm leading-relaxed text-foreground">
          <p>Three things are happening in Indonesia's skilling market at the same time</p>
          <p>Regulation is forcing demand — Prakerja 3.0, PP 46/2023, MoH's CME mandates. Healthcare, manufacturing, and digital are short on talent and have no good way to fix it fast. And AI has cut content production costs so significantly that personalized skilling is finally unit-economics viable.</p>
          <p>TAM sits at USD 1.8B today, heading to USD 4.5B by 2029 at 20% CAGR.</p>
          <p>The clearest bets: Healthcare (CME + AHP) and AI Skilling — demand is here now, not projected. B2B LMS and Advanced Manufacturing are next, 1–3 year horizon. Soft Skills and Business/Management skilling exist but work better as add-ons than standalone plays.</p>
        </div>
        <div className="mt-4">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Priority Sub-Sectors</p>
          <div className="flex flex-wrap gap-2">
            <PriorityBadge level="critical" label="🔴 Healthcare (CME + AHP)" />
            <PriorityBadge level="critical" label="🔴 Technology & AI Skilling" />
            <PriorityBadge level="high" label="🟠 B2B LMS & Corporate Training" />
            <PriorityBadge level="high" label="🟠 Advanced Manufacturing" />
            <PriorityBadge level="medium-high" label="🟡 Soft Skills Training" />
            <PriorityBadge level="medium" label="🟡 Business & Management" />
          </div>
        </div>
      </div>

      {/* MACRO TRENDS */}
      <div>
        <SectionHeader id="macro-trends" number="1" title="Macro Trends — 5 Global Forces" subtitle="Five macro-level forces reshaping higher skilling in Indonesia." />
        <Accordion type="multiple" className="mt-4">
          {[
            { id: "eco", dir: "↑", title: "Indonesia's Middle-Class Expansion & Skills Premium", force: "Economic", impact: 9, timeline: "0–1 yr", detail: "GDP per capita crossing USD 5,000 threshold. World Bank projects 70M middle-class households by 2030. Wage premium for skilled workers is 2.3x unskilled. Skills gap costs the economy an estimated USD 35B/yr in lost productivity." },
            { id: "reg", dir: "↑", title: "Prakerja 3.0 & Mandatory Upskilling Legislation", force: "Regulatory", impact: 9, timeline: "0–1 yr", detail: "Government Regulation PP No. 46/2023 mandates corporate training budgets at 1–2% of payroll for firms >200 employees. Kartu Prakerja scaling to 3M annual beneficiaries with USD 480M budget. MoE Kampus Merdeka expands micro-credential recognition." },
            { id: "tech", dir: "↑", title: "Generative AI & Adaptive Learning Platforms", force: "Technological", impact: 10, timeline: "0–1 yr", detail: "GPT-4-class models slash content creation costs by 60–80%. AI tutors deliver personalized learning loops at 1/10th cost of human instructors. Indonesia ranked #3 in APAC for AI tool adoption by learners (Google/Temasek 2024). EdTech AI investment in SEA up 140% YoY." },
            { id: "soc", dir: "↑", title: "Demographic Dividend: 67M Gen-Z Workforce Entrants", force: "Social", impact: 8, timeline: "1–3 yr", detail: "67M Indonesians aged 15–24 entering labor market by 2030. 70% prefer digital-first, modular credentials over traditional degrees. Employer trust in micro-credentials rising: 58% of Indonesian HR managers now accept them for hiring (LinkedIn 2024). Massive demand for practical, job-linked skilling." },
            { id: "env", dir: "↔", title: "Green Skills & Just Transition Imperative", force: "Environmental", impact: 7, timeline: "1–3 yr", detail: "Indonesia's net-zero 2060 pledge requires retooling 4.2M fossil fuel workers. Green Economy Index ranks Indonesia 37th globally with fast-moving trajectory. JETP partnership (USD 20B) includes USD 3B earmarked for workforce transition. Green certification programs seeing 300% enrollment growth." },
          ].map((m) => (
            <AccordionItem key={m.id} value={m.id}>
              <AccordionTrigger className="text-left">
                <div className="flex items-center gap-3">
                  <span className="text-lg">{m.dir}</span>
                  <div>
                    <span className="font-semibold">{m.title}</span>
                    <div className="mt-1 flex items-center gap-2"><ImpactDots score={m.impact} /><TimelineBadge timeline={m.timeline} /></div>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-sm leading-relaxed"><strong>Force:</strong> {m.force}</p>
                <p className="mt-2 text-sm leading-relaxed text-foreground">{m.detail}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      {/* MICRO TRENDS */}
      <div>
        <SectionHeader id="micro-trends" number="2" title="Micro Trends — 7 Emerging Patterns" subtitle="Real-time market signals observed since Q2 2024." />
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {[
            { id: "1", title: "B2B Corporate Skilling Contracts Surge", subsector: "B2B Services / LMS", timeline: "0–1 yr", impact: 9, evidence: "Indonesian corporates signed 3x more multi-year LMS + training contracts in H1 2025 vs H1 2024. FMCG, banking, and logistics sectors leading. Average contract value up 45% as firms bundle content + platform + assessment." },
            { id: "2", title: "Healthcare AHP Shortage Drives CME Boom", subsector: "Healthcare Skilling", timeline: "0–1 yr", impact: 9, evidence: "Indonesia is short 160,000 Allied Health Professionals. MoH Regulation 2024/47 mandates 25 CME credits annually for all licensed practitioners. Private CME platforms seeing 220% enrollment growth. Test-prep for UKMPPD & UKMPPDG now a USD 80M+ market." },
            { id: "3", title: "AI Literacy Mandates Across Government & Enterprise", subsector: "Tech & AI Skilling", timeline: "0–1 yr", impact: 10, evidence: "BSSN and BPPT issued circular requiring AI competency certification for all civil servants by Q2 2026. 47 of the top 100 Indonesian enterprises introduced AI skill requirements in job postings in 2024 (up from 12 in 2022). Coding bootcamp enrollments +180% YoY." },
            { id: "4", title: "Micro-Credential Stacking & Credit Transfer", subsector: "All Subsectors", timeline: "0–1 yr", impact: 8, evidence: "Kemendikbud's MBKM policy now allows 20 credits of micro-credentials to count toward degrees. 140+ universities signed MoUs with skilling providers. Learner stacking of 3–5 short courses before applying for jobs is now the norm for urban Gen-Z." },
            { id: "5", title: "Soft Skills as Competitive Differentiator", subsector: "Soft Skills Training", timeline: "1–3 yr", impact: 7, evidence: "LinkedIn Indonesia 2024 Workforce Report: critical thinking, leadership communication, and emotional intelligence are the top 3 skills employers say are hardest to find. Corporate soft-skills spend grew 38% in 2024. B2B soft-skills SaaS tools entering Indonesia from global players." },
            { id: "6", title: "Advanced Manufacturing & Vocational Surge (Vokasi)", subsector: "Advanced Manufacturing", timeline: "1–3 yr", impact: 8, evidence: "USD 35B Batang Industrial Estate and EV battery gigafactories (LG, CATL, Hyundai) creating 400,000 new technical roles by 2027. BNSP blue-collar certification demand up 90% YoY. German dual-system vocational model." },
            { id: "7", title: "MSME Digital Management & Financial Literacy", subsector: "Business & Management", timeline: "1–3 yr", impact: 7, evidence: "65M Indonesian MSMEs; government target to digitize 30M by 2024 (now extended). OJK FinLit programs driving demand for financial management upskilling. Mini-MBA programs priced at IDR 2–5M (USD 130–325) gaining massive uptake via marketplace apps." },
          ].map((t) => (
            <div key={t.id} className="rounded-lg border border-border bg-card p-5">
              <div className="mb-2 flex flex-wrap items-center gap-2">
                <span className="rounded bg-primary/10 px-2 py-0.5 text-xs font-bold text-primary">#{t.id}</span>
                <TimelineBadge timeline={t.timeline} />
                <ImpactDots score={t.impact} />
              </div>
              <h3 className="mb-1 font-heading text-sm font-bold text-foreground">{t.title}</h3>
              <p className="mb-1 text-xs font-medium text-primary">{t.subsector}</p>
              <p className="text-xs leading-relaxed text-muted-foreground">{t.evidence}</p>
            </div>
          ))}
        </div>
      </div>

      {/* TECHNOLOGY DISRUPTIONS */}
      <div>
        <SectionHeader id="tech-disruptions" number="3" title="Technology Disruptions" subtitle="The technology landscape for skilling is undergoing its most significant transformation since the introduction of LMS platforms in the 2010s." />
        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-xs">
            <thead><tr className="border-b border-border bg-muted/50">
              <th className="px-3 py-2 text-left font-semibold">Technology</th>
              <th className="px-3 py-2 text-left font-semibold">Description & Impact</th>
              <th className="px-3 py-2 text-center font-semibold">Mainstream By</th>
              <th className="px-3 py-2 text-center font-semibold">Impact</th>
              <th className="px-3 py-2 text-left font-semibold">Subsectors</th>
            </tr></thead>
            <tbody>
              {[
                ["Generative AI", "AI auto-creates course modules, assessments, simulations. Reduces content cost 70%. Tools: OpenAI, Cohere, local LLMs.", "NOW (2025)", 10, "All"],
                ["AI Tutors & Conversational Learning", "Real-time personalized tutoring bots in Bahasa Indonesia. Khanmigo-style agents entering SEA market. Reduces instructor dependency.", "2025–2026", 9, "Tech, Healthcare, Soft Skills"],
                ["Adaptive Assessment & Skill Inference", "Psychometric AI infers competency gaps from behavioral signals. Replaces static test-and-score with continuous skill mapping.", "2025–2026", 8, "B2B, Management"],
                ["VR/AR Simulation Labs", "Immersive surgical simulations, industrial safety training, equipment operation. Costs falling 40% YoY. Indonesia 5G rollout enabling remote delivery.", "2026–2027", 8, "Healthcare, Manufacturing"],
                ["Blockchain Credential Verification", "Tamper-proof digital certificates. Indonesian National Blockchain pilot (BPPT) includes skills credentialing. Employers verifying in real-time.", "2026–2028", 7, "All"],
                ["AI-Powered Skills Taxonomy & Labor Matching", "Platforms like Coursera Clips, LinkedIn Skills Graph localize for Indonesia. Job-skills matching APIs embedded in LMS platforms.", "2025–2026", 9, "B2B Staffing, Management"],
                ["Agentic AI & Workflow Automation", "Teaching humans to orchestrate AI agents. New category of 'AI workflow' certifications. Fastest-growing search term in EdTech Indonesia (Q1 2025).", "2025–2027", 10, "Tech & AI, Business"],
              ].map(([tech, desc, mainstream, impact, sub], i) => (
                <tr key={i} className="border-b border-border">
                  <td className="px-3 py-2 font-medium text-foreground">{tech}</td>
                  <td className="max-w-sm px-3 py-2 text-muted-foreground">{desc}</td>
                  <td className="px-3 py-2 text-center"><TimelineBadge timeline={mainstream as string} /></td>
                  <td className="px-3 py-2 text-center"><ImpactDots score={impact as number} /></td>
                  <td className="px-3 py-2 text-muted-foreground">{sub}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* REGULATORY SHIFTS */}
      <div>
        <SectionHeader id="regulatory" number="4" title="Regulatory Shifts" subtitle="Indonesia's regulatory environment is uniquely favorable for skilling providers." />
        <div className="mt-4 flex flex-wrap items-center gap-2 text-xs">
          <span className="font-medium text-muted-foreground">Filter:</span>
          {["all", "Active", "2025", "2026"].map((f) => (
            <button key={f} onClick={() => setRegFilter(f)} className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${regFilter === f ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}>{f === "all" ? "All" : f}</button>
          ))}
        </div>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-xs">
            <thead><tr className="border-b border-border bg-muted/50">
              <th className="px-3 py-2 text-left font-semibold">Regulation</th>
              <th className="px-3 py-2 text-center font-semibold">Impact</th>
              <th className="px-3 py-2 text-left font-semibold">Effective</th>
              <th className="px-3 py-2 text-left font-semibold">Detail & Impact</th>
              <th className="px-3 py-2 text-left font-semibold">Subsector</th>
            </tr></thead>
            <tbody>
              {(() => {
                const regs = [
                  { name: "PP No. 46/2023 – Corporate Training Obligation", impact: 9, effective: "Active now", detail: "Mandates 1–2% payroll spend on employee development for enterprises >200 headcount. Enforcement begins 2025 with penalties for non-compliance. Creates estimated IDR 12 trillion new B2B spend.", subsector: "B2B, LMS, Corporate Training" },
                  { name: "Prakerja 3.0 Expansion", impact: 9, effective: "Q1 2025", detail: "IDR 7.5 trillion budget (2025). Digital skilling platforms must re-qualify under new curriculum standards. Government shifting to competency-based payouts vs attendance. New API integrations required.", subsector: "All (consumer)" },
                  { name: "MBKM Micro-Credential Credit Transfer", impact: 8, effective: "Active", detail: "Up to 20 SKS (credits) from industry certifications now count toward university degrees. 140+ universities enrolled. Forces providers to map content to KKNI framework.", subsector: "Tech, Business, Soft Skills" },
                  { name: "MoH AHP Licensing Reform (Permenkes 2024)", impact: 9, effective: "Jan 2025", detail: "All Allied Health Professionals require annual 25 CME credits for license renewal. Accredited CPD providers gain government-endorsed status. Digital CME platforms now eligible for insurance reimbursement.", subsector: "Healthcare" },
                  { name: "BNSP Certification Expansion", impact: 8, effective: "2025–2026", detail: "30 new occupational certification schemes added for tech roles (AI, Cybersecurity, Cloud). Industry-specific LSPs can now self-accredit via fast-track. Blue-collar certification mandatory for government contracts.", subsector: "Tech, Manufacturing" },
                  { name: "AI Governance Framework (Draft BPJT 2025)", impact: 7, effective: "2026 (Draft)", detail: "Proposed regulation on AI in learning: transparency requirements, data localization for learner data, prohibition on fully unmonitored AI assessments.", subsector: "Tech AI, LMS" },
                  { name: "KEMNAKER Job Training Modernization Act", impact: 8, effective: "2025–2026", detail: "BLK (public vocational centers) shifting to PPP model. Private providers can bid to operate 200+ BLK facilities. USD 800M government budget open to private management partnerships.", subsector: "Manufacturing, Soft Skills, B2B" },
                ];
                const filtered = regFilter === "all" ? regs : regs.filter(r => r.effective.includes(regFilter));
                return filtered.map((r, i) => (
                  <tr key={i} className="border-b border-border">
                    <td className="px-3 py-2 font-medium text-foreground">{r.name}</td>
                    <td className="px-3 py-2 text-center"><ImpactDots score={r.impact} /></td>
                    <td className="px-3 py-2"><TimelineBadge timeline={r.effective} /></td>
                    <td className="max-w-sm px-3 py-2 text-muted-foreground">{r.detail}</td>
                    <td className="px-3 py-2 text-muted-foreground">{r.subsector}</td>
                  </tr>
                ));
              })()}
            </tbody>
          </table>
        </div>
        <AlertBox type="warning" title="Compliance Note">
          The upcoming AI Governance Framework (Draft 2025) is the highest-risk regulatory development for AI-native platforms. Providers using fully automated AI assessments without human oversight may face operational suspension. Proactive engagement with BPJT in the drafting process is strongly advised.
        </AlertBox>
      </div>

      {/* CONSUMER BEHAVIOUR */}
      <div>
        <SectionHeader id="consumer" number="5" title="Consumer Behaviour" subtitle="How buyer preferences are evolving in Indonesia." />
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {[
            { icon: "🎯", title: "Outcome-Obsessed Learners", impact: 9, desc: "Buyers demand ROI guarantees: salary uplift, job placement, promotion probability. Platforms offering ISAs (Income Share Agreements) growing 4x faster. NPS for 'job-outcome-linked' courses is 60+ vs 25 for traditional." },
            { icon: "📱", title: "Mobile-First & Bite-Sized Consumption", impact: 8, desc: "78% of Indonesian learners access via mobile (vs 52% APAC avg). Average session length: 8 minutes. Microlearning modules (5–15 min) outperform long-form 3:1 in completion rate. WhatsApp-native course delivery gaining traction." },
            { icon: "🇮🇩", title: "Bahasa Indonesia & Vernacular Demand", impact: 8, desc: "Despite urban English literacy, 67% prefer course content in Bahasa Indonesia. Local cultural context in case studies increases engagement 40%. Providers with BM-first content see 2.2x better rural market penetration." },
            { icon: "👥", title: "Community & Peer Learning as Product", impact: 7, desc: "Discord, Telegram cohort communities now integral to retention. Platforms with built-in learning communities see 35% higher completion. B2B buyers now ask: 'what is your learner community strategy?'" },
            { icon: "💼", title: "Employer-Sponsored B2C → B2B2C Shift", impact: 9, desc: "55% of individual learners in 2024 had employer co-pay. B2B2C model (sell to employer, serve employee) now dominant GTM. Individual consumer willingness-to-pay capped at IDR 1–2M; employer unlocks IDR 5–15M per seat." },
            { icon: "✅", title: "Credential Transparency & Verifiability", impact: 7, desc: "Learners increasingly check employer recognition before enrolling. Platforms with 'employer recognition' seals see 3x conversion. Digital badges on LinkedIn Indonesia grew 190% in 2024." },
            { icon: "🧠", title: "Mental Health & Wellbeing Integration", impact: 6, desc: "Post-COVID, Gen-Z workers expect learning pathways to include soft skills + EQ + burnout prevention. Corporates bundling mental health modules with leadership training. Wellbeing = competitive differentiation in B2B pitches." },
          ].map((b, i) => (
            <div key={i} className="rounded-lg border border-border bg-card p-5">
              <div className="flex items-center gap-2"><span className="text-2xl">{b.icon}</span><h3 className="font-heading text-sm font-bold text-foreground">{b.title}</h3></div>
              <div className="mt-2"><ImpactDots score={b.impact} /></div>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* INVESTMENT SIGNALS */}
      <div>
        <SectionHeader id="investment" number="6" title="Investment Signals" subtitle="Where smart money is flowing in Indonesian EdTech." />
        <div className="mt-4 text-sm leading-relaxed text-foreground">
          <p>VC, PE, and strategic capital deployment in Indonesian EdTech has shifted decisively from consumer-facing B2C models to B2B and B2B2C platforms with measurable outcomes, regulatory anchors, and recurring revenue characteristics. Average deal sizes are growing (+55% YoY) as the sector matures beyond seed-stage experimentation.</p>
        </div>
        <AlertBox type="signal" title="Signal">Three capital themes dominate: (1) Government-linked B2B plays with Prakerja API integration; (2) Vertical specialists in healthcare and manufacturing with regulatory moats; (3) AI-native platform rebuilds of legacy EdTech.</AlertBox>

        <h3 className="mt-4 font-heading text-base font-bold text-foreground">Recent Deals & Activity</h3>
        <div className="mt-3 overflow-x-auto">
          <table className="w-full text-xs">
            <thead><tr className="border-b border-border bg-muted/50">
              <th className="px-3 py-2 text-left font-semibold">Type</th>
              <th className="px-3 py-2 text-left font-semibold">Deal</th>
              <th className="px-3 py-2 text-left font-semibold">Date</th>
              <th className="px-3 py-2 text-left font-semibold">Investors</th>
              <th className="px-3 py-2 text-left font-semibold">Subsector</th>
              <th className="px-3 py-2 text-left font-semibold">Signal</th>
            </tr></thead>
            <tbody>
              {[
                ["VC", "Pijar Mahir Series B – USD 28M", "Q4 2024", "MDI Ventures, BRI Ventures", "B2B LMS / Gov Prakerja", "Government-linked B2B skilling platform plays."],
                ["VC", "Zenius relaunch (Edtech.id) – USD 12M seed", "Q1 2025", "East Ventures, AC Ventures", "Tech & AI Skilling", "AI-native rebuild of legacy EdTech. AI tutoring + outcome guarantees becoming table stakes."],
                ["M&A", "Ruangguru acquires SimulasiKAT (test prep)", "Q3 2024", "GGV Capital, Tiger Global", "Test Prep / Healthcare", "Vertical integration into test-prep. Healthcare + professional exam prep is high-LTV, recurring niche."],
                ["VC", "GreatNusa (B2B LMS) – USD 8M Series A", "Q2 2024", "Vertex Ventures SEA", "Corporate LMS", "Local LMS competing vs SAP/Cornerstone at fraction of cost. Indonesia SME segment underserved."],
                ["Strat", "Coursera expands Indonesia Enterprise partnerships", "2024", "Permata Bank, Telkom", "AI & Management Skilling", "Global platforms seeking local anchor clients. Partnership model dominant entry strategy."],
                ["IPO", "Cakap (language + skills) – Pre-IPO roadshow", "2025E", "Goldman Sachs, Mandiri Sekuritas", "Soft Skills / B2B", "First EdTech IPO watch in Indonesia since 2022. Valuation marker for sector."],
                ["PE", "Bina Nusantara (BINUS) digital division carve-out", "Q1 2025", "KKR, Warburg Pincus (rumored)", "Higher Ed + Skilling", "PE carve-outs from legacy education institutions. BINUS digital arm: 400K learners, IDR 2T revenue."],
                ["M&A", "Skillsoft acquires local content studio (rumored)", "2025E", "Prosus/OLX (strategic)", "Corporate Training Content", "Global players building local-language content moats. Bahasa Indonesia content library = strategic asset."],
              ].map((row, i) => (
                <tr key={i} className="border-b border-border">
                  <td className="px-3 py-2 font-medium text-foreground">{row[0]}</td>
                  <td className="px-3 py-2 text-foreground">{row[1]}</td>
                  <td className="px-3 py-2 text-muted-foreground">{row[2]}</td>
                  <td className="px-3 py-2 text-muted-foreground">{row[3]}</td>
                  <td className="px-3 py-2 text-muted-foreground">{row[4]}</td>
                  <td className="max-w-xs px-3 py-2 text-muted-foreground">{row[5]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Funding Events */}
        <h3 className="mt-6 font-heading text-base font-bold text-foreground">Notable Funding Events in Indonesian EdTech</h3>
        <div className="mt-3 overflow-x-auto">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-3 py-2 text-left font-semibold">Company</th>
                <th className="px-3 py-2 text-left font-semibold">Website</th>
                <th className="px-3 py-2 text-left font-semibold">Funding (USD)</th>
                <th className="px-3 py-2 text-left font-semibold">Stage</th>
                <th className="px-3 py-2 text-left font-semibold">Investors</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Ruangguru", "https://ruangguru.com", "$205M", "Series C", "General Atlantic, GGV Capital, Tiger Global, East Ventures, UOB Venture Management, Venturra Capital, EDBI"],
                ["Zenius", "https://zenius.net", "$40M+ (operations ceased 2024)", "Series B", "MDI Ventures, Northstar Group, Alpha JWC Ventures, Openspace Ventures"],
                ["CoLearn", "https://colearn.id", "$10M", "Series A", "Alpha Wave Incubation, GSV Ventures, Sequoia Capital India Surge, AC Ventures"],
                ["Cakap", "https://cakap.com", "~$17.5M total", "Series C", "MDI Ventures (Centauri Fund), Heritas Capital, KB Investment, Indonesia Impact Fund"],
                ["Quipper", "https://quipper.com", "~$10M raised; Acquired ~$39M (2015)", "Acquired", "Atomico, Benesse Holdings — Acquired by Recruit Holdings"],
                ["Pintek", "https://pintek.id", "$35M+", "Series A", "Kaizenvest, Heritas Capital, Blue7, Finch Capital, Global Founder Capital, Accion Venture Lab"],
                ["PINTAR", "https://pintar.co", "$5.2M+", "Pre-Series A", "Havez Capital, SIG Venture Capital, AppWorks, GDP Venture (Djarum Group)"],
                ["Gredu", "https://gredu.co", "$4M", "Series A", "Intudo Ventures, Vertex Ventures — Acquired by PINTAR Aug 2024"],
                ["Hacktiv8", "https://hacktiv8.com", "$3M", "Pre-Series A", "East Ventures, Sovereign's Capital, SMDV, Skystar Capital"],
              ].map(([company, website, funding, stage, investors], i) => (
                <tr key={i} className="border-b border-border">
                  <td className="px-3 py-2 font-medium text-foreground">{company}</td>
                  <td className="px-3 py-2">
                    <a href={website} target="_blank" rel="noopener noreferrer" className="font-medium text-primary hover:underline">Website</a>
                  </td>
                  <td className="px-3 py-2 text-foreground">{funding}</td>
                  <td className="px-3 py-2 text-muted-foreground">{stage}</td>
                  <td className="min-w-xs px-3 py-2 text-muted-foreground">{investors}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* TREND HORIZON MAP */}
      <div>
        <SectionHeader id="horizon-map" number="7" title="Trend Timeline Matrix" subtitle="Each trend mapped to its primary impact horizon." />
        <div className="mt-4 space-y-4">
          <div>
            <h3 className="font-heading text-sm font-bold text-critical">SHORT-TERM (0–1 Year)</h3>
            <ul className="mt-2 space-y-1 text-sm text-foreground">
              <li>▸ AI content engines and AI tutors deployed by all major platforms</li>
              <li>▸ Prakerja 3.0 launches: 3M+ beneficiaries create marketplace demand surge</li>
              <li>▸ PP No. 46/2023 enforcement: IDR 12T corporate training spend unlocked</li>
              <li>▸ MoH CME mandate active: AHP skilling market explodes</li>
              <li>▸ B2B LMS enterprise contract volumes triple vs 2023</li>
              <li>▸ AI literacy certification mandates for civil servants active</li>
              <li>▸ Micro-credential credit transfer (MBKM) driving enrollment spikes</li>
              <li>▸ BNSP tech certification fast-track: 30 new schemes live</li>
            </ul>
          </div>
          <div>
            <h3 className="font-heading text-sm font-bold text-warning">MID-TERM (1–3 Years)</h3>
            <ul className="mt-2 space-y-1 text-sm text-foreground">
              <li>▸ VR/AR simulation labs mainstream for healthcare and manufacturing training</li>
              <li>▸ First EdTech IPO (Cakap or similar) sets sector valuation benchmarks</li>
              <li>▸ Green skills certification: 4.2M fossil fuel worker retraining underway</li>
              <li>▸ AI Governance Framework enacted: compliance requirements for LMS</li>
              <li>▸ KEMNAKER BLK-PPP model: private operators run 200+ public VET centers</li>
              <li>▸ Blockchain credential verification adopted by top 50 Indonesian employers</li>
              <li>▸ B2B2C model dominant: employer-sponsored learning is 70%+ of revenue</li>
              <li>▸ Agentic AI workflow training becomes fastest-growing course category</li>
              <li>▸ EV/manufacturing gigafactory workforce: 400K technicians in training</li>
              <li>▸ Advanced Manufacturing dual-system vocational expands to 12 provinces</li>
            </ul>
          </div>
          <div>
            <h3 className="font-heading text-sm font-bold text-success">LONG-TERM (3–5 Years)</h3>
            <ul className="mt-2 space-y-1 text-sm text-foreground">
              <li>▸ Indonesia ranks top-5 ASEAN for digital workforce readiness index</li>
              <li>▸ Skills-based hiring replaces degree-based for 50%+ of tech/digital roles</li>
              <li>▸ National Skills Passport (blockchain-verified) standardized across sectors</li>
              <li>▸ Green economy transition: new workforce of 2M+ sustainability specialists</li>
              <li>▸ AI agents co-deliver 40% of all professional training content</li>
              <li>▸ Healthcare AHP shortage closes: 160K gap filled via accelerated skilling</li>
              <li>▸ EdTech market reaches USD 4.5B (from USD 1.8B in 2024): 2.5x growth</li>
              <li>▸ Indonesian skilling platforms expand regionally: SEA export of EdTech IP</li>
              <li>▸ Lifelong learning default norm: avg. Indonesian worker completes 3 courses/yr</li>
            </ul>
          </div>
        </div>
      </div>

      {/* STRATEGIC IMPERATIVES */}
      <div>
        <SectionHeader id="strategic" number="8" title="Strategic Imperatives — 'So What' Analysis" subtitle="Strategic implications by sub-sector and top 5 imperatives for 2025–2026." />

        {/* Sub-sector breakdown */}
        <h3 className="mt-4 font-heading text-base font-bold text-foreground">Sub-Sector Strategic Analysis</h3>
        <div className="mt-3 overflow-x-auto">
          <table className="w-full text-xs">
            <thead><tr className="border-b border-border bg-muted/50">
              <th className="px-3 py-2 text-left font-semibold">Subsector</th>
              <th className="px-3 py-2 text-left font-semibold">Strategic Implication</th>
              <th className="px-3 py-2 text-left font-semibold">Recommended Actions</th>
              <th className="px-3 py-2 text-center font-semibold">Priority</th>
            </tr></thead>
            <tbody>
              {[
                { sub: "Technology & Digital / AI Skilling", imp: "Fastest-growing but most competitive. GenAI tools commoditize content — differentiation must come from employer partnerships, outcome guarantees, and proprietary skills-to-job datasets. Agentic AI workflow training is the white space.", actions: "Launch AI Workflow Certification track. Partner with 3 anchor corporates. Build skills-to-job outcome database. Price at premium (IDR 8–15M).", priority: "CRITICAL" },
                { sub: "Healthcare & Care Economy (CME, Test Prep, AHPs)", imp: "Highest structural demand with regulatory tailwinds. MoH mandate creates captive, recurring market. 160K AHP shortage = multi-year demand runway. CME is subscription-like: high LTV, low churn.", actions: "Acquire or partner with accredited CME provider. Build UKMPPD/UKMPPDG test-prep suite. Pursue MoH accreditation for CPD platform.", priority: "CRITICAL" },
                { sub: "B2B Services (LMS, Corporate Training, Staffing)", imp: "PP 46/2023 creates IDR 12T addressable spend. LMS market consolidating. Staffing integration (train-to-hire) adds 3–5x revenue per learner.", actions: "Bundle LMS with content and outcomes reporting for compliance. Target verticals with highest PP 46 exposure. Develop staffing integration.", priority: "HIGH" },
                { sub: "Soft Skills Training", imp: "B2B market growing 38% YoY but highly fragmented. Opportunity to own the 'behavioral transformation' narrative. Risk: commoditization by global SaaS.", actions: "Build 'Indonesia Leadership Quotient' proprietary framework. White-label to corporates. Integrate EQ and mental wellness modules.", priority: "MEDIUM-HIGH" },
                { sub: "Advanced Manufacturing & Engineering", imp: "400K technician deficit for gigafactories. BNSP certification mandatory for government contracts. PPP model at BLKs creates government revenue channel.", actions: "Pursue KEMNAKER BLK-PPP operator license. Partner with LG, CATL, Hyundai HR. Invest in VR simulation.", priority: "HIGH" },
                { sub: "Business, Management & Professional Services", imp: "65M MSMEs are underserved. Mini-MBA at IDR 2–5M price point has massive market. OJK/FinLit mandates create institutional demand.", actions: "Distribute via Tokopedia, Shopee, and bank app integrations. Co-develop FinLit content with OJK branding.", priority: "MEDIUM" },
              ].map((r, i) => (
                <tr key={i} className="border-b border-border">
                  <td className="px-3 py-2 font-medium text-foreground">{r.sub}</td>
                  <td className="max-w-xs px-3 py-2 text-muted-foreground">{r.imp}</td>
                  <td className="max-w-xs px-3 py-2 text-muted-foreground">{r.actions}</td>
                  <td className="px-3 py-2 text-center"><PriorityBadge level={r.priority === "CRITICAL" ? "critical" : r.priority === "HIGH" ? "high" : r.priority === "MEDIUM-HIGH" ? "medium-high" : "medium"} label={r.priority} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 className="mt-6 font-heading text-base font-bold text-foreground">Top 5 Strategic Imperatives for 2025–2026</h3>
        <div className="mt-3 space-y-4">
          {[
            { num: 1, title: "Secure Regulatory Anchors First", detail: "PP 46/2023 and MoH CME mandates are the fastest path to predictable B2B revenue. Invest in BNSP accreditation, MoH CPD approval, and Prakerja API re-certification NOW — before competitors. Regulatory access is the most defensible moat in this market." },
            { num: 2, title: "Go B2B2C — Immediately", detail: "Individual consumer willingness-to-pay caps at IDR 2M. Employer-sponsored learning unlocks IDR 5–15M per seat. Every consumer acquisition should be a wedge into an employer relationship. Restructure GTM accordingly within 12 months." },
            { num: 3, title: "Build or Buy Bahasa Indonesia AI Content Stack", detail: "Localized AI content generation is a 2-year window of advantage. After 2027, all major global platforms will have strong BI capabilities. Use this window to build a proprietary Bahasa Indonesia content library that is too expensive for competitors to replicate at quality." },
            { num: 4, title: "Own the Healthcare Skilling Vertical", detail: "With 160K AHP gap, MoH CME mandates, and insurance reimbursement on the horizon, healthcare skilling is the highest-LTV, most structurally protected subsector. Pursue M&A or deep partnership with an accredited CME provider in 2025." },
            { num: 5, title: "Establish Outcome Transparency Infrastructure", detail: "The next wave of buyers — corporate HR, government procurement, individual consumers — will demand verifiable ROI data. Build salary-uplift tracking, job placement data, and employer satisfaction scores NOW. Providers with outcome data will command 3–5x higher contract values by 2027." },
          ].map((imp) => (
            <div key={imp.num} className="rounded-lg border border-border bg-card p-4">
              <div className="flex items-start gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">{imp.num}</span>
                <div>
                  <h4 className="font-heading text-sm font-bold text-foreground">{imp.title}</h4>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{imp.detail}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>


    </CountryPageLayout>
  );
}
