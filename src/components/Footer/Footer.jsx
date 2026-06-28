import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "../index";

const Footer = () => {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link to="/" className="inline-flex items-center">
              <Logo width="110px" />
            </Link>

            <p className="mt-5 text-sm leading-6 text-slate-400">
              A modern blogging platform where you can create, manage, and
              explore content with a clean and intuitive experience.
            </p>

            <p className="mt-8 text-sm text-slate-500">
              © {new Date().getFullYear()} Sahil Mj. All rights reserved.
            </p>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">
              Company
            </h3>

            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="transition-colors duration-200 hover:text-white"
                >
                  Features
                </Link>
              </li>

              <li>
                <Link
                  to="/"
                  className="transition-colors duration-200 hover:text-white"
                >
                  Pricing
                </Link>
              </li>

              <li>
                <Link
                  to="/"
                  className="transition-colors duration-200 hover:text-white"
                >
                  Affiliate Program
                </Link>
              </li>

              <li>
                <Link
                  to="/"
                  className="transition-colors duration-200 hover:text-white"
                >
                  Press Kit
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">
              Support
            </h3>

            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="transition-colors duration-200 hover:text-white"
                >
                  Account
                </Link>
              </li>

              <li>
                <Link
                  to="/"
                  className="transition-colors duration-200 hover:text-white"
                >
                  Help
                </Link>
              </li>

              <li>
                <Link
                  to="/"
                  className="transition-colors duration-200 hover:text-white"
                >
                  Contact Us
                </Link>
              </li>

              <li>
                <Link
                  to="/"
                  className="transition-colors duration-200 hover:text-white"
                >
                  Customer Support
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">
              Legal
            </h3>

            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="transition-colors duration-200 hover:text-white"
                >
                  Terms & Conditions
                </Link>
              </li>

              <li>
                <Link
                  to="/"
                  className="transition-colors duration-200 hover:text-white"
                >
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link
                  to="/"
                  className="transition-colors duration-200 hover:text-white"
                >
                  Licensing
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
