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
  { id: "risk-register", label: "Risk Register" },
];

export default function SingaporePage() {
  const [regFilter, setRegFilter] = useState("all");
  const [regSort, setRegSort] = useState<"impact" | "name">("impact");

  return (
    <CountryPageLayout sections={sections}>
      {/* HEADER & KPIs */}
      <div id="header" className="scroll-mt-20">
        <div className="flex items-center gap-4">
          <span className="text-5xl">🇸🇬</span>
          <div>
            <h1 className="font-heading text-3xl font-extrabold text-foreground">Singapore Higher Skilling Sector</h1>
            <p className="text-sm text-muted-foreground">Trend Intelligence Brief · February 2026 · Confidential</p>
          </div>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <KpiCard label="Total Market Size" value="USD 4.0B" subtitle="Corporate education & upskilling" />
          <KpiCard label="EdTech Market (2025E)" value="USD 2.2B" subtitle="Growing to USD 3.5B+ by 2027" />
          <KpiCard label="Annual Growth Rate" value="~14–15% CAGR" subtitle="EdTech; 8–10% corporate training" />
          <KpiCard label="SkillsFuture Investment" value="SGD 1B+" subtitle="SGD 4,000 Mid-Career Credit (40+)" />
          <KpiCard label="Credit Usage Growth" value="260,000" subtitle="Singaporeans used SF Credit 2024 (+35% YoY)" />
          <KpiCard label="Employer Skilling Intent" value="75%" subtitle="Plan increased training budgets (WSG 2024)" />
          <KpiCard label="AI Demand Signal" value="+40% / +45%" subtitle="AI engineer +40%; cybersecurity +45% (MOM 2024)" />
          <KpiCard label="Unemployment Rate" value="2.1%" subtitle="Among lowest globally (2024)" />
          <KpiCard label="Key Risk" value="USD 2.4B" subtitle="Global VC EdTech funding at decade-low (2024)" />
        </div>
      </div>

      {/* EXECUTIVE SUMMARY */}
      <div>
        <SectionHeader id="executive-summary" number="ES" title="Executive Summary" />
        <div className="mt-4 space-y-4 text-sm leading-relaxed text-foreground">
          <p>This brief presents Imarticus Learning Research's comprehensive assessment of the Singapore Higher Skilling sector across six sub-sectors. Market valuation, trend signals, technology disruptions, regulatory shifts, and capital flow data are synthesised to deliver actionable intelligence.</p>
        </div>
        <div className="mt-4">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Priority Sub-Sectors</p>
          <div className="flex flex-wrap gap-2">
            <PriorityBadge level="critical" label="🔴 Technology & Digital / AI Skilling" />
            <PriorityBadge level="critical" label="🔴 Healthcare & Care Economy" />
            <PriorityBadge level="high" label="🟠 B2B Services (LMS, Corporate Training)" />
            <PriorityBadge level="high" label="🟠 Advanced Manufacturing" />
            <PriorityBadge level="medium" label="🟡 Business & Professional Services" />
            <PriorityBadge level="medium" label="🟡 Soft Skills Training" />
          </div>
        </div>
      </div>

      {/* MACRO TRENDS */}
      <div>
        <SectionHeader id="macro-trends" number="1" title="Macro Trends — 5 Global Forces" subtitle="Five forces shaping the Singapore Higher Skilling sector from a global structural perspective." />
        <Accordion type="multiple" className="mt-4">
          <AccordionItem value="m1">
            <AccordionTrigger className="text-left">
              <div className="flex items-center gap-3">
                <span className="text-lg">↑</span>
                <div>
                  <span className="font-semibold">M1: AI & Automation-Driven Structural Displacement of Labour</span>
                  <div className="mt-1 flex items-center gap-2">
                    <ImpactDots score={9} />
                    <TimelineBadge timeline="Short-Term (0–1 yr)" />
                  </div>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-3 text-sm leading-relaxed">
                <p><strong>Force:</strong> Technological / Economic</p>
                <p>The acceleration of generative AI and automation is rendering existing skillsets obsolete at unprecedented speed. The WEF (World Economic Forum) Future of Jobs 2025 report identifies AI, big data, and analytical thinking as the top-growing skill categories. Singapore's government aims to triple the number of AI practitioners to 15,000 within five years. This creates a perpetual re-skilling demand cycle–the most structural macro driver of the sector.</p>
                <AlertBox type="signal" title="SO WHAT">
                  Across all 6 sub-sectors, AI upskilling demand is surging. Companies offering AI/ML content, AI-augmented delivery platforms, or AI-for-business curricula have the widest addressable market and highest pricing power. Prioritise AI content depth over breadth.
                </AlertBox>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="m2">
            <AccordionTrigger className="text-left">
              <div className="flex items-center gap-3">
                <span className="text-lg">↑</span>
                <div>
                  <span className="font-semibold">M2: SkillsFuture 2.0 and Singapore's Skills-First National Policy Agenda</span>
                  <div className="mt-1 flex items-center gap-2">
                    <ImpactDots score={9} />
                    <TimelineBadge timeline="Short-Term (0–1 yr)" />
                  </div>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-3 text-sm leading-relaxed">
                <p><strong>Force:</strong> Regulatory / Economic</p>
                <p>Singapore's SkillsFuture initiative–backed by over SGD 1 billion of government commitment–was reinforced through the 'Transforming Education through Technology' Masterplan 2030. The May 2024 introduction of the SGD 4,000 SkillsFuture Credit (Mid-Career) for Singaporeans aged 40+ has directly unlocked a new B2C spending cohort. Career Transition Programmes grew from 179 to 239 in 2024. Government funding de-risks demand for accredited providers.</p>
                <AlertBox type="signal" title="SO WHAT">
                  Companies with SSG (SkillsFuture Singapore) accreditation or WSQ (Workforce Skills Qualifications) certification enjoy direct access to government-subsidised demand. Mid-career adult learners (40+) are now a funded, growing TAM. Build accredited, modular programmes targeting this segment.
                </AlertBox>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="m3">
            <AccordionTrigger className="text-left">
              <div className="flex items-center gap-3">
                <span className="text-lg">↑</span>
                <div>
                  <span className="font-semibold">M3: Demographic Ageing & the Care Economy Workforce Crisis</span>
                  <div className="mt-1 flex items-center gap-2">
                    <ImpactDots score={8} />
                    <TimelineBadge timeline="Mid-Term (1–3 yr)" />
                  </div>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-3 text-sm leading-relaxed">
                <p><strong>Force:</strong> Social / Economic</p>
                <p>Singapore's rapidly ageing population–combined with a structural shortage of healthcare workers–is driving urgent investment in healthcare workforce upskilling. The SkillsFuture SDFE 2025 report specifically flags the Care Economy as one of three priority growth pillars (alongside Digital and Green). Allied health professionals (AHPs), nursing aides, and social care workers represent an underskilled, fast-growing workforce.</p>
                <AlertBox type="signal" title="SO WHAT">
                  The Healthcare & Care Economy sub-sector is a government-prioritised high-conviction play. CME accreditation, AHP training, and test prep for healthcare licensing exams are structurally underpenetrated and benefit from regulatory tailwinds.
                </AlertBox>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="m4">
            <AccordionTrigger className="text-left">
              <div className="flex items-center gap-3">
                <span className="text-lg">↔</span>
                <div>
                  <span className="font-semibold">M4: ESG Mandates & Green Economy Skills Transition</span>
                  <div className="mt-1 flex items-center gap-2">
                    <ImpactDots score={7} />
                    <TimelineBadge timeline="Mid-Term (1–3 yr)" />
                  </div>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-3 text-sm leading-relaxed">
                <p><strong>Force:</strong> Environmental / Regulatory</p>
                <p>The Singapore Green Plan 2030 is accelerating demand for ESG (Environmental, Social & Governance) sustainability, and green-economy skillsets across the workforce. Employers are increasingly seeking candidates with knowledge in carbon accounting, ESG reporting frameworks (TCFD, ISSB), and clean energy. MOM data confirms that candidates with ESG/sustainability credentials are differentially rewarded in compensation. This is creating a new skilling vertical that cuts across Advanced Manufacturing, Business & Professional Services, and B2B training.</p>
                <AlertBox type="signal" title="SO WHAT">
                  Embedding ESG/sustainability modules into existing B2B and professional services curricula is a high-return, low-cost expansion. Accredited green skills courses will access dedicated government grant funding streams.
                </AlertBox>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="m5">
            <AccordionTrigger className="text-left">
              <div className="flex items-center gap-3">
                <span className="text-lg">↑</span>
                <div>
                  <span className="font-semibold">M5: Post-COVID Normalisation of Hybrid & Flexible Work — Resetting Soft Skills Demand</span>
                  <div className="mt-1 flex items-center gap-2">
                    <ImpactDots score={7} />
                    <TimelineBadge timeline="Short-Term (0–1 yr)" />
                  </div>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-3 text-sm leading-relaxed">
                <p><strong>Force:</strong> Social</p>
                <p>82% of Singapore professionals now prioritise flexible work arrangements (Robert Walters 2025). The proliferation of hybrid work has created a new gap in communication, collaboration, leadership, and digital presence competencies. Employers are simultaneously demanding both technical AI skills and human-centric soft skills–creating a dual mandate. The WEF ranks resilience, flexibility, and analytical thinking as the top core skills increasing in demand.</p>
                <AlertBox type="signal" title="SO WHAT">
                  Soft Skills Training is not commoditised–the demand profile has shifted toward digital-era communication, leadership in distributed teams, and adaptability. Differentiating on measurable behavioural outcomes (not just content delivery) will drive enterprise contract retention.
                </AlertBox>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      {/* MICRO TRENDS */}
      <div>
        <SectionHeader id="micro-trends" number="2" title="Micro Trends — 7 Emerging Patterns" subtitle="Sector-specific patterns observed within the Singapore Higher Skilling market, 2024–2025." />
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {[
            { id: "T1", title: "Generative AI Content & Personalised Learning Paths Enter Mainstream Corporate Training", timeline: "Short-Term (0–1 yr)", content: "In the last 12 months, Singapore corporate training providers have begun integrating GenAI (ChatGPT, Copilot, Claude) directly into curriculum authoring and learner personalisation. AI-generated adaptive pathways are replacing static course catalogs in leading LMS platforms. Early adopters include NTUC LearningHub, Eruditus, and Emeritus.", soWhat: "LMS and B2B training providers that have not embedded AI-personalisation risk losing enterprise contracts to nimbler competitors. This is a 12-month window to implement or acquire GenAI-native content pipelines." },
            { id: "T2", title: "Skills-Based Hiring Displacing Degree Requirements — Direct Demand for Micro-Credentials", timeline: "Short-Term (0–1 yr)", content: "Skills-based hiring adoption in Singapore jumped to over 80% of employers globally (TestGorilla 2024). SkillsFuture Career Transition Programmes grew from 179 to 239 in 2024. 86% of SSG-funded learners reported improved job performance. The shift from 'degree to demonstrate' to 'demonstrate to earn' is legitimising short-form, verified credentials at scale.", soWhat: "Stackable micro-credentials and digital badges aligned to SSG's Singapore Skills Taxonomy represent a structural growth channel. Build modular programmes with employer-facing verification portals." },
            { id: "T3", title: "Healthcare AHP & Para-Professional Training Pipeline Running at Capacity Deficit", timeline: "Mid-Term (1–3 yr)", content: "Singapore's care economy workforce gap – across nursing aides, AHPs, and medical social workers — is widening. SSG's 2025 SDFE report flags Care Economy as a top-priority skills investment area. Regulatory frameworks for CPD and CME credit hours are tightening. Overseas-trained AHPs require bridging programmes to meet Singapore SMC and AHPC standards. Major Players: SGH Postgraduate Allied Health Institute (PGAHI) [SingHealth cluster], NTUC LearningHub — Healthcare Academy, CSM Academy, Docquity.", soWhat: "Healthcare skilling is arguably the most defensible sub-sector – regulation-mandated, recurring-revenue, and under-capacity. Operators with APC/SMC-accredited curriculum and clinical simulation capabilities have durable competitive moats." },
            { id: "T4", title: "Employer-Funded Learning Budgets Shifting from T&E to L&D — and Demanding ROI Data", timeline: "Short-Term (0–1 yr)", content: "70% of Singapore organisations increased training budgets in 2024–25. However, the emphasis has shifted from participation KPIs to outcome-linked ROI. HR leaders are demanding learning analytics dashboards, pre/post skill assessment scores, and job placement rates. This is fundamentally changing the procurement conversation from cost to impact measurement.", soWhat: "B2B training providers and LMS vendors that can demonstrate measurable learning outcomes – through data dashboards, skills gap assessments, and cohort analytics – will win longer enterprise contracts and higher ACV." },
            { id: "T5", title: "Advanced Manufacturing & Industry 4.0 Skills Demand Surging Amid Reshoring Trends", timeline: "Mid-Term (1–3 yr)", content: "Singapore's role as a precision manufacturing and semiconductor hub is intensifying demand for Industry 4.0 skills: robotics, PLC programming, digital twin simulation, additive manufacturing, and predictive maintenance. The Economic Development Board (EDB) is co-funding sector-specific upskilling programmes with manufacturers. This trend is accelerated by US-China decoupling and supply chain reshoring to ASEAN.", soWhat: "Advanced Manufacturing training is entering a policy-funded boom cycle. Operators who can partner with EDB-supported companies (Micron, Infineon, ST Engineering) on in-situ workforce training have long-duration, high-value B2B revenue potential." },
            { id: "T6", title: "Mid-Career Transition Cohort (40+) Emerging as Largest Growing Learner Segment", timeline: "Short-Term (0–1 yr)", content: "The May 2024 SGD 4,000 SkillsFuture Mid-Career Credit directly targeted workers aged 40+. SkillsFuture Credit usage rose 35% to 260,000 individuals in 2024. Career Transition Programmes are showing measurable income uplift for switchers. Mid-career workers are distinctively motivated, self-directed learners with higher course completion rates than early-career cohorts.", soWhat: "This cohort is government-funded, underserved by traditional providers, and highly valuable to employers undergoing digital transformation. Tailored programmes in Business Management, Digital Transformation, and Professional Services reskilling for 40+ learners offer strong unit economics." },
            { id: "T7", title: "International Executive Education Consolidation — Emeritus/Eruditus Model Scaling in Singapore", timeline: "Mid-Term (1–3 yr)", content: "Singapore-headquartered Emeritus and Eruditus (both with significant Singapore operations) are expanding university-partnership models – co-branding executive programmes with NUS, NTU, SMU, and global institutions. Eruditus raised USD 150M in 2024, ranking among the top global EdTech funding events of the year. This consolidation is simultaneously raising quality expectations and creating pricing pressure on independent providers.", soWhat: "Independent providers in the Business & Professional Services training sub-sector face margin compression from well-capitalised aggregators. Differentiate on niche domain expertise, proprietary assessment tools, or corporate customisation capabilities that aggregators cannot replicate at scale." },
          ].map((t) => (
            <div key={t.id} className="rounded-lg border border-border bg-card p-5">
              <div className="mb-2 flex items-center gap-2">
                <span className="rounded bg-primary/10 px-2 py-0.5 text-xs font-bold text-primary">{t.id}</span>
                <TimelineBadge timeline={t.timeline} />
              </div>
              <h3 className="mb-2 font-heading text-sm font-bold text-foreground">{t.title}</h3>
              <p className="text-xs leading-relaxed text-muted-foreground">{t.content}</p>
              <AlertBox type="signal" title="SO WHAT"><p>{t.soWhat}</p></AlertBox>
            </div>
          ))}
        </div>
      </div>

      {/* TECHNOLOGY DISRUPTIONS */}
      <div>
        <SectionHeader id="tech-disruptions" number="3" title="Technology Disruptions" subtitle="Five technologies changing the game — with mainstream adoption timelines." />
        <div className="mt-4 space-y-4">
          {[
            { name: "Generative AI Tutors & Adaptive Learning Engines", impact: 10, timing: "Already entering mainstream (2025). Full enterprise adoption: 2026.", desc: "Large language model-powered tutors (e.g., Khan Academy's Khanmigo, Coursera Coach, enterprise deployments of Claude/GPT) can simulate 1:1 coaching at near-zero marginal cost. AI tutors adjust learning pace, generate practice questions, and provide real-time feedback. This disrupts instructor-led training economics fundamentally.", sectors: "All sub-sectors — especially Technology, Soft Skills, Professional Services", soWhat: "Any provider not integrating AI tutoring into their platform by end-2026 risks being undercut on price and learner experience. This is an existential threshold." },
            { name: "AI-Powered Skills Assessment & Psychometric Tools", impact: 9, timing: "Early adopters in 2025; mainstream enterprise 2026.", desc: "AI-based skills assessment platforms (e.g., Korn Ferry, Pymetrics, Vervoe) are replacing traditional pre-course testing with dynamic, role-specific competency mapping. These tools deliver automated skills gap analysis, learning path recommendations, and post-training performance correlation.", sectors: "B2B Services / LMS, Corporate Training, Healthcare AHP Assessment", soWhat: "LMS and corporate training providers without embedded skills assessment AI will lose to platforms that can close the 'skills gap to business outcome' loop. Consider acquiring or partnering with an assessment-tech vendor." },
            { name: "AR/VR Immersive Simulation Training", impact: 8, timing: "Healthcare/manufacturing pilot stage (2025); enterprise mainstream 2027.", desc: "Immersive simulation through AR/VR headsets (Meta Quest Enterprise, HTC Vive Focus) is becoming viable for clinical skills training, advanced manufacturing (equipment operation, safety drills), and soft skills scenario practice. Simulation allows mistake-safe, high-fidelity practice unavailable in traditional instruction.", sectors: "Healthcare/AHP Training, Advanced Manufacturing, Soft Skills", soWhat: "Healthcare and Advanced Manufacturing training providers that build simulation content libraries now will establish switching-cost advantages before cost curves bring mass competition in 2027–2028." },
            { name: "Skills Intelligence Platforms & Labour Market Analytics", impact: 8, timing: "Government-side mainstream now (SSG's Skills Taxonomy, SDFE Dashboards); enterprise adoption 2026.", desc: "Platforms like Lightcast, Burning Glass (now Lightcast), and Singapore's own SSG Skills and Job Mobility Dashboard aggregate job posting, skills demand, and career transition data to generate real-time labour market intelligence.", sectors: "B2B Services, LMS, Corporate Training, Business & Professional Services", soWhat: "Providers that build curriculum-to-labour-market feedback loops – using real-time skills intelligence – will demonstrate measurable graduate employment outcomes and command premium pricing in enterprise RFPs." },
            { name: "Agentic AI Workflow Training (AI-in-the-workflow Skilling)", impact: 9, timing: "Emerging in 2025 in tech sector; cross-industry mainstream 2027.", desc: "As AI agents are deployed within enterprise workflows (e.g., Copilot for M365, Salesforce Einstein, Workday AI), employees need 'AI fluency' that goes beyond general GenAI awareness — into workflow-specific agentic operation, prompt engineering for business contexts, and human-AI collaboration protocols.", sectors: "Technology & Digital AI Skilling, B2B Corporate Training, Business & Professional Services", soWhat: "This is the next wave after 'general AI literacy.' Providers who build agentic AI workflow curricula specific to industry verticals (finance, healthcare, manufacturing) ahead of 2027 will capture premium enterprise contracts." },
          ].map((tech, i) => (
            <div key={i} className="group relative rounded-lg border border-border bg-card p-5 transition-colors hover:border-primary/30">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="font-heading text-sm font-bold text-foreground">{tech.name}</h3>
                <ImpactDots score={tech.impact} />
              </div>
              <p className="mt-1 text-xs font-medium text-primary">{tech.timing}</p>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{tech.desc}</p>
              <p className="mt-1 text-xs text-muted-foreground"><strong>Sectors:</strong> {tech.sectors}</p>
              <AlertBox type="signal" title="SO WHAT"><p>{tech.soWhat}</p></AlertBox>
            </div>
          ))}
        </div>
      </div>

      {/* REGULATORY SHIFTS */}
      <div>
        <SectionHeader id="regulatory" number="4" title="Regulatory Shifts" subtitle="SkillsFuture Singapore comprehensive policy landscape and upcoming legislative changes." />

        {/* Filter controls */}
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2 text-xs">
            <span className="font-medium text-muted-foreground">Filter:</span>
            {["all", "Short-Term", "Mid-Term"].map((f) => (
              <button key={f} onClick={() => setRegFilter(f)} className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${regFilter === f ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-border"}`}>
                {f === "all" ? "All" : f}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2 text-xs">
            <span className="font-medium text-muted-foreground">Sort:</span>
            <button onClick={() => setRegSort("impact")} className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${regSort === "impact" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}>Impact</button>
            <button onClick={() => setRegSort("name")} className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${regSort === "name" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}>Name</button>
          </div>
        </div>

        {/* Regulatory table */}
        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-3 py-2 text-left font-semibold">Policy / Regulation</th>
                <th className="px-3 py-2 text-center font-semibold">Impact</th>
                <th className="px-3 py-2 text-left font-semibold">Timeline</th>
                <th className="px-3 py-2 text-left font-semibold">Key Provisions</th>
                <th className="px-3 py-2 text-left font-semibold">Strategic Implication</th>
              </tr>
            </thead>
            <tbody>
              {(() => {
                const regs = [
                  { name: "[R1] SkillsFuture Masterplan 2030", impact: 9, timeline: "Short-Term", provisions: "MOE's Transforming Education through Technology Masterplan 2030 sets minimum standards for technology integration in SSG-funded training: data-driven learner progress monitoring, digital content delivery, and competency assessment.", implication: "Audit current delivery platforms for Masterplan 2030 compliance. Providers not meeting digital standards by 2026 risk SSG funding de-listing." },
                  { name: "[R2] SkillsFuture Mid-Career Credit (SGD 4,000) Expansion", impact: 9, timeline: "Short-Term", provisions: "The May 2024 SGD 4,000 Mid-Career Credit for Singaporeans 40+ has already driven a 35% surge in skilling participation. Budget 2026 discussions include potential expansion of eligibility downward (to 35+) and increases in credit quantum.", implication: "Prioritise SSG-approved course development targeted at the 35–55 age cohort. Mid-career programmes with clear wage uplift evidence will receive expanded funding allocation." },
                  { name: "[R3] Healthcare CPD & CME Regulatory Tightening", impact: 8, timeline: "Mid-Term", provisions: "SMC, AHPC, and Singapore Nursing Board are progressively tightening mandatory CPD hour requirements and accreditation standards. Digital CME record portals standardising verification. New specialty areas (telemedicine, AI-assisted diagnostics) added to required competency frameworks.", implication: "Healthcare training operators should pursue AHPC/SMC CPD provider accreditation proactively. Adding digital log and verification capabilities creates compliance lock-in." },
                  { name: "[R4] MOM Fair Consideration Framework (FCF)", impact: 7, timeline: "Short-Term", provisions: "MOM mandates employers fairly consider Singaporeans before hiring foreign talent. Demonstrated investment in local employee training increasingly scrutinised in EP renewal assessments. Corporate training spend becomes compliance-adjacent activity for MNCs.", implication: "B2B training and staffing operators should position services to HR and Legal compliance teams — not just L&D. Training spend can be positioned as FCF evidence documentation." },
                  { name: "[R5] PDPA Amendments & AI Governance Frameworks", impact: 7, timeline: "Mid-Term", provisions: "Singapore's PDPA amendments and the Model AI Governance Framework 2.0 creating compliance training demand across financial services, healthcare, and tech sectors. Regulators expanding mandatory AI ethics, data governance, and responsible AI training requirements.", implication: "Develop and accredit AI governance and data privacy compliance training modules. Recurring, mandate-driven revenue stream for B2B corporate training." },
                  { name: "SkillsFuture Credit (SFC)", impact: 9, timeline: "Short-Term", provisions: "SGD $500 base (non-expiring, 25+), SGD $4,000 Mid-Career (40+, non-expiring). 260,000 users in 2024 (+35% YoY). Expanded to Udemy Business and Coursera from 2024; claims grew 10x YoY.", implication: "Core demand driver for B2C programmes. Ensure SSG-approved course eligibility for SFC claims." },
                  { name: "SkillsFuture Level-Up Programme (SFLP)", impact: 9, timeline: "Short-Term", provisions: "Mid-Career Enhanced Subsidy up to 90%. Full-Time Allowance up to SGD $3,000/month (max SGD $72,000 over 24 months, from March 2025). Part-Time Allowance SGD $300/month from early 2026. Second subsidised diploma for 40+.", implication: "Creates financially buffered mid-career learner cohort willing to commit to long-form programmes." },
                  { name: "SkillsFuture Enterprise Credit (SFEC) Redesign", impact: 8, timeline: "Mid-Term", provisions: "Redesigned as online wallet model (H2 2026). SGD $10,000 per eligible company (min 3 resident employees), valid 3 years. Eliminates upfront payment barrier for SMEs.", implication: "Wallet-model eliminates cash-flow barrier for SMEs. Material increase in B2B training uptake expected." },
                  { name: "Workforce Development Grant (WDG)", impact: 8, timeline: "Mid-Term", provisions: "Consolidates existing WSG Career Conversion Programmes and SSG's NACE projects into single grant instrument via Business Grants Portal. Up to 70% of costs for job redesign activities. Full form expected 2026.", implication: "Streamlines fragmented multi-agency process. Pre-approved providers on BGP gain first-mover advantage." },
                  { name: "TRAQOM — Training Quality & Outcomes Measurement", impact: 8, timeline: "Short-Term", provisions: "SSG's quality assurance framework: course completion, learner satisfaction, employment outcomes, skills utilisation. Outcomes data shared on MySkillsFuture portal. Poor performance triggers funding withdrawal.", implication: "Employment outcome tracking is now SSG's primary grant renewal signal. Invest in learner outcome management and reporting systems." },
                  { name: "Tightened Course Funding Guidelines (Dec 2025)", impact: 8, timeline: "Short-Term", provisions: "SSG tightened funding for incumbent-skills/refresher courses. NOT affected: SkillsFuture Series, SCTP, IHL full qualifications. Subsidy rates reduced for status quo maintenance courses.", implication: "Audit course catalogues for incumbent skills exposure. Restructure towards SCTP-eligible or SkillsFuture Series-aligned programmes." },
                  { name: "Skills Development Levy (SDL)", impact: 7, timeline: "Short-Term", provisions: "0.25% of monthly wages. Min SGD $2/employee/month, max SGD $11.25. Covers all local AND foreign employees. SDL compliance prerequisite for all employer-side grant access.", implication: "Training providers should ensure B2B clients (especially SMEs) are SDL-compliant to unlock WDG and SFEC eligibility." },
                  { name: "Careers & Skills Passport (CSP)", impact: 7, timeline: "Mid-Term", provisions: "AI-enhanced government-verified digital record of employment history, qualifications, and training credentials. Integrates with AI career advisor tool. Enables employers to verify skills in real time.", implication: "Shift Singapore towards skills-first hiring, reducing reliance on paper qualifications." },
                ];
                let filtered = regFilter === "all" ? regs : regs.filter(r => r.timeline.includes(regFilter));
                filtered = regSort === "impact" ? [...filtered].sort((a, b) => b.impact - a.impact) : [...filtered].sort((a, b) => a.name.localeCompare(b.name));
                return filtered.map((r, i) => (
                  <tr key={i} className="border-b border-border">
                    <td className="px-3 py-2 font-medium text-foreground">{r.name}</td>
                    <td className="px-3 py-2 text-center"><ImpactDots score={r.impact} /></td>
                    <td className="px-3 py-2"><TimelineBadge timeline={r.timeline} /></td>
                    <td className="max-w-xs px-3 py-2 text-muted-foreground">{r.provisions}</td>
                    <td className="max-w-xs px-3 py-2 text-muted-foreground">{r.implication}</td>
                  </tr>
                ));
              })()}
            </tbody>
          </table>
        </div>

        <AlertBox type="warning" title="Compliance Note">
          The December 2025 tightened course funding guidelines represent a material headwind for providers heavily weighted towards incumbent skills refresher courses. Providers should audit their course portfolio and pivot towards SCTP-eligible, SkillsFuture Series-aligned, or qualification-linked programmes to preserve subsidy access.
        </AlertBox>

        {/* Public Funding Flows */}
        <h3 className="mt-6 font-heading text-lg font-bold text-foreground">Market Sizing & Public Funding Flows</h3>
        <div className="mt-3 overflow-x-auto">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-3 py-2 text-left font-semibold">Instrument</th>
                <th className="px-3 py-2 text-left font-semibold">Estimated Public Commitment</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["SkillsFuture Credit Base (SGD $500 × 2.7M eligible SCs)", "~SGD $1.35B potential exposure"],
                ["SFC(Mid-Career) Top-Up (SGD $4,000 × eligible 40+ cohort)", "~SGD $1.6B+ potential exposure over cohort life"],
                ["SFLP Full-Time Allowance (max SGD $72,000 × participants)", "Up to SGD $72K per qualifying mid-career learner"],
                ["SFLP Part-Time Allowance (SGD $300/month from 2026)", "Broadly accessible to 40+ workforce"],
                ["SkillsFuture Jobseeker Support (SGD $6,000 × 6 months)", "Per qualifying retrenched worker"],
                ["Redesigned SFEC (SGD $10,000 × eligible companies)", "~SGD $230M+ for estimated 23,000+ eligible employers"],
                ["NTUC CTC Grant Injection (Budget)", "Additional SGD $200 million"],
                ["National Productivity Fund Injection", "Additional SGD $3 billion (includes AI/quantum mandate)"],
                ["R&D Infrastructure Investment", "SGD $1 billion (incl. biotech/MedTech/semiconductor)"],
              ].map(([instrument, commitment], i) => (
                <tr key={i} className="border-b border-border">
                  <td className="px-3 py-2 font-medium text-foreground">{instrument}</td>
                  <td className="px-3 py-2 text-muted-foreground">{commitment}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <AlertBox type="info">
          Total direct training subsidies and grants available to the market exceed SGD $3 billion when accounting for the full SFC credit pool, SFLP allowances, redesigned SFEC, WDG, and CTC Grant. This represents the deepest public training stimulus since SkillsFuture was founded in 2015.
        </AlertBox>
      </div>

      {/* CONSUMER BEHAVIOUR */}
      <div>
        <SectionHeader id="consumer" number="5" title="Consumer Behaviour Changes" subtitle="How enterprise and individual buyer preferences are evolving in Singapore's Higher Skilling market." />
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {[
            { icon: "🎯", title: "From Degrees to Outcomes: The Micro-Credential Preference Shift", impact: 9, desc: "Learners increasingly prefer modular, stackable credentials that are immediately applicable to their current role over 12–24 month programmes. 260,000 Singaporeans used bite-sized SkillsFuture credits in 2024. Completion rates for short-form (<20 hour) courses are 3–5x higher than long-form programmes. The buyer preference is for speed-to-skill, not comprehensive coverage.", signal: "Shift programme architecture to modular 5–15 hour building blocks with stackable certification." },
            { icon: "💼", title: "Employer-as-Payer Dominates — B2C Learners Demand 'Employer-Ready' Signal", impact: 8, desc: "The majority of corporate skilling is now employer-funded, raising the expectation that all training directly maps to employer-defined competency frameworks or job descriptions. Individual learners, even when self-funding, demand programmes that reference specific employer requirements (e.g., 'as required by MAS' or 'aligned to AWS Certified Solutions Architect'). ROI must be articulable.", signal: "Map all course outcomes explicitly to employer competency frameworks, industry certifications, or regulatory requirements." },
            { icon: "📱", title: "Mobile-First Learning: 58% of Southeast Asian Learners Access on Mobile", impact: 7, desc: "Mobile penetration and the 'learn on the go' behaviour — particularly among 35–50 year old professionals balancing work and learning — is driving demand for mobile-optimised, async, microlearning formats. 58% of SEA EdTech access is mobile (HolonIQ). Providers with desktop-only or PDF-heavy course formats are experiencing higher abandonment rates.", signal: "Invest in mobile-native UX, bite-sized video modules, and offline-access capability as platform differentiators." },
            { icon: "👥", title: "Cohort-Based Learning Premium Over Self-Paced MOOCs", impact: 7, desc: "Post-pandemic, learners (particularly executives and mid-career professionals) are willing to pay a 30–50% premium for cohort-based programmes with live peer interaction, expert facilitation, and networking outcomes. Pure self-paced MOOC completion rates remain below 5–10%. The social accountability and signal value of cohort programmes commands higher NPS and stronger employer referral rates.", signal: "Hybrid cohort + async models optimise completion rates and pricing. Cohort programmes justify premium corporate training contracts." },
            { icon: "🔗", title: "Employer Demand for Bundled L&D Ecosystems — Not Standalone Courses", impact: 8, desc: "Enterprise HR buyers are consolidating vendor relationships, preferring integrated L&D partners that can deliver skills assessment, custom content, learning management, analytics, and coaching in a single engagement. RFP requirements at large MNCs now routinely include LMS integration APIs, HRIS data connectivity, and cohort reporting dashboards. Point solutions are losing to platform plays.", signal: "B2B training providers must develop or partner to offer an integrated L&D stack: assessment + content + platform + analytics. White-labelled LMS bundling is a strategic priority." },
          ].map((b, i) => (
            <div key={i} className="rounded-lg border border-border bg-card p-5">
              <div className="flex items-center gap-2">
                <span className="text-2xl">{b.icon}</span>
                <h3 className="font-heading text-sm font-bold text-foreground">{b.title}</h3>
              </div>
              <div className="mt-2"><ImpactDots score={b.impact} /></div>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{b.desc}</p>
              <AlertBox type="signal" title="Strategic Signal"><p>{b.signal}</p></AlertBox>
            </div>
          ))}
        </div>
      </div>

      {/* INVESTMENT SIGNALS */}
      <div>
        <SectionHeader id="investment" number="6" title="Investment Signals" subtitle="Where smart money is flowing — VC deals, M&A activity, and capital market signals." />
        <div className="mt-4 space-y-4 text-sm leading-relaxed text-foreground">
          <p>Global EdTech VC reached USD 2.4 billion in 2024, the lowest level since 2014, representing an 89% decline from the 2021 peak. However, this masks a bifurcated market: average check size increased to USD 7.8 million as investors concentrated capital into fewer, higher-conviction platforms. Q1 2025 saw USD 410 million raised — down 35% YoY — but three deals (Leap Scholar USD 65M, MagicSchool AI USD 45M, Campus USD 46M) accounted for nearly half of all capital raised.</p>
          <AlertBox type="signal" title="Key Signal">
            Investors are not abandoning the sector — they are demanding proven unit economics, AI-native architecture, and measurable workforce outcomes before committing growth capital.
          </AlertBox>
        </div>

        <h3 className="mt-6 font-heading text-base font-bold text-foreground">Singapore & Southeast Asia — Regional Capital Flows</h3>
        <div className="mt-3 overflow-x-auto">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-3 py-2 text-left font-semibold">Signal</th>
                <th className="px-3 py-2 text-left font-semibold">Detail</th>
                <th className="px-3 py-2 text-left font-semibold">Implication</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Singapore EdTech Funding", "USD 25.5M raised in 2025 by September vs USD 125K in 2024 — a 20,300% increase across 4 rounds (Tracxn)", "Re-acceleration after a flat 2024; early-stage momentum returning"],
                ["SEA EdTech Market Size", "USD 10.7B total SEA market (2024); Singapore at USD 2.2B and growing to USD 3.5B+ by 2027 at ~15% CAGR", "Singapore is a high-value, premium-priced node in the SEA ecosystem"],
                ["PE/M&A in Professional Training", "Private equity activity remained robust in 2024 globally; PE firms leading workforce training acquisitions. L.E.K. identifies upskilling/reskilling as primary M&A theme entering 2025", "Expect PE consolidation of profitable, SSG-accredited Singapore training providers"],
                ["Eruditus Funding (Singapore HQ)", "Eruditus (Singapore-headquartered) raised USD 150M in 2024, ranking top-5 globally. Total funding now exceeds USD 700M", "University-partnership exec education model attracting late-stage growth capital; validates the B2B premium segment"],
                ["East Ventures — Top SEA Investor", "East Ventures: 53 SEA EdTech investments in 12 months; top investor in Singapore EdTech by deal count (Tracxn 2024)", "Seed/Series A capital available for AI-native skilling platforms with SEA market fit"],
                ["Government Co-Investment", "SSG/WSG co-fund training programmes; EDB co-funds manufacturing skills under Industry 4.0; Green skills programmes co-funded under Green Plan 2030", "Government as patient co-investor reduces commercial risk for aligned providers"],
              ].map(([signal, detail, imp], i) => (
                <tr key={i} className="border-b border-border">
                  <td className="px-3 py-2 font-medium text-foreground">{signal}</td>
                  <td className="max-w-sm px-3 py-2 text-muted-foreground">{detail}</td>
                  <td className="max-w-xs px-3 py-2 text-muted-foreground">{imp}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 className="mt-6 font-heading text-base font-bold text-foreground">Sub-Sector Investment Conviction Rating</h3>
        <div className="mt-3 space-y-2">
          {[
            { sector: "AI / Technology Skilling Platforms", rating: "HIGH", rationale: "40% demand growth for AI engineers; government 15,000 AI practitioners target; Eruditus/Emeritus validation. Highest growth, highest defensibility for AI-native content." },
            { sector: "Healthcare & Care Economy Training", rating: "HIGH", rationale: "Government-prioritised, regulatory-mandate-driven, recurring-revenue. Demographic ageing creates structural demand that is policy-supported and underpenetrated." },
            { sector: "B2B LMS & Corporate Training Platforms", rating: "MEDIUM", rationale: "PE consolidation underway. AI-augmented LMS with analytics is winning enterprise RFPs. Acquire or build integrated L&D platform capability." },
            { sector: "Advanced Manufacturing & Industry 4.0", rating: "MEDIUM", rationale: "EDB co-funding, reshoring tailwinds, structured sector partnerships. Long-duration enterprise contracts with sovereign-backed demand signal." },
            { sector: "Business & Professional Services Skilling", rating: "NEUTRAL", rationale: "Margin pressure from Eruditus/Emeritus aggregation. Selective opportunity in niche accreditation, AI governance compliance, and MAS-regulated financial services training." },
            { sector: "Soft Skills Training", rating: "WEAK", rationale: "Commoditisation risk is real. Differentiation through measurable behavioural outcomes and digital-era skill mapping required to command premium pricing." },
          ].map((s, i) => (
            <div key={i} className="flex items-start gap-3 rounded-lg border border-border bg-card p-3">
              <PriorityBadge level={s.rating === "HIGH" ? "high" : s.rating === "MEDIUM" ? "medium" : s.rating === "NEUTRAL" ? "neutral" : "weak"} label={s.rating} />
              <div>
                <p className="text-sm font-semibold text-foreground">{s.sector}</p>
                <p className="text-xs text-muted-foreground">{s.rationale}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Funding Events Table */}
        <h3 className="mt-6 font-heading text-base font-bold text-foreground">Funding Events in Singapore EdTech</h3>
        <div className="mt-3 overflow-x-auto">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-3 py-2 text-left font-semibold">Company</th>
                <th className="px-3 py-2 text-left font-semibold">Funding (USD)</th>
                <th className="px-3 py-2 text-left font-semibold">Stage</th>
                <th className="px-3 py-2 text-left font-semibold">Investors</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Eruditus", "$961M", "Series F", "SoftBank Vision Fund, Accel, Chan Zuckerberg Initiative, Leeds Equity Partners, FullCircle Capital, Bertelsmann"],
                ["LingoAce", "$180M", "Series C", "Owl Ventures, Tiger Global, Sequoia Capital China, Shunwei Capital"],
                ["BrightChamps", "$63.3M", "Series C", "Premji Invest, Binance Labs, Jungle Ventures, Owl Ventures"],
                ["Cialfo", "$57M", "Series B", "January Capital, Vulcan Capital, Seed Capital, Bisk Ventures, DLF Venture, Alto Partners"],
                ["Docquity", "$57.5M", "Series C", "Openspace Ventures, MassMutual Asia, Patamar Capital"],
                ["ErudiFi", "$22.2M", "Series A + Debt", "Openspace Ventures, Monk's Hill Ventures"],
                ["Adventus", "$44.3M", "Series B", "Tiger Global, B Capital Group, Openspace Ventures"],
                ["Manabie", "$42.8M", "Series B", "Gojo & Company, Mistletoe, East Ventures"],
                ["XSEED", "$20M", "Series B", "Lightbox Ventures, Omidyar Network, GGV Capital"],
                ["Geniebook", "$17.6M", "Series A", "East Ventures, Lightspeed Venture Partners"],
                ["PREP", "$9M", "Series A", "Atinum Investment, KB Investment"],
                ["Clevai", "$6.75M", "Series A", "Wavemaker Partners, East Ventures"],
                ["Edufi", "$6.1M", "Pre-Seed", "EduSpaze, undisclosed angels"],
                ["Knowledge Platform", "$5M", "Series A", "DLF Venture, BDO Unibank, others"],
                ["Amdon", "$3.91M", "Private Equity", "Chip Eng Seng Corporation"],
                ["NewCampus", "$4.52M", "Seed", "500 Global, Insignia Ventures Partners"],
                ["Cerebry", "$3.65M", "Seed", "January Capital, undisclosed investors"],
                ["Doyobi", "$3.8M", "Seed (Acquired)", "Monk's Hill Ventures, Carousell CEO"],
                ["Taidii", "$2.95M", "Seed / Venture", "Wavemaker Partners, NUS Technology Holdings, Spiral Ventures, TNB Ventures"],
                ["Kempus", "$3M", "Seed", "Not Publicly Available"],
                ["EWA", "$2.7M", "Seed", "Not Publicly Available"],
                ["Flying Cape", "$1.5M", "Series A", "Startup-O, EduSpaze, Spaze Ventures"],
                ["Tueetor", "$1.5M", "Seed", "Not Publicly Available"],
                ["Strive", "$1.42M", "Seed", "Y Combinator, Goodwater Capital, Mastercard, Soma Capital"],
                ["Kinobi", "$2.02M", "Seed", "Antler, undisclosed investors"],
                ["Jackett", "$1M", "Seed", "Forge Ventures, Entrepreneur First, Epic Angels Network"],
                ["ACKTEC Technologies", "$1M", "Seed", "Undisclosed investors"],
                ["Teamie", "$1.1M", "Pre-Series A", "Undisclosed investors"],
                ["Rocket Academy", "$1.1M", "Seed", "Undisclosed investors"],
                ["Dim Sum Warriors", "$500K", "Seed", "EduSpaze, Plug and Play APAC, Epic Angels Network"],
                ["Noodle Factory", "$500K", "Seed", "EduSpaze, SuperCharger Ventures, angel investors"],
                ["VivaLing", "$367K", "Seed", "EduSpaze"],
                ["Genius U", "IPO (NYSE American: GNS)", "Publicly Listed", "Publicly Listed — IPO April 2022"],
              ].map(([company, funding, stage, investors], i) => (
                <tr key={i} className="border-b border-border">
                  <td className="px-3 py-2 font-medium text-foreground">{company}</td>
                  <td className="px-3 py-2 text-foreground">{funding}</td>
                  <td className="px-3 py-2 text-muted-foreground">{stage}</td>
                  <td className="max-w-sm px-3 py-2 text-muted-foreground">{investors}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* TREND HORIZON MAP */}
      <div>
        <SectionHeader id="horizon-map" number="7" title="Strategic Trend Horizon Map" subtitle="All trends mapped to Short-Term (0–1yr), Mid-Term (1–3yr), and Long-Term (3–5yr) horizons." />
        <div className="mt-4">
          <TrendHorizonMap data={[
            { trend: "AI/GenAI Integration in Course Delivery", category: "Tech Disruption", shortTerm: "●", midTerm: "●", longTerm: "–", impact: 10, detail: "AI tutors and GenAI content pipelines entering mainstream. Any provider not integrating by end-2026 risks being undercut on price and learner experience." },
            { trend: "SkillsFuture Mid-Career Credit Expansion", category: "Regulatory", shortTerm: "●", midTerm: "●", longTerm: "–", impact: 9, detail: "SGD 4,000 Mid-Career Credit for 40+ has driven 35% surge. Budget 2026 may expand to 35+ with increased quantum." },
            { trend: "AI & Automation Labour Displacement", category: "Macro Force", shortTerm: "●", midTerm: "●", longTerm: "●", impact: 9, detail: "WEF identifies AI as top-growing skill category. Government aims to triple AI practitioners to 15,000. Perpetual reskilling demand cycle." },
            { trend: "Skills-Based Hiring / Micro-Credentials", category: "Micro Trend", shortTerm: "●", midTerm: "●", longTerm: "–", impact: 8, detail: "80%+ employer adoption of skills-based hiring. SCTP programmes grew from 179 to 239 in 2024." },
            { trend: "Healthcare AHP/CME Pipeline Deficit", category: "Micro Trend", shortTerm: "●", midTerm: "●", longTerm: "●", impact: 8, detail: "Care Economy flagged as top SSG priority. Structural workforce shortage across AHPs, nursing aides. Regulation-mandated recurring revenue." },
            { trend: "AI Skills Assessment & LMS Analytics", category: "Tech Disruption", shortTerm: "●", midTerm: "●", longTerm: "–", impact: 9, detail: "AI-based assessment platforms replacing traditional testing with dynamic competency mapping. Must-have for enterprise RFPs." },
            { trend: "Employer ROI Demand in L&D Procurement", category: "Consumer Behaviour", shortTerm: "●", midTerm: "●", longTerm: "–", impact: 7, detail: "70% of organisations increased training budgets but shifted emphasis from participation KPIs to outcome-linked ROI." },
            { trend: "Advanced Manufacturing / Industry 4.0", category: "Micro Trend", shortTerm: "–", midTerm: "●", longTerm: "●", impact: 8, detail: "Semiconductor hub intensifying I4.0 skills demand. EDB co-funding programmes with manufacturers. US-China reshoring tailwinds." },
            { trend: "SkillsFuture Masterplan 2030 Compliance", category: "Regulatory", shortTerm: "●", midTerm: "●", longTerm: "–", impact: 9, detail: "Minimum standards for technology integration in SSG-funded training. Non-compliant providers risk funding de-listing." },
            { trend: "AR/VR Simulation (Healthcare / Manufacturing)", category: "Tech Disruption", shortTerm: "–", midTerm: "●", longTerm: "●", impact: 8, detail: "Immersive simulation becoming viable for clinical and manufacturing training. Mass competition expected 2027-2028." },
            { trend: "Green / ESG Skills Transition", category: "Macro Force", shortTerm: "–", midTerm: "●", longTerm: "●", impact: 7, detail: "Singapore Green Plan 2030 accelerating ESG/sustainability skillsets demand across workforce." },
            { trend: "Demographic Ageing / Care Economy", category: "Macro Force", shortTerm: "–", midTerm: "●", longTerm: "●", impact: 8, detail: "Rapidly ageing population creating structural healthcare workforce shortage. Government-prioritised growth pillar." },
            { trend: "Agentic AI Workflow Skilling", category: "Tech Disruption", shortTerm: "–", midTerm: "●", longTerm: "●", impact: 9, detail: "Next wave after general AI literacy. Workflow-specific agentic operation and human-AI collaboration protocols." },
            { trend: "Mid-Career Learner Cohort (40+) Growth", category: "Micro Trend", shortTerm: "●", midTerm: "●", longTerm: "–", impact: 7, detail: "SGD 4,000 credit has unlocked government-funded, underserved cohort with higher completion rates." },
            { trend: "International Exec Ed Consolidation", category: "Micro Trend", shortTerm: "–", midTerm: "●", longTerm: "●", impact: 7, detail: "Emeritus/Eruditus expanding university-partnership models. Creating pricing pressure on independents." },
            { trend: "PDPA / AI Governance Compliance Training", category: "Regulatory", shortTerm: "–", midTerm: "●", longTerm: "●", impact: 7, detail: "PDPA amendments and Model AI Governance Framework 2.0 creating recurring compliance training demand." },
            { trend: "Post-COVID Hybrid Work Soft Skills Shift", category: "Macro Force", shortTerm: "●", midTerm: "–", longTerm: "–", impact: 7, detail: "82% of Singapore professionals prioritise flexible work. New gap in digital-era communication and leadership." },
            { trend: "PE/M&A Consolidation of Training Providers", category: "Inv. Signal", shortTerm: "●", midTerm: "●", longTerm: "–", impact: 8, detail: "PE activity robust globally. L.E.K. identifies upskilling/reskilling as primary M&A theme entering 2025." },
          ]} />
        </div>
      </div>

      {/* STRATEGIC IMPERATIVES */}
      <div>
        <SectionHeader id="strategic" number="8" title="Strategic Synthesis: 'So What' For Your Company" subtitle="Priority-ordered strategic actions derived from all trend signals, mapped to 6 sub-sector operations." />
        <div className="mt-4 space-y-6">
          <div>
            <h3 className="flex items-center gap-2 font-heading text-base font-bold text-foreground">
              <PriorityBadge level="critical" label="01 IMMEDIATE (0–6 months)" />
            </h3>
            <ol className="mt-3 list-inside list-decimal space-y-3 text-sm leading-relaxed text-foreground">
              <li><strong>SSG accreditation audit:</strong> Ensure all 6 sub-sector programmes are SSG-eligible under SkillsFuture Masterplan 2030 standards. Non-compliant delivery will disqualify your TAM from ~50% of funded demand.</li>
              <li><strong>AI integration sprint:</strong> Embed GenAI into at least one core curriculum per sub-sector. Frame as 'AI + Human' hybrid — not replacement. Target technology, business, and soft skills tracks first.</li>
              <li><strong>Mid-career cohort (40+) programme development:</strong> Design and accredit at least 2–3 programmes specifically for the SGD 4,000 SkillsFuture Mid-Career Credit-eligible cohort. This is the most immediately accessible funded segment.</li>
              <li><strong>B2B LMS analytics pitch pivot:</strong> Reframe all corporate training proposals around ROI data, learning outcome KPIs, and skills gap analytics dashboards — not course hours. Win new enterprise RFPs on outcomes language.</li>
            </ol>
          </div>
          <div>
            <h3 className="flex items-center gap-2 font-heading text-base font-bold text-foreground">
              <PriorityBadge level="high" label="02 SHORT-TERM (6–18 months)" />
            </h3>
            <ol className="mt-3 list-inside list-decimal space-y-3 text-sm leading-relaxed text-foreground">
              <li><strong>Healthcare sub-sector acceleration:</strong> Pursue AHPC and SMC CPD provider accreditation. Develop AHP bridging programmes and CME content in high-demand specialisations (telemedicine, AI-assisted diagnostics, mental health first aid).</li>
              <li><strong>Advanced Manufacturing partnerships:</strong> Initiate EDB co-funding applications for Industry 4.0 training. Develop pilot programmes with 2–3 anchor manufacturing clients in semiconductor or precision engineering.</li>
              <li><strong>Modular micro-credential architecture:</strong> Rebuild programme architecture into stackable 5–15 hour modules with digital credential issuance. Integrate with LinkedIn Learning and employer verification portals.</li>
              <li><strong>AI governance / PDPA compliance modules:</strong> Build accredited short-form compliance training for financial services and tech sectors — MAS and PDPA mandates are creating recurring, non-discretionary training spend.</li>
            </ol>
          </div>
          <div>
            <h3 className="flex items-center gap-2 font-heading text-base font-bold text-foreground">
              <PriorityBadge level="medium" label="03 MID-TERM (18 months–3 years)" />
            </h3>
            <ol className="mt-3 list-inside list-decimal space-y-3 text-sm leading-relaxed text-foreground">
              <li><strong>Integrated L&D platform build/buy/partner:</strong> Develop or acquire an LMS with embedded skills assessment, analytics, and employer portal. Competing as a point-solution provider in the B2B segment will become untenable as PE-backed platforms consolidate.</li>
              <li><strong>AR/VR simulation content library:</strong> Commission simulation-based content for Healthcare (clinical skills) and Advanced Manufacturing (equipment and safety) ahead of the 2027 AR/VR adoption curve.</li>
              <li><strong>Agentic AI workflow curricula:</strong> Build industry-vertical agentic AI training (AI-in-Finance, AI-in-Healthcare, AI-in-Manufacturing) ahead of the 2026–2027 enterprise AI deployment wave.</li>
              <li><strong>ESG/Green economy skilling vertical:</strong> Develop accredited ESG skills courses aligned to Singapore Green Plan 2030 funding. Embed sustainability modules across B2B, Manufacturing, and Professional Services tracks.</li>
            </ol>
          </div>
          <div>
            <h3 className="flex items-center gap-2 font-heading text-base font-bold text-foreground">
              <PriorityBadge level="low" label="04 LONG-TERM (3–5 years)" />
            </h3>
            <ol className="mt-3 list-inside list-decimal space-y-3 text-sm leading-relaxed text-foreground">
              <li><strong>Regional ASEAN expansion:</strong> Singapore's premium positioning makes it the credentialing hub for the SEA region. Use Singapore-accredited programmes as the anchor to expand into Malaysia, Indonesia, and Vietnam — where EdTech is growing at 14–15% CAGR against an underpenetrated base.</li>
              <li><strong>Data-as-a-product:</strong> The accumulation of learner outcomes, skills assessment, and labour market transition data across your sub-sectors will constitute a proprietary dataset with enterprise and government value. Build data product infrastructure now.</li>
              <li><strong>Care Economy full-stack:</strong> Position as the end-to-end talent pipeline for Singapore's care sector — from pre-employment AHP training through to CPD/CME and workforce management. This is a government-supported, 20-year demand runway.</li>
              <li><strong>M&A as consolidator:</strong> As PE consolidation reshapes the sector, position to either acquire niche-accredited providers in Healthcare and Advanced Manufacturing, or partner with a PE platform as the preferred operating partner.</li>
            </ol>
          </div>
        </div>

        {/* Sub-Sector Impact Analysis */}
        <h3 className="mt-8 font-heading text-base font-bold text-foreground">Sub-Sector Policy Impact Analysis</h3>
        <div className="mt-3 overflow-x-auto">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-3 py-2 text-left font-semibold">Sub-Sector</th>
                <th className="px-3 py-2 text-left font-semibold">Primary Policy Levers</th>
                <th className="px-3 py-2 text-left font-semibold">Market Impact / Opportunity</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Technology & Digital / AI Skilling", "SkillsFuture Series (AI/Data), SFC-MC, SCTP (Tech), WDG, SFEC, CTC Grant", "Highest policy priority; generative AI courses flagged fastest-growing; 96K tech learners in 2024 vs 34K in 2023. Structural demand surge."],
                ["Healthcare & Care Economy", "SCTP (Care Economy), MCES - 90% subsidy, SFC(MC), WSQ qualifications, PWM-linked training", "Ageing population + progressive wage mandates drive compulsory reskilling. CME credits can be SSG-supported. Highly defensive demand."],
                ["B2B Services (LMS, Corporate Training, Staffing)", "WDG, SFEC, NTUC CTC Grant, TRAQOM, Queen Bee ecosystem", "Wallet-model SFEC + consolidated WDG removes friction for corporate training procurement. BGP-approved LMS vendors gain preferential positioning."],
                ["Soft Skills Training", "WSQ (service excellence, leadership), SFC base tier, CTC Grant, TRAQOM scrutiny", "Subject to Dec 2025 funding tightening if framed as 'incumbent skills maintenance.' Must anchor to career-outcome frameworks."],
                ["Advanced Manufacturing & Engineering", "WDG, SkillsFuture Series (Industry 4.0), Queen Bee ecosystem, WSQ Engineering, SFEC", "Queen Bee designation active in logistics/supply chain (YCH, ST Logistics). JTMs expanding to manufacturing."],
                ["Business, Management & Professional Services", "SFC (base + MC), IHL diplomas, SCTP (Financial Services), MCES, HR certification funding boost (Budget 2025)", "IHL full-qualification pathway expanded. Budget 2025 includes enhanced funding for IHRP HR professional certification."],
              ].map(([sector, levers, impact], i) => (
                <tr key={i} className="border-b border-border">
                  <td className="px-3 py-2 font-medium text-foreground">{sector}</td>
                  <td className="max-w-xs px-3 py-2 text-muted-foreground">{levers}</td>
                  <td className="max-w-sm px-3 py-2 text-muted-foreground">{impact}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* RISK REGISTER */}
      <div>
        <SectionHeader id="risk-register" number="9" title="Risk Register" />
        <div className="mt-4 rounded-lg border border-border bg-muted/30 p-6 text-center">
          <p className="text-sm font-medium text-muted-foreground">Key Risks & Mitigants</p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b border-border">
                  <th className="px-3 py-2 text-left font-semibold">Risk</th>
                  <th className="px-3 py-2 text-left font-semibold">Commentary & Mitigant</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Funding Tightening (Dec 2025)", "Providers with high incumbent-skills course mix face subsidy reduction. Mitigant: Reclassify towards outcome-linked frameworks."],
                  ["TRAQOM Outcome Shortfalls", "Poor employment outcomes trigger grant review / withdrawal. Mitigant: Invest in learner support and placement services."],
                  ["Policy Execution Lag", "WDG and wallet-model SFEC timelines may slip. Mitigant: Maintain compatibility with existing SFEC/CCP architecture."],
                  ["SME Uptake Uncertainty", "Even with reduced friction, SME training engagement may plateau. Mitigant: Partner with Queen Bee anchors for captive SME access."],
                  ["AI Disruption to Training Content", "Rapid AI evolution may outpace WSQ curriculum refresh cycles. Mitigant: Align with SkillsFuture Series tracks; maintain short-cycle module updates."],
                  ["Macroeconomic Slowdown", "PM Wong acknowledged growth in 2025 'harder to achieve' vs 2024. Training demand can contract in sustained downturns. Mitigant: Focus on defensive sectors (healthcare, mandatory PWM compliance)."],
                ].map(([risk, commentary], i) => (
                  <tr key={i} className="border-b border-border text-left">
                    <td className="px-3 py-2 font-medium text-foreground">{risk}</td>
                    <td className="max-w-lg px-3 py-2 text-muted-foreground">{commentary}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </CountryPageLayout>
  );
}
