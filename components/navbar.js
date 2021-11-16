import { useRouter } from 'next/router'

import { Fragment } from 'react'
import { Disclosure, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

export default function Navbar() {
  const router = useRouter();
  return (
    <Disclosure as="nav" className="bg-white">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-20">
              {/* logo */}
              <div className="flex">
                <a
                  role="button"
                  href="/"
                  className="flex items-center space-x-3 text-red-600 hover:text-red-700"
                >
                  <img
                    className="block h-12 w-auto"
                    src="/assets/images/cardano-canada-logo.png"
                    alt="Cardano Canada"
                  />
                  <span className="hidden text-lg sm:block">
                    Cardano Canada
                  </span>
                </a>
              </div>
              {/* navigation items */}
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <a
                  role="button"
                  href="/learn"
                  className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                    router.asPath === "/learn"
                      ? "border-red-600 text-gray-900"
                      : "border-transparent text-gray-600 hover:border-gray-300 hover:text-gray-700"
                    }`}
                >
                  Learn
                </a>
                <a
                  role="button"
                  href="/visualize"
                  className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                    router.asPath === "/visualize"
                      ? "border-red-600 text-gray-900"
                      : "border-transparent text-gray-600 hover:border-gray-300 hover:text-gray-700"
                    }`}
                >
                  Visualize
                </a>
              </div>
              {/* Mobile menu button */}
              <div className="sm:hidden flex items-center ">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>
          {/* dropdown menu */}
          <Disclosure.Panel className="sm:hidden">
            <div className="pt-2 pb-3 space-y-1">
              <Disclosure.Button
                as="a"
                href="/learn"
                className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
                  router.asPath === "/learn"
                    ? "bg-red-50 border-red-600 text-red-700"
                    : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700"
                  }`}
              >
                Learn
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/visualize"
                className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
                  router.asPath === "/visualize"
                    ? "bg-red-50 border-red-600 text-red-700"
                    : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700"
                  }`}
              >
                Visualize
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
