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

export default function YouTubePage() {
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
                <h1>Grow Your Brand with YouTube Creator Partnerships</h1>
              </motion.div>
              <motion.div className="large-text" variants={fadeInUp}>
                Partner with YouTube creators who build deep trust with their audiences. From product reviews to sponsored integrations, drive brand awareness that lasts beyond a single view.
              </motion.div>
              <motion.div className="form-block w-form" variants={fadeInUp}>
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
                    value="Launch YouTube Campaign"
                  />
                  <div className="small-text">
                    Join 300+ brands leveraging YouTube&apos;s long-form content power.
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
                src="/webflow/images/photo-square-10_compressed.webp"
                sizes="(max-width: 479px) 92vw, (max-width: 767px) 94vw, (max-width: 991px) 95vw, 48vw"
                width={1350}
                height={1350}
                alt="YouTube Creator Campaign"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* YouTube Stats */}
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
              YouTube: The Platform Where Trust Converts to Sales
            </motion.div>
            <motion.div className="small-metric-grid" variants={staggerContainer}>
              <motion.div className="metric-wrapper" variants={fadeInUp}>
                <div className="heading-two">2.7B<span className="heading-three">+</span></div>
                <div>Monthly logged-in users watching content</div>
              </motion.div>
              <motion.div className="metric-wrapper" variants={fadeInUp}>
                <div className="heading-two">1B<span className="heading-three">+</span></div>
                <div>Hours of video watched daily on YouTube</div>
              </motion.div>
              <motion.div className="metric-wrapper" variants={fadeInUp}>
                <div className="heading-two">70<span className="heading-three">%</span></div>
                <div>Of viewers bought from a brand after seeing it on YouTube</div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* YouTube Content Types */}
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
                YouTube Content That Drives Real Business Results
              </div>
            </motion.div>
            <motion.div className="feature-cards-grid" variants={staggerContainer}>
              <motion.div className="feature-card" variants={fadeInUp}>
                <div className="title-icon-circle reduced-gaps">
                  <div className="icon-circle bg-white">
                    <Image src="/webflow/images/icon-layers.svg" alt="" width={24} height={24} />
                  </div>
                  <div className="heading-three">Product Reviews & Unboxings</div>
                </div>
                <div className="feature-card-text">
                  Authentic, in-depth product reviews from trusted creators. Viewers spend 10+ minutes learning about your product, building real consideration and purchase intent.
                </div>
              </motion.div>

              <motion.div className="feature-card" variants={fadeInUp}>
                <div className="title-icon-circle reduced-gaps">
                  <div className="icon-circle bg-white">
                    <Image src="/webflow/images/icon-robotic-arm.svg" alt="" width={24} height={24} />
                  </div>
                  <div className="heading-three">Sponsored Integrations</div>
                </div>
                <div className="feature-card-text">
                  Seamless brand mentions and integrations within creator content. From tutorials to lifestyle vlogs, we place your product where it makes sense organically.
                </div>
              </motion.div>

              <motion.div className="feature-card" variants={fadeInUp}>
                <div className="title-icon-circle reduced-gaps">
                  <div className="icon-circle bg-white">
                    <Image src="/webflow/images/icon-swap.svg" alt="" width={24} height={24} />
                  </div>
                  <div className="heading-three">YouTube Shorts</div>
                </div>
                <div className="feature-card-text">
                  Tap into YouTube&apos;s short-form video explosion. Quick, engaging content that captures attention and drives clicks to your website or product pages.
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why YouTube Works */}
      <section className="section bg-gray-c">
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
                <div className="heading-two">Long-Form Content = Deep Engagement</div>
                <div>
                  Unlike 15-second clips, YouTube creators spend 8-15 minutes explaining why they love your product. This builds genuine trust and drives higher conversion rates than any other platform.
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
                <div className="heading-two">Evergreen Discovery</div>
                <div>
                  YouTube content lives forever. Your sponsored video continues driving traffic months and years after publishing through search and recommendations. 60% of views come after the first 30 days.
                </div>
              </div>
            </motion.div>
          </div>
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
                src="/webflow/images/photo-portrait-03_compressed.webp"
                sizes="(max-width: 479px) 92vw, (max-width: 767px) 94vw, (max-width: 991px) 95vw, 48vw"
                alt="YouTube Success"
                width={1080}
                height={1080}
              />
            </motion.div>
            <motion.div className="container---s customer-quote" variants={fadeInUp}>
              <div className="heading-three">YouTube Success Story</div>
              <div className="customer-quote-wrapper">
                <div className="large-text">
                  &quot;We partnered with 45 YouTube creators across tech and lifestyle niches. Their authentic reviews generated 2.8M views and drove 12,500 conversions. YouTube became our highest-ROI marketing channel.&quot;
                </div>
                <div>
                  <div className="bold-text">David Chang</div>
                  <div className="muted">VP Marketing, TechGear Pro</div>
                </div>
              </div>
              <Link href="/case-studies" className="button arrow-right w-inline-block">
                <div>View YouTube Case Studies</div>
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
              Ready to Leverage YouTube&apos;s Power?
            </motion.div>
            <motion.div className="large-text" variants={fadeInUp}>
              Connect with YouTube creators who can authentically showcase your brand. Start your campaign today.
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Link href="/get-started" className="button bg-primary-1 w-inline-block">
                <div>Launch YouTube Campaign</div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
