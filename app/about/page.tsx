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

export default function AboutPage() {
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
              We Believe in the Power of Authentic Voices
            </motion.h1>
            <motion.div className="large-text" variants={fadeInUp}>
              Studios20 connects brands with micro-influencers who create authentic content that actually converts. We&apos;re building the future of creator marketing - one genuine recommendation at a time.
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="section bg-gray-c">
        <div className="container---main">
          <motion.div
            className="grid-halves"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <Image
                src="/webflow/images/photo-landscape-06_compressed.webp"
                sizes="(max-width: 479px) 92vw, (max-width: 767px) 94vw, (max-width: 991px) 95vw, 48vw"
                alt="Our Mission"
                width={2000}
                height={1333}
              />
            </motion.div>
            <motion.div className="container---s customer-quote" variants={fadeInUp}>
              <div className="heading-two">Our Mission</div>
              <div className="customer-quote-wrapper">
                <div className="large-text">
                  To democratize influencer marketing by making it accessible, affordable, and effective for brands of all sizes while empowering everyday creators to monetize their influence.
                </div>
                <div>
                  We started Studios20 because we saw traditional influencer marketing was broken. Brands spent fortunes on celebrity endorsements that felt fake. Small creators couldn&apos;t get brand deals. There had to be a better way.
                </div>
                <div>
                  Today, we&apos;re proud to power 500K+ campaigns, connecting 11M+ creators with brands that align with their values. We&apos;ve paid out over $240M to creators and helped brands generate $3.2B in tracked revenue.
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section">
        <div className="container---main">
          <div className="wide-feature-boxes">
            <motion.div
              className="wide-feature-box"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
            >
              <div className="container---xs justify-between">
                <div>
                  <div className="uppercase-text small muted">2018</div>
                  <div className="heading-two">The Beginning</div>
                </div>
                <div>
                  Founded by former marketing executives who were frustrated with traditional influencer agencies. We believed micro-creators with 1K-100K followers had more authentic influence than celebrities, but no platform connected them with brands at scale.
                </div>
              </div>
            </motion.div>

            <motion.div
              className="wide-feature-box"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
            >
              <div className="container---xs justify-between">
                <div>
                  <div className="uppercase-text small muted">2019-2020</div>
                  <div className="heading-two">Proof of Concept</div>
                </div>
                <div>
                  Launched beta platform with 50 brands and 10,000 creators. Proved micro-influencers delivered 3-5x higher engagement rates and better ROI than macro-influencers. Raised Series A funding to scale technology and expand creator network.
                </div>
              </div>
            </motion.div>

            <motion.div
              className="wide-feature-box"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
            >
              <div className="container---xs justify-between">
                <div>
                  <div className="uppercase-text small muted">2021-2022</div>
                  <div className="heading-two">Explosive Growth</div>
                </div>
                <div>
                  Expanded to 1M+ creators and 1,000+ brand partners. Built AI-powered creator matching, automated product fulfillment, and real-time analytics dashboard. Became the fastest-growing creator marketing platform in North America.
                </div>
              </div>
            </motion.div>

            <motion.div
              className="wide-feature-box"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
            >
              <div className="container---xs justify-between">
                <div>
                  <div className="uppercase-text small muted">2023-Present</div>
                  <div className="heading-two">Industry Leader</div>
                </div>
                <div>
                  Now powering 11M+ creators across TikTok, Instagram, and YouTube. Processed 500K+ successful campaigns. Featured in Forbes, TechCrunch, and Adweek as the future of creator marketing. Continuing to innovate and scale.
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
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
                Our Core Values
              </div>
            </motion.div>
            <motion.div className="feature-cards-grid" variants={staggerContainer}>
              <motion.div className="feature-card" variants={fadeInUp}>
                <div className="title-icon-circle reduced-gaps">
                  <div className="icon-circle bg-white">
                    <Image src="/webflow/images/icon-layers.svg" alt="" width={24} height={24} />
                  </div>
                  <div className="heading-three">Authenticity First</div>
                </div>
                <div className="feature-card-text">
                  We believe authentic recommendations from real people beat paid celebrity endorsements every time. We never force creators to say things they don&apos;t believe.
                </div>
              </motion.div>

              <motion.div className="feature-card" variants={fadeInUp}>
                <div className="title-icon-circle reduced-gaps">
                  <div className="icon-circle bg-white">
                    <Image src="/webflow/images/icon-robotic-arm.svg" alt="" width={24} height={24} />
                  </div>
                  <div className="heading-three">Creator Empowerment</div>
                </div>
                <div className="feature-card-text">
                  Creators are our partners, not just inventory. We provide fair pay, creative freedom, and the tools they need to build sustainable income from their content.
                </div>
              </motion.div>

              <motion.div className="feature-card" variants={fadeInUp}>
                <div className="title-icon-circle reduced-gaps">
                  <div className="icon-circle bg-white">
                    <Image src="/webflow/images/icon-swap.svg" alt="" width={24} height={24} />
                  </div>
                  <div className="heading-three">Results-Driven</div>
                </div>
                <div className="feature-card-text">
                  We&apos;re obsessed with delivering ROI for brands. Every feature we build, every creator we vet, every campaign we optimize - it&apos;s all focused on driving real business results.
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
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
                <div>Active creators in our network</div>
              </motion.div>
              <motion.div className="metric-wrapper" variants={fadeInUp}>
                <div className="heading-two">500K<span className="heading-three">+</span></div>
                <div>Successful campaigns launched</div>
              </motion.div>
              <motion.div className="metric-wrapper" variants={fadeInUp}>
                <div className="heading-two">$240M<span className="heading-three">+</span></div>
                <div>Paid out to creators</div>
              </motion.div>
              <motion.div className="metric-wrapper" variants={fadeInUp}>
                <div className="heading-two">$3.2B<span className="heading-three">+</span></div>
                <div>Revenue generated for brands</div>
              </motion.div>
              <motion.div className="metric-wrapper" variants={fadeInUp}>
                <div className="heading-two">12.4<span className="heading-three">x</span></div>
                <div>Average ROI for brand campaigns</div>
              </motion.div>
              <motion.div className="metric-wrapper" variants={fadeInUp}>
                <div className="heading-two">98<span className="heading-three">%</span></div>
                <div>Campaign success rate</div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-gray-b">
        <div className="container---main">
          <motion.div
            className="container---s align-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div className="heading-two" variants={fadeInUp}>
              Join the Studios20 Community
            </motion.div>
            <motion.div className="large-text" variants={fadeInUp}>
              Whether you&apos;re a brand looking to scale or a creator ready to monetize, we&apos;re here to help you succeed.
            </motion.div>
            <motion.div variants={fadeInUp} style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/get-started" className="button bg-primary-1 w-inline-block">
                <div>For Brands</div>
              </Link>
              <Link href="/for-creators" className="button w-inline-block">
                <div>For Creators</div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
