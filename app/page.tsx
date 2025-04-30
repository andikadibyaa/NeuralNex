import Image from "next/image"
import Link from "next/link"
import TeamMember from "./components/team-member"

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation Bar */}
      <nav className="flex items-center justify-between px-4 py-4 bg-navy-900 text-white">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-white"></div>
          <span className="text-xl font-coolvetica font-bold" style={{ color: '#FDC094' }}>NeuralNex</span>
        </div>
        <div className="flex items-center gap-8">
          <Link href="#home" className="font-coolvetica font-bold hover:text-orange-300" style={{ color: '#FDC094' }}>
            Home
          </Link>
          <Link href="#about" className="font-coolvetica font-bold hover:text-orange-300" style={{ color: '#FDC094' }}>
            About Us
          </Link>
          <Link href="#team" className="font-coolvetica font-bold hover:text-orange-300" style={{ color: '#FDC094' }}>
            Contact Us
          </Link>
          <Link 
            href="/login" 
            className="relative inline-block"
          >
            <Image 
              src="/Log In.png" 
              alt="Log In button" 
              width={70} 
              height={40}
              className="hover:opacity-90"
            />
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="flex flex-col md:flex-row items-center justify-between px-8 py-16 bg-white">
        <div className="md:w-1/2">
          <h1 className="text-5xl md:text-6xl font-bold text-navy-900 leading-tight">
            ARTIFICIAL
            <br />
            INTELLIGENCE
          </h1>
          <Image 
            src="/welcome.png" 
            alt="Welcome message" 
            width={400} 
            height={100}
            className="mt-4"
            priority
          />
          <br />
          <Link href="#impact" className="relative inline-block">
            <Image 
              src="/See more here.png" 
              alt="See more button" 
              width={240} 
              height={80}
              className="hover:opacity-90"
            />
          </Link>
        </div>
        <div className="md:w-1/2 flex justify-end">
          <Image
            src="/Cyborg-bro.png"
            alt="AI Cyborg Illustration"
            width={500}
            height={500}
            className="object-contain"
            priority
          />
        </div>
      </section>

      {/* Wave Divider */}
      <div className="w-full">
        <Image
          src="/Union.png"
          alt="Wave Divider"
          width={1200}
          height={120}
          className="w-full"
          priority
        />
      </div>

      {/* AI Impact Section */}
      <section id="impact" className="flex flex-col items-center justify-center px-8 py-16 bg-white">
        <div className="flex justify-center w-full">
          <Image 
            src="/Group 1.png" 
            alt="AI Impact Illustration" 
            width={1200} 
            height={800} 
            className="mx-auto"
            priority
          />
        </div>
      </section>

      {/* AI Applications Cards */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-8 py-16 bg-white">
        {/* Economy Card */}
        <div className="relative flex flex-col items-center">
          <Image 
            src="/Rectangle 8.png" 
            alt="Card Background" 
            width={300} 
            height={400}
            className="w-full"
            priority
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
            <Image 
              src="/cards/Banknote-bro.png" 
              alt="Economy Illustration" 
              width={200} 
              height={200}
              className="mb-4" 
            />
            <h3 className="text-navy-900 text-xl font-bold mb-2">ECONOMY</h3>
            <p className="text-center text-white text-sm mb-4 font-bold">
              Growing the Potential Fields: Exploring the Core of AI Applications in Economics
            </p>
            <Link
              href="/economy"
              className="relative inline-block"
            >
              <Image 
                src="/Read more here.png" 
                alt="Read more button" 
                width={120} 
                height={40}
                className="hover:opacity-90"
              />
            </Link>
          </div>
        </div>

        {/* Art & Design Card */}
        <div className="relative flex flex-col items-center">
          <Image 
            src="/Rectangle 8.png" 
            alt="Card Background" 
            width={300} 
            height={400}
            className="w-full"
            priority
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
            <Image 
              src="/cards/Making art-bro.png" 
              alt="Art & Design Illustration" 
              width={200} 
              height={200}
              className="mb-4" 
            />
            <h3 className="text-navy-900 text-xl font-bold mb-2">ART & DESIGN</h3>
            <p className="text-center text-white text-sm mb-4 font-bold">
              If It Weren't Created by Human Artists, Is It Still Art?
            </p>
            <Link
              href="/art-design"
              className="relative inline-block"
            >
              <Image 
                src="/Read more here.png" 
                alt="Read more button" 
                width={120} 
                height={40}
                className="hover:opacity-90"
              />
            </Link>
          </div>
        </div>

        {/* Healthcare Card */}
        <div className="relative flex flex-col items-center">
          <Image 
            src="/Rectangle 8.png" 
            alt="Card Background" 
            width={300} 
            height={400}
            className="w-full"
            priority
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
            <Image 
              src="cards/Medical research-bro.png" 
              alt="Healthcare Illustration" 
              width={200} 
              height={200}
              className="mb-4" 
            />
            <h3 className="text-navy-900 text-xl font-bold mb-2">HEALTHCARE</h3>
            <p className="text-center text-white text-sm mb-4 font-bold">
              Doctors might be replaced with Artificial Intelligence
            </p>
            <Link
              href="/healthcare"
              className="relative inline-block"
            >
              <Image 
                src="/Read more here.png" 
                alt="Read more button" 
                width={120} 
                height={40}
                className="hover:opacity-90"
              />
            </Link>
          </div>
        </div>

        {/* Technology Card */}
        <div className="relative flex flex-col items-center">
          <Image 
            src="/Rectangle 8.png" 
            alt="Card Background" 
            width={300} 
            height={400}
            className="w-full"
            priority
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
            <Image 
              src="cards/Time machine-bro.png" 
              alt="Technology Illustration" 
              width={200} 
              height={200}
              className="mb-4" 
            />
            <h3 className="text-navy-900 text-xl font-bold mb-2">TECHNOLOGY</h3>
            <p className="text-center text-white text-sm mb-4 font-bold">
              Increased Productivity in Technology with Artificial Intelligence
            </p>
            <Link
              href="/technology"
              className="relative inline-block"
            >
              <Image 
                src="/Read more here.png" 
                alt="Read more button" 
                width={120} 
                height={40}
                className="hover:opacity-90"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* Wave Divider */}
      <div className="w-full">
        <Image
          src="/Union.png"
          alt="Wave Divider"
          width={1200}
          height={120}
          className="w-full"
          priority
        />
      </div>

      {/* About Us Section */}
      <section id="about" className="flex flex-col items-center px-8 py-16 bg-white">
        <Link
          href="/about"
          className="relative inline-block mb-12"
        >
          <Image 
            src="/ABOUT US.png" 
            alt="About Us" 
            width={240} 
            height={80}
            className="hover:opacity-90"
          />
        </Link>

        <Image 
          src="/follow.png" 
          alt="Follow our journey message" 
          width={600} 
          height={100}
          className="mb-12"
          priority
        />

        {/* Team Members */}
        <div id="team" className="grid grid-cols-2 md:grid-cols-4 gap-6 font-bold">
          <TeamMember
            name="Maya"
            imageSrc="/team/Maya.png"
            instagramLink="https://instagram.com/mayaznsywa"
          />
          <TeamMember
            name="Maisi"
            imageSrc="/team/Maisi.png"
            instagramLink="https://instagram.com/maisiii_"
          />
          <TeamMember
            name="Kate"
            imageSrc="/team/Kate.png"
            instagramLink="https://instagram.com/chocomoonkate"
          />
          <TeamMember
            name="Dini"
            imageSrc="/team/bghon.png"
            instagramLink="https://instagram.com/dini.sa"
          />
        </div>
      </section>
    </main>
  )
}
