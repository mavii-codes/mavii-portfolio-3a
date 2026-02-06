import Link from "next/link";

export function Footer() {
  return (
    <footer className="py-5 border-t border-gray-700">
      <div className="container mx-auto px-6">
        <div className="flex justify-between">
          {/* About your site */}
          <div>
            <h2>Portfolio</h2>
            <p>Ibabao, Cordova, Cebu</p>
          </div>
          {/* Quick Links */}
          <div>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/projects">Projects</Link></li>
            </ul>
          </div>
          {/* Blogs */}
          <div>
            <ul>
              <li><Link href="/">Blog 1</Link></li>
              <li><Link href="/about">Blog 2</Link></li>
              <li><Link href="/projects">Blog 3</Link></li>
            </ul>
          </div>
          {/* Contacts */}
          <div>
            <ul>
              <li><Link href="/">Phone: 09150388050</Link></li>
              <li>
                <a href="mailto:barromrvn@gmail.com">
                  Email: barromrvn@gmail.com
                </a>
              </li>
              <li>
                <a href="https://github.com/mavii-codes" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
