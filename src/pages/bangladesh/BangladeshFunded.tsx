import SectionHeader from "@/components/SectionHeader";
import { motion } from "framer-motion";

const staggerContainer = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function BangladeshFunded() {
  return (
    <>
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
         <motion.div variants={fadeUp}>
           <SectionHeader id="funded-edtech" number="XI" title="Bangladesh EdTech & Skilling: Funded Companies Directory (2015-2025)" subtitle="A comprehensive directory of venture-backed EdTech operators." />
           
           <h3 className="font-heading font-bold text-lg mb-3 mt-4">11.1 Key EdTech & Skilling Enterprise KPIs (2025)</h3>
           <div className="overflow-x-auto border border-border rounded-lg mb-6">
             <table className="w-full text-sm">
               <thead className="bg-muted/50">
                 <tr className="border-b border-border">
                   <th className="px-4 py-3 text-left font-semibold text-foreground">METRIC</th>
                   <th className="px-4 py-3 text-left font-semibold text-foreground">VALUE (BD Avg)</th>
                   <th className="px-4 py-3 text-left font-semibold text-foreground">SEA BENCHMARK</th>
                   <th className="px-4 py-3 text-left font-semibold text-foreground">COMMENTARY</th>
                 </tr>
               </thead>
               <tbody>
                  {[
                    { m: "Average B2C Ticket Size (Ann.)", v: "BDT 5,000 - 15,000", s: "USD 200 - 450", c: "BD is highly price-sensitive. Volume > Unit Price." },
                    { m: "Customer Acquisition Cost (CAC)", v: "BDT 800 - 1,200", s: "USD 45 - 80", c: "CAC is rising rapidly via Meta/Google ads. Hybrid needed." },
                    { m: "B2B Enterprise LTV (Ann.)", v: "BDT 4L - 12L+", s: "USD 12K - 35K", c: "B2B contracts offer massive stabilization. Severely under-tapped." },
                    { m: "Blended Gross Margin", v: "65% - 75%", s: "70% - 82%", c: "Dependent heavily on tech stack vs live-instructor ratio." },
                    { m: "Total Active EdTech VC", v: "USD ~17.2M+", s: "USD 840M+ (Indo)", c: "BD represents < 2% of SEA EdTech funding. Massive white space." }
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-border hover:bg-muted/20">
                      <td className="px-4 py-3 font-semibold text-foreground">{row.m}</td>
                      <td className="px-4 py-3 text-foreground font-bold">{row.v}</td>
                      <td className="px-4 py-3 text-muted-foreground">{row.s}</td>
                      <td className="px-4 py-3 text-primary">{row.c}</td>
                    </tr>
                  ))}
               </tbody>
             </table>
           </div>

           <h3 className="font-heading font-bold text-lg mb-3">11.2 Funded Companies Directory</h3>
           <div className="overflow-x-auto rounded-lg border border-border mb-4">
             <table className="w-full text-sm">
               <thead>
                 <tr className="bg-muted/50 border-b border-border">
                   <th className="p-4 text-left font-semibold">Company Name</th>
                   <th className="p-4 text-left font-semibold">Total Funding & Year</th>
                   <th className="p-4 text-left font-semibold">Website</th>
                   <th className="p-4 text-left font-semibold">Key Investors</th>
                 </tr>
               </thead>
               <tbody>
                  {[
                    { c: "10 Minute School", f: "USD 7.5M total (Pre-Series A 2023: USD 5.5M)", w: "www.10minuteschool.com", i: "Surge / Peak XV Partners, Conjunction Cap, Startup BD" },
                    { c: "Shikho", f: "USD 6.5M total (Seed Rd 3 2022: USD 5.3M)", w: "www.shikho.com.bd", i: "Learn Capital, Anchorless BD, Wavemaker Partners" },
                    { c: "Interactive Cares", f: "USD 100K Grant (2024) + undisclosed", w: "www.interactivecares.com", i: "Open Campus Accelerator (OC-X)" },
                    { c: "Ostad", f: "~USD 127K Seed (2021-22)", w: "www.ostad.me", i: "Pegasus Tech Ventures; Startup Bangladesh" },
                    { c: "EduHive", f: "Undisclosed Seed (2021) + Gov grant 2024", w: "www.eduhive.com.bd", i: "Startup Bangladesh Limited" },
                    { c: "Upskill", f: "USD 100K+ Seed (2021)", w: "www.upskill.com.bd", i: "Undisclosed angels" },
                    { c: "English Champ", f: "BDT tranche (2024-25)", w: "www.englishchamp.com.bd", i: "Startup Bangladesh Limited" },
                    { c: "Area71 Venture", f: "BDT tranche (2024-25)", w: "Pre-launch", i: "Startup Bangladesh Limited" },
                    { c: "Bohubrihi", f: "Acquired Nov 2021", w: "shikho.com.bd", i: "Fully integrated into Shikho" },
                    { c: "ROOTs Edu", f: "Undisclosed seed (2020-21)", w: "www.rootsedu.com.bd", i: "Startup Bangladesh Limited" },
                    { c: "Thrive EdTech", f: "Undisclosed seed (2019-20)", w: "www.thrive.com.bd", i: "NSU Startups Next Incubator" },
                    { c: "Sohopathi", f: "Undisclosed early-stage (2020-22)", w: "www.sohopathi.com", i: "Bangladesh Angels Network" },
                    { c: "Programming Hero", f: "Revenue-funded (2020+)", w: "web.programming-hero.com", i: "Bootstrapped (100k+ learners)" },
                    { c: "Keeron", f: "Undisclosed pre-seed (2023)", w: "www.keeron.io", i: "Early-stage angel investors" },
                    { c: "Live MCQ", f: "Undisclosed seed (2021-22)", w: "www.livemcq.com", i: "Bootstrapped" },
                    { c: "Muktopaath", f: "Govt-funded (2016+)", w: "www.muktopaath.gov.bd", i: "ICT Division, Government of Bangladesh" },
                  ].map((row, idx) => (
                    <tr key={idx} className="border-b border-border hover:bg-muted/30 transition-colors">
                      <td className="p-4 font-semibold text-foreground whitespace-nowrap">{row.c}</td>
                      <td className="p-4 text-muted-foreground whitespace-nowrap">{row.f}</td>
                      <td className="p-4 whitespace-nowrap">
                        {row.w !== "Pre-launch" ? (
                           <a href={`https://${row.w}`} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">
                             {row.w}
                           </a>
                        ) : (
                           <span className="text-muted-foreground italic">Pre-launch</span>
                        )}
                      </td>
                      <td className="p-4 text-muted-foreground">{row.i}</td>
                    </tr>
                  ))}
               </tbody>
             </table>
           </div>
           
           <p className="text-xs text-muted-foreground italic p-4 bg-muted/20 border border-border rounded-lg mt-4">
             <strong className="text-foreground">Data Notes:</strong> Funding amounts reflect publicly disclosed venture capital, angel investment, and institutional grants tracked via Tracxn, Crunchbase, LightCastle Partners, and Startup Bangladesh announcements as of Q1 2026. Un-disclosed rounds and debt facilities are excluded unless functionally serving as equity-equivalents.
           </p>

         </motion.div>
      </motion.div>
    </>
  );
}
