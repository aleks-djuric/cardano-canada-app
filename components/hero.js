export default function Hero() {
  return (
    <div className="flex">
      <div className="flex max-w-7xl mx-auto ">
        <div className="w-full pt-16 pb-20 text-center lg:w-1/2 lg:py-48 lg:text-left px-4 sm:px-8 xl:pr-16">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl xl:text-6xl">
            <span className="block">Welcome to</span>{' '}
            <span className="block text-red-600 ">Cardano Canada</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
            Click below to start learning about the Cardano blockchain or head
            over to our blockchain visualizer to see it in action.
          </p>
          <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
            <div className="rounded-md shadow">
              <a
                href="/learn"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 md:py-4 md:text-lg md:px-10"
              >
                Learn
              </a>
            </div>
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              <a
                href="/visualize"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-red-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
              >
                Visualize
              </a>
            </div>
          </div>
        </div>
        <div className="hidden py-16 px-4 lg:block lg:w-1/2 sm:px-8">
          <div className="h-full rounded-2xl overflow-hidden shadow-lg">
            <img
              className="h-full object-cover"
              src="/assets/images/toronto-skyline0.png"
              alt=""
            />
          </div>
        </div>
      </div>

    </div>
  )
}
