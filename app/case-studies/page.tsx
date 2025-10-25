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

export default function CaseStudiesPage() {
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
              Real Campaigns, Real Results
            </motion.h1>
            <motion.div className="large-text" variants={fadeInUp}>
              See how brands across industries use Studios20 to scale through micro-influencer partnerships. From startups to enterprise brands, these success stories show what&apos;s possible.
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Case Study 1 - Beauty */}
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
                src="/webflow/images/photo-square-04_compressed.webp"
                sizes="(max-width: 479px) 92vw, (max-width: 767px) 94vw, (max-width: 991px) 95vw, 48vw"
                alt="GlowUp Cosmetics"
                width={1350}
                height={1350}
              />
            </motion.div>
            <motion.div className="container---s customer-quote" variants={fadeInUp}>
              <div className="uppercase-text small muted">Beauty & Skincare</div>
              <div className="heading-two">GlowUp Cosmetics: 340% Sales Increase in 60 Days</div>
              <div className="customer-quote-wrapper">
                <div>
                  <div className="bold-text">The Challenge</div>
                  <div>New skincare line launching in competitive market. Needed authentic reviews and brand awareness without huge ad budget.</div>
                </div>
                <div>
                  <div className="bold-text">The Solution</div>
                  <div>Partnered with 2,800+ micro-influencers across TikTok and Instagram. Focused on beauty creators with engaged audiences in the 18-34 female demographic.</div>
                </div>
                <div>
                  <div className="bold-text">The Results</div>
                  <ul className="small-text">
                    <li>8.2M total impressions</li>
                    <li>3,800 pieces of authentic UGC</li>
                    <li>340% increase in sales</li>
                    <li>12.8x ROI on campaign spend</li>
                  </ul>
                </div>
                <div className="large-text">
                  &quot;Studios20 transformed our product launch. The authentic content from real creators was more powerful than any ad we could have made ourselves.&quot;
                </div>
                <div>
                  <div className="bold-text">Sarah Chen</div>
                  <div className="muted">Head of Marketing, GlowUp Cosmetics</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Case Study 2 - Fitness Apparel */}
      <section className="section">
        <div className="container---main">
          <motion.div
            className="grid-halves"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div className="container---s customer-quote" variants={fadeInUp}>
              <div className="uppercase-text small muted">Fashion & Apparel</div>
              <div className="heading-two">TrendFit: 12M Views on TikTok in 30 Days</div>
              <div className="customer-quote-wrapper">
                <div>
                  <div className="bold-text">The Challenge</div>
                  <div>Athletic wear brand wanted to break through on TikTok and reach Gen Z fitness enthusiasts with limited budget.</div>
                </div>
                <div>
                  <div className="bold-text">The Solution</div>
                  <div>Gifted products to 150 TikTok fitness micro-creators. Encouraged try-on hauls, workout videos, and honest reviews.</div>
                </div>
                <div>
                  <div className="bold-text">The Results</div>
                  <ul className="small-text">
                    <li>12M video views in first 30 days</li>
                    <li>280% spike in website traffic</li>
                    <li>1,200+ pieces of video content</li>
                    <li>Best sales month in company history</li>
                  </ul>
                </div>
                <div className="large-text">
                  &quot;We reached millions of our target audience without spending a fortune on paid ads. The authentic try-on videos converted way better than our product photos.&quot;
                </div>
                <div>
                  <div className="bold-text">Marcus Rivera</div>
                  <div className="muted">CMO, TrendFit Apparel</div>
                </div>
              </div>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Image
                src="/webflow/images/photo-square-09_compressed.webp"
                sizes="(max-width: 479px) 92vw, (max-width: 767px) 94vw, (max-width: 991px) 95vw, 48vw"
                alt="TrendFit Apparel"
                width={1350}
                height={1350}
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Case Study 3 - Tech */}
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
                src="/webflow/images/photo-portrait-03_compressed.webp"
                sizes="(max-width: 479px) 92vw, (max-width: 767px) 94vw, (max-width: 991px) 95vw, 48vw"
                alt="TechGear Pro"
                width={1080}
                height={1080}
              />
            </motion.div>
            <motion.div className="container---s customer-quote" variants={fadeInUp}>
              <div className="uppercase-text small muted">Tech & Electronics</div>
              <div className="heading-two">TechGear Pro: YouTube Reviews Drive 12,500 Conversions</div>
              <div className="customer-quote-wrapper">
                <div>
                  <div className="bold-text">The Challenge</div>
                  <div>Premium tech accessories needed credibility and detailed product reviews to justify higher price point.</div>
                </div>
                <div>
                  <div className="bold-text">The Solution</div>
                  <div>Partnered with 45 YouTube tech reviewers and 200 Instagram tech creators for unboxing videos and in-depth reviews.</div>
                </div>
                <div>
                  <div className="bold-text">The Results</div>
                  <ul className="small-text">
                    <li>2.8M total video views</li>
                    <li>12,500 tracked conversions</li>
                    <li>YouTube became #1 marketing channel</li>
                    <li>14.2x ROI on campaign investment</li>
                  </ul>
                </div>
                <div className="large-text">
                  &quot;Authentic YouTube reviews built trust with our target audience. People watched 10+ minute reviews and came to our site ready to buy. Best marketing ROI we&apos;ve ever seen.&quot;
                </div>
                <div>
                  <div className="bold-text">David Chang</div>
                  <div className="muted">VP Marketing, TechGear Pro</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* More Results */}
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
                More Success Stories Across Industries
              </div>
            </motion.div>
            <motion.div className="feature-cards-grid" variants={staggerContainer}>
              <motion.div className="feature-card" variants={fadeInUp}>
                <div className="uppercase-text small muted">Food & Beverage</div>
                <div className="heading-three">BrewCraft Coffee</div>
                <div className="feature-card-text">
                  Activated 400+ lifestyle creators for cold brew launch. Generated 6.2M impressions and 18,000 new customers in first month. 8.4x ROI.
                </div>
              </motion.div>

              <motion.div className="feature-card" variants={fadeInUp}>
                <div className="uppercase-text small muted">Home & Lifestyle</div>
                <div className="heading-three">CozyHome Decor</div>
                <div className="feature-card-text">
                  Partnered with 600 home decor creators on Instagram. 4.8M impressions, 2,400 pieces of UGC, and 320% increase in organic social followers. Repurposed content for 6 months.
                </div>
              </motion.div>

              <motion.div className="feature-card" variants={fadeInUp}>
                <div className="uppercase-text small muted">Pet Products</div>
                <div className="heading-three">PawPerfect Treats</div>
                <div className="feature-card-text">
                  TikTok campaign with 200 pet creators. Videos went viral with 14M+ views. Sold out product inventory in 2 weeks. Had to pause campaign due to overwhelming demand.
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
              Ready to Write Your Success Story?
            </motion.div>
            <motion.div className="large-text" variants={fadeInUp}>
              Join 500+ brands using Studios20 to scale through authentic creator partnerships.
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Link href="/get-started" className="button bg-primary-1 w-inline-block">
                <div>Start Your Campaign</div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
