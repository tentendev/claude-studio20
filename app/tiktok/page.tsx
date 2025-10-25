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

export default function TikTokPage() {
  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <section className="section">
        <div className="container---main">
          <div className="pricing-header">
            <motion.div
              className="container---s hero-contents"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.div className="container---xs inside-hero-contents" variants={fadeInUp}>
                <h1>Dominate TikTok with Authentic Creator Content</h1>
              </motion.div>
              <motion.div className="large-text" variants={fadeInUp}>
                Partner with micro-influencers who know how to make content go viral on TikTok. Drive authentic engagement, boost brand awareness, and turn views into customers.
              </motion.div>
              <motion.div className="form-block w-form" id="get-started" variants={fadeInUp}>
                <form className="form reduced-gaps">
                  <input
                    className="form-input large w-input"
                    placeholder="Enter your work email"
                    type="email"
                    required
                  />
                  <input
                    type="submit"
                    className="button bg-primary-1 w-button"
                    value="Start TikTok Campaign"
                  />
                  <div className="small-text">
                    Join 500+ brands crushing it on TikTok. Free campaign strategy included.
                  </div>
                </form>
              </motion.div>
            </motion.div>

            <motion.div
              className="image-with-widget"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
            >
              <Image
                src="/webflow/images/photo-square-02_compressed.webp"
                sizes="(max-width: 479px) 92vw, (max-width: 767px) 94vw, (max-width: 991px) 95vw, 48vw"
                width={1350}
                height={1350}
                alt="TikTok Creator Campaign"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* TikTok Stats Section */}
      <section className="section bg-gray-c">
        <div className="container---main">
          <motion.div
            className="container---xl align-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div className="heading-two" variants={fadeInUp}>
              Why TikTok? Because Your Audience Is Already There
            </motion.div>
            <motion.div className="small-metric-grid" variants={staggerContainer}>
              <motion.div className="metric-wrapper" variants={fadeInUp}>
                <div className="heading-two">1.7B<span className="heading-three">+</span></div>
                <div>Monthly active users scrolling for the next big thing</div>
              </motion.div>
              <motion.div className="metric-wrapper" variants={fadeInUp}>
                <div className="heading-two">52<span className="heading-three">min</span></div>
                <div>Average daily time spent per user on TikTok</div>
              </motion.div>
              <motion.div className="metric-wrapper" variants={fadeInUp}>
                <div className="heading-two">4.2<span className="heading-three">x</span></div>
                <div>Higher engagement rates vs. other platforms</div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
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
                Launch Your TikTok Campaign in 4 Simple Steps
              </div>
            </motion.div>
            <motion.div className="feature-cards-grid" variants={staggerContainer}>
              <motion.div className="feature-card" variants={fadeInUp}>
                <div className="title-icon-circle reduced-gaps">
                  <div className="icon-circle bg-white">
                    <Image src="/webflow/images/icon-layers.svg" alt="" width={24} height={24} />
                  </div>
                  <div className="heading-three">1. Define Your Goals</div>
                </div>
                <div className="feature-card-text">
                  Tell us what you want to achieve: brand awareness, product launch, or driving sales. We&apos;ll match you with TikTok creators whose audience aligns with your target demographic.
                </div>
              </motion.div>

              <motion.div className="feature-card" variants={fadeInUp}>
                <div className="title-icon-circle reduced-gaps">
                  <div className="icon-circle bg-white">
                    <Image src="/webflow/images/icon-robotic-arm.svg" alt="" width={24} height={24} />
                  </div>
                  <div className="heading-three">2. Creator Matching</div>
                </div>
                <div className="feature-card-text">
                  Our AI analyzes 5M+ TikTok creators to find perfect matches based on niche, engagement rate, audience demographics, and content style. No fake followers, just real influence.
                </div>
              </motion.div>

              <motion.div className="feature-card" variants={fadeInUp}>
                <div className="title-icon-circle reduced-gaps">
                  <div className="icon-circle bg-white">
                    <Image src="/webflow/images/icon-swap.svg" alt="" width={24} height={24} />
                  </div>
                  <div className="heading-three">3. Content Creation</div>
                </div>
                <div className="feature-card-text">
                  Creators produce authentic TikToks featuring your product. We handle briefing, approvals, and ensure content follows TikTok&apos;s algorithm best practices for maximum reach.
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Success Story */}
      <section className="section bg-gray-b even-padding">
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
                src="/webflow/images/photo-square-09_compressed.webp"
                sizes="(max-width: 479px) 92vw, (max-width: 767px) 94vw, (max-width: 991px) 95vw, 48vw"
                alt="TikTok Success Story"
                width={1350}
                height={1350}
              />
            </motion.div>
            <motion.div className="container---s customer-quote" variants={fadeInUp}>
              <div className="heading-three">TikTok Success Story</div>
              <div className="customer-quote-wrapper">
                <div className="large-text">
                  &quot;We partnered with 150 TikTok micro-creators and generated 12M views in 30 days. The authentic content drove a 280% spike in website traffic and our best sales month ever.&quot;
                </div>
                <div>
                  <div className="bold-text">Marcus Rivera</div>
                  <div className="muted">CMO, TrendFit Apparel</div>
                </div>
              </div>
              <Link href="/case-studies" className="button arrow-right w-inline-block">
                <div>View All TikTok Case Studies</div>
                <div className="arrow-link-wrapper right">
                  <Image
                    src="/webflow/images/icon-arrow-right.svg"
                    alt="Right arrow"
                    width={20}
                    height={20}
                    className="arrow-link-icon initial"
                  />
                  <Image
                    src="/webflow/images/icon-arrow-right.svg"
                    alt="Right arrow"
                    width={20}
                    height={20}
                    className="arrow-link-icon reveal"
                  />
                </div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container---main">
          <motion.div
            className="container---s align-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div className="heading-two" variants={fadeInUp}>
              Ready to Go Viral on TikTok?
            </motion.div>
            <motion.div className="large-text" variants={fadeInUp}>
              Launch your first TikTok creator campaign in under 48 hours. Free strategy session included.
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Link href="/get-started" className="button bg-primary-1 w-inline-block">
                <div>Start Your TikTok Campaign</div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
