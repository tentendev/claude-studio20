"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
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

export default function TermsOfServicePage() {
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
              Terms of Service
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
                <div className="heading-three">Acceptance of Terms</div>
                <p>
                  By accessing and using Studios20&apos;s platform and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                </p>
              </div>

              <div>
                <div className="heading-three">Eligibility</div>
                <p>
                  You must be at least 18 years old to use our services. For creators under 18, parental or guardian consent is required. You represent that all information provided is accurate and complete.
                </p>
              </div>

              <div>
                <div className="heading-three">Account Registration</div>
                <ul>
                  <li>You must create an account to access our services</li>
                  <li>You are responsible for maintaining account security</li>
                  <li>One account per user/brand; no duplicate accounts</li>
                  <li>You must provide accurate and current information</li>
                  <li>You are responsible for all activity under your account</li>
                  <li>Notify us immediately of unauthorized account access</li>
                </ul>
              </div>

              <div>
                <div className="heading-three">Services Overview</div>
                <p className="bold-text">For Brands:</p>
                <ul>
                  <li>Access to creator network for influencer campaigns</li>
                  <li>Campaign management tools and analytics</li>
                  <li>Product fulfillment coordination</li>
                  <li>Content rights and licensing</li>
                </ul>
                <p className="bold-text">For Creators:</p>
                <ul>
                  <li>Access to brand partnership opportunities</li>
                  <li>Payment processing for completed campaigns</li>
                  <li>Campaign management dashboard</li>
                  <li>Performance analytics and insights</li>
                </ul>
              </div>

              <div>
                <div className="heading-three">Payment Terms</div>
                <p className="bold-text">For Brands:</p>
                <ul>
                  <li>Monthly platform fees as per selected plan</li>
                  <li>Additional costs for creator payments (if applicable)</li>
                  <li>Product costs for seeding campaigns</li>
                  <li>Fees are non-refundable unless otherwise stated</li>
                </ul>
                <p className="bold-text">For Creators:</p>
                <ul>
                  <li>Payment upon campaign completion and approval</li>
                  <li>Typical payment timeframe: 30 days after content goes live</li>
                  <li>Minimum view/engagement requirements must be met</li>
                  <li>Payment methods: PayPal, Venmo, direct deposit</li>
                </ul>
              </div>

              <div>
                <div className="heading-three">Content and Intellectual Property</div>
                <p className="bold-text">Creator-Generated Content:</p>
                <ul>
                  <li>Creators retain ownership of their content</li>
                  <li>Brands receive usage rights as specified in campaign terms</li>
                  <li>Content must comply with FTC disclosure requirements</li>
                  <li>Content must be original and not infringe third-party rights</li>
                </ul>
                <p className="bold-text">Platform Content:</p>
                <p>
                  Studios20 owns all platform technology, features, and branding. You may not copy, modify, or distribute our platform content without permission.
                </p>
              </div>

              <div>
                <div className="heading-three">User Conduct</div>
                <p>
                  You agree NOT to:
                </p>
                <ul>
                  <li>Provide false or misleading information</li>
                  <li>Use fake followers, bots, or engagement manipulation</li>
                  <li>Violate platform guidelines or brand requirements</li>
                  <li>Harass, abuse, or harm other users</li>
                  <li>Attempt to hack or disrupt platform services</li>
                  <li>Violate any applicable laws or regulations</li>
                  <li>Circumvent platform fees or payment systems</li>
                </ul>
              </div>

              <div>
                <div className="heading-three">FTC Compliance</div>
                <p>
                  All creators must comply with FTC guidelines for sponsored content disclosure. This includes clear and conspicuous disclosure of brand partnerships using #ad, #sponsored, or similar tags as required by law.
                </p>
              </div>

              <div>
                <div className="heading-three">Termination</div>
                <p>
                  We reserve the right to suspend or terminate accounts that:
                </p>
                <ul>
                  <li>Violate these Terms of Service</li>
                  <li>Engage in fraudulent activity</li>
                  <li>Provide fake followers or engagement</li>
                  <li>Fail to deliver on campaign commitments</li>
                  <li>Harm the platform or other users</li>
                </ul>
                <p>
                  You may cancel your account at any time. Upon termination, all rights and licenses granted to you will cease.
                </p>
              </div>

              <div>
                <div className="heading-three">Disclaimers</div>
                <p>
                  Studios20 is provided &quot;as is&quot; without warranties of any kind. We do not guarantee:
                </p>
                <ul>
                  <li>Campaign results or specific ROI</li>
                  <li>Uninterrupted or error-free service</li>
                  <li>Creator performance or content quality</li>
                  <li>Compatibility with all devices or browsers</li>
                </ul>
              </div>

              <div>
                <div className="heading-three">Limitation of Liability</div>
                <p>
                  To the maximum extent permitted by law, Studios20 shall not be liable for indirect, incidental, special, consequential, or punitive damages arising from your use of our services. Our total liability shall not exceed the fees paid by you in the preceding 12 months.
                </p>
              </div>

              <div>
                <div className="heading-three">Indemnification</div>
                <p>
                  You agree to indemnify and hold harmless Studios20 from any claims, damages, or expenses arising from your use of our services, violation of these terms, or infringement of third-party rights.
                </p>
              </div>

              <div>
                <div className="heading-three">Dispute Resolution</div>
                <p>
                  Any disputes shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association. You waive the right to participate in class action lawsuits.
                </p>
              </div>

              <div>
                <div className="heading-three">Governing Law</div>
                <p>
                  These Terms shall be governed by the laws of the State of Delaware, United States, without regard to conflict of law provisions.
                </p>
              </div>

              <div>
                <div className="heading-three">Changes to Terms</div>
                <p>
                  We reserve the right to modify these Terms at any time. We will notify users of significant changes via email or platform notification. Continued use after changes constitutes acceptance of the new terms.
                </p>
              </div>

              <div>
                <div className="heading-three">Contact Information</div>
                <p>
                  Questions about these Terms? Contact us at:
                </p>
                <p>
                  Email: legal@studios20.com<br />
                  Address: Studios20 Inc., Legal Department
                </p>
                <p>
                  See also our <Link href="/privacy-policy" className="text-link">Privacy Policy</Link> for information about how we handle your data.
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
