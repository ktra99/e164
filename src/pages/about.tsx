import { EnvelopeIcon } from "@heroicons/react/20/solid";
import { Navbar, Footer } from "@src/pages";

export default function Example() {
  return (
    <>
      <Navbar />
      <div className="overflow-hidden py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <h2 className="text-base font-semibold leading-7 text-[#72EFE9]">
                  E164
                </h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Om oss
                </p>
                <p className="mt-6 text-lg leading-8 text-white">
                  E164 tillhandahåller mobilnummer, fastnätsnummer, och
                  virtuella nummer för bruk inom Skandinavien och Europa. Vi har
                  varit aktiva sedan 2011 och älskar det vi gör, hjälpa våra
                  kunder utöka deras kommunikationsnätverk.
                </p>
              </div>
              <div className="flex gap-x-4 mt-6">
                <dt className="flex-none">
                  <EnvelopeIcon
                    className="h-7 w-6 text-white"
                    aria-hidden="true"
                  />
                </dt>
                <dd>
                  <a href="mailto:support@e164.se" className="text-white">
                    support@e164.se
                  </a>
                </dd>
              </div>
            </div>
            <img
              src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
              alt="Product screenshot"
              className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
              width={2432}
              height={1442}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
