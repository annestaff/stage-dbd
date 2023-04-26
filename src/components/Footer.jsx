const navigation = {
  about: [
    { name: 'Researchers', href: '#' },
    { name: 'BDB Lab', href: '#' },
    { name: 'Fudan University', href: '#' },
  ],
  tool: [
    { name: 'Github', href: '#' },
    { name: 'Documentation', href: '#' },
    { name: 'Changelog', href: '#' },
  ],
  genomes: [
    { name: 'Database', href: '#' },
    { name: 'Stats', href: '#' },
  ],
  support: [
    { name: 'Contact', href: '#' },
    { name: 'Terms', href: '#' },
  ],
}

export function Footer() {
  return (
      <footer className="bg-gray-900" aria-labelledby="footer-heading">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8 lg:py-32">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <img
                className="h-48"
                src="/images/logo_header.png"
                alt="Project logo"
            />
            <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold leading-6 text-white">About</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {navigation.about.map((item) => (
                        <li key={item.name}>
                          <a href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                            {item.name}
                          </a>
                        </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-10 md:mt-0">
                  <h3 className="text-sm font-semibold leading-6 text-white">Tool</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {navigation.tool.map((item) => (
                        <li key={item.name}>
                          <a href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                            {item.name}
                          </a>
                        </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold leading-6 text-white">Genomes</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {navigation.genomes.map((item) => (
                        <li key={item.name}>
                          <a href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                            {item.name}
                          </a>
                        </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-10 md:mt-0">
                  <h3 className="text-sm font-semibold leading-6 text-white">Support</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {navigation.support.map((item) => (
                        <li key={item.name}>
                          <a href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                            {item.name}
                          </a>
                        </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
  )
}
