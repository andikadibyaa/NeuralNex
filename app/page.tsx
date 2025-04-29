import Image from "next/image"
import Link from "next/link"
import { Instagram } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation Bar */}
      <nav className="flex items-center justify-between px-4 py-4 bg-navy-900 text-white">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-white"></div>
          <span className="text-xl font-semibold text-orange-300">NeuralNex</span>
        </div>
        <div className="flex items-center gap-8">
          <Link href="/" className="hover:text-orange-300">
            Home
          </Link>
          <Link href="/about" className="hover:text-orange-300">
            About Us
          </Link>
          <Link href="/contact" className="hover:text-orange-300">
            Contact Us
          </Link>
          <Link href="/login" className="bg-orange-400 text-navy-900 px-4 py-1 rounded-md hover:bg-orange-300">
            Log In
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-8 py-16 bg-white">
        <div className="md:w-1/2">
          <h1 className="text-5xl md:text-6xl font-bold text-navy-900 leading-tight">
            ARTIFICIAL
            <br />
            INTELLIGENCE
          </h1>
          <p className="mt-4 text-orange-400">
            Welcome to the gateway of tomorrow&apos;s innovation! Explore the boundless realm of Artificial Intelligence
            with us!
          </p>
          <button className="mt-6 bg-orange-400 text-navy-900 px-6 py-2 rounded-md hover:bg-orange-300 border-2 border-orange-500">
            See more here
          </button>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <div className="relative w-full h-80 md:h-96">
            <div className="absolute inset-0 bg-lavender-100 rounded-full"></div>
            <Image
              src="/placeholder.svg?height=400&width=400"
              alt="AI Illustration"
              width={400}
              height={400}
              className="relative z-10"
            />
          </div>
        </div>
      </section>

      {/* Wave Divider */}
      <div className="w-full">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 fill-navy-900">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"></path>
        </svg>
      </div>

      {/* AI Impact Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-8 py-16 bg-white">
        <div className="md:w-1/3 mb-8 md:mb-0">
          <Image src="/placeholder.svg?height=300&width=300" alt="AI Robot Illustration" width={300} height={300} />
        </div>
        <div className="md:w-2/3">
          <p className="text-orange-400 text-lg">
            Artificial Intelligence, a transformative force across economies, healthcare, art and design, and
            technology. Unveil its impact, from revolutionizing industries to enhancing human experiences, a fusion of
            innovation and intelligence shaping our world.
          </p>
        </div>
      </section>

      {/* AI Applications Cards */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-8 py-16 bg-white">
        {/* Economy Card */}
        <div className="bg-orange-400 rounded-lg p-6 flex flex-col items-center">
          <div className="bg-orange-300 rounded-lg p-4 w-full h-40 mb-4 flex items-center justify-center">
            <Image src="/placeholder.svg?height=120&width=120" alt="Economy Illustration" width={120} height={120} />
          </div>
          <h3 className="text-navy-900 text-xl font-bold mb-2">ECONOMY</h3>
          <p className="text-center text-navy-900 text-sm mb-4">
            Growing the Potential Fields: Exploring the Core of AI Applications in Economics
          </p>
          <Link
            href="/economy"
            className="bg-orange-300 text-navy-900 px-4 py-1 rounded-md text-sm hover:bg-orange-200"
          >
            Read more here
          </Link>
        </div>

        {/* Art & Design Card */}
        <div className="bg-orange-400 rounded-lg p-6 flex flex-col items-center">
          <div className="bg-orange-300 rounded-lg p-4 w-full h-40 mb-4 flex items-center justify-center">
            <Image
              src="/placeholder.svg?height=120&width=120"
              alt="Art & Design Illustration"
              width={120}
              height={120}
            />
          </div>
          <h3 className="text-navy-900 text-xl font-bold mb-2">ART & DESIGN</h3>
          <p className="text-center text-navy-900 text-sm mb-4">
            If It Weren't Created by Human Artists, Is It Still Art?
          </p>
          <button className="bg-orange-300 text-navy-900 px-4 py-1 rounded-md text-sm hover:bg-orange-200">
            Read more here
          </button>
        </div>

        {/* Healthcare Card */}
        <div className="bg-orange-400 rounded-lg p-6 flex flex-col items-center">
          <div className="bg-orange-300 rounded-lg p-4 w-full h-40 mb-4 flex items-center justify-center">
            <Image src="/placeholder.svg?height=120&width=120" alt="Healthcare Illustration" width={120} height={120} />
          </div>
          <h3 className="text-navy-900 text-xl font-bold mb-2">HEALTHCARE</h3>
          <p className="text-center text-navy-900 text-sm mb-4">
            Doctors might be replaced with Artificial Intelligence
          </p>
          <button className="bg-orange-300 text-navy-900 px-4 py-1 rounded-md text-sm hover:bg-orange-200">
            Read more here
          </button>
        </div>

        {/* Technology Card */}
        <div className="bg-orange-400 rounded-lg p-6 flex flex-col items-center">
          <div className="bg-orange-300 rounded-lg p-4 w-full h-40 mb-4 flex items-center justify-center">
            <Image src="/placeholder.svg?height=120&width=120" alt="Technology Illustration" width={120} height={120} />
          </div>
          <h3 className="text-navy-900 text-xl font-bold mb-2">TECHNOLOGY</h3>
          <p className="text-center text-navy-900 text-sm mb-4">
            Increased Productivity in Technology with Artificial Intelligence
          </p>
          <button className="bg-orange-300 text-navy-900 px-4 py-1 rounded-md text-sm hover:bg-orange-200">
            Read more here
          </button>
        </div>
      </section>

      {/* Wave Divider */}
      <div className="w-full">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 fill-navy-900">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"></path>
        </svg>
      </div>

      {/* About Us Section */}
      <section className="flex flex-col items-center px-8 py-16 bg-white">
        <Link
          href="/about"
          className="bg-orange-400 text-navy-900 px-8 py-3 rounded-md text-xl font-bold mb-12 hover:bg-orange-300"
        >
          ABOUT US
        </Link>

        <p className="text-center text-orange-400 text-lg max-w-2xl mb-12">
          Follow our journey on social media and be a part of our vision to redefine the future.
        </p>

        {/* Team Members */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {/* Team Member 1 */}
          <div className="flex flex-col items-center">
            <div className="rounded-lg overflow-hidden border-4 border-gray-300 mb-2">
              <Image
                src="/placeholder.svg?height=150&width=150"
                alt="Team Member"
                width={150}
                height={150}
                className="object-cover"
              />
            </div>
            <div className="flex items-center gap-2">
              <Instagram className="text-pink-600" size={24} />
              <span className="bg-orange-400 text-navy-900 px-3 py-1 rounded-md text-sm">Maya</span>
            </div>
          </div>

          {/* Team Member 2 */}
          <div className="flex flex-col items-center">
            <div className="rounded-lg overflow-hidden border-4 border-gray-300 mb-2">
              <Image
                src="/placeholder.svg?height=150&width=150"
                alt="Team Member"
                width={150}
                height={150}
                className="object-cover"
              />
            </div>
            <div className="flex items-center gap-2">
              <Instagram className="text-pink-600" size={24} />
              <span className="bg-orange-400 text-navy-900 px-3 py-1 rounded-md text-sm">Maisi</span>
            </div>
          </div>

          {/* Team Member 3 */}
          <div className="flex flex-col items-center">
            <div className="rounded-lg overflow-hidden border-4 border-gray-300 mb-2">
              <Image
                src="/placeholder.svg?height=150&width=150"
                alt="Team Member"
                width={150}
                height={150}
                className="object-cover"
              />
            </div>
            <div className="flex items-center gap-2">
              <Instagram className="text-pink-600" size={24} />
              <span className="bg-orange-400 text-navy-900 px-3 py-1 rounded-md text-sm">Kate</span>
            </div>
          </div>

          {/* Team Member 4 */}
          <div className="flex flex-col items-center">
            <div className="rounded-lg overflow-hidden border-4 border-gray-300 mb-2">
              <Image
                src="/placeholder.svg?height=150&width=150"
                alt="Team Member"
                width={150}
                height={150}
                className="object-cover"
              />
            </div>
            <div className="flex items-center gap-2">
              <Instagram className="text-pink-600" size={24} />
              <span className="bg-orange-400 text-navy-900 px-3 py-1 rounded-md text-sm">Dini</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
