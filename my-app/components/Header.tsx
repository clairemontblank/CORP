import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full py-6 flex items-center justify-between border-b border-indigo-500 lg:border-none">
          <div className="flex items-center">
            <Link href="/">
              <span className="sr-only">Corporate Law Network</span>
              <img
                className="h-10 w-auto"
                src="/placeholder.svg?height=40&width=40"
                alt="Logo"
              />
            </Link>
            <div className="hidden ml-10 space-x-8 lg:block">
              <Link href="#research" className="text-base font-medium text-gray-700 hover:text-indigo-600">
                Research
              </Link>
              <Link href="#events" className="text-base font-medium text-gray-700 hover:text-indigo-600">
                Events
              </Link>
              <Link href="#networking" className="text-base font-medium text-gray-700 hover:text-indigo-600">
                Networking
              </Link>
            </div>
          </div>
          <div className="ml-10 space-x-4">
            <Link
              href="#"
              className="inline-block bg-indigo-600 py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-opacity-75"
            >
              Sign in
            </Link>
            <Link
              href="#"
              className="inline-block bg-white py-2 px-4 border border-transparent rounded-md text-base font-medium text-indigo-600 hover:bg-indigo-50"
            >
              Join Network
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}

