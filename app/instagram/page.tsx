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

export default function InstagramPage() {
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
                <h1>Scale Your Brand on Instagram with Creator Content</h1>
              </motion.div>
              <motion.div className="large-text" variants={fadeInUp}>
                Connect with Instagram micro-influencers who create stunning visual content that drives engagement. From Reels to Stories, we&apos;ll amplify your brand across the platform.
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
                    value="Launch Instagram Campaign"
                  />
                  <div className="small-text">
                    Join 800+ brands winning on Instagram. No contracts, cancel anytime.
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
                src="/webflow/images/photo-square-03_compressed.webp"
                sizes="(max-width: 479px) 92vw, (max-width: 767px) 94vw, (max-width: 991px) 95vw, 48vw"
                width={1350}
                height={1350}
                alt="Instagram Creator Campaign"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Instagram Stats */}
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
              Instagram: Where Visual Storytelling Meets Commerce
            </motion.div>
            <motion.div className="small-metric-grid" variants={staggerContainer}>
              <motion.div className="metric-wrapper" variants={fadeInUp}>
                <div className="heading-two">2B<span className="heading-three">+</span></div>
                <div>Monthly active users discovering brands daily</div>
              </motion.div>
              <motion.div className="metric-wrapper" variants={fadeInUp}>
                <div className="heading-two">90<span className="heading-three">%</span></div>
                <div>Of Instagram users follow at least one business</div>
              </motion.div>
              <motion.div className="metric-wrapper" variants={fadeInUp}>
                <div className="heading-two">130M<span className="heading-three">+</span></div>
                <div>Users tap on shopping posts every month</div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Content Types */}
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
                <div className="heading-two">Instagram Reels</div>
                <div>
                  Short-form video content that reaches 20% more accounts than regular posts. Our creators craft scroll-stopping Reels that showcase your product in creative, authentic ways.
                </div>
              </div>
              <div className="widget-with-image restricted-width">
                <Image
                  src="/webflow/images/photo-square-05_compressed.webp"
                  alt="Instagram Reels"
                  width={1350}
                  height={1350}
                  sizes="(max-width: 479px) 85vw, (max-width: 767px) 84vw, (max-width: 991px) 88vw, 46vw"
                  className="widget-bg"
                />
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
                <div className="heading-two">Stories & Posts</div>
                <div>
                  From in-feed posts to 24-hour Stories, we activate creators who know how to drive link clicks, profile visits, and DM conversations that convert.
                </div>
              </div>
              <div className="widget-with-image restricted-width">
                <Image
                  src="/webflow/images/photo-square-07_compressed.webp"
                  alt="Instagram Stories"
                  width={1350}
                  height={1350}
                  sizes="(max-width: 479px) 85vw, (max-width: 767px) 84vw, (max-width: 991px) 88vw, 46vw"
                  className="widget-bg"
                />
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
                <div className="heading-two">Shopping Integration</div>
                <div>
                  Tag your products in creator posts and enable seamless in-app purchasing. Turn creator content into a direct sales channel with Instagram Shopping.
                </div>
              </div>
              <div className="widget-with-image restricted-width">
                <Image
                  src="/webflow/images/photo-square-11_compressed.webp"
                  alt="Instagram Shopping"
                  width={1350}
                  height={1350}
                  sizes="(max-width: 479px) 85vw, (max-width: 767px) 84vw, (max-width: 991px) 88vw, 46vw"
                  className="widget-bg"
                />
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
                src="/webflow/images/photo-square-04_compressed.webp"
                sizes="(max-width: 479px) 92vw, (max-width: 767px) 94vw, (max-width: 991px) 95vw, 48vw"
                alt="Instagram Success"
                width={1350}
                height={1350}
              />
            </motion.div>
            <motion.div className="container---s customer-quote" variants={fadeInUp}>
              <div className="heading-three">Instagram Success Story</div>
              <div className="customer-quote-wrapper">
                <div className="large-text">
                  &quot;Our Instagram campaign with 200+ micro-creators generated 4.2M impressions and 180K profile visits. The authentic content helped us gain 15K new followers and a 420% increase in DTC sales.&quot;
                </div>
                <div>
                  <div className="bold-text">Jessica Park</div>
                  <div className="muted">Founder, Bloom Skincare Co.</div>
                </div>
              </div>
              <Link href="/case-studies" className="button arrow-right w-inline-block">
                <div>View Instagram Case Studies</div>
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
              Ready to Own Instagram?
            </motion.div>
            <motion.div className="large-text" variants={fadeInUp}>
              Get matched with perfect-fit Instagram creators and launch your campaign this week.
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Link href="/get-started" className="button bg-primary-1 w-inline-block">
                <div>Start Instagram Campaign</div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
