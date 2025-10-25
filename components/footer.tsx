import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="footer">
      <div className="container---main">
        <div className="footer-wrapper">
          <div
            id="w-node-f82f83d3-ca31-c88f-ddaf-ee0192867be6-55b37658"
            className="footer-logo-address-wrapper"
          >
            <div className="footer-logo-address">
              <Link href="/" className="w-inline-block">
                <Image
                  src="https://cdn.prod.website-files.com/66ed128770c5d5642441d49b/6710b47f9620afb0d79b04e2_AI%20Marketing%20agency%20x%20Content%20Creation%20Studios20.svg"
                  alt="Studios20"
                  width={148}
                  height={32}
                  className="footer-logo-image"
                />
              </Link>
              <div className="footer-address-contact">
                <div className="large-text">
                  The leading micro-influencer
                  <br />
                  marketing platform.
                  <br />
                  Scale your brand with
                  <br />
                  authentic creator content.
                </div>
                <div className="footer-contact-links">
                  <Link href="#" className="text-white no-underline">
                    hello@studios20.com
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div
            id="w-node-dd2a9f20-82de-a3cb-7765-6a02e5d50bfd-55b37658"
            className="footer-menu-details"
          >
            <div className="footer-menus-wrapper">
              <div className="footer-menu">
                <div className="uppercase-text muted">Services</div>
                <div className="footer-menu-links">
                  <Link href="/tiktok" className="footer-link">
                    TikTok Creators
                  </Link>
                  <Link href="/instagram" className="footer-link">
                    Instagram Influencers
                  </Link>
                  <Link href="/youtube" className="footer-link">
                    YouTube Partnerships
                  </Link>
                  <Link href="/pricing" className="footer-link">
                    Pricing
                  </Link>
                </div>
              </div>

              <div className="footer-columns-wrapper">
                <div className="footer-menu">
                  <div className="uppercase-text muted">Results</div>
                  <div className="footer-menu-links">
                    <Link href="/case-studies" className="footer-link">
                      Case Studies
                    </Link>
                    <Link href="/clients" className="footer-link">
                      Clients
                    </Link>
                    <Link href="/testimonials" className="footer-link">
                      Testimonials
                    </Link>
                  </div>
                </div>

                <div className="footer-menu">
                  <div className="uppercase-text muted">How It Works</div>
                  <div className="footer-menu-links">
                    <Link href="/for-brands" className="footer-link">
                      For Brands
                    </Link>
                    <Link href="/for-creators" className="footer-link">
                      For Creators
                    </Link>
                  </div>
                </div>

                <div className="footer-menu">
                  <div className="uppercase-text muted">Company</div>
                  <div className="footer-menu-links">
                    <Link href="/about" className="footer-link">
                      About Us
                    </Link>
                    <Link href="/blog" className="footer-link">
                      Blog
                    </Link>
                    <Link href="/press" className="footer-link">
                      Press
                    </Link>
                    <Link href="/get-started" className="footer-link">
                      Contact
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="horizontal-line white"></div>

            <div className="social-links">
              <div className="social-link-wrapper">
                <Link
                  href="https://instagram.com"
                  target="_blank"
                  className="social-link w-inline-block"
                >
                  <Image
                    src="/webflow/images/icon-social-instagram-white.svg"
                    loading="lazy"
                    alt="Instagram logo"
                    width={24}
                    height={24}
                  />
                  <div className="small-text">Instagram</div>
                </Link>
              </div>

              <div className="social-link-wrapper">
                <Link
                  href="https://tiktok.com"
                  target="_blank"
                  className="social-link w-inline-block"
                >
                  <Image
                    src="/webflow/images/icon-social-facebook-white.svg"
                    loading="lazy"
                    alt="TikTok logo"
                    width={24}
                    height={24}
                  />
                  <div className="small-text">TikTok</div>
                </Link>
              </div>

              <div className="social-link-wrapper">
                <Link
                  href="https://linkedin.com"
                  target="_blank"
                  className="social-link w-inline-block"
                >
                  <Image
                    src="/webflow/images/icon-social-linkedin-white.svg"
                    loading="lazy"
                    alt="LinkedIn logo"
                    width={24}
                    height={24}
                  />
                  <div className="small-text">LinkedIn</div>
                </Link>
              </div>

              <div className="social-link-wrapper">
                <Link
                  href="https://youtube.com"
                  target="_blank"
                  className="social-link w-inline-block"
                >
                  <Image
                    src="/webflow/images/icon-social-youtube-white.svg"
                    loading="lazy"
                    alt="YouTube logo"
                    width={24}
                    height={24}
                  />
                  <div className="small-text">YouTube</div>
                </Link>
              </div>
            </div>

            <div className="footer-copyright-wrapper">
              <div
                id="w-node-_8ad45184-dab3-d0ea-436f-e134c7bb0371-55b37658"
                className="footer-copyright-text"
              >
                <div
                  id="w-node-a79342c4-a42c-35c2-9966-9a605c476d37-55b37658"
                  className="small-text muted"
                >
                  © 2025 Studios20. All rights reserved. •{" "}
                  <Link href="/privacy-policy" className="text-link">
                    Privacy Policy
                  </Link>{" "}
                  •{" "}
                  <Link href="/terms-of-service" className="text-link">
                    Terms of Service
                  </Link>
                </div>
              </div>
              <Link
                href="#Top"
                id="w-node-_71d912bc-ffa8-61b4-3233-e23aff7635db-55b37658"
                className="top-link w-inline-block"
              >
                <Image
                  src="/webflow/images/interface-icon-arrow-up-small-white.svg"
                  alt="Arrow up icon"
                  width={12}
                  height={12}
                />
                <div className="small-text">Back to Top</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
