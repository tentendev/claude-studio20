"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

// Animation variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }
  }
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] }
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

export default function Home() {
  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <section className="section">
        <div className="container---main">
          <div className="pricing-header">
            <motion.div
              id="w-node-_99fce89e-7ff0-7b16-641a-15bf96f5eabd-35396aa4"
              data-w-id="99fce89e-7ff0-7b16-641a-15bf96f5eabd"
              className="container---s hero-contents"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.div className="container---xs inside-hero-contents" variants={fadeInUp}>
                <h1>Scale your brand with micro-influencers.</h1>
              </motion.div>
              <motion.div className="large-text" variants={fadeInUp}>
                Automate product seeding campaigns and scale up your brand
                awareness, UGC, and online growth with our network of 11M+
                vetted creators.
              </motion.div>
              <motion.div className="form-block w-form" id="get-started" variants={fadeInUp}>
                <form
                  id="wf-form-Hero-Get-Started-Form"
                  name="wf-form-Hero-Get-Started-Form"
                  data-name="Hero Get Started Form"
                  method="get"
                  className="form reduced-gaps"
                  data-wf-page-id="68fca5bc9a6bb6b935396aa4"
                  data-wf-element-id="99fce89e-7ff0-7b16-641a-15bf96f5eac3"
                >
                  <input
                    className="form-input large w-input"
                    maxLength={256}
                    name="email"
                    data-name="Email"
                    placeholder="Enter your work email"
                    type="email"
                    id="email"
                    required
                  />
                  <input
                    type="submit"
                    data-wait="Please wait..."
                    className="button bg-primary-1 w-button"
                    value="Start Free Campaign"
                  />
                  <div className="small-text">
                    Join 12,000+ brands using Studios20. No credit card
                    required.
                  </div>
                </form>
                <div className="form-success w-form-done">
                  <div>Thank you! Check your email to get started.</div>
                </div>
                <div className="form-error w-form-fail">
                  <div>Oops! Something went wrong. Please try again.</div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              id="w-node-_99fce89e-7ff0-7b16-641a-15bf96f5ead1-35396aa4"
              data-w-id="99fce89e-7ff0-7b16-641a-15bf96f5ead1"
              className="image-with-widget"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
            >
              <Image
                src="/webflow/images/photo-square-01_compressed.webp"
                sizes="(max-width: 479px) 92vw, (max-width: 767px) 94vw, (max-width: 991px) 95vw, 48vw"
                width={1350}
                height={1350}
                alt="Influencer Campaign Dashboard"
              />
              <motion.div
                data-w-id="623a70fe-8604-5024-6a42-22b36da9720a"
                className="widget-overlay-image"
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              >
                <div className="widget with-title style-4">
                  <div className="widget-title">
                    <div className="small-text">Campaign Performance</div>
                  </div>
                  <div className="widget-body">
                    <div className="widget-avatar-wrapper">
                      <Image
                        src="/webflow/images/photo-business-avatar-01_compressed.webp"
                        alt="Creator"
                        width={360}
                        height={360}
                        className="widget-avatar"
                      />
                      <div className="widget-avatar-text">
                        <div>Summer Skincare 2024</div>
                        <div className="small-text muted">2,847 creators</div>
                      </div>
                    </div>
                    <div className="horizontal-line"></div>
                    <div className="widget-progress-wrapper">
                      <div className="uppercase-text small">
                        engagement rate
                      </div>
                      <div className="widget-progress">
                        <div className="widget-progress">
                          <div className="widget-progress-bar"></div>
                        </div>
                      </div>
                      <div className="widget-justified-data muted">
                        <div className="small-text">Target: 5.2%</div>
                        <div className="small-text">Current: 6.8%</div>
                      </div>
                    </div>
                    <div className="horizontal-line"></div>
                    <div className="widget-grid">
                      <div
                        id="w-node-_3be44f6f-7fe1-5117-ca3a-128ee1d9109f-35396aa4"
                        className="widget-grid-item"
                      >
                        <div className="uppercase-text small">reach</div>
                        <div className="small-text">8.2M</div>
                      </div>
                      <div
                        id="w-node-_3be44f6f-7fe1-5117-ca3a-128ee1d910a4-35396aa4"
                        className="widget-grid-item"
                      >
                        <div className="uppercase-text small">ugc pieces</div>
                        <div className="small-text">3,847</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section">
        <div className="container---main">
          <div className="section-with-title">
            <motion.div
              className="container---m"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
            >
              <div className="heading-three">
                Everything you need to run successful influencer campaigns at
                scale.
              </div>
            </motion.div>
            <motion.div
              className="feature-cards-grid"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.div className="feature-card" variants={fadeInUp}>
                <div className="title-icon-circle reduced-gaps">
                  <div className="icon-circle bg-white">
                    <Image
                      src="/webflow/images/icon-layers.svg"
                      alt=""
                      width={24}
                      height={24}
                    />
                  </div>
                  <div className="heading-three">Smart Creator Discovery</div>
                </div>
                <div className="feature-card-text">
                  Find perfect-fit micro-influencers from our network of 11M+
                  vetted creators using AI-powered matching that considers
                  audience demographics, engagement rates, and brand alignment.
                </div>
              </motion.div>

              <motion.div className="feature-card" variants={fadeInUp}>
                <div className="title-icon-circle reduced-gaps">
                  <div className="icon-circle bg-white">
                    <Image
                      src="/webflow/images/icon-robotic-arm.svg"
                      alt=""
                      width={24}
                      height={24}
                    />
                  </div>
                  <div className="heading-three">Automated Product Seeding</div>
                </div>
                <div className="feature-card-text">
                  Send products directly to creators with automated shipping,
                  tracking, and follow-up workflows. Scale your gifting
                  campaigns from 10 to 10,000 creators without manual effort.
                </div>
              </motion.div>

              <motion.div className="feature-card" variants={fadeInUp}>
                <div className="title-icon-circle reduced-gaps">
                  <div className="icon-circle bg-white">
                    <Image
                      src="/webflow/images/icon-swap.svg"
                      alt=""
                      width={24}
                      height={24}
                    />
                  </div>
                  <div className="heading-three">Real-time Analytics</div>
                </div>
                <div className="feature-card-text">
                  Track campaign performance, engagement rates, and ROI with
                  comprehensive analytics dashboards. Make data-driven decisions
                  with instant visibility into what&apos;s working.
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section increased-bottom-padding">
        <div className="container---main">
          <div className="container---xl align-center">
            <motion.div
              className="metrics-promo-section"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.div className="large-metric" variants={fadeInUp}>
                <div className="icon-circle-bordered">
                  <div className="icon-circle bg-primary-1">
                    <Image
                      src="/webflow/images/icon-earth.svg"
                      alt=""
                      width={32}
                      height={32}
                    />
                  </div>
                  <div className="icon-circle-border"></div>
                </div>
                <div className="metric-text">26M+</div>
                <div className="large-text">
                  Social posts created by creators on the Studios20 platform,
                  generating authentic content for brands worldwide.
                </div>
              </motion.div>
              <div className="horizontal-line"></div>
              <motion.div className="small-metric-grid" variants={staggerContainer}>
                <motion.div className="metric-wrapper adjacent-on-mobile" variants={fadeInUp}>
                  <div className="heading-two">
                    11M<span className="heading-three">+</span>
                  </div>
                  <div>
                    Vetted creators in our network, ready to promote your brand
                    across TikTok, Instagram, and YouTube.
                  </div>
                </motion.div>
                <motion.div className="metric-wrapper adjacent-on-mobile" variants={fadeInUp}>
                  <div className="heading-two">
                    500K<span className="heading-three">+</span>
                  </div>
                  <div>
                    Successful campaigns launched by brands using Studios20 to
                    drive awareness, engagement, and sales.
                  </div>
                </motion.div>
                <motion.div className="metric-wrapper adjacent-on-mobile" variants={fadeInUp}>
                  <div className="heading-two">
                    12.4<span className="heading-three">x</span>
                  </div>
                  <div>
                    Average ROI achieved by brands running micro-influencer
                    campaigns through Studios20&apos;s platform.
                  </div>
                </motion.div>
              </motion.div>
              <motion.div className="small-text disclaimer" variants={fadeInUp}>
                * Based on average campaign performance across Studios20
                platform in 2024.
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Wide Feature Boxes */}
      <section className="section bg-gray-c">
        <div className="container---main">
          <div className="wide-feature-boxes">
            {/* Feature 1 */}
            <motion.div
              className="wide-feature-box"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
            >
              <div className="container---xs justify-between">
                <div className="heading-two">Campaign Automation</div>
                <div>
                  Launch campaigns in minutes with AI-powered creator matching,
                  automated outreach, and built-in workflow management that
                  scales from 10 to 10,000 creators.
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
                  alt=""
                  width={1350}
                  height={1350}
                  sizes="(max-width: 479px) 85vw, (max-width: 767px) 84vw, (max-width: 991px) 88vw, 46vw"
                  className="widget-bg"
                />
                <div className="widget-atop-image-wrapper">
                  <div className="widget with-title style-4">
                    <div className="widget-title bg-primary-1">
                      <div className="small-text">Top Creator</div>
                    </div>
                    <div className="widget-body">
                      <div className="heading-one">A+</div>
                      <div className="bold-text">@beautybyemma</div>
                      <div className="small-text">
                        Beauty & lifestyle creator with 847K followers across
                        TikTok and Instagram. Specializes in skincare reviews
                        and makeup tutorials.
                      </div>
                      <div className="horizontal-line"></div>
                      <div className="widget-grid">
                        <div className="widget-grid-item">
                          <div className="uppercase-text small">engagement</div>
                          <div className="small-text">8.2%</div>
                        </div>
                        <div className="widget-grid-item">
                          <div className="uppercase-text small">audience</div>
                          <div className="small-text">18-34F</div>
                        </div>
                      </div>
                      <div className="widget-grid">
                        <div className="widget-grid-item">
                          <div className="uppercase-text small">avg views</div>
                          <div className="small-text">126K</div>
                        </div>
                        <div className="widget-grid-item">
                          <div className="uppercase-text small">growth</div>
                          <div className="badge">
                            <div>12%</div>
                            <Image
                              src="/webflow/images/widget-icon-arrow-up.svg"
                              alt=""
                              width={18}
                              height={18}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Feature 2 */}
            <motion.div
              className="wide-feature-box"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
            >
              <div className="container---xs justify-between">
                <div className="heading-two">UGC Content Library</div>
                <div>
                  Collect, organize, and manage user-generated content with
                  automatic rights management. Download high-quality assets for
                  use across your marketing channels.
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
                  alt=""
                  width={1350}
                  height={1350}
                  sizes="(max-width: 479px) 85vw, (max-width: 767px) 84vw, (max-width: 991px) 88vw, 46vw"
                  className="widget-bg"
                />
                <div className="widget-atop-image-wrapper">
                  <div className="widget style-1">
                    <div className="heading-four">Content Generated</div>
                    <div className="widget-rows">
                      <div className="widget-progress-title">
                        <div>~3,847 pieces</div>
                        <div className="badge">
                          <div>18%</div>
                          <Image
                            src="/webflow/images/widget-icon-arrow-up.svg"
                            alt=""
                            width={18}
                            height={18}
                          />
                        </div>
                      </div>
                      <div className="widget-progress-wrapper">
                        <div className="widget-progress">
                          <div className="widget-progress">
                            <div className="widget-progress-bar"></div>
                          </div>
                        </div>
                        <div className="widget-justified-data muted">
                          <div className="small-text">92% of campaign goal</div>
                          <div className="small-text">4,200 target</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Feature 3 */}
            <motion.div
              className="wide-feature-box"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
            >
              <div className="container---xs justify-between">
                <div className="heading-two">Performance Analytics</div>
                <div>
                  Track real-time campaign metrics including reach, engagement,
                  conversions, and ROI. Get actionable insights to optimize your
                  influencer marketing strategy.
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
                  alt=""
                  width={1350}
                  height={1350}
                  sizes="(max-width: 479px) 85vw, (max-width: 767px) 84vw, (max-width: 991px) 88vw, 46vw"
                  className="widget-bg"
                />
                <div className="widget-atop-image-wrapper">
                  <div className="widget style-2">
                    <div className="heading-four">Campaign Timeline</div>
                    <div className="widget-timeline-wrapper">
                      <div className="widget-justified-data">
                        <div className="widget-timeline-text">
                          <div className="small-text">Launch</div>
                          <Image
                            src="/webflow/images/widget-icon-arrow-right.svg"
                            alt=""
                            width={16}
                            height={16}
                          />
                          <div className="small-text">Summer Skincare</div>
                        </div>
                        <div className="small-text muted">8.2M reach</div>
                      </div>
                      <div className="widget-timeline">
                        <div className="widget-timeline-pill"></div>
                        <div className="widget-timeline-circle"></div>
                        <div className="widget-timeline-pill"></div>
                        <div className="widget-timeline-pill"></div>
                        <div className="widget-timeline-circle faded"></div>
                        <div className="widget-timeline-pill faded"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Customer Quote */}
      <section className="section bg-gray-b even-padding">
        <div className="container---main">
          <motion.div
            className="grid-halves"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeIn}>
              <Image
                src="/webflow/images/photo-square-04_compressed.webp"
                id="w-node-ace2fec9-dd1f-9b90-4b4d-2e11dda78890-35396aa4"
                sizes="(max-width: 479px) 92vw, (max-width: 767px) 94vw, (max-width: 991px) 95vw, 48vw"
                alt=""
                width={1350}
                height={1350}
              />
            </motion.div>
            <motion.div
              id="w-node-_3ec8a021-c158-82bc-0130-143e002aef64-35396aa4"
              className="container---s customer-quote"
              variants={fadeInUp}
            >
              <div className="heading-three">Success Story</div>
              <div className="customer-quote-wrapper">
                <div className="large-text">
                  &quot;Studios20 transformed our product launch. We reached 8.2M
                  people through 2,800+ micro-influencers, generated 3,800
                  pieces of UGC, and saw a 340% increase in sales. The platform
                  made it incredibly easy to scale our influencer marketing.&quot;
                </div>
                <div>
                  <div className="bold-text">Sarah Chen</div>
                  <div className="muted">
                    Head of Marketing, GlowUp Cosmetics
                  </div>
                </div>
              </div>
              <Link href="#case-studies" className="button arrow-right w-inline-block">
                <div>View Case Studies</div>
                <div className="arrow-link-wrapper right">
                  <Image
                    src="/webflow/images/icon-arrow-right.svg"
                    alt="Right arrow icon"
                    width={20}
                    height={20}
                    className="arrow-link-icon initial"
                  />
                  <Image
                    src="/webflow/images/icon-arrow-right.svg"
                    alt="Right arrow icon"
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

      <Footer />
    </div>
  );
}
