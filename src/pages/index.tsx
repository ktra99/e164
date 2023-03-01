import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { motion, Transition, Variants } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const navigation = [
  { name: "Hem", href: "/" },
  { name: "Nummer", href: "#" },
  { name: "Om oss", href: "#" },
  { name: "Kontakta oss", href: "#" },
  { name: "Priser", href: "#" },
];

const transition: Transition = {
  duration: 0.5,
  ease: "easeInOut",
};

const variants: Variants = {
  initial: {
    y: 40,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: transition,
  },
  exit: {
    y: 40,
    opacity: 0,
    transition: transition,
  },
};

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <>
      <header>
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
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
                className="text-sm font-semibold leading-6 text-gray-900"
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
          <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
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
                      className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
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
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20">
        <div className="mx-auto max-w-7xl pt-10 pb-24 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:py-40 lg:px-8">
          <div className="px-6 lg:px-0 lg:pt-4">
            <div className="mx-auto max-w-2xl">
              <div className="max-w-lg">
                <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  E164
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  E164 tillhandahåller och förser operatör inom Sverige med
                  telefonnummer i samtliga nät. Vi har funnits på marknaden sen
                  2006.
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <a
                    href="#"
                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Våra priser
                  </a>
                  <a
                    href="#"
                    className="text-sm font-semibold leading-6 text-gray-900"
                  >
                    Om oss <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-20 sm:mt-24 md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0 lg:w-screen">
            <div
              className="absolute inset-y-0 right-1/2 -z-10 -mr-10 w-[200%] skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 md:-mr-20 lg:-mr-36"
              aria-hidden="true"
            />
            <div className="shadow-lg md:rounded-3xl">
              <div className="bg-indigo-500 [clip-path:inset(0)] md:[clip-path:inset(0_round_theme(borderRadius.3xl))] flex items-center justify-center">
                <motion.img
                  variants={variants}
                  initial="initial"
                  whileInView="animate"
                  exit="exit"
                  src="./floating-phone.png"
                  alt="floating phone"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
      </div>
      <div className="overflow-hidden bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:ml-auto lg:pt-4 lg:pl-4">
              <div className="lg:max-w-lg">
                <h2 className="text-base font-semibold leading-7 text-indigo-600">
                  Beställ nummer
                </h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Allt du behöver för att komma igång
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Vi tillhandahåller mobil, fastnät, och virtuella nummer över
                  hela Europa. Vi strävar efter att göra telekommunikation
                  ryggraden i varje bransch, ett nummer åt gången. Om du precis
                  öppnar dörrarna eller expanderar internationellt, inget
                  företag ska behöva oroa sig över deras kommunikationslösning.
                </p>
              </div>
            </div>
            <div className="flex items-start justify-end lg:order-first">
              <div className="w-[48rem] max-w-none shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]">
                <img
                  src="./standing.jpg"
                  alt="standing"
                  width={2432}
                  height={1442}
                  className="rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto my-24 max-w-7xl sm:mt-40 sm:px-6 lg:px-8">
        <div className="relative isolate overflow-hidden bg-indigo-500 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
          <h2 className="mx-auto max-w-2xl text-4xl font-bold tracking-tight text-white">
            Har du några frågor?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-white">
            Skicka iväg en förfrågan som återkommer vi direkt!
          </p>
          <div className="mt-10 flex justify-center">
            <a
              href="#"
              className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Kontakta oss
            </a>
          </div>
        </div>
      </div>
      <footer className="bg-white">
        <div className="mx-auto max-w-7xl overflow-hidden py-20 px-6 sm:py-24 lg:px-8">
          <p className="mt-10 text-center text-xs leading-5 text-gray-500">
            &copy; 2020 Your Company, Inc. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
