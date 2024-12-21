export default function ResearchPublications() {
  const publications = [
    {
      title: "The Impact of ESG on Corporate Governance",
      author: "Dr. Jane Smith",
      date: "May 15, 2023",
      description: "An in-depth analysis of how Environmental, Social, and Governance factors are reshaping corporate governance practices."
    },
    {
      title: "Blockchain and Corporate Law: A New Frontier",
      author: "Prof. John Doe",
      date: "April 2, 2023",
      description: "Exploring the implications of blockchain technology on corporate legal structures and transactions."
    },
    {
      title: "The Future of Shareholder Activism",
      author: "Dr. Emily Johnson",
      date: "March 10, 2023",
      description: "A comprehensive study on evolving trends in shareholder activism and their impact on corporate decision-making."
    }
  ]

  return (
    <section id="research" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Latest Research Publications
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Discover groundbreaking research in corporate law and governance
          </p>
        </div>
        <div className="mt-12 grid gap-16 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
          {publications.map((publication, index) => (
            <div key={index}>
              <p className="text-sm text-gray-500">
                <time dateTime={publication.date}>{publication.date}</time>
              </p>
              <a href="#" className="mt-2 block">
                <p className="text-xl font-semibold text-gray-900">{publication.title}</p>
                <p className="mt-3 text-base text-gray-500">{publication.description}</p>
              </a>
              <div className="mt-3">
                <a href="#" className="text-base font-semibold text-indigo-600 hover:text-indigo-500">
                  Read full article
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

