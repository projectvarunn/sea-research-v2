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
            <p>The Philippines is at a structural inflection point in its higher skilling ecosystem. Converging pressures from AI-driven automation of its US$40B+ IT-BPO (Information Technology – Business Process Outsourcing) sector, a 1.8 million-strong BPO workforce facing reskilling urgency, healthcare export demands, and a government-led NAISR (National Artificial Intelligence Strategy Roadmap) 2.0 pivot are collectively creating one of Southeast Asia's most dynamic skilling markets in 2026-2031.</p>
            <p>Our analysis identifies five macro forces, seven micro-trends, and six sub-sector-specific investment signals that combine to produce a compound annual opportunity in higher skilling estimated at US$3.2–4.8 billion by 2030. Companies operating across our six target sub-sectors are positioned to capture outsized returns if they align with the government's priority-skill verticals, ride the B2B (Business-to-Business) corporate upskilling wave, and leverage AI-powered adaptive learning infrastructure.</p>
            <p className="font-semibold">Key signals:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>86% of Filipino professionals already use AI or automation in some form, creating a ready-to-upskill base.</li>
              <li>70% of Filipino business leaders intend to hire only AI-skilled workers going forward.</li>
              <li>The AI market in the Philippines is projected to hit US$1.025B in 2026, growing at 28% CAGR through 2030.</li>
              <li>The government's NAISR 2.0 mandates nationwide AI training from micro-credentials to advanced certifications.</li>
            </ul>
          </div>
          <div className="mt-6">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Across 6 Sub-Sectors</p>
            <div className="flex flex-wrap gap-2">
              <PriorityBadge level="critical" label="Technology, Digital Transformation & AI Skilling" />
              <PriorityBadge level="critical" label="Healthcare & Care Economy (CMEs, Test Prep & AHPs)" />
              <PriorityBadge level="high" label="B2B Services — LMS, Corporate Training & Staffing" />
              <PriorityBadge level="high" label="Soft Skills Training" />
              <PriorityBadge level="medium" label="Advanced Manufacturing & Engineering Training" />
              <PriorityBadge level="medium" label="Business, Management & Professional Services" />
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* MACRO TRENDS */}
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
        <motion.div variants={fadeUp}>
          <SectionHeader id="macro-trends" number="1" title="Macro Trends" subtitle="Five global forces shaping the Philippines Higher Skilling industry" />
          <Accordion type="multiple" className="mt-4">
            {[
              { 
                id: "m1", 
                title: "MACRO-1: AI-Driven Workforce Displacement — The BPO Reskilling Emergency", 
                horizon: "Short-to-Mid Term", 
                impact: 9, 
                content: "The Philippines' IT-BPM (Information Technology & Business Process Management) sector employed 1.8 million workers in 2024 and generated revenues equal to 8.2% of GDP. Generative AI — including large language models (LLMs) and robotic process automation (RPA) — is automating up to 89% of routine BPO tasks such as customer service, data entry, and back-office processing. An IMF (International Monetary Fund) working paper (Feb 2025) found that up to 40% of all Philippine jobs are significantly exposed to AI disruption, with 14% at direct displacement risk. BPO-adjacent roles — clerical work, customer service, and basic analytics — carry the highest exposure. 67% of Philippine BPO organizations were piloting or implementing AI solutions as of January 2025. This creates dual demand: reskilling displaced workers AND training newly hired AI-operator talent pools. DOLE (Department of Labor and Employment) has acknowledged active job displacement linked to automation.", 
                sowhat: "For a skilling company operating across Tech/AI, B2B LMS, and Soft Skills sub-sectors, this is the single highest-urgency opportunity in the market. B2B corporate contracts for AI literacy, prompt engineering, data analysis, and automation tooling are immediately actionable. Government and IBPAP (IT and Business Process Association of the Philippines) partnerships for workforce transition programs offer scale and credibility." 
              },
              { 
                id: "m2", 
                title: "MACRO-2: Government-Led AI & Digital Skills Mandate — NAISR 2.0", 
                horizon: "Short-to-Long Term", 
                impact: 8, 
                content: "The Philippines launched NAISR (National Artificial Intelligence Strategy Roadmap) 2.0 in 2025, upgrading from NAISR 1.0 to incorporate generative AI, ethics governance, and multi-agency coordination across DICT, TESDA, CHED, and DepEd. A proposed National Digital Skills and AI Readiness Act (House Bill 1699) mandates at least one Future Skills Center per region, offering free training in digital coding, digital marketing, data science, cloud computing, and AI tools — subsidized certification programs covering platforms including Google, Microsoft, OpenAI, and AWS. The Philippine Skills Framework for Analytics and AI (PSF-AAI), led by DICT and AAP, provides structured competency guidelines for schools, professionals, and employers — creating a standardized skills taxonomy that private skilling providers can map their curricula against. TESDA Secretary Benitez has publicly committed to proactive upskilling/reskilling coordination with private sector partners.", 
                sowhat: "Government-mandated skill frameworks create both a compliance tailwind and a procurement pipeline. Companies that achieve PSF-AAI curriculum alignment or TESDA/CHED accreditation gain a significant competitive moat. B2B LMS providers with government-compliant content modules and certification-mapping capabilities are especially well-positioned for public-sector contracting." 
              },
              { 
                id: "m3", 
                title: "MACRO-3: Healthcare Export Demand & UHC-Driven Workforce Buildout", 
                horizon: "Mid-to-Long Term", 
                impact: 8, 
                content: "The Philippines is the world's largest exporter of nurses and one of the top suppliers of allied health professionals (AHPs) to the US, UK, Middle East, and Australia. Accelerating demographics in OECD countries — especially aging populations — are driving sustained demand for Filipino healthcare workers. Domestically, the Universal Health Care (UHC) Act of 2019 has enrolled all Filipinos in PhilHealth's NHIP, dramatically expanding the healthcare system's capacity needs and creating shortfalls in trained clinical and allied health personnel. TESDA's digitization of healthcare training programs, combined with DICT's AI literacy push for healthcare workers, is creating demand for CME (Continuing Medical Education) platforms, licensure test prep, and AHP certification pathways. A PMC study (2025) identifies limited skilled workers in AI-healthcare integration across most ASEAN nations, positioning the Philippines as a potential regional leader if it invests in upskilling.", 
                sowhat: "The healthcare skilling sub-sector offers a rare combination of captive domestic demand (UHC rollout), strong export incentive (OFW remittances tied to healthcare workers), and regulatory clarity. A company offering end-to-end CME platforms, licensure test prep (NLE, NCLEX, OET), and AHP competency certification is in a structurally privileged position in the Philippines market." 
              },
              { 
                id: "m4", 
                title: "MACRO-4: Philippines as SEA's Fastest-Growing Digital Economy", 
                horizon: "Short-to-Mid Term", 
                impact: 7, 
                content: "The Philippines grew its digital economy GMV by 20% from US$26B to US$31B in 2024, making it the fastest-growing digital economy in Southeast Asia per the e-Conomy SEA 2024 Report. FDI (Foreign Direct Investment) inflows are accelerating in semiconductor assembly, electronics, and advanced manufacturing — sectors requiring trained engineering and technical talent pipelines. The IMD World Competitiveness Yearbook 2025 ranked the Philippines 7th globally in employment competitiveness. AI market revenue in the Philippines is projected to reach US$1.025B in 2026, growing at 28% CAGR through 2030, creating pull-through demand for AI-specialised talent at all skill levels. The Philippine startup ecosystem raised US$1.1B in 2022, demonstrating private capital depth; impact-first investors specifically note EdTech as a priority category.", 
                sowhat: "Rising FDI in manufacturing and digital sectors creates a B2B skilling pull from multinational employers who require trained local talent pools but lack the capability to build training infrastructure themselves. Corporate learning outsourcing (CLO) and staffing/training partnerships with FDI-entering companies represent a high-margin, scalable revenue stream." 
              },
              { 
                id: "m5", 
                title: "MACRO-5: Demographic Dividend & Structural Skills Gap", 
                horizon: "Mid-to-Long Term", 
                impact: 7, 
                content: "The Philippines has a median age of 25.7 years with over 50 million employed individuals and a labour force participation rate of 65.8%. Approximately 2 million Filipinos turn 18 each year, creating a massive, young, and digitally-connected addressable market for higher skilling. Despite high internet penetration (third highest average daily usage globally at 8 hours 52 minutes), 90% of Filipinos lack basic ICT (Information and Communications Technology) skills per the IMF. This creates a market failure that structured skilling providers can fill. The WEF Future of Jobs Report states that 23% of the Philippine workforce will change within five years, with 60% needing training by 2027 focused on creative thinking, analytical reasoning, AI, and big data. MSMEs (Micro, Small and Medium Enterprises) — which constitute 99% of Philippine businesses — are largely underserved by existing upskilling providers, representing a long-tail B2B market.", 
                sowhat: "A youth-heavy demographic with rapidly rising digital and professional aspirations creates durable long-term demand across all six sub-sectors. Income Share Agreement (ISA) and deferred payment models (similar to Avion School and Bukas models already in market) can dramatically expand addressable market by removing upfront cost barriers. Building youth loyalty early also creates multi-course lifetime value (LTV)." 
              },
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
          <SectionHeader id="micro-trends" number="2" title="Micro Trends" subtitle="Seven emerging patterns within the Philippines Higher Skilling industry (last 12 months)" />
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {[
              { 
                id: "µ1", 
                title: "Mandatory Corporate AI Literacy — The B2B Upskilling Contract Wave", 
                timeline: "Short-Term (0–1 Yr)", 
                impact: 9, 
                content: "70% of Filipino business leaders now intend to hire only candidates with AI skills. 75% of Philippine CEOs trust AI integration as a core business driver, yet 28% cite a talent shortage as their primary barrier. Corporate training budgets are shifting from discretionary to mandatory line items for AI literacy, prompt engineering, and process automation. Companies like IBPAP members are mandating upskilling certifications across their 1.8M-person workforce. Global B2B LMS providers (e.g., Disprz) are entering the Philippine market, intensifying competitive pressure on local providers. Companies offering bundled LMS + content + certification (all-in-one corporate skilling suites) are winning against point-solution providers. Integration with HRIS and performance management systems is becoming a key procurement criterion.", 
                sowhat: "A company with a B2B LMS or corporate training product should prioritize AI literacy module development immediately and pursue IBPAP and PEZA employer consortiums. Modular, stackable micro-credential frameworks that integrate with existing HR tech stacks will win more enterprise contracts than standalone training platforms." 
              },
              { 
                id: "µ2", 
                title: "Healthcare Licensing & OFW Test Prep Surge — NCLEX, OET, NLE Demand", 
                timeline: "Short-to-Mid Term", 
                impact: 8, 
                content: "NLE (Nursing Licensure Examination), NCLEX for US migration, OET for UK/Australia, and Prometric-based licensing exams for Middle East markets are all experiencing surging enrolment across Philippine prep providers. The UHC expansion has simultaneously increased demand for domestically-placed AHPs (physiotherapists, radiologic technologists, medical technologists) while the global care economy is pulling Filipino health workers outbound. CME (Continuing Medical Education) requirements for Philippine physicians, nurses, and allied health professionals are tightening post-pandemic, creating recurring revenue streams for accredited CME platform providers. Digital/hybrid test prep (live online + recorded + AI-powered mock tests with adaptive feedback) is displacing traditional in-person review centres.", 
                sowhat: "Healthcare test prep and CME represent one of the highest-certainty, recurring-revenue opportunities in the Philippine skilling market. The export incentive (OFW remittances average PHP 200,000+ per year to sending families) creates extremely high willingness-to-pay. An AI-adaptive platform with NLE, NCLEX, and OET prep modules — combined with a CME credit management system — is a highly fundable and scalable product." 
              },
              { 
                id: "µ3", 
                title: "Micro-Credentials and Stackable Certifications Replacing Long-Form Degrees", 
                timeline: "Short-to-Mid Term", 
                impact: 8, 
                content: "Philippine employers — especially in tech and shared services — are increasingly accepting short-form, outcome-verified certifications in lieu of or alongside traditional degrees. Global platforms (Coursera, LinkedIn Learning, AWS, Google, Microsoft) are gaining traction, creating both competitive threat and partnership opportunity for local providers. TESDA's TVET (Technical and Vocational Education and Training) system is actively modularising its qualification frameworks to accommodate stackable certificates. NAISR 2.0 explicitly endorses micro-credentialling as a primary delivery mechanism for AI upskilling. The proposed National Digital Skills Act creates government-subsidised micro-credential programmes — a potential funding mechanism for accredited private providers who co-deliver or license their content. Industry-recognised badges from BigTech are gaining employer acceptance faster than traditional academic qualifications in tech roles.", 
                sowhat: "Building a modular course architecture with government-compliant certification mapping is critical. A company that can white-label its content to regional Future Skills Centers or co-deliver TESDA-accredited short courses gains government funding access without sacrificing brand. Credential wallet/digital transcript functionality increasingly drives platform stickiness." 
              },
              { 
                id: "µ4", 
                title: "Advanced Manufacturing Skilling Demand — Semiconductor & Renewable Energy", 
                timeline: "Mid-Term (1–3 Yrs)", 
                impact: 7, 
                content: "The Philippines is a significant global hub for semiconductor assembly, testing, and packaging (SATS). FDI inflows from Japanese, Korean, and Taiwanese electronics firms are creating demand for precision engineering, quality assurance, and automation technician training. Renewable energy is projected to reach 19.45B kWh in generation by 2025 with 1.29% annual growth (2026-2029), creating shortages in solar installation, energy storage systems (ESS) engineering, and grid management skills — all underserved by existing TVET providers. Advanced manufacturing upskilling in the Philippines is predominantly delivered by Japanese-ODA-funded institutions and MNC in-house training centres, leaving a major gap for independent skilling providers. The Philippines Labour Market Profile 2025/2026 explicitly identifies IT, healthcare, and manufacturing as the three sectors with the most acute skill shortages.", 
                sowhat: "Advanced manufacturing skilling is a nascent but structurally important sub-sector. First-mover companies that build credible partnerships with PEZA-zone employers and industry associations (e.g., SEIPI) can lock in long-term B2B training contracts before larger competitors enter. Simulation-based learning (virtual labs, AR/VR for equipment operation) is the delivery format most valued by manufacturing employers." 
              },
              { 
                id: "µ5", 
                title: "Soft Skills Demand Surge — Communication, Leadership & AI-Collaboration", 
                timeline: "Short-to-Mid Term", 
                impact: 7, 
                content: "As AI absorbs routine cognitive tasks, the WEF identifies communication, critical thinking, empathy, and leadership — the traditional 'soft skills' — as the primary human differentiators in an AI-augmented workplace. Philippine employers are actively seeking these complementary competencies. BPO-sector evolution toward higher-value KPO (Knowledge Process Outsourcing) roles — legal, finance, analytics, customer experience design — requires upskilling in business writing, executive communication, and stakeholder management for Filipino workers accustomed to voice/data entry roles. Cross-cultural communication training has historically been a strength of Philippines BPO providers and is now being formalised into structured curricula. Managerial and leadership development is a fast-growing B2B category, with SMEs and fast-growth startups increasingly contracting for middle-management capability building programmes.", 
                sowhat: "Soft skills training is the highest-margin sub-sector due to low content production costs and high B2B willingness-to-pay. Packaging communication, leadership, and AI-collaboration competencies as a single enterprise suite — with cohort-based live delivery supplemented by AI roleplay practice tools — creates a compelling and defensible product." 
              },
              { 
                id: "µ6", 
                title: "EdFinTech & ISA Models Expanding Skilling Access", 
                timeline: "Short-to-Mid Term", 
                impact: 6, 
                content: "ErudiFi (parent of Bukas Philippines) has crossed PHP 1B+ in tuition financing, serving 21,000+ students across 100+ campuses. Its 'Study Now, Pay Later' model has demonstrated strong unit economics in the Philippine market. Coding bootcamps like Avion School have pioneered ISA (Income Share Agreement) models locally — students pay tuition only after landing a job, with 17% of monthly salary for two years — dramatically expanding the addressable market for premium-priced technical training. Government-subsidised training vouchers (under TESDA's TWSP and STEP programs) provide a public EdFinTech parallel that accredited private providers can tap. The convergence of EdFinTech and skilling creates a new category: outcome-based financing tied to employment placement rates.", 
                sowhat: "Partnering with or embedding an EdFinTech solution (Bukas, Pondo ng Pinoy, or building proprietary BNPL for courses) can 3-5x your addressable market by removing upfront payment barriers. Outcome-based financing also incentivises providers to invest in placement infrastructure, which becomes a powerful marketing signal for employer-side B2B sales." 
              },
              { 
                id: "µ7", 
                title: "Regional Skilling Expansion Beyond Metro Manila", 
                timeline: "Mid-to-Long Term", 
                impact: 6, 
                content: "Philippine startups have historically concentrated in Metro Manila and Metro Cebu. However, FDI inflows, PEZA zone expansion, and the government's Barangay-level employment hub initiative are accelerating skilling demand in Davao, Iloilo, Cagayan de Valley, and Pampanga. Digital infrastructure investment under the National Broadband Plan (NBP) is progressively reducing connectivity barriers in Visayas and Mindanao, making online learning delivery viable in previously underserved regions. Regional universities and LGUs (Local Government Units) are actively seeking private skilling partners to co-deliver upskilling programmes, creating partnership channels beyond direct-to-consumer acquisition. The proposed Future Skills Centers create a physical anchor for regional skilling ecosystems.", 
                sowhat: "A regional expansion strategy (online-first, with periodic in-person bootcamps in regional hubs) is a lower-capex way to capture growth outside Metro Manila. LGU and regional university partnerships convert geographic reach into a distribution advantage rather than a cost centre. Companies should prioritise Cebu, Davao, and Iloilo as initial regional beachheads given their FDI inflows and TVET infrastructure." 
              },
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
          <SectionHeader id="tech-disruptions" number="3" title="Technology Disruptions" subtitle="New technologies changing the higher skilling game and mainstream timelines" />
          <div className="mt-4 space-y-4">
            {[
              { 
                id: "3.1", 
                name: "Agentic AI & Personalised Adaptive Learning", 
                timing: "Mainstream: 2026–2027 (Short-term)", 
                desc: "Agentic AI systems (AI that executes multi-step workflows autonomously) are moving beyond content generation into full learning pathway orchestration — identifying skill gaps, triggering personalised interventions, auto-grading assessments, and updating institutional records without human involvement. Platforms that deploy agentic AI can achieve up to 40% improvement in learner completion rates. In the Philippines context, where learner dropout from financial stress and time constraints is endemic, AI-driven retention systems are a direct revenue driver. Companies that build proprietary training data loops — collecting learner interaction data to retrain their adaptive models — create defensible moats that generic LLM (Large Language Model) wrappers cannot replicate." 
              },
              { 
                id: "3.2", 
                name: "AI-Powered Simulation & Virtual Labs", 
                timing: "Mainstream: 2026–2028 (Short-to-Mid-term)", 
                desc: "Simulation-based training — already validated by CloudSwyft's virtual lab platform in the Philippines — is being enhanced by AI-generated scenario variation, making every simulation run unique and progressively challenging. For healthcare (clinical simulation), advanced manufacturing (CNC machining, welding, equipment operation), and engineering training, VR/AR simulation is moving from premium to standard delivery format as hardware costs decline. CloudSwyft (Manila-based) received funding from Fourth Realm VC and Y Combinator in 2021 and has demonstrated global deployability — a proof point for Philippine EdTech on the global stage." 
              },
              { 
                id: "3.3", 
                name: "AI Roleplay & Conversational Practice Tools for Soft Skills", 
                timing: "Mainstream: 2025–2026 (Immediate)", 
                desc: "AI-powered roleplay engines (conversation simulations for sales training, customer service, medical consultations, job interview prep) are collapsing the cost of practice-at-scale. Previously, practicing a difficult customer conversation required a human trainer. AI roleplay tools deliver infinite on-demand practice sessions with personalised feedback. This is transformative for soft skills training and for BPO workforce upskilling." 
              },
              { 
                id: "3.4", 
                name: "Blockchain-Verified Micro-Credentials & Portable Skill Wallets", 
                timing: "Mainstream: 2027–2029 (Mid-term)", 
                desc: "Blockchain-anchored digital credential wallets are transitioning from proof-of-concept to production deployment in Singapore and South Korea, with Philippine adoption expected as TESDA digitalises its qualification registry. Credential portability — allowing workers to carry verified competency records across employers and borders — creates a new infrastructure layer that skilling providers who issue blockchain credentials can monetise through verification fees." 
              },
              { 
                id: "3.5", 
                name: "Large-Scale LMS + HRIS Integration Platforms", 
                timing: "Mainstream: 2026 (Immediate)", 
                desc: "Enterprise B2B LMS platforms that natively integrate with HR systems (SAP SuccessFactors, Workday, Oracle HCM) are winning large corporate contracts in the Philippines. The Philippine BPO sector's HR infrastructure is sophisticated, meaning LMS providers without API-grade HRIS integration are being excluded from enterprise procurement shortlists. This is driving consolidation toward full-suite HRTech + LMS bundles." 
              },
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
          <SectionHeader id="regulatory" number="4" title="Regulatory Shifts" subtitle="Upcoming legislation and policy changes to watch" />
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b border-border bg-muted/50">
                  <th className="px-3 py-2 text-left font-semibold">Policy / Regulation</th>
                  <th className="px-3 py-2 text-left font-semibold">Timeline/Status</th>
                  <th className="px-3 py-2 text-left font-semibold">Impact on Skilling Market</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { 
                    name: "REG-1 | National Digital Skills and AI Readiness Act (House Bill 1699)", 
                    time: "Pending — Expected 2026-2027", 
                    impact: "Mandates one Future Skills Center per region; offers free training in AI, cloud computing, data science; creates government-subsidised certification programs aligned with Google, Microsoft, OpenAI, and AWS. Private providers accredited under this framework gain access to government procurement. Passage is expected within the Marcos administration's digital infrastructure priority timeline. Impact Rating: 9/10." 
                  },
                  { 
                    name: "REG-2 | NAISR (National Artificial Intelligence Strategy Roadmap) 2.0", 
                    time: "Active — Implementation 2025–2028", 
                    impact: "Seven strategic imperatives across DICT, TESDA, CHED, DepEd, and DOST. Includes the CAIR (Center for AI Research) establishment as Philippines' first national AI hub, mandatory AI integration in TVET curricula, and BigTech partnership frameworks. Private skilling companies aligned with PSF-AAI taxonomy qualify for government co-funding. Impact Rating: 8/10." 
                  },
                  { 
                    name: "REG-3 | Trabaho Para sa Bayan Act & Philippine Digital Workforce Competitiveness Act", 
                    time: "Under Review", 
                    impact: "Two complementary pieces of legislation addressing AI-driven labour market disruption. The Trabaho Para sa Bayan Act focuses on job protection and retraining mandates for displaced workers. The Digital Workforce Competitiveness Act creates employer incentives for certified upskilling investment. Creates a compliance-driven demand signal for corporate training. Impact Rating: 7/10." 
                  },
                  { 
                    name: "REG-4 | UHC (Universal Health Care) Act — Phase 2 Implementation", 
                    time: "Active — Accelerating 2026–2028", 
                    impact: "Phase 2 of the UHC Act expands PhilHealth's NHIP coverage to specialist services, creating demand for additional licensed specialist AHPs. DOH and PRC are tightening CME credit requirements for licensure renewal. This is a direct demand catalyst for healthcare skilling providers. Impact Rating: 8/10." 
                  },
                  { 
                    name: "REG-5 | TESDA Qualification Framework Revision — Micro-Credential Integration", 
                    time: "Active — Ongoing", 
                    impact: "TESDA is actively revising its NQF (National Qualifications Framework) to accommodate short-course, competency-based micro-credentials alongside traditional NC programmes. This creates a pathway for private EdTech companies to achieve TESDA recognition for non-traditional course formats, unlocking TWSP government subsidies. Impact Rating: 7/10." 
                  },
                ].map((r, i) => (
                  <tr key={i} className="border-b border-border">
                    <td className="px-3 py-2 font-medium text-foreground align-top">{r.name}</td>
                    <td className="px-3 py-2 align-top"><TimelineBadge timeline={r.time} /></td>
                    <td className="max-w-md px-3 py-2 text-muted-foreground align-top">{r.impact}</td>
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
          <SectionHeader id="consumer" number="5" title="Consumer & Buyer Behavior Changes" subtitle="How buyer preferences are evolving in the Philippines Higher Skilling market" />
          <div className="mt-4 grid gap-6 lg:grid-cols-2">
            <div className="rounded-lg border border-border bg-card p-5">
              <h3 className="font-heading text-lg font-bold text-foreground mb-3 border-b border-border pb-2">B2C (Individual Learner) Shifts</h3>
              <ul className="space-y-4 text-xs leading-relaxed text-muted-foreground">
                <li><strong className="text-foreground">5.1 Outcome-Orientation Replaces Credential-Orientation:</strong> Filipino learners are increasingly evaluating skilling investments by employment outcomes (job placement rate, salary uplift, time-to-employment) rather than the prestige of the issuing institution alone. This is driven by global micro-credential trends, ISA model proof points (e.g., Avion School), and employers listing skills vs degrees in job postings.</li>
                <li><strong className="text-foreground">5.2 Mobile-First, Bite-Sized Learning Consumption:</strong> With 8 hours 52 minutes of daily internet usage (3rd globally), Filipino learners overwhelmingly consume content on mobile. Learning formats that perform best are under 10-minute micro-lectures, gamified progress systems, and asynchronous cohort discussions. Desktop-dependent LMS platforms are losing retention to mobile-native apps.</li>
                <li><strong className="text-foreground">5.4 Community & Cohort Learning Premium:</strong> Filipino learners place premium value on peer community, accountability groups, and mentor access — reflecting collectivist cultural values. Platforms that build Discord/Slack-based learner communities, alumni networks, and mentor matching alongside technical content outperform pure content libraries in NPS and renewal rates.</li>
                <li><strong className="text-foreground">5.5 OFW and Diaspora Upskilling Market:</strong> The 10M+ strong OFW diaspora represents a premium willingness-to-pay segment. OFWs remit US$33B+ annually and invest heavily in personal upskilling for career advancement. Asynchronous, timezone-flexible learning formats with Filipino language support are critical for this segment.</li>
              </ul>
            </div>
            <div className="rounded-lg border border-border bg-card p-5">
              <h3 className="font-heading text-lg font-bold text-foreground mb-3 border-b border-border pb-2">B2B (Corporate Buyer) Shifts</h3>
              <ul className="space-y-4 text-xs leading-relaxed text-muted-foreground">
                <li><strong className="text-foreground">5.3 B2B Buyer Sophistication — CLOs and HR Tech Integration:</strong> Corporate buyers in the Philippines' BPO, banking, and healthcare sectors are becoming more sophisticated, demanding LMS platforms with: (1) learner analytics dashboards, (2) SCORM/xAPI content compatibility, (3) HRIS integration, and (4) ROI reporting tied to performance KPIs. Vendors without these capabilities are losing enterprise RFPs.</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* INVESTMENT SIGNALS */}
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
        <motion.div variants={fadeUp}>
          <SectionHeader id="investment" number="6" title="Investment Signals" subtitle="Where smart money is flowing — VC deals, M&A activity, and emerging investment themes" />
          <div className="mt-4 space-y-4 text-sm leading-relaxed text-foreground">
            <p className="text-xs text-muted-foreground">Global EdTech VC investment hit a trough of US$2.4B in 2024 — an 89% decline from the 2021 peak — but deal quality and average size rose (average ticket: US$7.8M). The deals happening are concentrated in: AI-powered learning tools, healthcare education, and workforce upskilling platforms. In Philippines-specific context, the following themes are attracting capital:</p>
            
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li><strong className="text-foreground">AI-First Corporate Upskilling Platforms:</strong> B2B SaaS with HRIS integration, outcome tracking, and AI-personalised content delivery — the highest-multiple category globally in 2025-2026.</li>
              <li><strong className="text-foreground">EdFinTech / BNPL for Education:</strong> ErudiFi/Bukas raised US$5M Series A (Monk's Hill Ventures + Qualgro, 2021) with strong unit economics. A follow-on or comparable raise in the Philippine market is expected 2026-2027 as the loan portfolio scales past PHP 2B.</li>
              <li><strong className="text-foreground">Healthcare Skilling & Test Prep:</strong> Global precedents validate the market. Philippine equivalents targeting NCLEX, OET, and NLE prep with AI adaptive systems are fundable at Series A-B.</li>
              <li><strong className="text-foreground">Virtual Labs & Simulation:</strong> CloudSwyft (Manila) has demonstrated Y Combinator-backed proof of concept. Follow-on capital for simulation-based manufacturing and healthcare training is a clear next step.</li>
              <li><strong className="text-foreground">Impact Capital & DFI Funding:</strong> Lorinet Foundation, EduLab Capital Partners, Villgro Philippines, and Mustard Seed Partners are all active impact investors in Philippine EdTech. DFI co-investment through ADB and IFC remains available.</li>
            </ul>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mt-6">
              <div className="rounded-lg border border-border bg-muted/50 p-4">
                <h4 className="font-bold mb-2">Foxmont Capital Partners</h4>
                <p className="text-xs text-muted-foreground">Filipino-focused VC, early-stage tech. Seed – Series A.</p>
              </div>
              <div className="rounded-lg border border-border bg-muted/50 p-4">
                <h4 className="font-bold mb-2">Monk's Hill Ventures</h4>
                <p className="text-xs text-muted-foreground">SEA-focused, co-led ErudiFi Series A.</p>
              </div>
              <div className="rounded-lg border border-border bg-muted/50 p-4">
                <h4 className="font-bold mb-2">Lorinet Foundation</h4>
                <p className="text-xs text-muted-foreground">Impact investor, backed Edukasyon.ph. Angel – Series A.</p>
              </div>
              <div className="rounded-lg border border-border bg-muted/50 p-4">
                <h4 className="font-bold mb-2">Felicis Ventures</h4>
                <p className="text-xs text-muted-foreground">Top investor in PH EdTech by deal count (Tracxn). Series A+.</p>
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
              { trend: "MACRO-1 AI-Driven BPO Reskilling", category: "Macro", shortTerm: "Immediate (Now)", midTerm: "2026–2028", longTerm: "2028-2031", impact: 9, detail: "1.8M IT-BPM workers facing automation risks." },
              { trend: "MACRO-2 NAISR 2.0 AI Mandate", category: "Macro", shortTerm: "Policy Active", midTerm: "Full Rollout", longTerm: "Systemic Shift", impact: 8, detail: "Standardized skills taxonomy and regulation." },
              { trend: "MACRO-3 Healthcare Export/UHC", category: "Macro", shortTerm: "Growing", midTerm: "Peak Growth", longTerm: "Sustained", impact: 8, detail: "Nurses and AHPs demand surge globally and locally." },
              { trend: "MACRO-4 Digital Economy FDI Inflows", category: "Macro", shortTerm: "Accelerating", midTerm: "FDI Peak", longTerm: "Structural", impact: 7, detail: "Philippines as SEA's Fastest-Growing Digital Economy." },
              { trend: "MACRO-5 Demographic Dividend & Youth Gap", category: "Macro", shortTerm: "Underlying", midTerm: "Primary Wave", longTerm: "Mature Market", impact: 7, detail: "Youth gap needing digital upskilling." },
              { trend: "MICRO-1 Corporate AI Literacy (B2B Wave)", category: "Micro", shortTerm: "Urgent", midTerm: "Standard", longTerm: "Commoditised", impact: 9, detail: "B2B Upskilling wave and HR integration." },
              { trend: "MICRO-2 Healthcare Licensing Test Prep", category: "Micro", shortTerm: "Growing", midTerm: "Peak Demand", longTerm: "Sustained", impact: 8, detail: "NCLEX, OET, NLE prep needs." },
              { trend: "MICRO-3 Micro-Credentials Replacing Degrees", category: "Micro", shortTerm: "Early Adoption", midTerm: "Mainstream", longTerm: "Dominant", impact: 8, detail: "Market moving to short-form outcome-verified certificates." },
              { trend: "MICRO-4 Advanced Manufacturing Skilling", category: "Micro", shortTerm: "Nascent", midTerm: "FDI-Driven Growth", longTerm: "Mature", impact: 7, detail: "Semiconductor Assembly and Renewables capacity gaps." },
              { trend: "MICRO-5 Soft Skills as Enterprise Differentiator", category: "Micro", shortTerm: "Active", midTerm: "High Growth", longTerm: "Structural", impact: 7, detail: "Demand for uniquely human skills as AI automates cognitive work." },
              { trend: "MICRO-6 EdFinTech / ISA Models", category: "Micro", shortTerm: "Active", midTerm: "Scale Phase", longTerm: "Market Norm", impact: 6, detail: "Outcome based financing solving upfront cost issues." },
              { trend: "MICRO-7 Regional Expansion", category: "Micro", shortTerm: "Early", midTerm: "Growth Phase", longTerm: "Mainstream", impact: 6, detail: "Targeting Cebu, Davao, Iloilo beyond Metro Manila." },
            ]} />
          </div>
        </motion.div>
      </motion.div>

      {/* PHILIPPINES EDTECH COMPANIES */}
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
        <motion.div variants={fadeUp}>
          <SectionHeader id="edtech-companies" number="8" title="PHILIPPINES EdTech COMPANIES — FUNDED (2015–2026)" subtitle="Comprehensive listing of EdTech companies that have received formal investment funding in the Philippines over the past decade." />
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
                  { name: "Edukasyon.ph", funding: "~US$ 3.37M–7.97M across 7 rounds (Latest: Bridge Jun 2022)", website: "edukasyon.ph", inv: "Mustard Seed + Partners, Villgro Philippines, French Partners, KSR Ventures, Gobi-Core, Foxmont, Lorinet, Bisk Ventures, First Asia" },
                  { name: "ErudiFi / Bukas (Philippines)", funding: "US$ 5M Series A, Mar 2021 + YC W18", website: "bukas.ph", inv: "Monk's Hill Ventures, Qualgro, Y Combinator, Intudo Ventures, Convergence Ventures, Patamar Capital" },
                  { name: "CloudSwyft", funding: "US$ 125K (YC Feb 2021) + Prior funding (2018)", website: "cloudswyft.com", inv: "Y Combinator, Fourth Realm VC, Justin Mateen (Angel), Future Now Ventures, WSI Group" },
                  { name: "Edusuite", funding: "US$ 235K (PHP 12M) Seed round, Jul 2019", website: "edusuite.com.ph", inv: "Angel investors (group; names undisclosed)" },
                  { name: "SiM Learning Technologies", funding: "Undisclosed (Series A stage)", website: "sim.edu.ph", inv: "Undisclosed" },
                  { name: "Avion School", funding: "Bootstrapped with ISA model; revenue-funded", website: "avionschool.com", inv: "Self-funded / Revenue-based (ISA model)" },
                  { name: "Lyon LMS", funding: "Angel investment (2019 onwards); amount undisclosed", website: "lyon.ph", inv: "Amino Labs" },
                  { name: "Kalibrr (HR Tech / Skilling Adjacent)", funding: "Y Combinator (2012-2013); total estimated US$6M+", website: "kalibrr.com", inv: "Y Combinator, Felicis Ventures, 500 Startups, other angels" },
                  { name: "Sinag Learning", funding: "Seed funding received; amount undisclosed", website: "sinag.com.ph", inv: "Undisclosed angel/seed investors" },
                  { name: "KITE (Knowledge Innovation Tech)", funding: "Strategic investment / Grant (2021)", website: "kite.ph", inv: "Alibaba Cloud, DITO CME (strategic investment)" },
                  { name: "Edukasyon EDGE Tutor (Spin-off)", funding: "Exited via acquisition (May 2023)", website: "edukasyon.ph", inv: "Post-acquisition (exited entity from Edukasyon portfolio)" },
                  { name: "Uplift Code Camp", funding: "Revenue-funded bootcamp; partner of ErudiFi", website: "upliftcodecamp.com", inv: "Revenue-funded; ErudiFi lending partnership" },
                ].map((c, i) => (
                  <tr key={i} className="border-b border-border transition-colors hover:bg-muted/30">
                    <td className="px-3 py-2 font-medium text-foreground align-top">{c.name}</td>
                    <td className="px-3 py-2 text-muted-foreground align-top">{c.funding}</td>
                    <td className="px-3 py-2 align-top">
                       <a href={`https://${c.website}`} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">
                         {c.website}
                       </a>
                    </td>
                    <td className="px-3 py-2 text-muted-foreground align-top">{c.inv}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="p-3 text-[10px] text-muted-foreground italic border-t border-border">Note: 'Funded' includes VC rounds, angel investment, Y Combinator / accelerator cohort funding, and disclosed strategic investment. Pure grant recipients and government-funded institutions are excluded.</p>
          </div>
        </motion.div>
      </motion.div>

      {/* STRATEGIC SYNTHESIS */}
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
        <motion.div variants={fadeUp}>
          <SectionHeader id="strategic" number="9" title="Strategic Synthesis — 'SO WHAT' FOR YOUR COMPANY" subtitle="Cross-cutting strategic implications for a multi-sub-sector higher skilling company in the Philippines" />
          <div className="mt-6 space-y-4">
            {[
              { 
                level: "critical", 
                label: "Priority 1: Tech / AI Skilling — Act Now", 
                detail: "The AI reskilling emergency is the single highest-urgency market in the Philippines today. An immediately actionable playbook: (1) Launch a modular AI Literacy for Business programme (prompt engineering, AI tools for BPO roles, automation basics) targeting IBPAP members; (2) Pursue PSF-AAI curriculum alignment for government-facing credibility; (3) Explore B2B licensing of content modules to Future Skills Centres when the National Digital Skills Act passes." 
              },
              { 
                level: "critical", 
                label: "Priority 2: Healthcare & Care Economy — Build the Platform, Own the Category", 
                detail: "Healthcare skilling is a 5-year compounding opportunity. Immediate priority: (1) Build or license NLE, NCLEX, and OET adaptive test prep with AI-personalised mock testing; (2) Pursue PRC/PNA (Philippine Nurses Association) accreditation for CME credit-bearing programmes; (3) Target OFW-bound healthcare workers as a premium, high-willingness-to-pay early adopter segment." 
              },
              { 
                level: "high", 
                label: "Priority 3: B2B LMS / Corporate Training — Win Enterprise Before Commoditisation", 
                detail: "The B2B window is 18-24 months before global platforms (Cornerstone, Degreed, Disprz) fully consolidate the Philippine enterprise market. Priority: (1) Build HRIS integration APIs (SAP, Workday, Oracle); (2) Develop CLO-grade analytics dashboards; (3) Offer end-to-end managed learning programmes, not just platform licensing. Pricing power belongs to full-solution providers, not platform vendors." 
              },
              { 
                level: "high", 
                label: "Priority 4: Soft Skills — The Margin Story", 
                detail: "Soft skills training is the highest-gross-margin sub-sector. Priority: (1) Package AI-era communication, leadership, and cross-cultural competency as a single enterprise suite; (2) Invest in AI roleplay tools for scalable practice delivery; (3) Position as the bridge between the BPO sector's existing capabilities and the KPO roles Filipino workers must transition into." 
              },
              { 
                level: "medium", 
                label: "Priority 5: Advanced Manufacturing — First Mover, Long-Term Lock-In", 
                detail: "Manufacturing is nascent but structurally important. Priority: (1) Build partnerships with SEIPI and PEZA zone employers now; (2) Develop virtual lab / AR simulation content for semiconductor and renewable energy roles; (3) Pursue TESDA NC (National Certificate) alignment for manufacturing technical courses." 
              },
              { 
                level: "medium", 
                label: "Priority 6: Business & Professional Services — The MBA Alternative", 
                detail: "As traditional MBA programmes face cost-effectiveness scrutiny, outcome-verified professional skilling in finance, strategy, operations, and leadership is gaining ground. Priority: (1) Build a CPA, CFA, and PMP prep ecosystem; (2) Target fast-growing Philippine conglomerates (Ayala, SM Group, JG Summit) for executive education partnerships." 
              }
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

          <div className="mt-8 rounded-lg border border-border bg-muted/30 p-6">
            <h3 className="font-heading text-lg font-bold text-foreground border-b border-border pb-3 mb-4">Three Cross-Cutting Recommendations</h3>
            <ul className="space-y-4 text-sm leading-relaxed text-muted-foreground list-disc pl-5">
              <li><strong className="text-foreground">Build for B2B First, Consumer Second:</strong> B2B contracts deliver 5-10x the revenue per engagement of individual course sales. A company that masters B2B enterprise sales — including HRIS integration, analytics, and managed services — builds a durable revenue base that consumer revenue supplements rather than depends upon.</li>
              <li><strong className="text-foreground">Embed EdFinTech (BNPL / ISA):</strong> Integrate a Bukas-style financing partner or build proprietary instalment payment capability. Removing the upfront payment barrier can 3-5x conversion rates for premium programmes and signals outcome confidence to prospective learners.</li>
              <li><strong className="text-foreground">Pursue Dual Accreditation — TESDA + International Certification:</strong> TESDA accreditation unlocks government scholarship funding (TWSP, STEP). Pairing this with BigTech certifications (Google, Microsoft, AWS) creates a dual-validation signal that appeals to both government programme buyers and private employers simultaneously.</li>
            </ul>
          </div>
        </motion.div>
      </motion.div>
    </CountryPageLayout>
  );
}
