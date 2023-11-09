"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/images/AKQA-Logo.svg";

export default function Navbar() {
  return (
    <>
      <header className="bg-white">
        <nav
          className="mx-auto flex max-w-full items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1 md:flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">AKQA</span>
              <Image className="h-8 w-auto" src={logo} alt="logo"></Image>
            </Link>
          </div>

          <div className="hidden lg:flex lg:gap-x-12 md:flex md:gap-x-12">
            <Link
              href="/"
              className="text-sm font-semibold leading-6 text-gray-900 hover:underline hover:underline-offset-1"
            >
              Explore
            </Link>
            <Link
              href="/"
              className="text-sm font-semibold leading-6 text-gray-900 hover:underline hover:underline-offset-1"
            >
              Men
            </Link>
            <Link
              href="/women"
              className="text-sm font-semibold leading-6 text-gray-900 hover:underline hover:underline-offset-1"
            >
              Women
            </Link>

            <Link
              href="/"
              className="text-sm font-semibold leading-6 text-gray-900 hover:underline hover:underline-offset-1"
            >
              Golf
            </Link>

            <Link
              href="/"
              className="text-sm font-semibold leading-6 text-gray-900 hover:underline hover:underline-offset-1"
            >
              Leather Goods
            </Link>

            <Link
              href="/"
              className="text-sm font-semibold leading-6 text-gray-900 hover:underline hover:underline-offset-1"
            >
              Sale
            </Link>
          </div>

          <div className="hidden lg:flex lg:flex-1 md-flex md-flex-1 lg:justify-end md:justify-end">
            <a
              href="/"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
      </header>

      {/* Info */}
      <section className="relative isolate overflow-hidden bg-white px-6 py-8 sm:py-8 lg:px-8 max-w-full">
        <div className="absolute inset-0 -z-10 opacity-20"></div>
        <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] bg-white sm:mr-28 lg:mr-0 xl:mr-16 "></div>
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <figure className="mx-10">
            <blockquote className="text-center text-4xl font-semibold text-gray-900 sm:text-2xl ">
              <h1>Women</h1>
            </blockquote>
            <p className="max-w-2xl text-gray-200 text-center mx-auto lg:text-base sm:text-sm">
              Fashionable, comfortable, and expertly crafted - the women&apos;s
              shoe collection takes Scandinavian design and marries it with
              premium materials. From business formal to casual sneakers, heels
              to flats, there&apos;s something for everyone.
            </p>
          </figure>
        </div>
      </section>
    </>
  );
}
