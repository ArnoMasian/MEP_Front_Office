"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

import homeHoverImage from "/public/assets/icons/home_dark.png";

const Nav = () => {
  const { data: session } = useSession();

  const [providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const [isHomeButtonHovered, setIsHomeButtonHovered] = useState(false);

  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders();

      setProviders(response);
    };
    setUpProviders();
  }, []);

  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <div className="flex gap-2 flex-center">
        <Link href="/" className="flex gap-2 flex-center ">
          <Image
            src={
              isHomeButtonHovered ? homeHoverImage : "/assets/icons/home.png"
            }
            alt="Mep Logo"
            width={40}
            height={40}
            className="sm:hidden"
            onMouseEnter={() => setIsHomeButtonHovered(true)}
            onMouseLeave={() => setIsHomeButtonHovered(false)}
          />
          <p className="logo_text main_btn">Home</p>
        </Link>

        <Link href="/all-employees" className="main_btn">
          All Employees
        </Link>
      </div>

      {/* Desktop Navigation */}
      <div className="sm:flex hidden">
        <div className="flex gap-3 md:gap-5">
          {/* <Link href="/request" className="black_btn mr-5">
            Request
          </Link> */}
        </div>
        {session?.user ? (
          <div className="flex gap-3 md:gap-5">
            <button type="button" onClick={signOut} className="outline_btn">
              Logout
            </button>

            <div>
              <Image
                src={session?.user.image}
                width={37}
                height={37}
                className="rounded-full"
                alt="profile"
              />
            </div>
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className="outline_btn "
                >
                  Login
                </button>
              ))}
          </>
        )}
      </div>

      {/* Mobile Navigation */}

      <div className="sm:hidden flex relative z-10">
        {session?.user ? (
          <div className="flex">
            <Image
              src={session?.user.image}
              width={37}
              height={37}
              className="rounded-full"
              alt="profile"
              onClick={() => setToggleDropdown((prev) => !prev)}
            />
            {toggleDropdown && (
              <div className="dropdown ">
                <Link
                  href="/"
                  className="dropdown_link outline_btn"
                  onClick={() => setToggleDropdown(false)}
                >
                  Home
                </Link>

                <Link
                  href="/all-employees"
                  className="dropdown_link outline_btn"
                  onClick={() => setToggleDropdown(false)}
                >
                  All Employees
                </Link>

                {/* <Link
                  href="/request"
                  className="dropdown_link outline_btn"
                  onClick={() => setToggleDropdown(false)}
                >
                  Request
                </Link> */}

                <button
                  type="button"
                  onClick={() => {
                    setToggleDropdown(false);
                    signOut();
                  }}
                  className="mt-5 w-full black_btn"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className="outline_btn"
                >
                  Login
                </button>
              ))}
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;
