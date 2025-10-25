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

export default function ClientsPage() {
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
              Trusted by Leading Brands Across Every Industry
            </motion.h1>
            <motion.div className="large-text" variants={fadeInUp}>
              From early-stage startups to Fortune 500 companies, over 500 brands trust Studios20 to scale their marketing through authentic creator partnerships.
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
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
              The Numbers That Matter
            </motion.div>
            <motion.div className="small-metric-grid" variants={staggerContainer}>
              <motion.div className="metric-wrapper" variants={fadeInUp}>
                <div className="heading-two">500<span className="heading-three">+</span></div>
                <div>Brands launched successful campaigns</div>
              </motion.div>
              <motion.div className="metric-wrapper" variants={fadeInUp}>
                <div className="heading-two">15<span className="heading-three">+</span></div>
                <div>Industries represented</div>
              </motion.div>
              <motion.div className="metric-wrapper" variants={fadeInUp}>
                <div className="heading-two">$3.2B<span className="heading-three">+</span></div>
                <div>Revenue generated for clients</div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Industries Section */}
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
                Industries We Serve
              </div>
            </motion.div>
            <motion.div className="feature-cards-grid" variants={staggerContainer}>
              <motion.div className="feature-card" variants={fadeInUp}>
                <div className="title-icon-circle reduced-gaps">
                  <div className="icon-circle bg-white">
                    <Image src="/webflow/images/icon-layers.svg" alt="" width={24} height={24} />
                  </div>
                  <div className="heading-three">Beauty & Skincare</div>
                </div>
                <div className="feature-card-text">
                  Makeup brands, skincare lines, hair care products, and beauty tools. From indie brands to established names, we connect beauty products with authentic influencers.
                </div>
              </motion.div>

              <motion.div className="feature-card" variants={fadeInUp}>
                <div className="title-icon-circle reduced-gaps">
                  <div className="icon-circle bg-white">
                    <Image src="/webflow/images/icon-robotic-arm.svg" alt="" width={24} height={24} />
                  </div>
                  <div className="heading-three">Fashion & Apparel</div>
                </div>
                <div className="feature-card-text">
                  Clothing brands, footwear, accessories, and athleisure. Try-on hauls and outfit styling content that drives real conversions and brand awareness.
                </div>
              </motion.div>

              <motion.div className="feature-card" variants={fadeInUp}>
                <div className="title-icon-circle reduced-gaps">
                  <div className="icon-circle bg-white">
                    <Image src="/webflow/images/icon-swap.svg" alt="" width={24} height={24} />
                  </div>
                  <div className="heading-three">Tech & Electronics</div>
                </div>
                <div className="feature-card-text">
                  Consumer electronics, smart devices, accessories, and tech gadgets. In-depth reviews and unboxing videos that educate and convert.
                </div>
              </motion.div>

              <motion.div className="feature-card" variants={fadeInUp}>
                <div className="title-icon-circle reduced-gaps">
                  <div className="icon-circle bg-white">
                    <Image src="/webflow/images/icon-layers.svg" alt="" width={24} height={24} />
                  </div>
                  <div className="heading-three">Food & Beverage</div>
                </div>
                <div className="feature-card-text">
                  Snacks, drinks, supplements, and specialty foods. Taste tests, recipe content, and lifestyle integration that makes products irresistible.
                </div>
              </motion.div>

              <motion.div className="feature-card" variants={fadeInUp}>
                <div className="title-icon-circle reduced-gaps">
                  <div className="icon-circle bg-white">
                    <Image src="/webflow/images/icon-robotic-arm.svg" alt="" width={24} height={24} />
                  </div>
                  <div className="heading-three">Home & Lifestyle</div>
                </div>
                <div className="feature-card-text">
                  Home decor, furniture, organization, and lifestyle products. Room makeovers and product demos that inspire and convert viewers.
                </div>
              </motion.div>

              <motion.div className="feature-card" variants={fadeInUp}>
                <div className="title-icon-circle reduced-gaps">
                  <div className="icon-circle bg-white">
                    <Image src="/webflow/images/icon-swap.svg" alt="" width={24} height={24} />
                  </div>
                  <div className="heading-three">Health & Fitness</div>
                </div>
                <div className="feature-card-text">
                  Supplements, fitness equipment, workout programs, and wellness products. Transformation stories and product demonstrations that build trust.
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Client Logos Grid */}
      <section className="section bg-gray-c">
        <div className="container---main">
          <motion.div
            className="container---m align-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div className="heading-three" variants={fadeInUp}>
              Brands That Trust Studios20
            </motion.div>
            <motion.div className="large-text" variants={fadeInUp}>
              Join hundreds of successful brands running influencer campaigns on our platform
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Company Size Section */}
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
                Built for Brands of All Sizes
              </div>
            </motion.div>
            <div className="wide-feature-boxes">
              <motion.div className="wide-feature-box" variants={fadeInUp}>
                <div className="container---xs justify-between">
                  <div>
                    <div className="heading-two">Startups & D2C Brands</div>
                  </div>
                  <div>
                    Launch with confidence. Our starter campaigns begin at $5,000/month, perfect for emerging brands looking to build awareness and generate their first wave of authentic UGC. Get product-market fit validation through real creator feedback.
                  </div>
                </div>
              </motion.div>

              <motion.div className="wide-feature-box" variants={fadeInUp}>
                <div className="container---xs justify-between">
                  <div>
                    <div className="heading-two">Growth Stage Companies</div>
                  </div>
                  <div>
                    Scale efficiently. Run multi-platform campaigns across TikTok, Instagram, and YouTube simultaneously. Generate thousands of pieces of UGC monthly to fuel your paid ads and organic social strategy.
                  </div>
                </div>
              </motion.div>

              <motion.div className="wide-feature-box" variants={fadeInUp}>
                <div className="container---xs justify-between">
                  <div>
                    <div className="heading-two">Enterprise Brands</div>
                  </div>
                  <div>
                    Drive measurable ROI at scale. Custom enterprise solutions include dedicated account management, white-label reporting, API access, and integration with your existing marketing stack. Run global campaigns across multiple markets.
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Client Testimonial */}
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
                alt="Client Success"
                width={1350}
                height={1350}
              />
            </motion.div>
            <motion.div className="container---s customer-quote" variants={fadeInUp}>
              <div className="heading-three">Why Brands Choose Studios20</div>
              <div className="customer-quote-wrapper">
                <div className="large-text">
                  &quot;We tried working with traditional influencer agencies before - the costs were insane and results were mediocre. Studios20 gave us access to thousands of micro-creators for a fraction of the cost. The authentic content they created outperformed our professional ads by 3x.&quot;
                </div>
                <div>
                  <div className="bold-text">Sarah Chen</div>
                  <div className="muted">Head of Marketing, GlowUp Cosmetics</div>
                </div>
              </div>
              <Link href="/case-studies" className="button arrow-right w-inline-block">
                <div>Read Case Studies</div>
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
              Join 500+ Successful Brands
            </motion.div>
            <motion.div className="large-text" variants={fadeInUp}>
              Start your first influencer campaign and see why leading brands choose Studios20 for authentic creator partnerships.
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Link href="/get-started" className="button bg-primary-1 w-inline-block">
                <div>Get Started Today</div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
