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

export default function PricingPage() {
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
              Simple, Transparent Pricing
            </motion.h1>
            <motion.div className="large-text" variants={fadeInUp}>
              No hidden fees. No long-term contracts. Pay only for the creators you activate. Get started with campaigns as low as $5,000/month or scale to enterprise solutions.
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="section bg-gray-c">
        <div className="container---main">
          <motion.div
            className="feature-cards-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {/* Starter Plan */}
            <motion.div className="feature-card" variants={fadeInUp}>
              <div className="title-icon-circle reduced-gaps">
                <div className="uppercase-text small muted">STARTER</div>
                <div className="heading-two">
                  $5K<span className="heading-three">/mo</span>
                </div>
              </div>
              <div className="feature-card-text">
                Perfect for startups and small brands launching their first influencer campaigns.
              </div>
              <div className="customer-quote-wrapper">
                <div className="bold-text">What&apos;s Included:</div>
                <ul className="small-text">
                  <li>50-100 micro-influencers per campaign</li>
                  <li>1 platform (TikTok, Instagram, or YouTube)</li>
                  <li>Basic creator vetting and matching</li>
                  <li>Campaign dashboard and analytics</li>
                  <li>Email support</li>
                  <li>Content usage rights included</li>
                  <li>Monthly performance reports</li>
                </ul>
              </div>
              <Link href="/get-started" className="button w-inline-block">
                <div>Get Started</div>
              </Link>
            </motion.div>

            {/* Growth Plan */}
            <motion.div className="feature-card" variants={fadeInUp}>
              <div className="title-icon-circle reduced-gaps">
                <div className="uppercase-text small muted">GROWTH</div>
                <div className="heading-two">
                  $15K<span className="heading-three">/mo</span>
                </div>
              </div>
              <div className="feature-card-text">
                For scaling brands ready to run multi-platform campaigns and generate serious UGC.
              </div>
              <div className="customer-quote-wrapper">
                <div className="bold-text">Everything in Starter, plus:</div>
                <ul className="small-text">
                  <li>200-300 micro-influencers per campaign</li>
                  <li>Multi-platform campaigns (2-3 platforms)</li>
                  <li>Advanced AI creator matching</li>
                  <li>Dedicated campaign manager</li>
                  <li>Priority support (24hr response)</li>
                  <li>A/B testing and optimization</li>
                  <li>Weekly performance calls</li>
                  <li>Custom creator briefs</li>
                </ul>
              </div>
              <Link href="/get-started" className="button bg-primary-1 w-inline-block">
                <div>Get Started</div>
              </Link>
            </motion.div>

            {/* Enterprise Plan */}
            <motion.div className="feature-card" variants={fadeInUp}>
              <div className="title-icon-circle reduced-gaps">
                <div className="uppercase-text small muted">ENTERPRISE</div>
                <div className="heading-two">
                  Custom
                </div>
              </div>
              <div className="feature-card-text">
                Enterprise solutions for brands running global campaigns at scale with advanced needs.
              </div>
              <div className="customer-quote-wrapper">
                <div className="bold-text">Everything in Growth, plus:</div>
                <ul className="small-text">
                  <li>Unlimited creators and campaigns</li>
                  <li>Global multi-market campaigns</li>
                  <li>Dedicated account team</li>
                  <li>White-label reporting</li>
                  <li>API access and integrations</li>
                  <li>Custom SLAs and priority support</li>
                  <li>Quarterly business reviews</li>
                  <li>Advanced fraud detection</li>
                  <li>Custom contract terms</li>
                </ul>
              </div>
              <Link href="/get-started" className="button w-inline-block">
                <div>Contact Sales</div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* What's Included Standard */}
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
                Included in All Plans
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
                  Every creator is verified for authentic followers, engagement rates, and brand safety. No bots, no fake accounts.
                </div>
              </motion.div>

              <motion.div className="feature-card" variants={fadeInUp}>
                <div className="title-icon-circle reduced-gaps">
                  <div className="icon-circle bg-white">
                    <Image src="/webflow/images/icon-robotic-arm.svg" alt="" width={24} height={24} />
                  </div>
                  <div className="heading-three">Product Fulfillment</div>
                </div>
                <div className="feature-card-text">
                  Automated product shipping directly to creators. We handle logistics, tracking, and follow-ups so you don&apos;t have to.
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
                  Full usage rights to all creator content. Repurpose UGC for ads, social media, email, and your website without extra fees.
                </div>
              </motion.div>

              <motion.div className="feature-card" variants={fadeInUp}>
                <div className="title-icon-circle reduced-gaps">
                  <div className="icon-circle bg-white">
                    <Image src="/webflow/images/icon-layers.svg" alt="" width={24} height={24} />
                  </div>
                  <div className="heading-three">Real-Time Analytics</div>
                </div>
                <div className="feature-card-text">
                  Track impressions, engagement, website traffic, and conversions in real-time. Download reports and content anytime.
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
                  We handle creator outreach, product shipping, content approvals, and payments. You just review and approve.
                </div>
              </motion.div>

              <motion.div className="feature-card" variants={fadeInUp}>
                <div className="title-icon-circle reduced-gaps">
                  <div className="icon-circle bg-white">
                    <Image src="/webflow/images/icon-swap.svg" alt="" width={24} height={24} />
                  </div>
                  <div className="heading-three">No Long-Term Contracts</div>
                </div>
                <div className="feature-card-text">
                  Month-to-month flexibility. Scale up, scale down, or pause anytime. No penalties, no commitments.
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ROI Calculator Teaser */}
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
              Average Campaign ROI: 12.4x
            </motion.div>
            <motion.div className="large-text" variants={fadeInUp}>
              Most brands see positive ROI within the first campaign. Here&apos;s what a typical $10,000 campaign generates:
            </motion.div>
            <motion.div className="small-metric-grid" variants={staggerContainer}>
              <motion.div className="metric-wrapper" variants={fadeInUp}>
                <div className="heading-two">200<span className="heading-three">+</span></div>
                <div>Micro-influencers activated</div>
              </motion.div>
              <motion.div className="metric-wrapper" variants={fadeInUp}>
                <div className="heading-two">4M<span className="heading-three">+</span></div>
                <div>Total impressions generated</div>
              </motion.div>
              <motion.div className="metric-wrapper" variants={fadeInUp}>
                <div className="heading-two">$124K<span className="heading-three">+</span></div>
                <div>Revenue generated (12.4x ROI)</div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container---main">
          <motion.div
            className="container---m"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div className="heading-two align-center" variants={fadeInUp}>
              Pricing FAQs
            </motion.div>
            <motion.div className="wide-feature-boxes" variants={staggerContainer}>
              <motion.div className="wide-feature-box" variants={fadeInUp}>
                <div className="container---xs justify-between">
                  <div className="heading-three">What&apos;s included in the monthly fee?</div>
                  <div>
                    Your monthly fee covers platform access, creator vetting and matching, campaign management, analytics dashboard, product fulfillment logistics, and content usage rights. You only pay separately for product costs and creator payments (if applicable).
                  </div>
                </div>
              </motion.div>

              <motion.div className="wide-feature-box" variants={fadeInUp}>
                <div className="container---xs justify-between">
                  <div className="heading-three">Do I need to pay creators separately?</div>
                  <div>
                    Most campaigns are product-gifting only - creators receive free products in exchange for content. For paid campaigns where creators also receive cash compensation, those costs are separate and depend on your campaign structure and creator tier.
                  </div>
                </div>
              </motion.div>

              <motion.div className="wide-feature-box" variants={fadeInUp}>
                <div className="container---xs justify-between">
                  <div className="heading-three">Can I cancel anytime?</div>
                  <div>
                    Yes! All plans are month-to-month with no long-term contracts. You can cancel anytime with 30 days notice. Enterprise customers have custom contract terms.
                  </div>
                </div>
              </motion.div>

              <motion.div className="wide-feature-box" variants={fadeInUp}>
                <div className="container---xs justify-between">
                  <div className="heading-three">How many campaigns can I run per month?</div>
                  <div>
                    Starter and Growth plans include one active campaign at a time. Enterprise customers can run unlimited concurrent campaigns across multiple products and markets.
                  </div>
                </div>
              </motion.div>

              <motion.div className="wide-feature-box" variants={fadeInUp}>
                <div className="container---xs justify-between">
                  <div className="heading-three">What if I need more creators?</div>
                  <div>
                    You can easily upgrade your plan or add more creators to your current campaign. We&apos;ll work with you to find the right package for your goals and budget.
                  </div>
                </div>
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
              Ready to Get Started?
            </motion.div>
            <motion.div className="large-text" variants={fadeInUp}>
              Book a free strategy call to discuss your goals and find the perfect plan for your brand.
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Link href="/get-started" className="button bg-primary-1 w-inline-block">
                <div>Schedule Strategy Call</div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
