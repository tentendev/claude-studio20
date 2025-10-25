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

export default function ForBrandsPage() {
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
              How Studios20 Works for Brands
            </motion.h1>
            <motion.div className="large-text" variants={fadeInUp}>
              From campaign strategy to creator activation, we handle everything so you can focus on growing your business. Here&apos;s how we turn micro-influencers into your most powerful marketing channel.
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Step-by-Step Process */}
      <section className="section bg-gray-c">
        <div className="container---main">
          <div className="wide-feature-boxes">
            {/* Step 1 */}
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
                  <div className="heading-two">Tell Us Your Goals</div>
                </div>
                <div>
                  Share your campaign objectives, target audience, and budget. Whether you&apos;re launching a product, driving brand awareness, or generating UGC, we&apos;ll create a custom strategy that delivers measurable results.
                </div>
              </div>
              <motion.div
                className="widget-with-image restricted-width"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Image
                  src="/webflow/images/photo-square-08_compressed.webp"
                  alt="Campaign Strategy"
                  width={1350}
                  height={1350}
                  className="widget-bg"
                />
              </motion.div>
            </motion.div>

            {/* Step 2 */}
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
                  <div className="heading-two">We Match You with Perfect Creators</div>
                </div>
                <div>
                  Our AI analyzes 11M+ creators across TikTok, Instagram, and YouTube. We filter for engagement rate, audience demographics, content quality, and brand alignment. You get a curated list of creators who are actually a good fit.
                </div>
              </div>
              <motion.div
                className="widget-with-image restricted-width"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Image
                  src="/webflow/images/photo-square-09_compressed.webp"
                  alt="Creator Matching"
                  width={1350}
                  height={1350}
                  className="widget-bg"
                />
              </motion.div>
            </motion.div>

            {/* Step 3 */}
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
                  <div className="heading-two">Product Seeding & Fulfillment</div>
                </div>
                <div>
                  Send your products directly to creators through our automated fulfillment system. We handle shipping logistics, tracking, and follow-ups so you don&apos;t have to manually manage hundreds of individual shipments.
                </div>
              </div>
              <motion.div
                className="widget-with-image restricted-width"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Image
                  src="/webflow/images/photo-square-07_compressed.webp"
                  alt="Product Fulfillment"
                  width={1350}
                  height={1350}
                  className="widget-bg"
                />
              </motion.div>
            </motion.div>

            {/* Step 4 */}
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
                  <div className="heading-two">Creators Make Authentic Content</div>
                </div>
                <div>
                  Creators produce genuine reviews, unboxings, tutorials, and lifestyle content featuring your product. No scripted ads - just real creators sharing their honest opinions with their engaged audiences.
                </div>
              </div>
              <motion.div
                className="widget-with-image restricted-width"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Image
                  src="/webflow/images/photo-square-05_compressed.webp"
                  alt="Content Creation"
                  width={1350}
                  height={1350}
                  className="widget-bg"
                />
              </motion.div>
            </motion.div>

            {/* Step 5 */}
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
                  <div className="heading-two">Track Performance & ROI</div>
                </div>
                <div>
                  Watch your campaign performance in real-time. Our analytics dashboard shows you impressions, engagement, website traffic, conversions, and ROI. Download all creator content for repurposing across your marketing channels.
                </div>
              </div>
              <motion.div
                className="widget-with-image restricted-width"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Image
                  src="/webflow/images/photo-square-10_compressed.webp"
                  alt="Analytics Dashboard"
                  width={1350}
                  height={1350}
                  className="widget-bg"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What You Get */}
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
                Everything You Need to Run Successful Influencer Campaigns
              </div>
            </motion.div>
            <motion.div className="feature-cards-grid" variants={staggerContainer}>
              <motion.div className="feature-card" variants={fadeInUp}>
                <div className="title-icon-circle reduced-gaps">
                  <div className="icon-circle bg-white">
                    <Image src="/webflow/images/icon-layers.svg" alt="" width={24} height={24} />
                  </div>
                  <div className="heading-three">Creator Vetting</div>
                </div>
                <div className="feature-card-text">
                  Every creator is verified for authentic followers, engagement rates, and brand safety. No bots, no fake accounts, just real creators with real influence.
                </div>
              </motion.div>

              <motion.div className="feature-card" variants={fadeInUp}>
                <div className="title-icon-circle reduced-gaps">
                  <div className="icon-circle bg-white">
                    <Image src="/webflow/images/icon-robotic-arm.svg" alt="" width={24} height={24} />
                  </div>
                  <div className="heading-three">Campaign Management</div>
                </div>
                <div className="feature-card-text">
                  Dedicated campaign manager handles briefing, approvals, and creator communication. You get weekly reports and always know exactly how your campaign is performing.
                </div>
              </motion.div>

              <motion.div className="feature-card" variants={fadeInUp}>
                <div className="title-icon-circle reduced-gaps">
                  <div className="icon-circle bg-white">
                    <Image src="/webflow/images/icon-swap.svg" alt="" width={24} height={24} />
                  </div>
                  <div className="heading-three">Content Rights</div>
                </div>
                <div className="feature-card-text">
                  Get full usage rights to all creator content. Repurpose UGC for ads, social media, email campaigns, and your website. Turn one campaign into months of authentic content.
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Preview */}
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
              Flexible Pricing That Scales with Your Growth
            </motion.div>
            <motion.div className="large-text" variants={fadeInUp}>
              No hidden fees. No long-term contracts. Pay only for the creators you activate. Plans start at $5,000/month for small campaigns or scale up to enterprise solutions for global brands.
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Link href="/pricing" className="button bg-primary-1 w-inline-block">
                <div>View Pricing</div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
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
              Ready to Launch Your First Campaign?
            </motion.div>
            <motion.div className="large-text" variants={fadeInUp}>
              Book a free strategy call with our team. We&apos;ll show you exactly how Studios20 can help you scale through creator partnerships.
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Link href="/get-started" className="button bg-primary-1 w-inline-block">
                <div>Get Started Free</div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
