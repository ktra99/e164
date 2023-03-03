import { Dialog } from "@headlessui/react";
import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  LockClosedIcon,
} from "@heroicons/react/20/solid";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import { useRouter } from "next/router";

const navigation = [
  { name: "Hem", href: "/" },
  { name: "Beställ nummer", href: "/order" },
  { name: "Om oss", href: "/about" },
  { name: "Kontakta oss", href: "/contact" },
];

const features = [
  {
    name: "Push to deploy",
    description:
      "Commodo nec sagittis tortor mauris sed. Turpis tortor quis scelerisque diam id accumsan nullam tempus. Pulvinar etiam lacus volutpat eu. Phasellus praesent ligula sit faucibus.",
    href: "#",
    icon: CloudArrowUpIcon,
  },
  {
    name: "SSL certificates",
    description:
      "Pellentesque enim a commodo malesuada turpis eleifend risus. Facilisis donec placerat sapien consequat tempor fermentum nibh.",
    href: "#",
    icon: LockClosedIcon,
  },
  {
    name: "Simple queues",
    description:
      "Pellentesque sit elit congue ante nec amet. Dolor aenean curabitur viverra suspendisse iaculis eget. Nec mollis placerat ultricies euismod ut condimentum.",
    href: "#",
    icon: ArrowPathIcon,
  },
];

export function Navbar() {
  const { route } = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="bg-white sticky top-0 z-40">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img className="h-8 w-auto" src="/logo.png" alt="" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={clsx(
                item.href === route
                  ? "text-[#494399]"
                  : "text-gray-900 hover:[#494399]",
                "text-sm font-semibold leading-6 transition duration-300"
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img className="h-8 w-auto" src="/logo.png" alt="" />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={clsx(
                      item.href === route
                        ? "text-[#494399]"
                        : "text-gray-900 hover:text-[#494399]",
                      "-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 transition duration-300"
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl overflow-hidden py-20 px-6 sm:py-24 lg:px-8">
        <nav
          className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12"
          aria-label="Footer"
        >
          {navigation.map((item) => (
            <div key={item.name} className="pb-6">
              <a
                href={item.href}
                className="text-sm leading-6 text-gray-600 hover:text-gray-900"
              >
                {item.name}
              </a>
            </div>
          ))}
        </nav>
        <p className="mt-20 text-center text-xs leading-5 text-gray-500">
          &copy; {new Date().getFullYear()} reserved. E164
        </p>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="bg-[#494399] pb-24 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="py-12 sm:py-24 sm:h-[60rem]">
            <div className="sm:ml-12">
              <div className="w-48 h-48 rounded-full bg-white relative z-20 hidden sm:flex items-center justify-center">
                <img src="/logo.png" alt="logo" className="p-4" />
              </div>
              <img
                src="datacenter.jpg"
                alt="data center"
                className="w-full sm:w-[45rem] sm:ml-24 sm:-mt-36 rounded-lg relative z-10"
              />
              <div className="relative bg-white w-full sm:max-w-[36rem] p-8 sm:rounded-lg lg:ml-[30rem] lg:-mt-48 z-20 transition-all duration-300">
                <h2 className="text-[#494399] text-4xl font-bold">E164</h2>
                <p className="text-lg leading-[1.5rem] mt-6">
                  E164 tillhandahåller och förser operatör inom Sverige med
                  telefonnummer i samtliga nät. Vi har funnits på marknaden sen
                  2006.
                </p>
                <button
                  type="button"
                  className="px-8 py-3 mt-12 sm:mt-24 text-lg rounded-full bg-[#494399] text-white uppercase font-bold tracking-wider"
                >
                  Learn more
                </button>
              </div>
              <div className="w-64 h-[30rem] bg-[#72EFE9] relative -mt-[60rem] ml-24 hidden sm:block" />
            </div>
          </div>
          <div className="sm:pt-36 lg:pt-0 pb-24">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-base font-semibold leading-7 text-[#72EFE9]">
                Deploy faster
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Everything you need to deploy your app
              </p>
              <p className="mt-6 text-lg leading-8 text-white">
                Quis tellus eget adipiscing convallis sit sit eget aliquet quis.
                Suspendisse eget egestas a elementum pulvinar et feugiat blandit
                at. In mi viverra elit nunc.
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                {features.map((feature) => (
                  <div key={feature.name} className="flex flex-col">
                    <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                      <feature.icon
                        className="h-5 w-5 flex-none text-[#72EFE9]"
                        aria-hidden="true"
                      />
                      {feature.name}
                    </dt>
                    <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-white/80">
                      <p className="flex-auto">{feature.description}</p>
                      <p className="mt-6">
                        <a
                          href={feature.href}
                          className="text-sm font-semibold leading-6 text-[#72EFE9]"
                        >
                          Learn more <span aria-hidden="true">→</span>
                        </a>
                      </p>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className="pt-12 pb-24">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              <div className="lg:ml-auto lg:pt-4 lg:pl-4">
                <div className="lg:max-w-lg">
                  <h2 className="text-base font-semibold leading-7 text-[#72EFE9]">
                    Deploy faster
                  </h2>
                  <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    A better workflow
                  </p>
                  <p className="mt-6 text-lg leading-8 text-white">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Maiores impedit perferendis suscipit eaque, iste dolor
                    cupiditate blanditiis ratione.
                  </p>
                  <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-white lg:max-w-none">
                    {features.map((feature) => (
                      <div key={feature.name} className="relative pl-9">
                        <dt className="inline font-semibold text-white">
                          <feature.icon
                            className="absolute top-1 left-1 h-5 w-5 text-[#72EFE9]"
                            aria-hidden="true"
                          />
                          {feature.name}
                        </dt>{" "}
                        <dd className="inline">{feature.description}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
              <div className="flex items-start justify-end lg:order-first">
                <img
                  src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
                  alt="Product screenshot"
                  className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-white/10 sm:w-[57rem]"
                  width={2432}
                  height={1442}
                />
              </div>
            </div>
          </div>
          <div className="pt-12 pb-24 lg:flex lg:items-center lg:justify-between">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to dive in?
              <br />
              Start your free trial today.
            </h2>
            <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
              <a
                href="#"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-[#494399] shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </a>
              <a
                href="#"
                className="text-sm font-semibold leading-6 text-[#72EFE9]"
              >
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <div className="w-24 h-24 rounded-full bg-[#72EFE9] top-6 left-[70rem] relative z-20 lg:block hidden" />
          <img
            src="phone.jpg"
            alt="phone"
            className="mt-24 w-[45rem] mx-auto rounded-lg relative z-10"
          />
          <div className="w-12 h-12 rounded-full bg-[#72EFE9] top-24 relative z-20 lg:block hidden" />
          <div className="bg-[#72EFE9] h-48 w-full -mt-96 rounded-lg relative" />
          <div className="mt-52 sm:mt-80 py-12">
            <h2 className="text-white text-4xl font-bold text-center">
              Hosting Datacenter
            </h2>
            <p className="text-2xl leading-[3rem] mt-6 text-center text-white">
              Pretium lectus quam id leo in vitae turpis. Mattis pellentesque id
              nibh tortor id. Nunc consequat interdum varius sit amet mattis
              vulputate enim nulla. Risus feugiat in ante metus dictum at tempor
              commodo.
            </p>
          </div>
          <form action="#" method="POST" className="lg:flex-auto">
            <div className="grid grid-cols-1 gap-y-6 gap-x-8 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="first-name"
                  className="block text-sm font-semibold leading-6 text-white"
                >
                  First name
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="last-name"
                  className="block text-sm font-semibold leading-6 text-white"
                >
                  Last name
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="budget"
                  className="block text-sm font-semibold leading-6 text-white"
                >
                  Budget
                </label>
                <div className="mt-2.5">
                  <input
                    id="budget"
                    name="budget"
                    type="text"
                    className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="website"
                  className="block text-sm font-semibold leading-6 text-white"
                >
                  Website
                </label>
                <div className="mt-2.5">
                  <input
                    type="url"
                    name="website"
                    id="website"
                    className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold leading-6 text-white"
                >
                  Message
                </label>
                <div className="mt-2.5">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    defaultValue={""}
                  />
                </div>
              </div>
            </div>
            <div className="mt-10">
              <button
                type="submit"
                className="block w-full text-lg rounded-md bg-white px-3.5 py-2.5 text-center font-semibold text-[#494399] shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Let&apos;s talk
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
