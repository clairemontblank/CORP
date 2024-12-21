export default function Events() {
  const events = [
    {
      title: "Annual Corporate Law Symposium",
      date: "September 15-17, 2023",
      location: "New York City",
      description: "Join leading scholars and practitioners for three days of insightful discussions on the latest developments in corporate law."
    },
    {
      title: "Webinar: Navigating Cross-Border M&A",
      date: "July 5, 2023",
      location: "Online",
      description: "Expert panel discussion on legal challenges and best practices in international mergers and acquisitions."
    },
    {
      title: "Workshop: Corporate Governance in the Digital Age",
      date: "August 20, 2023",
      location: "London",
      description: "A hands-on workshop exploring how technology is transforming corporate governance and compliance."
    }
  ]

  return (
    <section id="events" className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Upcoming Events
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Engage with experts and peers at our exclusive events
          </p>
        </div>
        <div className="mt-12 grid gap-16 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
          {events.map((event, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="p-6">
                <p className="text-sm font-medium text-indigo-600">
                  <time dateTime={event.date}>{event.date}</time>
                </p>
                <a href="#" className="block mt-2">
                  <p className="text-xl font-semibold text-gray-900">{event.title}</p>
                  <p className="mt-3 text-base text-gray-500">{event.description}</p>
                </a>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <span className="sr-only">{event.location}</span>
                    <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3 text-sm text-gray-500">
                    {event.location}
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-6 py-4">
                <a href="#" className="text-base font-medium text-indigo-600 hover:text-indigo-500">
                  Learn more<span aria-hidden="true"> &rarr;</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

