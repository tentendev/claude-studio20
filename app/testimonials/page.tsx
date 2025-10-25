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

export default function TestimonialsPage() {
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
              Real Brands, Real Results, Real Reviews
            </motion.h1>
            <motion.div className="large-text" variants={fadeInUp}>
              Don&apos;t just take our word for it. Here&apos;s what brands and creators actually say about working with Studios20.
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Testimonials */}
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
              <div className="customer-quote-wrapper">
                <div className="large-text">
                  &quot;Studios20 transformed our product launch. The authentic content from real creators was more powerful than any ad we could have made ourselves. We saw a 340% increase in sales and our best month ever.&quot;
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

      {/* Brand Testimonials Grid */}
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
                What Brands Are Saying
              </div>
            </motion.div>
            <motion.div className="feature-cards-grid" variants={staggerContainer}>
              <motion.div className="feature-card" variants={fadeInUp}>
                <div className="customer-quote-wrapper">
                  <div className="large-text">
                    &quot;Reached millions of our target audience without spending a fortune on paid ads. The try-on videos converted way better than our product photos.&quot;
                  </div>
                  <div>
                    <div className="bold-text">Marcus Rivera</div>
                    <div className="muted">CMO, TrendFit Apparel</div>
                  </div>
                </div>
              </motion.div>

              <motion.div className="feature-card" variants={fadeInUp}>
                <div className="customer-quote-wrapper">
                  <div className="large-text">
                    &quot;Authentic YouTube reviews built trust with our audience. People watched 10+ minute reviews and came to our site ready to buy. Best marketing ROI we&apos;ve ever seen.&quot;
                  </div>
                  <div>
                    <div className="bold-text">David Chang</div>
                    <div className="muted">VP Marketing, TechGear Pro</div>
                  </div>
                </div>
              </motion.div>

              <motion.div className="feature-card" variants={fadeInUp}>
                <div className="customer-quote-wrapper">
                  <div className="large-text">
                    &quot;We tried other platforms but the quality of creators and the ease of campaign management with Studios20 is unmatched. Their platform just works.&quot;
                  </div>
                  <div>
                    <div className="bold-text">Jessica Martinez</div>
                    <div className="muted">Founder, CozyHome Decor</div>
                  </div>
                </div>
              </motion.div>

              <motion.div className="feature-card" variants={fadeInUp}>
                <div className="customer-quote-wrapper">
                  <div className="large-text">
                    &quot;Sold out our product inventory in 2 weeks after launching on TikTok. We had to pause the campaign because demand was so overwhelming. Incredible results.&quot;
                  </div>
                  <div>
                    <div className="bold-text">Alex Thompson</div>
                    <div className="muted">CEO, PawPerfect Treats</div>
                  </div>
                </div>
              </motion.div>

              <motion.div className="feature-card" variants={fadeInUp}>
                <div className="customer-quote-wrapper">
                  <div className="large-text">
                    &quot;The UGC we generated from one campaign fueled our ads for 6 months. The content rights alone made this worth every penny.&quot;
                  </div>
                  <div>
                    <div className="bold-text">Rachel Kim</div>
                    <div className="muted">Marketing Director, BrewCraft Coffee</div>
                  </div>
                </div>
              </motion.div>

              <motion.div className="feature-card" variants={fadeInUp}>
                <div className="customer-quote-wrapper">
                  <div className="large-text">
                    &quot;As a startup with a tight budget, Studios20 made influencer marketing actually affordable. We&apos;re now scaling to $1M ARR thanks to creator partnerships.&quot;
                  </div>
                  <div>
                    <div className="bold-text">Michael Brown</div>
                    <div className="muted">Co-Founder, FitFlow App</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Creator Testimonials */}
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
                What Creators Are Saying
              </div>
            </motion.div>
            <motion.div className="feature-cards-grid" variants={staggerContainer}>
              <motion.div className="feature-card" variants={fadeInUp}>
                <div className="customer-quote-wrapper">
                  <div className="large-text">
                    &quot;I&apos;ve made over $12,000 in the past 6 months just posting content I was already making. Studios20 makes it so easy to get paid for my creativity.&quot;
                  </div>
                  <div>
                    <div className="bold-text">@beautybymia</div>
                    <div className="muted">142K followers, Beauty Creator</div>
                  </div>
                </div>
              </motion.div>

              <motion.div className="feature-card" variants={fadeInUp}>
                <div className="customer-quote-wrapper">
                  <div className="large-text">
                    &quot;Love that I can pick and choose campaigns that actually match my audience. No pressure to promote stuff I don&apos;t believe in. Studios20 gets it.&quot;
                  </div>
                  <div>
                    <div className="bold-text">@techwithtony</div>
                    <div className="muted">89K followers, Tech Reviewer</div>
                  </div>
                </div>
              </motion.div>

              <motion.div className="feature-card" variants={fadeInUp}>
                <div className="customer-quote-wrapper">
                  <div className="large-text">
                    &quot;Payment is always on time, products ship fast, and the brands are actually legit. This is how creator partnerships should work.&quot;
                  </div>
                  <div>
                    <div className="bold-text">@lifewithlaura</div>
                    <div className="muted">56K followers, Lifestyle Creator</div>
                  </div>
                </div>
              </motion.div>

              <motion.div className="feature-card" variants={fadeInUp}>
                <div className="customer-quote-wrapper">
                  <div className="large-text">
                    &quot;As a micro-influencer, I thought brand deals were only for huge accounts. Studios20 proved me wrong. I&apos;m finally monetizing my content.&quot;
                  </div>
                  <div>
                    <div className="bold-text">@fitnesswithjen</div>
                    <div className="muted">23K followers, Fitness Creator</div>
                  </div>
                </div>
              </motion.div>

              <motion.div className="feature-card" variants={fadeInUp}>
                <div className="customer-quote-wrapper">
                  <div className="large-text">
                    &quot;Dashboard makes it super easy to track campaigns and earnings. I know exactly what I&apos;m getting paid and when. Total transparency.&quot;
                  </div>
                  <div>
                    <div className="bold-text">@foodieadventures</div>
                    <div className="muted">94K followers, Food Creator</div>
                  </div>
                </div>
              </motion.div>

              <motion.div className="feature-card" variants={fadeInUp}>
                <div className="customer-quote-wrapper">
                  <div className="large-text">
                    &quot;Discovered amazing products I genuinely love through Studios20. Getting paid to share them with my community is a win-win for everyone.&quot;
                  </div>
                  <div>
                    <div className="bold-text">@homedecordiaries</div>
                    <div className="muted">67K followers, Home Decor Creator</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Overall Stats */}
      <section className="section">
        <div className="container---main">
          <motion.div
            className="container---xl align-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div className="heading-two" variants={fadeInUp}>
              The Results Speak for Themselves
            </motion.div>
            <motion.div className="small-metric-grid" variants={staggerContainer}>
              <motion.div className="metric-wrapper" variants={fadeInUp}>
                <div className="heading-two">4.9<span className="heading-three">/5</span></div>
                <div>Average brand satisfaction rating</div>
              </motion.div>
              <motion.div className="metric-wrapper" variants={fadeInUp}>
                <div className="heading-two">4.8<span className="heading-three">/5</span></div>
                <div>Average creator satisfaction rating</div>
              </motion.div>
              <motion.div className="metric-wrapper" variants={fadeInUp}>
                <div className="heading-two">92<span className="heading-three">%</span></div>
                <div>Brands run multiple campaigns with us</div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Dual CTA */}
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
              Join Our Community of Successful Brands and Creators
            </motion.div>
            <motion.div className="large-text" variants={fadeInUp}>
              Whether you&apos;re a brand looking to scale or a creator ready to monetize, Studios20 has you covered.
            </motion.div>
            <motion.div variants={fadeInUp} style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/get-started" className="button bg-primary-1 w-inline-block">
                <div>For Brands</div>
              </Link>
              <Link href="/for-creators" className="button w-inline-block">
                <div>For Creators</div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
