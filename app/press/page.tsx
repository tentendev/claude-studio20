"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

export default function PressPage() {
  return (
    <div>
      <Navbar />

      {/* Hero */}
      <section className="section">
        <div className="container---main">
          <motion.div
            className="container---s align-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h1 variants={fadeInUp}>
              Studios20 in the News
            </motion.h1>
            <motion.div className="large-text" variants={fadeInUp}>
              See what leading publications and industry experts are saying about Studios20 and the future of creator marketing.
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Press Highlights */}
      <section className="section bg-gray-c">
        <div className="container---main">
          <motion.div
            className="section-with-title"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div className="container---m" variants={fadeInUp}>
              <div className="heading-three">
                Recent Media Coverage
              </div>
            </motion.div>
            <div className="wide-feature-boxes">
              <motion.div className="wide-feature-box" variants={fadeInUp}>
                <div className="container---xs justify-between">
                  <div>
                    <div className="uppercase-text small muted">FORBES • JANUARY 2024</div>
                    <div className="heading-two">&quot;The Future of Influencer Marketing is Micro-Creators&quot;</div>
                  </div>
                  <div>
                    Forbes profiles Studios20 as a leader in the shift toward authentic micro-influencer partnerships, highlighting how the platform democratizes creator marketing for brands of all sizes.
                  </div>
                </div>
              </motion.div>

              <motion.div className="wide-feature-box" variants={fadeInUp}>
                <div className="container---xs justify-between">
                  <div>
                    <div className="uppercase-text small muted">TECHCRUNCH • DECEMBER 2023</div>
                    <div className="heading-two">&quot;Studios20 Raises Series B to Scale Creator Platform&quot;</div>
                  </div>
                  <div>
                    TechCrunch announces Studios20&apos;s latest funding round, enabling expansion to new markets and the development of advanced AI-powered creator matching technology.
                  </div>
                </div>
              </motion.div>

              <motion.div className="wide-feature-box" variants={fadeInUp}>
                <div className="container---xs justify-between">
                  <div>
                    <div className="uppercase-text small muted">ADWEEK • NOVEMBER 2023</div>
                    <div className="heading-two">&quot;How Micro-Influencers Are Outperforming Celebrity Endorsements&quot;</div>
                  </div>
                  <div>
                    Adweek examines the data showing micro-creators deliver higher engagement and better ROI than traditional celebrity partnerships, featuring Studios20 case studies and insights.
                  </div>
                </div>
              </motion.div>

              <motion.div className="wide-feature-box" variants={fadeInUp}>
                <div className="container---xs justify-between">
                  <div>
                    <div className="uppercase-text small muted">THE VERGE • OCTOBER 2023</div>
                    <div className="heading-two">&quot;Inside the Platform Connecting Brands with 11 Million Creators&quot;</div>
                  </div>
                  <div>
                    The Verge goes behind the scenes at Studios20 to explore how the platform vets creators, manages campaigns, and delivers measurable ROI for brands.
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="section">
        <div className="container---main">
          <motion.div
            className="section-with-title"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div className="container---m" variants={fadeInUp}>
              <div className="heading-three">
                Awards & Recognition
              </div>
            </motion.div>
            <motion.div className="feature-cards-grid" variants={staggerContainer}>
              <motion.div className="feature-card" variants={fadeInUp}>
                <div className="title-icon-circle reduced-gaps">
                  <div className="icon-circle bg-white">
                    <Image src="/webflow/images/icon-layers.svg" alt="" width={24} height={24} />
                  </div>
                  <div className="heading-three">2024 MarTech Breakthrough Award</div>
                </div>
                <div className="feature-card-text">
                  Best Influencer Marketing Platform - Recognized for innovation in creator partnerships and measurable ROI delivery.
                </div>
              </motion.div>

              <motion.div className="feature-card" variants={fadeInUp}>
                <div className="title-icon-circle reduced-gaps">
                  <div className="icon-circle bg-white">
                    <Image src="/webflow/images/icon-robotic-arm.svg" alt="" width={24} height={24} />
                  </div>
                  <div className="heading-three">Fast Company Most Innovative</div>
                </div>
                <div className="feature-card-text">
                  Named to Fast Company&apos;s Most Innovative Companies list for transforming how brands connect with creators.
                </div>
              </motion.div>

              <motion.div className="feature-card" variants={fadeInUp}>
                <div className="title-icon-circle reduced-gaps">
                  <div className="icon-circle bg-white">
                    <Image src="/webflow/images/icon-swap.svg" alt="" width={24} height={24} />
                  </div>
                  <div className="heading-three">Inc. 5000 Fastest Growing</div>
                </div>
                <div className="feature-card-text">
                  Ranked on the Inc. 5000 list as one of America&apos;s fastest-growing private companies in the marketing sector.
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Press Kit */}
      <section className="section bg-gray-c">
        <div className="container---main">
          <motion.div
            className="container---s align-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div className="heading-two" variants={fadeInUp}>
              Media Resources
            </motion.div>
            <motion.div className="large-text" variants={fadeInUp}>
              Download our press kit including logos, product screenshots, founder bios, and company fact sheet.
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Link href="#" className="button bg-primary-1 w-inline-block">
                <div>Download Press Kit</div>
              </Link>
            </motion.div>
            <motion.div className="small-text muted" variants={fadeInUp}>
              For press inquiries, contact: press@studios20.com
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="section">
        <div className="container---main">
          <motion.div
            className="container---xl align-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div className="heading-two" variants={fadeInUp}>
              Studios20 by the Numbers
            </motion.div>
            <motion.div className="small-metric-grid" variants={staggerContainer}>
              <motion.div className="metric-wrapper" variants={fadeInUp}>
                <div className="heading-two">11M<span className="heading-three">+</span></div>
                <div>Creators in our network</div>
              </motion.div>
              <motion.div className="metric-wrapper" variants={fadeInUp}>
                <div className="heading-two">500K<span className="heading-three">+</span></div>
                <div>Successful campaigns</div>
              </motion.div>
              <motion.div className="metric-wrapper" variants={fadeInUp}>
                <div className="heading-two">$3.2B<span className="heading-three">+</span></div>
                <div>Revenue generated for brands</div>
              </motion.div>
              <motion.div className="metric-wrapper" variants={fadeInUp}>
                <div className="heading-two">$240M<span className="heading-three">+</span></div>
                <div>Paid to creators</div>
              </motion.div>
              <motion.div className="metric-wrapper" variants={fadeInUp}>
                <div className="heading-two">12.4<span className="heading-three">x</span></div>
                <div>Average campaign ROI</div>
              </motion.div>
              <motion.div className="metric-wrapper" variants={fadeInUp}>
                <div className="heading-two">98<span className="heading-three">%</span></div>
                <div>Campaign success rate</div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
