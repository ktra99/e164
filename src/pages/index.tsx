import { Dialog } from "@headlessui/react";
import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  DevicePhoneMobileIcon,
} from "@heroicons/react/20/solid";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import { useRouter } from "next/router";

export const navigation = [
  { name: "Hem", href: "/" },
  { name: "Beställ nummer", href: "/order" },
  { name: "Om oss", href: "/about" },
  { name: "Kontakta oss", href: "/contact" },
];

export const features = [
  {
    name: "Mobilnummer",
    description:
      "Nummer för mobiltelefoner som stödjer SMS och kan registreras på SIM kort",
    icon: DevicePhoneMobileIcon,
  },
  {
    name: "Fastnätsnummer",
    description: "Nummer för hemmet och företaget, skalbart och prisvärt.",
    icon: ArrowPathIcon,
  },
  {
    name: "Virtuella nummer",
    description:
      "Nummer för växeln, dialern eller datorn. Ta med dig telekom dit du behöver det.",
    icon: CloudArrowUpIcon,
  },
];

const benefits = [
  {
    name: "Kommunikation",
    description:
      "Låt era kunder nå er lätt med hjälp att ha telefonnummer där det behövs, vi på E164 hjäler er.",
  },
  {
    name: "Enkelhet",
    description: "E164 förser er med nummer när ni behöver det, utan krångel.",
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
            <span className="sr-only">E164</span>
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
              <span className="sr-only">E164</span>
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
      <div className="pb-24 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="py-12 sm:py-24 sm:h-[60rem]">
            <div className="sm:ml-12">
              <div className="w-48 h-48 rounded-full bg-white relative z-20 hidden sm:flex items-center justify-center">
                <img src="/logo.png" alt="logo" className="p-4 h-24 w-auto" />
              </div>
              <img
                src="datacenter.jpg"
                alt="data center"
                className="w-full sm:w-[45rem] sm:ml-24 sm:-mt-36 rounded-lg relative z-10"
              />
              <div className="relative bg-white w-full sm:max-w-[36rem] p-8 sm:rounded-lg lg:ml-[30rem] lg:-mt-48 z-20 transition-all duration-300">
                <h2 className="text-[#494399] text-4xl font-bold">
                  Nummer för alla tillfällen
                </h2>
                <p className="text-lg leading-[1.75rem] mt-6">
                  E164 tillhandahåller telefonnummer åt företag som vill stärka
                  deras portfölj med telekom. Behöver ni mobilnummer,
                  fastnätsnummer, eller virtuella nummer så är E164 rätt företag
                  för er!
                </p>
                <a
                  href="#features"
                  className="px-8 py-3 mt-12 sm:mt-24 inline-block text-lg rounded-full bg-[#494399] text-white uppercase font-bold tracking-wider"
                >
                  Läs mer
                </a>
              </div>
              <div className="w-64 h-[30rem] bg-[#72EFE9] relative -mt-[60rem] ml-24 hidden sm:block" />
            </div>
          </div>
          <div className="mt-12 sm:mt-64 lg:mt-36" id="features">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-base font-semibold leading-7 text-[#72EFE9]">
                Telefonnummer
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Inom Europa & omvärlden
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                {features.map((feature) => (
                  <div key={feature.name} className="flex flex-col text-xl">
                    <dt className="flex items-center gap-x-3 font-semibold leading-7 text-white">
                      <feature.icon
                        className="h-5 w-5 flex-none text-[#72EFE9]"
                        aria-hidden="true"
                      />
                      {feature.name}
                    </dt>
                    <dd className="mt-4 flex flex-auto flex-col leading-7 text-white/80">
                      <p className="flex-auto">{feature.description}</p>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="mt-16 lg:mt-24 flex items-center justify-center">
              <Link
                href="/order"
                className="text-lg text-[#494399] lg:max-w-none max-w-2xl lg:w-auto w-full font-semibold leading-6 bg-[#72EFE9] tracking-wider py-4 px-8 rounded-full"
              >
                Beställ nummer
              </Link>
            </div>
          </div>
          <div className="my-36">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              <div className="lg:ml-auto lg:pt-4 lg:pl-4">
                <div className="lg:max-w-lg">
                  <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    Sammankoppla ditt företag
                  </p>
                  <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-white lg:max-w-none">
                    {benefits.map((feature, index) => (
                      <div key={feature.name} className="relative pl-9 text-xl">
                        <dt className="inline font-semibold text-white">
                          <span
                            className="absolute top-1 left-1 h-5 w-5 text-[#72EFE9]"
                            aria-hidden="true"
                          >
                            {index + 1}
                          </span>
                          {feature.name} -
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
          {/* <div className="pt-12 pb-24 lg:flex lg:items-center lg:justify-between">
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
          </div> */}
          <div className="w-24 h-24 rounded-full bg-[#72EFE9] top-6 left-[70rem] relative z-20 lg:block hidden" />
          <div className="flex lg:items-center lg:space-x-12 text-white my-24 lg:my-48 lg:max-w-none lg:flex-row flex-col max-w-3xl mx-auto lg:space-y-0 space-y-12">
            <h2 className="text-4xl lg:text-7xl font-bold">
              Snabbhet och enkelhet
            </h2>
            <p className="text-2xl leading-[2rem] lg:max-w-xl">
              E164 fokuserar på enkelhet när vi presenterar våra lösningar för
              telefonnummer inom samtliga branscher. Behöver ni nya nummer eller
              svar på frågor, hör av er direkt!
            </p>
          </div>
          <div className="flex lg:flex-row flex-col-reverse lg:max-w-none max-w-3xl mx-auto relative">
            <div className="bg-white lg:w-1/2 lg:min-h-fit py-12 px-6 lg:py-0 lg:px-12 flex flex-col justify-center">
              <p className="text-2xl font-semibold leading-10 text-gray-700">
                {" "}
                Hantera kommunikation på ett företag kan vara en stor uppgift,
                E164 gör det lättare. Oavsett fråga eller idé så har vi alltid
                ett svar!
              </p>
              <div className="mt-16 lg:mt-24">
                <Link
                  href="/contact"
                  className="text-lg text-[#494399] lg:max-w-none max-w-2xl lg:w-auto w-full font-semibold leading-6 bg-[#72EFE9] tracking-wider py-4 px-8 rounded-full"
                >
                  Kontakta oss
                </Link>
              </div>
            </div>
            <img src="spiral.jpg" alt="spiral" className="lg:w-1/2" />
            <div className="bg-[#72EFE9] sm:absolute sm:-right-10 lg:-right-20 lg:-bottom-20 lg:top-auto sm:top-20 w-full sm:w-[28rem]">
              <p className="text-lg sm:text-4xl font-bold sm:py-6 sm:px-8 p-4 leading-relaxed text-[#494399]">
                Nya mobilnummer, virtuella nummer, eller fastnätsnummer, oavsett
                behov så hjälper vi er.
              </p>
            </div>
          </div>
          <img
            src="phone.jpg"
            alt="phone"
            className="mt-24 lg:mt-48 w-full lg:max-w-none max-w-3xl lg:w-[45rem] mx-auto rounded-lg relative z-10"
          />
          <div className="w-12 h-12 rounded-full bg-[#72EFE9] top-24 relative z-20 lg:block hidden" />
          <div className="bg-[#72EFE9] h-48 w-full -mt-96 rounded-lg relative lg:block hidden" />
          <div className="mt-12 lg:mt-80 py-12">
            <h2 className="text-white text-4xl font-bold text-center">
              Hanterat nummer sen 2011
            </h2>
            <p className="text-2xl leading-[3rem] mt-6 text-center text-white">
              E164 har arbetat inom telekom i över 20 år. Vi har nummer i alla
              rikt områden och hjälper er komma igång.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <Link
              href="/contact"
              className="text-lg text-[#494399] lg:max-w-none max-w-2xl lg:w-auto w-full font-semibold leading-6 bg-[#72EFE9] tracking-wider py-4 px-8 rounded-full"
            >
              Kontakta oss
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
