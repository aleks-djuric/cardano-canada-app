import { SearchIcon } from '@heroicons/react/solid'

const categories = [
  "All",
  "Popular",
  "Guides",
  "News",
  "Opinion",
  "Advice",
  "Data",
]

export default function CategorySelector() {
  return (
    <div className="max-w-7xl mx-auto mt-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 mb-10 sm:text-5xl xl:text-6xl">
        <span className="block">Learn</span>{' '}
      </h1>
      <div className="grid md:grid-cols-2">
        <div className="flex flex-nowrap space-x-8 overflow-x-auto">
          {categories.map((category) => (
            <button className="text-gray-600 hover:text-gray-900">
              {category}
            </button>
          ))}
        </div>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <SearchIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
          </div>
          <input
            id="search"
            name="search"
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-xl leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-red-600 focus:border-red-600 sm:text-sm"
            placeholder="Search Posts"
            type="search"
          />
        </div>
      </div>
    </div>
  )
}
