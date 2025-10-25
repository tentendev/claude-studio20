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

export default function GetStartedPage() {
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
              Ready to Scale Through Creator Partnerships?
            </motion.h1>
            <motion.div className="large-text" variants={fadeInUp}>
              Join 500+ brands using Studios20 to generate authentic content, drive sales, and build lasting customer relationships through micro-influencer marketing.
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Main Form Section */}
      <section className="section bg-gray-c">
        <div className="container---main">
          <div className="pricing-header">
            <motion.div
              className="container---s"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.div className="heading-two" variants={fadeInUp}>
                Tell Us About Your Brand
              </motion.div>
              <motion.div className="large-text" variants={fadeInUp}>
                Fill out the form below and our team will reach out within 24 hours to discuss your campaign goals and create a custom strategy.
              </motion.div>
              <motion.div className="form-block w-form" variants={fadeInUp}>
                <form className="form">
                  <div className="form-grid">
                    <input
                      className="form-input w-input"
                      placeholder="Your Name *"
                      type="text"
                      required
                    />
                    <input
                      className="form-input w-input"
                      placeholder="Work Email *"
                      type="email"
                      required
                    />
                    <input
                      className="form-input w-input"
                      placeholder="Company Name *"
                      type="text"
                      required
                    />
                    <input
                      className="form-input w-input"
                      placeholder="Website URL"
                      type="url"
                    />
                    <input
                      className="form-input w-input"
                      placeholder="Phone Number"
                      type="tel"
                    />
                    <select className="form-input w-input" required>
                      <option value="">Campaign Budget *</option>
                      <option value="5k-10k">$5,000 - $10,000</option>
                      <option value="10k-25k">$10,000 - $25,000</option>
                      <option value="25k-50k">$25,000 - $50,000</option>
                      <option value="50k+">$50,000+</option>
                    </select>
                  </div>
                  <textarea
                    className="form-input textarea w-input"
                    placeholder="Tell us about your campaign goals, target audience, and what you're looking to achieve *"
                    rows={5}
                    required
                  />
                  <input
                    type="submit"
                    className="button bg-primary-1 w-button"
                    value="Schedule Free Strategy Call"
                  />
                  <div className="small-text muted">
                    By submitting this form, you agree to receive marketing communications from Studios20. We respect your privacy and never share your information.
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
                src="/webflow/images/photo-square-08_compressed.webp"
                sizes="(max-width: 479px) 92vw, (max-width: 767px) 94vw, (max-width: 991px) 95vw, 48vw"
                width={1350}
                height={1350}
                alt="Get Started with Studios20"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* What Happens Next */}
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
                What Happens After You Submit?
              </div>
            </motion.div>
            <motion.div className="feature-cards-grid" variants={staggerContainer}>
              <motion.div className="feature-card" variants={fadeInUp}>
                <div className="title-icon-circle reduced-gaps">
                  <div className="icon-circle bg-white">
                    <Image src="/webflow/images/icon-layers.svg" alt="" width={24} height={24} />
                  </div>
                  <div className="heading-three">1. Strategy Call</div>
                </div>
                <div className="feature-card-text">
                  Within 24 hours, a campaign strategist will reach out to schedule a free 30-minute strategy call. We&apos;ll discuss your goals, audience, and budget to create a custom campaign plan.
                </div>
              </motion.div>

              <motion.div className="feature-card" variants={fadeInUp}>
                <div className="title-icon-circle reduced-gaps">
                  <div className="icon-circle bg-white">
                    <Image src="/webflow/images/icon-robotic-arm.svg" alt="" width={24} height={24} />
                  </div>
                  <div className="heading-three">2. Custom Proposal</div>
                </div>
                <div className="feature-card-text">
                  We&apos;ll analyze your brand and create a detailed proposal including creator recommendations, estimated reach, timeline, and ROI projections based on similar campaigns.
                </div>
              </motion.div>

              <motion.div className="feature-card" variants={fadeInUp}>
                <div className="title-icon-circle reduced-gaps">
                  <div className="icon-circle bg-white">
                    <Image src="/webflow/images/icon-swap.svg" alt="" width={24} height={24} />
                  </div>
                  <div className="heading-three">3. Launch Campaign</div>
                </div>
                <div className="feature-card-text">
                  Once approved, we activate your campaign within 7 days. Your dedicated campaign manager handles everything - from creator outreach to content approvals to performance tracking.
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Social Proof */}
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
              Trusted by Leading Brands
            </motion.div>
            <motion.div className="large-text" variants={fadeInUp}>
              Over 500 brands have launched successful campaigns with Studios20, from early-stage startups to Fortune 500 companies.
            </motion.div>
            <motion.div className="small-metric-grid" variants={staggerContainer}>
              <motion.div className="metric-wrapper" variants={fadeInUp}>
                <div className="heading-two">12.4<span className="heading-three">x</span></div>
                <div>Average ROI for brand campaigns</div>
              </motion.div>
              <motion.div className="metric-wrapper" variants={fadeInUp}>
                <div className="heading-two">98<span className="heading-three">%</span></div>
                <div>Campaign success rate</div>
              </motion.div>
              <motion.div className="metric-wrapper" variants={fadeInUp}>
                <div className="heading-two">24<span className="heading-three">hrs</span></div>
                <div>Average response time</div>
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
              Frequently Asked Questions
            </motion.div>
            <motion.div className="wide-feature-boxes" variants={staggerContainer}>
              <motion.div className="wide-feature-box" variants={fadeInUp}>
                <div className="container---xs justify-between">
                  <div className="heading-three">What&apos;s the minimum budget to get started?</div>
                  <div>
                    Our starter campaigns begin at $5,000/month, which typically includes 50-100 micro-influencers. We customize every campaign to your budget and goals, so reach out even if you&apos;re not sure where you fit.
                  </div>
                </div>
              </motion.div>

              <motion.div className="wide-feature-box" variants={fadeInUp}>
                <div className="container---xs justify-between">
                  <div className="heading-three">How long does it take to launch a campaign?</div>
                  <div>
                    From kickoff call to first content going live, most campaigns launch within 7-14 days. We handle all the heavy lifting - creator outreach, product shipping, content approvals, and performance tracking.
                  </div>
                </div>
              </motion.div>

              <motion.div className="wide-feature-box" variants={fadeInUp}>
                <div className="container---xs justify-between">
                  <div className="heading-three">What industries do you work with?</div>
                  <div>
                    We&apos;ve run successful campaigns across beauty, fashion, tech, food & beverage, home goods, fitness, pet products, and more. If you have a consumer product or service, we can connect you with relevant creators.
                  </div>
                </div>
              </motion.div>

              <motion.div className="wide-feature-box" variants={fadeInUp}>
                <div className="container---xs justify-between">
                  <div className="heading-three">Do I need to provide products to creators?</div>
                  <div>
                    Yes, most campaigns involve gifting products to creators. We have an automated fulfillment system that makes shipping to hundreds of creators as easy as shipping to one customer. You can also run paid campaigns where creators receive cash compensation.
                  </div>
                </div>
              </motion.div>

              <motion.div className="wide-feature-box" variants={fadeInUp}>
                <div className="container---xs justify-between">
                  <div className="heading-three">What kind of results can I expect?</div>
                  <div>
                    On average, our clients see 12.4x ROI, with campaigns generating millions of impressions, thousands of pieces of authentic content, and measurable sales lift. We provide detailed analytics showing impressions, engagement, website traffic, and conversions.
                  </div>
                </div>
              </motion.div>

              <motion.div className="wide-feature-box" variants={fadeInUp}>
                <div className="container---xs justify-between">
                  <div className="heading-three">Can I use creator content in my ads?</div>
                  <div>
                    Absolutely! All our campaigns include full usage rights to creator content. Many brands repurpose UGC for paid ads, email campaigns, social media, and their website. One campaign can provide months of authentic content assets.
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Alternative CTA for Creators */}
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
              Are You a Creator Looking to Get Paid?
            </motion.div>
            <motion.div className="large-text" variants={fadeInUp}>
              If you&apos;re a creator with 1,000+ followers looking to monetize your influence, join our creator network instead.
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Link href="/for-creators" className="button bg-primary-1 w-inline-block">
                <div>Join as Creator</div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
