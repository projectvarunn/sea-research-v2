import SectionHeader from "@/components/SectionHeader";
import TrendHorizonMap from "@/components/TrendHorizonMap";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";

const staggerContainer = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function BangladeshInvestStratRisk() {
  return (
    <>

      {/* STRATEGIC TIMELINE MAP */}
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
         <motion.div variants={fadeUp}>
           <SectionHeader id="horizon-map" number="VIII" title="Strategic Timeline — Trend Horizon Map" subtitle="A visual roadmap of capability deployment based on trend maturity velocity." />
           <div className="mt-4">
             <TrendHorizonMap data={[
                { trend: "AI Tutor & Adaptive LMS Deploy", category: "Tech", shortTerm: "● Full Execute", midTerm: "● Core", longTerm: "● Standard", impact: 10, detail: "Deploy within 6 months via LLM API." },
                { trend: "Deploy Micro-Credential Architecture", category: "Macro", shortTerm: "● Full Execute", midTerm: "● Core", longTerm: "Mature", impact: 9, detail: "40-120 hrs NSDA registered pathways." },
                { trend: "NSDA & BMDC Reg Filings", category: "Micro", shortTerm: "● Urgent", midTerm: "Active", longTerm: "Review", impact: 9, detail: "Filing Q2 2026. CME revenue enabler." },
                { trend: "Freelance AI Skills Track", category: "Tech", shortTerm: "● Pioneer", midTerm: "● Scale", longTerm: "Commoditized", impact: 10, detail: "Prompt Engineering & APi delivery setup." },
                { trend: "Employer Partnership Prog (EPP)", category: "Macro", shortTerm: "● Establish", midTerm: "● Core", longTerm: "● Core", impact: 9, detail: "Sign 30-50 employers guaranteeing outcome tracks." }
             ]} />
           </div>
         </motion.div>
      </motion.div>

      {/* STRATEGIC IMPERATIVES */}
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
         <motion.div variants={fadeUp}>
           <SectionHeader id="strategic" number="IX" title="Consolidated 'So What' — Strategic Imperatives" subtitle="Execution blueprint based on the trend intelligence compiled." />
           <div className="mt-4 overflow-x-auto border border-border rounded-lg">
             <table className="w-full text-sm">
               <thead className="bg-muted/50">
                 <tr className="border-b border-border">
                   <th className="px-4 py-3 text-left font-semibold text-foreground">Imperative Category</th>
                   <th className="px-4 py-3 text-left font-semibold text-foreground">Specific Strategy</th>
                   <th className="px-4 py-3 text-left font-semibold text-foreground">Rationale & Actions</th>
                   <th className="px-4 py-3 text-left font-semibold text-foreground">Target Success Metric (24 mo)</th>
                 </tr>
               </thead>
               <tbody>
                  {[
                    { cat: "Product & Curriculum", strat: "AI-Native Product Stack", rationale: "Generative AI tutor and adaptive diagnostics are mandatory to drive engagement (NPS). Action: Deploy an LLM-based API overlay onto the existing LMS within 6 months.", metric: "Learner NPS > 50; B2B Retention > 80%" },
                    { cat: "Product & Curriculum", strat: "Stackable Micro-Credentials", rationale: "Learners refuse 2yr programmes. Action: Unpack legacy courses into 40-120 hour verifiable micro-credentials.", metric: "80% of revenue from <100hr modular courses" },
                    { cat: "Commercial & GTM", strat: "Employer Partnership Programme (EPP)", rationale: "Job placement drives 2-3x pricing premium. Action: Sign 30-50 anchor employers for interview/hiring commitments tied to graduation.", metric: "Confirmed placement rate > 65%" },
                    { cat: "Commercial & GTM", strat: "Enterprise Sales Architecture", rationale: "Corporate L&D is BDT 1000Cr market. Action: Build dedicated B2B team targeting Top 200 corporates with subscription/SLA models.", metric: "Sign 15 anchor enterprise accounts" },
                    { cat: "Regulatory Capture", strat: "NSDA & BMDC Accreditation Sprint", rationale: "Grants access to BDT 1,200Cr Skills Fund + captive AHP CME market. Action: File 10 tracks with NSDA and AHP docs with BMDC by Q3 2026.", metric: "Accreditation secured; B2B Govt Revenue > BDT 50L" },
                    { cat: "Brand & Partnerships", strat: "International Co-Badging", rationale: "Raises ARPU 40-70%. Action: Partner with AWS, Google, City&Guilds, Pearson.", metric: "3 active international credentialing MoUs" },
                    { cat: "Technology", strat: "Mobile-First / Vernacular Base", rationale: "78% non-Dhaka use mobile; Bangla drives 3x completion. Action: Localise high-margin courses; enforce mobile UI/UX.", metric: "Mobile MAUs > 75% of total base" },
                    { cat: "Impact & Funding", strat: "Women-in-Tech Vertical", rationale: "Unlocks USD 85M+ in donor grant pools (USAID/IFC). Action: Create dedicated STEM cohort structure for women.", metric: "Win 1 major gender-lens impact grant" }
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-border hover:bg-muted/20">
                      <td className="px-4 py-3 font-semibold text-foreground">{row.cat}</td>
                      <td className="px-4 py-3 font-bold text-primary">{row.strat}</td>
                      <td className="px-4 py-3 text-muted-foreground">{row.rationale}</td>
                      <td className="px-4 py-3 font-medium text-foreground">{row.metric}</td>
                    </tr>
                  ))}
               </tbody>
             </table>
           </div>
         </motion.div>
      </motion.div>

      {/* RISK REGISTER */}
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
         <motion.div variants={fadeUp}>
           <SectionHeader id="risk-register" number="X" title="Risk Register" subtitle="Critical near-term strategic and operational risks assessed." />
           <div className="mt-4 overflow-x-auto border border-border rounded-lg">
             <table className="w-full text-sm">
               <thead className="bg-muted/50">
                 <tr className="border-b border-border">
                   <th className="px-4 py-3 text-left font-semibold text-foreground">Risk Scenario</th>
                   <th className="px-4 py-3 text-left font-semibold text-foreground">Likelihood</th>
                   <th className="px-4 py-3 text-left font-semibold text-foreground">Impact</th>
                   <th className="px-4 py-3 text-left font-semibold text-foreground">Mitigation Strategy</th>
                 </tr>
               </thead>
               <tbody>
                  {[
                    { r: "Delay in NSDA / BMDC Accreditation", l: "HIGH", i: "HIGH (Stalls Govt/CME Revenue)", m: "Hire dedicated regulatory liaison officer. Begin parallel track applications immediately. Do not build business plan solely reliant on Q1 2027 approval." },
                    { r: "Generative AI Displaces Entry-Level Code/BPO Skills", l: "HIGH", i: "CRITICAL (Obsoletes Core Curriculum)", m: "Pivot tech skilling from 'syntax writing' to 'AI Copilot Prompting & Architecture'. Re-write curriculum every 6 months." },
                    { r: "B2C Customer Acquisition Cost (CAC) Inflation", l: "MEDIUM", i: "HIGH (Margin Erosion)", m: "Shift marketing mix heavily toward B2B2C (University & Employer partnerships) and SEO/Content led community acquisition rather than paid Meta/Google." },
                    { r: "Foreign Entrant (MNC) Captures Enterprise Market", l: "MEDIUM", i: "HIGH", m: "Lock in 1-3 year enterprise master service agreements (MSAs) with top 20 corporates immediately. Emphasise local Bangla support and contextualised content." },
                    { r: "Macroeconomic / FX Volatility", l: "MEDIUM", i: "MEDIUM", m: "Pricing flexibility; expand 'emigration-prep' tracks targeting diaspora remittance-payers directly in USD/GBP." }
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-border hover:bg-muted/20">
                      <td className="px-4 py-3 font-bold text-foreground">{row.r}</td>
                      <td className="px-4 py-3 font-semibold text-destructive">{row.l}</td>
                      <td className="px-4 py-3 font-semibold text-[#FFC107]">{row.i}</td>
                      <td className="px-4 py-3 text-muted-foreground">{row.m}</td>
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
