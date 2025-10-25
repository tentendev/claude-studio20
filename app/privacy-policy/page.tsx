"use client";

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

export default function PrivacyPolicyPage() {
  return (
    <div>
      <Navbar />

      {/* Hero */}
      <section className="section">
        <div className="container---main">
          <motion.div
            className="container---s"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h1 variants={fadeInUp}>
              Privacy Policy
            </motion.h1>
            <motion.div className="large-text" variants={fadeInUp}>
              Last updated: January 1, 2024
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="section bg-gray-c">
        <div className="container---main">
          <motion.div
            className="container---m"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <div className="customer-quote-wrapper">
              <div>
                <div className="heading-three">Introduction</div>
                <p>
                  Studios20 (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) respects your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our influencer marketing platform and services.
                </p>
              </div>

              <div>
                <div className="heading-three">Information We Collect</div>
                <p className="bold-text">Personal Information</p>
                <p>
                  When you register as a brand or creator, we collect: name, email address, business information, social media handles, payment information, and profile details.
                </p>
                <p className="bold-text">Social Media Data</p>
                <p>
                  For creators: follower counts, engagement metrics, audience demographics, and content performance data from connected social accounts.
                </p>
                <p className="bold-text">Usage Data</p>
                <p>
                  We collect information about how you interact with our platform, including IP address, browser type, pages visited, and campaign activity.
                </p>
              </div>

              <div>
                <div className="heading-three">How We Use Your Information</div>
                <ul>
                  <li>Provide and maintain our services</li>
                  <li>Match brands with relevant creators</li>
                  <li>Process payments and manage campaigns</li>
                  <li>Send important updates and notifications</li>
                  <li>Improve and optimize our platform</li>
                  <li>Comply with legal obligations</li>
                  <li>Prevent fraud and ensure platform security</li>
                </ul>
              </div>

              <div>
                <div className="heading-three">Information Sharing</div>
                <p>
                  We share information only when necessary:
                </p>
                <ul>
                  <li><strong>With Campaign Partners:</strong> Brands and creators involved in campaigns</li>
                  <li><strong>Service Providers:</strong> Payment processors, analytics, hosting services</li>
                  <li><strong>Legal Requirements:</strong> When required by law or to protect rights</li>
                  <li><strong>Business Transfers:</strong> In connection with mergers or acquisitions</li>
                </ul>
                <p>
                  We never sell your personal information to third parties.
                </p>
              </div>

              <div>
                <div className="heading-three">Data Security</div>
                <p>
                  We implement industry-standard security measures including encryption, secure servers, and regular security audits. However, no method of transmission over the internet is 100% secure.
                </p>
              </div>

              <div>
                <div className="heading-three">Your Rights</div>
                <p>
                  You have the right to:
                </p>
                <ul>
                  <li>Access your personal information</li>
                  <li>Correct inaccurate data</li>
                  <li>Request deletion of your data</li>
                  <li>Object to certain processing activities</li>
                  <li>Data portability</li>
                  <li>Withdraw consent at any time</li>
                </ul>
                <p>
                  Contact us at privacy@studios20.com to exercise these rights.
                </p>
              </div>

              <div>
                <div className="heading-three">Cookies and Tracking</div>
                <p>
                  We use cookies and similar technologies to improve user experience, analyze usage, and personalize content. You can control cookie preferences through your browser settings.
                </p>
              </div>

              <div>
                <div className="heading-three">Third-Party Links</div>
                <p>
                  Our platform may contain links to third-party websites. We are not responsible for the privacy practices of these sites. Please review their privacy policies separately.
                </p>
              </div>

              <div>
                <div className="heading-three">Children&apos;s Privacy</div>
                <p>
                  Our services are not intended for users under 18 (or under 13 without parental consent for creators). We do not knowingly collect information from children.
                </p>
              </div>

              <div>
                <div className="heading-three">International Users</div>
                <p>
                  Your information may be transferred to and processed in countries outside your residence. We ensure appropriate safeguards are in place for international data transfers.
                </p>
              </div>

              <div>
                <div className="heading-three">Changes to This Policy</div>
                <p>
                  We may update this Privacy Policy periodically. We will notify you of significant changes via email or platform notification. Continued use of our services constitutes acceptance of the updated policy.
                </p>
              </div>

              <div>
                <div className="heading-three">Contact Us</div>
                <p>
                  Questions about this Privacy Policy? Contact us at:
                </p>
                <p>
                  Email: privacy@studios20.com<br />
                  Address: Studios20 Inc., Legal Department<br />
                  We will respond to privacy inquiries within 30 days.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
