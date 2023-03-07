import { BuildingOffice2Icon, GlobeAltIcon } from "@heroicons/react/24/outline";
import { Navbar } from "@src/pages";
import Link from "next/link";

export default function Example() {
  return (
    <>
      <Navbar />
      <div className="relative isolate bg-white h-screen">
        <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
          <div className="relative px-6 pt-24 pb-20 sm:pt-32 lg:static lg:py-48 lg:px-8 mt-3">
            <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
              <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-[#494399] ring-1 ring-gray-900/10 lg:w-1/2"></div>
              <h2 className="text-3xl font-bold tracking-tight text-white">
                Kontakta oss
              </h2>
              <dl className="mt-10 space-y-4 text-base leading-7 text-white">
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <BuildingOffice2Icon
                      className="h-7 w-6 text-white"
                      aria-hidden="true"
                    />
                  </dt>
                  <dd>
                    Öppetider
                    <br />
                    Mån - Fre (08:00 - 16:00)
                    <br />
                    Lör - Sön (Stängt)
                  </dd>
                </div>
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <GlobeAltIcon
                      className="h-7 w-6 text-white"
                      aria-hidden="true"
                    />
                  </dt>
                  <dd>
                    <Link href="/">www.e164.com</Link>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          <form
            action="#"
            method="POST"
            className="px-6 pb-24 pt-20 sm:pb-32 lg:py-48 lg:px-8"
          >
            <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
              <div className="grid grid-cols-1 gap-y-6 gap-x-8 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Företagsnamn
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
                <div className="sm:col-span-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    E-post
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      autoComplete="email"
                      className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Message
                  </label>
                  <div className="mt-2.5">
                    <textarea
                      name="message"
                      id="message"
                      rows={4}
                      className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      defaultValue={""}
                    />
                  </div>
                </div>
              </div>
              <div className="mt-8 flex justify-end">
                <button
                  type="submit"
                  className="rounded-md bg-[#494399] px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#494399]"
                >
                  Skicka
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
