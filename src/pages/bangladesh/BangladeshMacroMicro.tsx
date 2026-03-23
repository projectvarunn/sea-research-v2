import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SectionHeader from "@/components/SectionHeader";
import ImpactDots from "@/components/ImpactDots";
import TimelineBadge from "@/components/TimelineBadge";
import AlertBox from "@/components/AlertBox";
import { motion } from "framer-motion";

const staggerContainer = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function BangladeshMacroMicro() {
  return (
    <>
      {/* MACRO TRENDS */}
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
        <motion.div variants={fadeUp}>
          <SectionHeader id="macro-trends" number="II" title="Macro Trends — 5 Global Forces" subtitle="Five macro-level forces are reshaping higher skilling globally and in Bangladesh. Each force is assessed on its directional impact and relevance to your multi-sub-sector operating model." />
          <Accordion type="multiple" className="mt-4">
            {[
              { 
                id: "mac1", 
                title: "AI-Powered Adaptive Learning as Global Infrastructure", 
                impact: 9, 
                stars: "★★★★★★★★★☆",
                timeline: "Short-Term (0–1 yr)", 
                content: "Generative AI and large language models are transitioning from novelty to institutional infrastructure in global skilling. Global EdTech AI investment reached USD 4.1B in 2025. Platforms integrating adaptive learning pathways (e.g., Coursera, Udemy Business, LinkedIn Learning) are capturing institutional budgets at the expense of legacy classroom models. In Bangladesh, this manifests as pressure to 'AI-nativise' product stacks urgently — learners expect personalised, feedback-loop driven experiences as table stakes.", 
                affected: "All 6 sub-sectors — most critical for Tech Skilling, Soft Skills, and B2B LMS",
                sowhat: "Your LMS and corporate training sub-sector faces the most acute displacement risk within 12 months. Immediate investment in AI-driven personalisation engine, adaptive assessment, and NLP-based content generation is non-negotiable to protect B2B enterprise contracts." 
              },
              { 
                id: "mac2", 
                title: "Global Skills Mis-Match Crisis Reaches Structural Severity", 
                impact: 9, 
                stars: "★★★★★★★★★☆",
                timeline: "Short-Term (0–1 yr)", 
                content: "The World Economic Forum's 2025 Future of Jobs Report identifies a 44% skills disruption rate by 2027. Employers globally cannot source talent at the pace of technological change. Bangladesh is acutely exposed — its export-oriented RMG sector is automating, the IT/ITES sector requires 500K+ new digital workers by 2028 (per BACCO), and healthcare faces an estimated 35% shortfall in Allied Health Professionals. This is the foundational demand driver for the entire market.", 
                affected: "Tech & AI Skilling, Healthcare AHPs, Advanced Manufacturing, Professional Services",
                sowhat: "The crisis translates directly to a large, addressable, and urgent buyer base. BD's skills gap is your revenue opportunity. Companies with demonstrable employment outcomes (job placement rates, salary uplift data) will command 2–3x pricing premium over credential-only providers." 
              },
              { 
                id: "mac3", 
                title: "ESG-Linked Green Skills & Sustainability Upskilling", 
                impact: 7, 
                stars: "★★★★★★★☆☆☆",
                timeline: "Mid-Term (1–3 yr)", 
                content: "International buyers (EU, UK, USA) are demanding ESG compliance from Bangladesh supply chains — particularly in RMG, leather, and manufacturing. This is creating an emerging demand for green skills training: carbon accounting, sustainable manufacturing processes, ESG reporting, and circular economy management. IFC and ADB have earmarked USD 340M in green skills and just transition programmes across South Asia (2025-2028), of which Bangladesh receives a significant allocation.", 
                affected: "Advanced Manufacturing, Professional Services, B2B Corporate Training",
                sowhat: "A first-mover ESG/Green Skills curriculum — co-branded with an IFC or ADB programme — positions you to capture institutional government and development finance contracts before market saturation. Target RMG factories and export-oriented manufacturers as your anchor B2B clients." 
              },
              { 
                id: "mac4", 
                title: "Demographic Dividend Under Pressure: Bangladesh's Youth Bulge", 
                impact: 9, 
                stars: "★★★★★★★★★☆",
                timeline: "Short-Term (0–1 yr)", 
                content: "Bangladesh's median age is 28.4 years. Approximately 2M young people enter the labour market annually. Without higher-order skilling, this demographic dividend risks becoming a liability — driving urban unemployment, social instability, and emigration. The government's Eighth Five Year Plan explicitly targets 100% skills coverage for new labour market entrants by 2031. This creates both urgency and large-scale public procurement opportunities for multi-sub-sector providers.", 
                affected: "All sub-sectors — anchor macro driver for the entire sector",
                sowhat: "Position your company not as a training provider but as a national human capital infrastructure partner. Build relationships with a2i (Aspire to Innovate), BIDA, and Ministry of Education for public procurement pipeline. This demographic pressure also guarantees a 20-year demand runway." 
              },
              { 
                id: "mac5", 
                title: "Globalisation of Credentials & Cross-Border Recognition", 
                impact: 8, 
                stars: "★★★★★★★★☆☆",
                timeline: "Mid-Term (1–3 yr)", 
                content: "ASEAN, GCC, UK, and EU are progressively moving toward Mutual Recognition Agreements (MRAs) for professional qualifications. For Bangladesh, this is significant: 10M+ diaspora workers send USD 22B+ in remittances. Skilling institutions that partner with internationally recognised credentialing bodies (City & Guilds, Pearson, Prometric, AWS, Google, Microsoft) can command premium pricing and serve the fast-growing 'emigration-prep' market segment alongside domestic skilling.", 
                affected: "Tech & AI Skilling, Healthcare AHPs, Professional Services, Soft Skills",
                sowhat: "Accelerate international credential partnerships — particularly UK/City & Guilds for healthcare, AWS/Google/Microsoft for tech skilling, and ACCA/CIM for professional services. These partnerships raise your average revenue per learner by 40–70% and open cross-border revenue streams." 
              }
            ].map((m) => (
              <AccordionItem key={m.id} value={m.id}>
                <AccordionTrigger className="text-left">
                  <div className="flex items-center gap-3">
                    <span className="text-lg">○</span>
                    <div>
                      <span className="font-semibold text-foreground">{m.title}</span>
                      <div className="mt-1 flex items-center gap-2">
                        <ImpactDots score={m.impact} />
                        <TimelineBadge timeline={m.timeline} />
                        <span className="text-xs font-semibold tracking-widest text-[#FFC107]">{m.stars}</span>
                      </div>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4 text-sm text-muted-foreground pb-2">
                    <p className="leading-relaxed"><strong className="text-foreground">Description: </strong>{m.content}</p>
                    <p className="leading-relaxed"><strong className="text-foreground">Affected Sub-Sectors: </strong>{m.affected}</p>
                    <AlertBox type="signal" title="SO WHAT">
                      <p className="text-foreground">{m.sowhat}</p>
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
          <SectionHeader id="micro-trends" number="III" title="Micro Trends — 7 Emerging Patterns (Last 12 Months)" subtitle="The following seven trends have emerged or accelerated within Bangladesh's higher skilling market over the preceding 12 months, based on primary market data, institutional procurement signals, and competitive intelligence." />
          <div className="mt-4 grid gap-4 lg:grid-cols-2">
            {[
              { 
                title: "Micro-Credential & Stackable Certification Explosion", 
                imp: 9, 
                stars: "★★★★★★★★★☆",
                time: "Short-Term (0-1 yr)", 
                target: "Tech Skilling, Soft Skills, Professional Services, B2B Corporate", 
                desc: "Short-form, verifiable, employer-recognised micro-credentials (20–120 hour programmes) are displacing 2–4 year degree enrollments as the primary skilling modality for employed adults in Bangladesh. BGMEA and BACCO members report 60%+ of corporate L&D spending has shifted to modular/stackable formats since mid-2024. Providers offering NSDA-registered micro-credentials with digital badging (Credly, Accredible) are seeing 3–4x enrollment growth versus equivalent long-form programmes.", 
                action: "Restructure your curriculum architecture around stackable micro-credential 'learning journeys' of 40–120 hours each, with each module independently NSDA-registered. This unlocks both B2C individual billing and B2B cohort contract structures simultaneously, and is your fastest lever for revenue velocity." 
              },
              { 
                title: "Corporate L&D Budget Surge Post-COVID Normalisation", 
                imp: 8, 
                stars: "★★★★★★★★☆☆",
                time: "Short-Term (0-1 yr)", 
                target: "B2B Services (LMS, Corporate Training), Soft Skills, Professional Services", 
                desc: "Bangladesh's top 500 corporates (banking, telecom, pharma, FMCG, IT) have increased L&D budget allocations by an estimated 35–45% YoY since FY2024, with the shift toward third-party specialised training providers rather than internal training teams. BRAC Bank, Grameenphone, Square Pharmaceuticals, and ACI Group have all expanded structured external training procurement. The market for B2B corporate training in BD is estimated at BDT 800–1,100 Crore annually and growing at 18% CAGR.", 
                action: "Establish a dedicated Enterprise Sales function targeting the top 200 corporate accounts. Develop bespoke enterprise L&D solutions with SLA-backed outcomes, dedicated learning consultants, and annual subscription LMS packages. Target a minimum of 15 anchor enterprise accounts in FY2026 — each representing BDT 50–150L in recurring annual revenue." 
              },
              { 
                title: "Healthcare Workforce Formalisation Mandate", 
                imp: 8, 
                stars: "★★★★★★★★☆☆",
                time: "Mid-Term (1-3 yr)", 
                target: "Healthcare & Care Economy (CMEs, AHP Training, Test Prep)", 
                desc: "The Bangladesh Medical and Dental Council (BMDC), Nursing and Midwifery Council (BNMC), and Ministry of Health are jointly driving formalisation of AHP (Allied Health Professional) training with mandatory CME credit requirements for licensure renewal (effective 2026–2027). An estimated 180,000+ AHPs operate without formalised continuing education. This creates a captive, recurring, and regulation-driven market estimated at BDT 300–500 Crore.", 
                action: "File for BMDC/BNMC approved CME provider status immediately — the accreditation pipeline is long and early movers will have 24-36 months of first-mover advantage. Build a blended CME delivery model to serve both Dhaka-based and district-level health facilities." 
              },
              { 
                title: "Women-in-Tech & STEM Skilling as Institutional Priority", 
                imp: 7, 
                stars: "★★★★★★★☆☆☆",
                time: "Short-Term (0-1 yr)", 
                target: "Tech & AI Skilling, Soft Skills, B2B Corporate Training", 
                desc: "The Government of Bangladesh (a2i, Women ICT Frontier Initiative), USAID, UN Women, and IFC have collectively deployed USD 85M+ in gender-focused digital skilling programmes across 2024–2025. Female labor force participation in the formal digital economy remains below 35% despite significant pipeline potential. Providers offering gender-responsive design see 40-60% higher completion rates and preferential access to grants.", 
                action: "Create a dedicated 'Women in Tech' learning vertical with purpose-built curriculum, female-only cohort options, and industry mentorship networks. Qualifies you for gender-lens impact grants (USD 500K-3M) and differentiates your institutional pitch." 
              },
              { 
                title: "Rural & Peri-Urban Digital Skilling Expansion", 
                imp: 8, 
                stars: "★★★★★★★★☆☆",
                time: "Mid-Term (1-3 yr)", 
                target: "Tech & AI Skilling, Soft Skills, Advanced Manufacturing", 
                desc: "Bangladesh's Union Digital Centres (UDCs, 4,550 locations) are being converted into hybrid Learning & Skilling Hubs under Smart Bangladesh Vision 2041. a2i's 2025 budget allocates BDT 450 Crore to digital skilling infrastructure outside Dhaka. The addressable rural skilling market is 3-4x the size of the Dhaka-centric market but requires hub-and-spoke delivery models, offline-first technology, and vernacular (Bangla) content.", 
                action: "Develop a hub-and-spoke franchise or partner model for district-level delivery. Localise core curriculum into verified Bangla. Apply for a2i's Skilling Hub operator grants (applications open Q2 2026). First movers gain government partnership status." 
              },
              { 
                title: "Outcome-Based & Income-Share Revenue Models", 
                imp: 8, 
                stars: "★★★★★★★★☆☆",
                time: "Short-Term (0-1 yr)", 
                target: "Tech & AI Skilling, B2B Staffing, Professional Services, Healthcare", 
                desc: "Employer partners (particularly in IT/ITES, BPO, and garments) are pushing skilling providers toward outcome-linked commercial structures: payment contingent on placement, salary-linked revenue shares, or employer co-funding. ShopUp, Augmedix, and several BACCO members have piloted outcome-based hiring pipelines. This rewards providers with strong job placement networks.", 
                action: "Develop a formal Employer Partnership Programme (EPP) with 30-50 anchor employers committing to interview or hire graduates. This transforms your revenue model into a more defensible, outcomes-linked structure — the most important signal institutional investors assess." 
              },
              { 
                title: "Soft Skills Premium in the Formal Economy", 
                imp: 7, 
                stars: "★★★★★★★☆☆☆",
                time: "Short-Term (0-1 yr)", 
                target: "Soft Skills Training, B2B Corporate, Professional Services", 
                desc: "HR leaders at Bangladesh's top 100 corporates report communication, leadership, critical thinking, and professional effectiveness as the #1 hiring barrier. A 2025 BIDA employer survey found 72% of employers rejected technically qualified candidates for 'professional readiness' gaps. Soft skills training is transitioning from 'nice to have' to a mandatory pre-employment and in-employment certification.", 
                action: "Bundle a Professional Effectiveness Certification (PEC) — covering communication, workplace ethics, leadership fundamentals — into all tech and healthcare programmes as a mandatory module. Differentiates offering and opens B2B contracts with formal sector HR." 
              }
            ].map((t, i) => (
              <motion.div key={i} variants={fadeUp} className="rounded-lg border border-border bg-card flex flex-col transition-colors hover:border-primary/40">
                <div className="p-5 flex-1">
                  <div className="mb-3 flex flex-wrap items-center gap-2">
                    <TimelineBadge timeline={t.time} />
                    <ImpactDots score={t.imp} />
                    <span className="text-xs font-semibold tracking-widest text-[#FFC107]">{t.stars}</span>
                  </div>
                  <h3 className="mb-2 font-heading text-base font-bold text-foreground">{t.title}</h3>
                  <p className="text-xs font-semibold text-primary mb-3">Affected Sub-Sectors: {t.target}</p>
                  <p className="text-sm leading-relaxed text-muted-foreground">{t.desc}</p>
                </div>
                <div className="bg-muted/30 border-t border-border p-5 rounded-b-lg mt-auto">
                  <h4 className="text-xs font-bold text-foreground flex items-center gap-2 mb-2">
                    <span className="text-lg">⚡</span> SO WHAT
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{t.action}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}
