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

export default function ForCreatorsPage() {
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
              Turn Your Influence into Income
            </motion.h1>
            <motion.div className="large-text" variants={fadeInUp}>
              Join 11M+ creators getting paid to create content for brands they actually love. Free products, cash payments, and creative freedom - all in one platform.
            </motion.div>
            <motion.div className="form-block w-form" variants={fadeInUp}>
              <form className="form reduced-gaps">
                <input
                  className="form-input large w-input"
                  placeholder="Enter your email"
                  type="email"
                  required
                />
                <input
                  type="submit"
                  className="button bg-primary-1 w-button"
                  value="Join as Creator"
                />
                <div className="small-text">
                  1,000+ followers minimum. TikTok, Instagram, or YouTube accepted.
                </div>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
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
                Why 11M+ Creators Choose Studios20
              </div>
            </motion.div>
            <motion.div className="feature-cards-grid" variants={staggerContainer}>
              <motion.div className="feature-card" variants={fadeInUp}>
                <div className="title-icon-circle reduced-gaps">
                  <div className="icon-circle bg-white">
                    <Image src="/webflow/images/icon-layers.svg" alt="" width={24} height={24} />
                  </div>
                  <div className="heading-three">Get Paid to Post</div>
                </div>
                <div className="feature-card-text">
                  Earn money creating content you&apos;d make anyway. Most creators earn $500-$5,000 per campaign depending on follower count and engagement rate. Plus free products you actually want.
                </div>
              </motion.div>

              <motion.div className="feature-card" variants={fadeInUp}>
                <div className="title-icon-circle reduced-gaps">
                  <div className="icon-circle bg-white">
                    <Image src="/webflow/images/icon-robotic-arm.svg" alt="" width={24} height={24} />
                  </div>
                  <div className="heading-three">Choose Your Brands</div>
                </div>
                <div className="feature-card-text">
                  Only work with brands that match your vibe. No obligations - accept campaigns you like, skip the rest. Your content stays authentic because you only promote products you genuinely love.
                </div>
              </motion.div>

              <motion.div className="feature-card" variants={fadeInUp}>
                <div className="title-icon-circle reduced-gaps">
                  <div className="icon-circle bg-white">
                    <Image src="/webflow/images/icon-swap.svg" alt="" width={24} height={24} />
                  </div>
                  <div className="heading-three">Keep Creative Control</div>
                </div>
                <div className="feature-card-text">
                  No scripts. No forced talking points. Create content your way, in your style. Brands trust you to know what resonates with your audience. You keep full creative freedom.
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* How It Works for Creators */}
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
                  <div className="uppercase-text small muted">Step 1</div>
                  <div className="heading-two">Create Your Profile</div>
                </div>
                <div>
                  Connect your TikTok, Instagram, or YouTube account. We analyze your audience demographics, engagement rate, and content style. Takes 2 minutes to set up your creator profile.
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
                  <div className="uppercase-text small muted">Step 2</div>
                  <div className="heading-two">Browse Campaign Opportunities</div>
                </div>
                <div>
                  See brand campaigns tailored to your niche. Each listing shows the product, payment amount, content requirements, and deadline. Apply to campaigns that match your audience and interests.
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
                  <div className="uppercase-text small muted">Step 3</div>
                  <div className="heading-two">Get Approved & Receive Product</div>
                </div>
                <div>
                  Brands review applications and select creators. Once approved, the product ships directly to your door. Most shipments arrive within 5-7 business days with tracking info sent to your dashboard.
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
                  <div className="uppercase-text small muted">Step 4</div>
                  <div className="heading-two">Create & Post Your Content</div>
                </div>
                <div>
                  Make your video, Reel, or YouTube content. Post it to your channel with the brand&apos;s hashtag. Submit the link in your dashboard. That&apos;s it - you keep your content live on your channel forever.
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
                  <div className="uppercase-text small muted">Step 5</div>
                  <div className="heading-two">Get Paid</div>
                </div>
                <div>
                  Payment is released after content goes live and hits minimum view requirements. Most creators receive payment within 30 days via PayPal, Venmo, or direct deposit. Track all earnings in your dashboard.
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Creator Stats */}
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
              Real Creators, Real Earnings
            </motion.div>
            <motion.div className="small-metric-grid" variants={staggerContainer}>
              <motion.div className="metric-wrapper" variants={fadeInUp}>
                <div className="heading-two">$2.4M<span className="heading-three">+</span></div>
                <div>Total paid to creators last month across all campaigns</div>
              </motion.div>
              <motion.div className="metric-wrapper" variants={fadeInUp}>
                <div className="heading-two">$840</div>
                <div>Average earnings per creator per campaign</div>
              </motion.div>
              <motion.div className="metric-wrapper" variants={fadeInUp}>
                <div className="heading-two">5-7<span className="heading-three">days</span></div>
                <div>Average time from approval to payment received</div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Requirements */}
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
              Minimum Requirements
            </motion.div>
            <motion.div className="large-text" variants={fadeInUp}>
              ✓ 1,000+ followers on TikTok, Instagram, or YouTube<br />
              ✓ Authentic, engaged audience (no bots or fake followers)<br />
              ✓ Content posted at least weekly<br />
              ✓ Located in the US, Canada, UK, or Australia<br />
              ✓ 18+ years old or have parental consent
            </motion.div>
            <motion.div className="small-text muted" variants={fadeInUp}>
              We verify all accounts before approval. Quality matters more than quantity.
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
              Ready to Start Earning?
            </motion.div>
            <motion.div className="large-text" variants={fadeInUp}>
              Join Studios20&apos;s creator network and start getting paid to post content you love.
            </motion.div>
            <motion.div className="form-block w-form" variants={fadeInUp}>
              <form className="form reduced-gaps">
                <input
                  className="form-input large w-input"
                  placeholder="Enter your email"
                  type="email"
                  required
                />
                <input
                  type="submit"
                  className="button bg-primary-1 w-button"
                  value="Apply as Creator"
                />
              </form>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
