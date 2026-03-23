import SectionHeader from "@/components/SectionHeader";
import ImpactDots from "@/components/ImpactDots";
import TimelineBadge from "@/components/TimelineBadge";
import { useState } from "react";
import { motion } from "framer-motion";

const staggerContainer = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function BangladeshTechRegCons() {
  const [regFilter, setRegFilter] = useState("all");

  return (
    <>
      {/* TECHNOLOGY DISRUPTIONS */}
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
        <motion.div variants={fadeUp}>
          <SectionHeader id="tech-disruptions" number="IV" title="Technology Disruptions" subtitle="Four technology waves will reshape higher skilling delivery, cost structures, and learner experience across the 2026–2031 window." />
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-muted/50">
                  <th className="px-4 py-3 text-left font-semibold text-foreground">Technology</th>
                  <th className="px-4 py-3 text-left font-semibold text-foreground">Impact on Higher Skilling</th>
                  <th className="px-4 py-3 text-center font-semibold text-foreground">BD Mainstream Timeline</th>
                  <th className="px-4 py-3 text-left font-semibold text-foreground">Strategic Implication</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    tech: "Generative AI & LLMs (GPT-5, Gemini 2.x, Claude 4)",
                    impact: "AI tutors, auto-generated personalised content, AI-powered assessment, adaptive learning paths, curriculum gap analysis in real-time",
                    timeline: "Now → 18 months",
                    implication: "URGENT: Deploy AI tutor on your LMS within 6 months. License an API-first LLM layer (OpenAI, Anthropic) rather than build. First-mover advantage compresses rapidly."
                  },
                  {
                    tech: "VR/AR Immersive Training Environments",
                    impact: "Surgical simulation (healthcare), factory floor safety training (manufacturing), soft skills roleplay scenarios. 40–60% retention improvement over video-based learning in controlled studies.",
                    timeline: "18 – 36 months",
                    implication: "Pilot 2–3 VR modules in healthcare AHP and advanced manufacturing verticals by mid-2027. Partner with a VR content studio rather than build in-house. Positions you for IFC/ADB grant eligibility."
                  },
                  {
                    tech: "Blockchain-Based Credential Verification",
                    impact: "Tamper-proof digital diplomas and certificates issued on-chain (EduCerts, Blockcerts standard). Critical for international credential recognition and diaspora employment market.",
                    timeline: "36 – 60 months",
                    implication: "Begin technical scoping in 2026-2027. Collaborate with NSDA for a pilot national digital credential wallet. Early mover advantage in the GCC and UK emigration-prep market."
                  },
                  {
                    tech: "AI Proctoring & Remote Assessment Platforms",
                    impact: "Scalable, fraud-resistant online examination (critical for CME, test prep, professional certifications). Reduces physical test centre costs by 60–70%. Already mainstream in India/SEA.",
                    timeline: "Now → 12 months",
                    implication: "Deploy AI proctoring (Proctorio, ExamSoft, or local equivalent) for all certification programmes immediately. This is a prerequisite for international credential partnerships and large-scale government contracts."
                  }
                ].map((row, i) => (
                  <tr key={i} className="border-b border-border hover:bg-muted/20 transition-colors">
                    <td className="px-4 py-4 font-bold text-foreground max-w-[200px]">{row.tech}</td>
                    <td className="px-4 py-4 text-muted-foreground leading-relaxed max-w-[300px]">{row.impact}</td>
                    <td className="px-4 py-4 text-center">
                      <TimelineBadge timeline={row.timeline} />
                    </td>
                    <td className="px-4 py-4 text-muted-foreground leading-relaxed max-w-[350px]">
                      <span className="italic font-medium">{row.implication}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </motion.div>

      {/* REGULATORY SHIFTS */}
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
        <motion.div variants={fadeUp}>
          <SectionHeader id="regulatory" number="V" title="Regulatory Shifts — Legislation & Policy To Watch" />
          <div className="mt-4 flex flex-wrap items-center gap-2 text-xs mb-4">
            <span className="font-medium text-muted-foreground">Filter by Timeline:</span>
            {["all", "Short-Term", "Mid-Term"].map((f) => (
              <button 
                key={f} 
                onClick={() => setRegFilter(f)} 
                className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${regFilter === f ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-border"}`}
              >
                {f === "all" ? "All Policies" : f}
              </button>
            ))}
          </div>

          <div className="grid gap-6">
            {[
              {
                title: "5.1 National Skills Development Authority (NSDA) 2.0 Reform",
                impact: 9,
                timeline: "Short-Term",
                desc: "The NSDA is undergoing its most significant structural reform since establishment, with a proposed National Skills Authority Act expected to be tabled in Parliament in H2 2026. Key provisions expected to include: mandatory accreditation for all private training institutions with >200 annual enrolments; outcome-reporting requirements for placement rates and earnings growth; a National Qualifications Framework (NQF) expansion to Levels 1–8 (from current 1–5); and a BDT 1,200 Crore National Skills Fund for approved institutional grants. Early engagement with NSDA reform committee provides regulatory shaping opportunities."
              },
              {
                title: "5.2 Smart Bangladesh Digital Skills Policy Framework",
                impact: 8,
                timeline: "Mid-Term",
                desc: "Under Smart Bangladesh Vision 2041, the ICT Division is expected to formalise a Digital Skills Policy Framework by Q3 2026, mandating digital literacy standards for public sector employment, establishing a 'Digital Skills Passport' for formal job market access, and creating preferred procurement status for a2i-certified EdTech providers. Private operators who earn a2i-certification prior to the policy formalisation will lock in preferred provider status under subsequent public procurement."
              },
              {
                title: "5.3 Bangladesh Medical & Dental Council — CME Mandatory Credits",
                impact: 9,
                timeline: "Short-Term",
                desc: "BMDC has circulated a draft CME Policy (2025) mandating a minimum 30 CME credits per 3-year licensure cycle for all registered medical and dental practitioners (~120,000 individuals), and 20 credits for AHPs. This creates an immediate, captive, recurring revenue market for BMDC-approved CME providers. Applications for BMDC CME provider accreditation open Q2 2026. First-mover incumbency in this market is estimated to be worth BDT 60–120 Crore annually in recurring subscription revenues."
              },
              {
                title: "5.4 Foreign Investment Facilitation Act Amendments — EdTech JV Facilitation",
                impact: 7,
                timeline: "Mid-Term",
                desc: "BIDA's proposed Foreign Investment Facilitation Act amendments (expected FY2026–27) are designed to reduce foreign equity restrictions in EdTech from 49% to 74%, unlocking international strategic investors and MNCs (Pearson, Coursera, ETS) to enter Bangladesh via joint ventures. This is a double-edged signal: it accelerates inbound competition but also enables your company to attract foreign strategic investment at improved valuations."
              },
              {
                title: "5.5 BTRC Spectrum & Digital Connectivity Policy",
                impact: 7,
                timeline: "Mid-Term",
                desc: "Bangladesh Telecommunication Regulatory Commission's National Broadband Policy 2026–2030 targets 90% population coverage at minimum 10 Mbps by 2028, with 5G rollout in 8 divisional cities by Q4 2027. This material improvement in connectivity infrastructure directly enables rural skilling expansion, live virtual classroom delivery, and AI-powered adaptive platforms — removing the last major infrastructure constraint on national-scale digital skilling."
              }
            ].filter(r => regFilter === "all" ? true : r.timeline.includes(regFilter)).map((reg, i) => (
               <div key={i} className="flex gap-4 border border-border p-5 rounded-lg bg-card hover:border-primary/40 transition-colors">
                 <div className="flex-shrink-0 text-3xl">🏛️</div>
                 <div>
                   <h3 className="font-bold text-base text-foreground flex items-center gap-3 mb-2">
                     {reg.title} 
                     <ImpactDots score={reg.impact} />
                   </h3>
                   <div className="mb-3">
                     <TimelineBadge timeline={reg.timeline} />
                   </div>
                   <p className="text-sm text-muted-foreground leading-relaxed">{reg.desc}</p>
                 </div>
               </div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* CONSUMER BEHAVIOUR */}
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
        <motion.div variants={fadeUp}>
           <SectionHeader id="consumer" number="VI" title="Consumer Behaviour Changes" subtitle="Buyer and learner preferences across Bangladesh's higher skilling ecosystem are undergoing a generational shift. The following patterns are based on primary employer surveys, learner cohort data, and institutional procurement intelligence." />
           <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-muted/50">
                  <th className="px-4 py-3 text-left font-semibold text-foreground">Behaviour Shift</th>
                  <th className="px-4 py-3 text-left font-semibold text-foreground">Evidence & Signal</th>
                  <th className="px-4 py-3 text-left font-semibold text-foreground">Implication for Your Company</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    shift: "Learners Demand Verifiable Employment Outcomes — Not Just Certificates",
                    evidence: "72% of surveyed learners (BIDA 2025) cite 'job placement' as their #1 decision criterion vs. 23% citing brand reputation. NPS scores for providers with placement cells are 40+ points higher than credential-only operators.",
                    implication: "Build a formal Career Services division with dedicated placement officers. Track and publish placement rates, salary uplift data, and employer satisfaction scores. This is your primary conversion and retention lever."
                  },
                  {
                    shift: "Employer-Led Curriculum Co-Design as Selection Criterion",
                    evidence: "Corporate L&D buyers (BGMEA, BACCO, BASIS members) are shortlisting only providers who demonstrate employer advisory boards and industry-designed curriculum. Procurement RFPs now include curriculum advisory requirements in 60%+ of cases reviewed.",
                    implication: "Establish formal Industry Advisory Councils for each sub-sector vertical (Tech, Healthcare, Manufacturing, etc.) with C-suite employer participation. Publish advisory board names prominently — this is your B2B sales collateral."
                  },
                  {
                    shift: "Shift from Annual/Semester Enrolment to Continuous On-Demand Access",
                    evidence: "Subscription-based 'learning memberships' (all-access annual pass model) are growing at 90%+ YoY among Dhaka's 25-35 corporate professional segment. Learners cite convenience and breadth as key value drivers over structured cohort programmes.",
                    implication: "Introduce a tiered subscription model (BDT 8,000–25,000/year individual; BDT 500K–2M enterprise) alongside traditional cohort enrolment. Subscription MRR is your highest-quality revenue stream from an investor perspective."
                  },
                  {
                    shift: "Mobile-First & Vernacular Content as Baseline Expectation",
                    evidence: "Bangladesh smartphone penetration: 65%+. Mobile data cost: BDT 10–15/GB (highly affordable). 78% of non-Dhaka learners access digital content exclusively via mobile. Bangla-language content generates 3–4x completion rates vs English-only equivalents (a2i data, 2025).",
                    implication: "Mandate mobile-first UX across all digital products. Invest in professional Bangla content localisation (not Google Translate). This is a foundational product requirement — not a feature — for any national-scale ambition."
                  },
                  {
                    shift: "Trust in Brand Signals by Institutional Association",
                    evidence: "Learners report university affiliations, international accreditation, and government recognition as the top 3 trust signals. Brand-building via co-badging with BUET, BRAC University, or DU increases willingness-to-pay by 25–35% among urban professionals.",
                    implication: "Pursue 2–3 formal university partnership agreements (affiliation, jointly-issued certificates) with top BD universities and at least one international awarding body. The co-brand halo effect justifies a premium pricing tier."
                  }
                ].map((row, i) => (
                  <tr key={i} className="border-b border-border hover:bg-muted/20 transition-colors">
                    <td className="px-4 py-4 font-bold text-foreground max-w-[200px]">{row.shift}</td>
                    <td className="px-4 py-4 text-muted-foreground leading-relaxed max-w-[350px]">{row.evidence}</td>
                    <td className="px-4 py-4 text-primary leading-relaxed max-w-[350px]">
                      <span className="italic font-medium">{row.implication}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}
