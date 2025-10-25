"use client";

import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      {/* Announcement Bar */}
      <div className="announcement-bar">
        <div className="container---main">
          <div className="announcement-contents">
            <div className="announcement-text">
              🎉 Studios20 powers 500K+ successful influencer campaigns.{" "}
              <Link href="#get-started" className="text-white">
                Start yours today
              </Link>
            </div>
            <Image
              src="/webflow/images/interface-icon-cross-white.svg"
              alt="Cross icon"
              width={25}
              height={24}
              className="announcement-cross"
            />
          </div>
        </div>
      </div>

      <div id="Top" className="back-to-top-container"></div>

      {/* Navbar */}
      <div className="navbar-wrapper">
        <div
          data-animation="default"
          data-collapse="medium"
          data-duration="400"
          data-easing="ease"
          data-easing2="ease"
          role="banner"
          className="navbar w-nav"
        >
          <div className="navbar-row">
            <Link href="/" className="w-inline-block">
              <Image
                src="https://cdn.prod.website-files.com/66ed128770c5d5642441d49b/6710b47f9620afb0d79b04e2_AI%20Marketing%20agency%20x%20Content%20Creation%20Studios20.svg"
                loading="eager"
                width={137}
                height={30}
                alt="Studios20 Logo"
                className="nav-logo"
              />
            </Link>

            <div className="nav-links-wrapper">
              <nav role="navigation" className="nav-menu w-nav-menu">
                <div className="nav-links">
                  <Link href="/" className="mobile-logo w-inline-block">
                    <Image
                      src="https://cdn.prod.website-files.com/66ed128770c5d5642441d49b/6710b47f9620afb0d79b04e2_AI%20Marketing%20agency%20x%20Content%20Creation%20Studios20.svg"
                      loading="eager"
                      width={137}
                      height={30}
                      alt="Studios20 Logo"
                      className="mobile-logo-image"
                    />
                  </Link>

                  <Link href="/" className="nav-link w-nav-link">
                    Home
                  </Link>

                  {/* Platform Dropdown */}
                  <div
                    data-hover="true"
                    data-delay="200"
                    className="nav-link dropdown-wide-nav-link w-dropdown"
                  >
                    <div className="dropdown-toggle w-dropdown-toggle">
                      <div>Platform</div>
                      <Image
                        src="/webflow/images/icon-dropdown-arrow.svg"
                        alt="Down arrow icon"
                        width={12}
                        height={12}
                        className="dropdown-arrow"
                      />
                    </div>
                    <nav className="dropdown-wide-wrapper w-dropdown-list">
                      <div className="dropdown-wide">
                        <div className="dropdown-wide-menu">
                          <div className="bold-text dropdown-menu-heading">
                            Features
                          </div>
                          <div className="dropdown-links-grid">
                            <div className="dropdown-links">
                              <Link href="#" className="dropdown-link">
                                Campaign Automation
                              </Link>
                              <Link href="#" className="dropdown-link">
                                Creator Discovery
                              </Link>
                              <Link href="#" className="dropdown-link">
                                Product Seeding
                              </Link>
                              <Link href="#" className="dropdown-link">
                                Performance Analytics
                              </Link>
                              <Link href="#" className="dropdown-link">
                                Content Rights
                              </Link>
                              <Link href="#" className="dropdown-link">
                                UGC Library
                              </Link>
                              <Link href="#" className="dropdown-link">
                                Influencer Gifting
                              </Link>
                            </div>
                            <div className="dropdown-links">
                              <Link href="#" className="dropdown-link">
                                Brand Safety
                              </Link>
                              <Link href="#" className="dropdown-link">
                                ROI Tracking
                              </Link>
                              <Link href="#" className="dropdown-link">
                                Campaign Templates
                              </Link>
                              <Link href="#" className="dropdown-link">
                                API Access
                              </Link>
                              <Link href="#" className="dropdown-link">
                                Integrations
                              </Link>
                            </div>
                          </div>
                        </div>

                        <div className="dropdown-wide-menu">
                          <div className="bold-text dropdown-menu-heading">
                            Solutions
                          </div>
                          <div className="dropdown-links">
                            <Link href="#" className="dropdown-link">
                              Brand Awareness
                            </Link>
                            <Link href="#" className="dropdown-link">
                              Product Launch
                            </Link>
                            <Link href="#" className="dropdown-link">
                              E-commerce Growth
                            </Link>
                            <Link href="#" className="dropdown-link">
                              UGC Generation
                            </Link>
                            <Link href="#" className="dropdown-link">
                              Enterprise
                            </Link>
                          </div>
                        </div>

                        <div className="dropdown-wide-menu">
                          <div className="bold-text dropdown-menu-heading">
                            Resources
                          </div>
                          <div className="dropdown-links">
                            <Link href="#" className="dropdown-link">
                              Case Studies
                            </Link>
                            <Link href="#" className="dropdown-link">
                              Creator Network
                            </Link>
                            <Link href="#" className="dropdown-link">
                              Best Practices
                            </Link>
                            <Link href="#" className="dropdown-link">
                              API Documentation
                            </Link>
                            <Link href="#" className="dropdown-link">
                              Help Center
                            </Link>
                          </div>
                        </div>

                        <div className="dropdown-promo">
                          <Image
                            src="/webflow/images/dropdown-promo_compressed.webp"
                            loading="lazy"
                            width={668}
                            height={366}
                            alt="Campaign Dashboard"
                            sizes="100vw"
                            className="dropdown-promo-image"
                          />
                          <div>
                            Launch your first influencer campaign in minutes
                          </div>
                          <Link
                            href="#get-started"
                            className="button white w-inline-block"
                          >
                            <div>Get Started Free</div>
                          </Link>
                        </div>
                      </div>
                    </nav>
                  </div>

                  {/* Company Dropdown */}
                  <div
                    data-hover="true"
                    data-delay="200"
                    className="nav-link dropdown w-dropdown"
                  >
                    <div className="dropdown-toggle w-dropdown-toggle">
                      <div>Company</div>
                      <Image
                        src="/webflow/images/icon-dropdown-arrow.svg"
                        alt="Down arrow icon"
                        width={12}
                        height={12}
                        className="dropdown-arrow"
                      />
                    </div>
                    <nav className="dropdown-list-wrapper w-dropdown-list">
                      <div className="dropdown-list">
                        <div className="dropdown-list-menu">
                          <div>
                            <Link href="#about" className="dropdown-list-link w-dropdown-link">
                              About Us
                            </Link>
                            <Link href="#blog" className="dropdown-list-link w-dropdown-link">
                              Blog
                            </Link>
                            <Link href="#careers" className="dropdown-list-link w-dropdown-link">
                              Careers
                            </Link>
                            <Link href="#contact" className="dropdown-list-link w-dropdown-link">
                              Contact
                            </Link>
                            <Link href="#partners" className="dropdown-list-link w-dropdown-link">
                              Partners
                            </Link>
                          </div>
                        </div>
                      </div>
                    </nav>
                  </div>

                  <Link href="#pricing" className="nav-link w-nav-link">
                    Pricing
                  </Link>
                </div>
              </nav>
            </div>

            <div className="navbar-right-contents">
              <Link href="#login" className="nav-link nav-right-link">
                Sign In
              </Link>
              <Link href="#get-started" className="button nav-button w-inline-block">
                <div>Get Started</div>
              </Link>
              <div className="menu-button w-nav-button">
                <div className="menu-button-wrapper">
                  <div className="menu-button-horziontal">
                    <div className="menu-button-horizontal-line line-1"></div>
                    <div className="menu-button-horizontal-line line-2"></div>
                    <div className="menu-button-horizontal-line line-3"></div>
                  </div>
                  <div className="menu-button-cross">
                    <div className="menu-button-cross-line line-1"></div>
                    <div className="menu-button-cross-line line-2"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Image
          src="/webflow/images/icon-cross.svg"
          alt="Cross icon"
          width={24}
          height={24}
          className="nav-menu-close"
        />
      </div>
    </>
  );
}
