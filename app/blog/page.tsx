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

export default function BlogPage() {
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
              Creator Marketing Insights & Industry Trends
            </motion.h1>
            <motion.div className="large-text" variants={fadeInUp}>
              The latest strategies, case studies, and insights from the world of influencer marketing and creator partnerships.
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
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
                src="/webflow/images/photo-square-10_compressed.webp"
                sizes="(max-width: 479px) 92vw, (max-width: 767px) 94vw, (max-width: 991px) 95vw, 48vw"
                alt="Featured Post"
                width={1350}
                height={1350}
              />
            </motion.div>
            <motion.div className="container---s customer-quote" variants={fadeInUp}>
              <div className="uppercase-text small muted">FEATURED POST</div>
              <div className="heading-two">The Complete Guide to Micro-Influencer Marketing in 2024</div>
              <div className="customer-quote-wrapper">
                <div>
                  Micro-influencers (1K-100K followers) are delivering 3-5x better engagement rates than macro-influencers. Learn why brands are shifting budgets to authentic creator partnerships and how to build a successful micro-influencer strategy.
                </div>
                <div className="small-text muted">
                  Published January 15, 2024 • 12 min read
                </div>
              </div>
              <Link href="#" className="button arrow-right w-inline-block">
                <div>Read Full Article</div>
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

      {/* Blog Posts Grid */}
      <section className="section">
        <div className="container---main">
          <motion.div
            className="feature-cards-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div className="feature-card" variants={fadeInUp}>
              <div className="customer-quote-wrapper">
                <div className="uppercase-text small muted">STRATEGY</div>
                <div className="heading-three">TikTok vs Instagram: Which Platform is Right for Your Brand?</div>
                <div>
                  Compare audience demographics, engagement rates, content formats, and ROI to choose the best platform for your influencer campaigns.
                </div>
                <div className="small-text muted">
                  January 10, 2024 • 8 min read
                </div>
              </div>
            </motion.div>

            <motion.div className="feature-card" variants={fadeInUp}>
              <div className="customer-quote-wrapper">
                <div className="uppercase-text small muted">CASE STUDY</div>
                <div className="heading-three">How a Beauty Brand Generated 340% Sales Increase with Micro-Creators</div>
                <div>
                  GlowUp Cosmetics partnered with 2,800 TikTok and Instagram creators to launch a new skincare line. Here&apos;s the exact strategy they used.
                </div>
                <div className="small-text muted">
                  January 8, 2024 • 10 min read
                </div>
              </div>
            </motion.div>

            <motion.div className="feature-card" variants={fadeInUp}>
              <div className="customer-quote-wrapper">
                <div className="uppercase-text small muted">TRENDS</div>
                <div className="heading-three">2024 Creator Economy Trends: What Brands Need to Know</div>
                <div>
                  The creator economy is hitting $250B in 2024. Discover the biggest trends shaping influencer marketing and how to stay ahead.
                </div>
                <div className="small-text muted">
                  January 5, 2024 • 12 min read
                </div>
              </div>
            </motion.div>

            <motion.div className="feature-card" variants={fadeInUp}>
              <div className="customer-quote-wrapper">
                <div className="uppercase-text small muted">HOW-TO</div>
                <div className="heading-three">How to Calculate ROI from Influencer Marketing Campaigns</div>
                <div>
                  Step-by-step guide to tracking impressions, engagement, conversions, and revenue to prove the ROI of your creator partnerships.
                </div>
                <div className="small-text muted">
                  January 3, 2024 • 9 min read
                </div>
              </div>
            </motion.div>

            <motion.div className="feature-card" variants={fadeInUp}>
              <div className="customer-quote-wrapper">
                <div className="uppercase-text small muted">BEST PRACTICES</div>
                <div className="heading-three">10 UGC Content Ideas That Actually Convert</div>
                <div>
                  User-generated content drives 4.5x higher purchase intent. Here are the proven content formats that turn viewers into customers.
                </div>
                <div className="small-text muted">
                  December 28, 2023 • 7 min read
                </div>
              </div>
            </motion.div>

            <motion.div className="feature-card" variants={fadeInUp}>
              <div className="customer-quote-wrapper">
                <div className="uppercase-text small muted">PLATFORM GUIDE</div>
                <div className="heading-three">YouTube Shorts vs TikTok: The Ultimate Comparison for Brands</div>
                <div>
                  Short-form video is exploding. Compare YouTube Shorts and TikTok to find the best fit for your influencer strategy and budget.
                </div>
                <div className="small-text muted">
                  December 22, 2023 • 11 min read
                </div>
              </div>
            </motion.div>

            <motion.div className="feature-card" variants={fadeInUp}>
              <div className="customer-quote-wrapper">
                <div className="uppercase-text small muted">CREATOR TIPS</div>
                <div className="heading-three">What Creators Actually Want from Brand Partnerships</div>
                <div>
                  Survey of 10,000+ creators reveals what they value most in brand partnerships - and it&apos;s not always money.
                </div>
                <div className="small-text muted">
                  December 18, 2023 • 8 min read
                </div>
              </div>
            </motion.div>

            <motion.div className="feature-card" variants={fadeInUp}>
              <div className="customer-quote-wrapper">
                <div className="uppercase-text small muted">INDUSTRY NEWS</div>
                <div className="heading-three">FTC Guidelines for Influencer Marketing: 2024 Update</div>
                <div>
                  New FTC disclosure requirements affect all creator partnerships. Make sure your campaigns stay compliant with the latest rules.
                </div>
                <div className="small-text muted">
                  December 15, 2023 • 6 min read
                </div>
              </div>
            </motion.div>

            <motion.div className="feature-card" variants={fadeInUp}>
              <div className="customer-quote-wrapper">
                <div className="uppercase-text small muted">TUTORIAL</div>
                <div className="heading-three">How to Build a Creator Brief That Gets Results</div>
                <div>
                  Your creator brief determines campaign success. Learn what to include, what to skip, and how to give creators creative freedom.
                </div>
                <div className="small-text muted">
                  December 10, 2023 • 10 min read
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Signup */}
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
              Never Miss an Update
            </motion.div>
            <motion.div className="large-text" variants={fadeInUp}>
              Get the latest influencer marketing strategies, case studies, and industry insights delivered to your inbox weekly.
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
                  value="Subscribe to Newsletter"
                />
                <div className="small-text muted">
                  Join 25,000+ marketers getting weekly insights. Unsubscribe anytime.
                </div>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
