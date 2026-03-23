import SectionHeader from "@/components/SectionHeader";
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

export default function BangladeshGigFreelance() {
  return (
    <>
      {/* FREELANCING ECONOMY */}
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
         <motion.div variants={fadeUp}>
           <SectionHeader id="freelancing" number="XII" title="Bangladesh Freelancing Economy Intelligence" subtitle="A detailed analysis of the rapidly expanding cloud-work sector." />
           <div className="mt-4 p-4 border border-border bg-muted/30 rounded-lg flex mb-4 gap-4 justify-between items-center flex-wrap">
             <div><p className="text-xs text-muted-foreground uppercase font-bold tracking-wider">Estimated Market Value</p><p className="text-lg font-bold text-foreground">~USD 1B+ FX Earnings</p></div>
             <div><p className="text-xs text-muted-foreground uppercase font-bold tracking-wider">Active Freelancers</p><p className="text-lg font-bold text-foreground">650,000+ Active</p></div>
             <div><p className="text-xs text-muted-foreground uppercase font-bold tracking-wider">Annual Growth (CAGR)</p><p className="text-lg font-bold text-foreground">26% YoY</p></div>
             <div><p className="text-xs text-muted-foreground uppercase font-bold tracking-wider">Global Ranking</p><p className="text-lg font-bold text-primary">#2 Ranked Globally</p></div>
           </div>

           <h3 className="font-heading font-bold text-lg mb-3">12.1 Freelancing Landscape: Segments, Platforms & Skill Gaps</h3>
           <div className="overflow-x-auto border border-border rounded-lg mb-6">
             <table className="w-full text-sm">
               <thead className="bg-muted/50">
                 <tr className="border-b border-border">
                   <th className="px-4 py-3 text-left font-semibold text-foreground">Freelance Segment</th>
                   <th className="px-4 py-3 text-left font-semibold text-foreground">Primary Global Platforms</th>
                   <th className="px-4 py-3 text-left font-semibold text-foreground">Prevailing Hourly Rate</th>
                   <th className="px-4 py-3 text-left font-semibold text-foreground">Critical Missing Skilling Link</th>
                 </tr>
               </thead>
               <tbody>
                 {[
                   { s: "Low-Complexity (Data Entry, VA)", p: "Upwork, Fiverr, TaskRabbit", r: "USD 5–15 / hour", k: "Immediate displacement by GenAI. Urgent reskilling needed into Prompt Engineering to preserve income." },
                   { s: "Creative (Graphic Design, Video)", p: "Fiverr, 99designs, Toptal", r: "USD 15–35 / hour", k: "Advanced AI-augmented workflow courses (Midjourney, RunwayML) to double throughput." },
                   { s: "Mid-Complexity (Web/App Dev)", p: "Upwork, Freelancer.com, Turing", r: "USD 25–60 / hour", k: "Cloud Architecture (AWS/Azure) and DevOps scaling certificates." },
                   { s: "Professional Support (Accounting/HR)", p: "Upwork, Guru, LinkedIn", r: "USD 20–40 / hour", k: "Cross-border compliance knowledge (US GAAP, UK Taxation) for scalable agency models." },
                   { s: "High-Complexity (AI/ML Dev, Data)", p: "Toptal, Braintrust, Turing", r: "USD 50–120+ / hour", k: "Advanced mathematical modeling; NLP architectures. Severe supply shortage in BD." }
                 ].map((row, i) => (
                   <tr key={i} className="border-b border-border hover:bg-muted/20">
                     <td className="px-4 py-3 font-semibold text-foreground">{row.s}</td>
                     <td className="px-4 py-3 text-muted-foreground">{row.p}</td>
                     <td className="px-4 py-3 font-semibold text-primary">{row.r}</td>
                     <td className="px-4 py-3 text-muted-foreground">{row.k}</td>
                   </tr>
                 ))}
               </tbody>
             </table>
           </div>

           <h3 className="font-heading font-bold text-lg mb-3">12.2 Macro & Micro Trends within Freelancing</h3>
           <div className="grid gap-3 mb-6 lg:grid-cols-2">
             {[
               { t: "AI Skills Premium (56% Uplift)", d: "B2B buyers globally are paying average 56% premiums for AI-augmented freelancers versus traditional deliverables. Data entry is dead; Prompt Engineering and AI-API agent construction are the new USD 40-80/hr staples. Urgent market: create 'AI-Augmented Freelance Tracks'." },
               { t: "AI Displacement (200k+ At Risk)", d: "Conversely, ~200,000 low-skill BPO/data-entry freelancers in BD face imminent income collapse. Massive social impact opportunity: build 'AI-Survivor' reskilling academies funded by ADB/IFC just-transition grants targeting these specific cohorts." },
               { t: "The English Proficiency Bottleneck", d: "A 2024 Payoneer survey of BD freelancers cites 'Communication & English fluency' as the #1 limiting factor preventing growth beyond the USD 500/month threshold. Launch a dedicated 'Freelance Business English & Client Communication' course." },
               { t: "The Shift from Solo to SMB 'Agency' Model", d: "Successful freelancers (earning >USD 2k/month) immediately scale by hiring 3-5 junior peers, transitioning into mini-BPO agencies. These agency founders lack formal management skilling. Opportunity: A 'Freelance Agency Founder/Scale-up Masterclass' at high-ticket B2B pricing." }
             ].map((t, i) => (
               <div key={i} className="bg-card p-5 rounded-lg border border-border">
                 <h4 className="font-bold text-sm text-foreground mb-2">● {t.t}</h4>
                 <p className="text-sm text-muted-foreground">{t.d}</p>
               </div>
             ))}
           </div>

           <div className="p-4 bg-muted/20 rounded-lg border-l-4 border-l-primary mb-8">
             <h4 className="font-bold text-sm mb-1">12.3 Government & Regulatory Tailwinds</h4>
             <p className="text-sm text-muted-foreground">The government strongly incentivises freelancer growth to protect FX reserves (including a 4% cash incentive on repatriated earnings). <strong className="text-foreground">CRITICAL GAP:</strong> PayPal remains functionally absent. The payment infrastructure friction (reliant on Payoneer/Wise) creates an opportunity—bundled 'Finance & Payment Operations' curriculum.</p>
           </div>
         </motion.div>
      </motion.div>

      {/* GIG ECONOMY */}
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
         <motion.div variants={fadeUp}>
           <SectionHeader id="gig-economy" number="XIII" title="Domestic Gig Economy Intelligence" subtitle="Analysis of platform-driven domestic labor." />
           <div className="mt-4 p-4 border border-border bg-muted/30 rounded-lg flex mb-4 gap-4 justify-between items-center flex-wrap">
             <div><p className="text-xs text-muted-foreground uppercase font-bold tracking-wider">Addressable Workforce</p><p className="text-lg font-bold text-foreground">~6-8 Million Drivers</p></div>
             <div><p className="text-xs text-muted-foreground uppercase font-bold tracking-wider">YoY Growth</p><p className="text-lg font-bold text-foreground">35%+ Expanding</p></div>
             <div><p className="text-xs text-muted-foreground uppercase font-bold tracking-wider">Top Platforms</p><p className="text-lg font-bold text-foreground">Pathao, Foodpanda, Shohoz</p></div>
             <div><p className="text-xs text-muted-foreground uppercase font-bold tracking-wider">Primary Activity</p><p className="text-lg font-bold text-primary">Urban Mobility & Delivery</p></div>
           </div>
           
           <h3 className="font-heading font-bold text-lg mb-3">13.1 Gig Economy Segment Analysis</h3>
           <div className="overflow-x-auto border border-border rounded-lg mb-6">
             <table className="w-full text-sm">
               <thead className="bg-muted/50">
                 <tr className="border-b border-border">
                   <th className="px-4 py-3 text-left font-semibold text-foreground">Gig Category</th>
                   <th className="px-4 py-3 text-left font-semibold text-foreground">Key Operators in BD</th>
                   <th className="px-4 py-3 text-left font-semibold text-foreground">Skilling Need & Readiness</th>
                   <th className="px-4 py-3 text-left font-semibold text-foreground">Monetisation Model</th>
                 </tr>
               </thead>
               <tbody>
                  {[
                    { c: "Ride-Hailing & Logistics", o: "Uber, Pathao, Shohoz, InDrive", n: "Road safety, customer service, digital map literacy, basic english.", m: "B2B (Paid by platform as onboarding cost). Zero B2C willingness to pay." },
                    { c: "Hyper-Local Delivery", o: "Foodpanda, Chaldal, Daraz", n: "Food hygiene, inventory handling, time-management.", m: "B2B (Compliance-driven training contracts)." },
                    { c: "Domestic/Care Services", o: "HelloTask, HandyMama", n: "Appliance usage, hygiene standards, soft skills, employer etiquette.", m: "B2B2C (Platform subsidies + micro-deductions from worker)." },
                    { c: "Creator & Influencer", o: "YouTube, TikTok, Meta", n: "Editing, algorithmic growth, brand negotiation. ~25k monetised BD YouTubers.", m: "B2C high-ticket. Eager willingness to pay for 'growth hacks'." },
                    { c: "E-commerce Micro-Merchants", o: "Facebook F-Commerce, Daraz", n: "Digital marketing, basic accounting, supply chain logistics.", m: "B2C Subscription & Corporate CSR grants (e.g. Meta SME grants)." }
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-border hover:bg-muted/20">
                      <td className="px-4 py-3 font-semibold text-foreground">{row.c}</td>
                      <td className="px-4 py-3 text-muted-foreground">{row.o}</td>
                      <td className="px-4 py-3 text-foreground">{row.n}</td>
                      <td className="px-4 py-3 font-semibold text-primary">{row.m}</td>
                    </tr>
                  ))}
               </tbody>
             </table>
           </div>

           <h3 className="font-heading font-bold text-lg mb-3">13.2 Key Gig Economy Trends</h3>
           <div className="space-y-4 mb-6">
              <Accordion type="single" collapsible>
                {[
                  { id: "g1", title: "Mandated Skilling: Platform Certifications", text: "Global platforms (Uber, DeliveryHero) are increasingly mandating digital certifications for driver onboarding (safety compliance, food hygiene) to mitigate liability. A B2B enterprise contract handling onboarding certification for Pathao or Daraz—estimating 200,000 annual onboardings at just BDT 1,000–2,000 per certification—is an immediate BDT 20–40 Crore institutional opportunity." },
                  { id: "g2", title: "Financial Literacy for Income Volatility", text: "Gig work is structurally precarious. A 2024 ILO survey of Dhaka gig workers cited a '71% shortfall in formal savings awareness'. Developing a mobile-first 'Gig Financial Literacy' module (saving, insurance, micro-credit management) qualifies as a prime candidate for the USD 12M ILO regional green/gig tech improvement grants." },
                  { id: "g3", title: "The Creator Economy Masterclass 'Mirage'", text: "While high-profile, the 'influencer' tier is top-heavy. However, the ~25,000 monetised YouTube creators in BD exhibit the highest B2C willingness to pay of any gig cohort for 'Growth and Monetisation Masterclasses'. Launching a 10-week cohort at BDT 18,000–30,000 pricing is highly viable for a premium brand." }
                ].map(gi => (
                   <AccordionItem key={gi.id} value={gi.id}>
                     <AccordionTrigger className="font-bold text-sm text-foreground">{gi.title}</AccordionTrigger>
                     <AccordionContent className="text-sm text-muted-foreground leading-relaxed">{gi.text}</AccordionContent>
                   </AccordionItem>
                ))}
              </Accordion>
           </div>
           
           <h3 className="font-heading font-bold text-lg mb-3">13.3 Freelancing & Gig Economy Skilling Investment Roadmap</h3>
           <div className="overflow-x-auto border border-border rounded-lg mb-6">
             <table className="w-full text-sm">
               <thead className="bg-muted/50">
                 <tr className="border-b border-border">
                   <th className="px-4 py-3 text-left font-semibold text-foreground">Target Cohort</th>
                   <th className="px-4 py-3 text-left font-semibold text-foreground">Product Strategy</th>
                   <th className="px-4 py-3 text-left font-semibold text-foreground">Revenue Model</th>
                   <th className="px-4 py-3 text-left font-semibold text-foreground">Timeline</th>
                 </tr>
               </thead>
               <tbody>
                  {[
                    { c: "Established Freelancers (>USD 1k/mo)", p: "Agency Scaling Masterclass (Compliance, Int'l Taxation, AI Agents)", m: "High-Ticket B2C (BDT 30k+ per seat)", t: "0-6 Months (Launch immediately)" },
                    { c: "Mid-Tier Freelancers (USD 300-900/mo)", p: "Freelance Business English & Communication Cert", m: "Mid-Ticket B2C (BDT 8k-15k)", t: "0-6 Months" },
                    { c: "Vulnerable Data-Entry Freelancers", p: "AI-Survivor Prompt Engineering Reskilling Track", m: "B2G / Impact Grants (ADB/IFC funded)", t: "6-12 Months (Grant cycle dependent)" },
                    { c: "Platform Gig Workers (Delivery/Ride)", p: "Mandatory Safety/Hygiene Digital Onboarding Certs", m: "B2B Enterprise MSAs with Platforms (Pathao, etc.)", t: "6-12 Months (Require pilot data)" },
                    { c: "E-commerce Micro-Merchants", p: "F-Commerce Digital Marketing & Supply Chain basics", m: "CSR Grants (Meta/Google SME funds) + Low-Ticket B2C", t: "12-18 Months" }
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-border hover:bg-muted/20">
                      <td className="px-4 py-3 font-semibold text-foreground">{row.c}</td>
                      <td className="px-4 py-3 text-muted-foreground">{row.p}</td>
                      <td className="px-4 py-3 text-primary font-medium">{row.m}</td>
                      <td className="px-4 py-3 text-muted-foreground whitespace-nowrap">{row.t}</td>
                    </tr>
                  ))}
               </tbody>
             </table>
           </div>

           <div className="mt-8 bg-primary/10 border border-primary p-6 rounded-lg">
             <h3 className="font-heading font-extrabold text-primary text-xl mb-3">Analyst Synthesis: The Greatest Sector Opportunity</h3>
             <p className="text-sm text-foreground leading-relaxed">
                Bangladesh's 650,000+ freelancers and 6-8 million gig workers represent the single most addressable and revenue-ready skilling market in the country. Unlike traditional corporate L&D or higher-ed test prep, these demographics are entirely self-motivated, have clear and immediate ROI expectations (skills = immediate cash), and require zero demand generation—they just require supply. Creating an integrated Freelance Career Acceleration Stack (AI augmentation + Business English + International Compliance) opens an annual revenue opportunity estimated at BDT 800 - 1,400 Crore by FY2028, with the highest LTV/CAC ratios in the ecosystem.
             </p>
           </div>
         </motion.div>
      </motion.div>
    </>
  );
}
