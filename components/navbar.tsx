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
              <Link href="/get-started" className="text-white">
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

                  {/* Services Dropdown */}
                  <div
                    data-hover="true"
                    data-delay="200"
                    className="nav-link dropdown w-dropdown"
                  >
                    <div className="dropdown-toggle w-dropdown-toggle">
                      <div>Services</div>
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
                            <Link href="/tiktok" className="dropdown-list-link w-dropdown-link">
                              TikTok Creators
                            </Link>
                            <Link href="/instagram" className="dropdown-list-link w-dropdown-link">
                              Instagram Influencers
                            </Link>
                            <Link href="/youtube" className="dropdown-list-link w-dropdown-link">
                              YouTube Partnerships
                            </Link>
                          </div>
                        </div>
                      </div>
                    </nav>
                  </div>

                  {/* How It Works Dropdown */}
                  <div
                    data-hover="true"
                    data-delay="200"
                    className="nav-link dropdown w-dropdown"
                  >
                    <div className="dropdown-toggle w-dropdown-toggle">
                      <div>How It Works</div>
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
                            <Link href="/for-brands" className="dropdown-list-link w-dropdown-link">
                              For Brands
                            </Link>
                            <Link href="/for-creators" className="dropdown-list-link w-dropdown-link">
                              For Creators
                            </Link>
                          </div>
                        </div>
                      </div>
                    </nav>
                  </div>

                  <Link href="/case-studies" className="nav-link w-nav-link">
                    Case Studies
                  </Link>

                  <Link href="/about" className="nav-link w-nav-link">
                    About
                  </Link>

                  <Link href="/pricing" className="nav-link w-nav-link">
                    Pricing
                  </Link>
                </div>
              </nav>
            </div>

            <div className="navbar-right-contents">
              <Link href="#login" className="nav-link nav-right-link">
                Sign In
              </Link>
              <Link href="/get-started" className="button nav-button w-inline-block">
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
