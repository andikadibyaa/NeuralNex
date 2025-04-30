import Image from "next/image"
import Link from "next/link"

export default function ArtDesign() {
  return (
    <main className="min-h-screen">
      {/* Navigation Bar */}
      <nav className="flex items-center justify-between px-4 py-4 bg-navy-900 text-white">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-white"></div>
          <span className="text-xl font-coolvetica font-bold" style={{ color: '#FDC094' }}>NeuralNex</span>
        </div>
        <div className="flex items-center gap-8">
          <Link href="/" className="font-coolvetica font-bold hover:text-orange-300" style={{ color: '#FDC094' }}>
            Home
          </Link>
          <Link href="/#about" className="font-coolvetica font-bold hover:text-orange-300" style={{ color: '#FDC094' }}>
            About Us
          </Link>
          <Link href="/#team" className="font-coolvetica font-bold hover:text-orange-300" style={{ color: '#FDC094' }}>
            Contact Us
          </Link>
        </div>
      </nav>

      {/* Art & Design Content */}
      <div className="container mx-auto px-4 py-12 bg-orange-400">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Art & Design Header */}
          <div className="md:w-1/3">
            <Image
              src="/each-cards-art.png"
              alt="Art & Design Header"
              width={400}
              height={150}
              className="w-full mb-8"
              priority
            />
            <Image
              src="cards/Making art-bro1.png"
              alt="Art & Design Illustration"
              width={800}
              height={400}
              className="w-full object-cover mb-8"
              priority
            />
          </div>

          {/* Main Content */}
          <div className="md:w-2/3 bg-white p-8 rounded-lg">
            <h1 className="text-3xl md:text-4xl font-bold text-navy-900 mb-8">
              If It Wasn&apos;t Created by Human Artist, Is It Still Art?
            </h1>

            <p className="text-navy-900 mb-8">
              Artificial Intelligence (AI) has made significant advancements in various industries, including Art and
              Design. The integration of AI in design processes has brought both advantages and disadvantages. While AI
              art has gained popularity, it has also generated a lot of debate in the art world. So, if it wasn&apos;t
              created by a human artist, is it still art?
            </p>

            <p className="text-navy-900 mb-8">
              While AI offers numerous benefits, it has limitations and challenges. One of the primary concerns is the
              potential lack of creativity and originality in AI-generated pieces. AI algorithms operate based on
              predefined patterns and existing data, which may limit their ability to produce truly innovative and
              groundbreaking Art and designs. Understanding complex design concepts and nuances is another area where AI
              falls short. Art and Design often involves subjective decisions, balancing aesthetics, emotions, and user
              experience. AI may struggle to comprehend these emotional aspects and be unable to make the same intuitive
              judgments as human artists.
            </p>

            <div className="bg-orange-200 p-6 rounded-lg mb-8">
              <p className="text-navy-900 italic">
                &quot;Most at risk are commercial genres with easily recognizable styles and tropes.&quot;
              </p>
              <p className="text-navy-900 mt-2">
                - Novelist and short-story writer Daphne Kalotay, instructor, Creative Writing & Literature Program,
                Harvard Extension School.
              </p>
            </div>

            <p className="text-navy-900 mb-8">
              Human creativity remains an irreplaceable aspect of Art and graphic design. Human artists can think
              critically, conceptualize ideas, and bring unique perspectives. Creativity is a deeply human trait that
              allows artist to tap into their imagination and create art and designs that evoke emotions, tell stories,
              and connect with people on a deeper level.
            </p>

            <div className="bg-orange-200 p-6 rounded-lg mb-8">
              <p className="text-navy-900 italic">
                &quot;That sense of interplay, or the ability to react in the moment, is something that artificial
                intelligence can&apos;t reproduce.&quot;
              </p>
              <p className="text-navy-900 mt-2">
                - Saxophonist, percussionist, and composer Yosvany Terry, senior lecturer on music, director of Jazz
                Bands.
              </p>
            </div>

            <p className="text-navy-900 mb-8">
              It is crucial to strike the right balance between AI and human creativity to achieve optimal results in
              art and graphic design. Artists should view AI as a tool rather than a replacement for their creative
              abilities. Artists and Designers can enhance efficiency, streamline workflow, and access valuable data
              insights by leveraging AI-powered tools and technologies. However, retaining a human touch and ensuring
              that AI remains a supporting element rather than the sole driving force is essential.
            </p>

            <p className="text-navy-900 mb-8">
              Artists and Designers can incorporate AI to automate repetitive tasks, analyze data, and generate initial
              art and design concepts. This allows artists to focus on their work&apos;s more strategic and creative
              aspects. By embracing AI as a collaborator, artists can explore new art and design possibilities,
              challenge their creative boundaries, and amplify their creative output. Maintaining a balance between AI
              and human creativity requires designers to continuously nurture their creative skills and stay updated
              with the latest advancements in AI technology. They should be open to learning and adapting to new tools
              and techniques while staying true to their artistic vision. Collaboration with AI and fellow artists and
              designers can lead to a deeper understanding of the potential synergies between technology and human
              creativity.
            </p>

            <p className="text-navy-900 font-medium">
              In conclusion, Human creativity remains essential to art and graphic design, allowing artists to inject
              emotion, imagination, and artistic vision into their work. This can never be replaced by AI. AI must be
              only a valuable tool to enhance the art and design process, automate repetitive tasks, and offer insights.
              By finding the right balance between AI and human creativity, artists can achieve compelling, innovative,
              and emotionally resonant art and designs that connect with audiences profoundly.
            </p>
          </div>
        </div>
      </div>

      {/* Footer Navigation */}
      <div className="bg-navy-900 text-white p-4">
        <div className="container mx-auto flex justify-between">
          <Link href="/" className="hover:text-orange-300">
            Home
          </Link>
          <Link href="/healthcare" className="hover:text-orange-300">
            Next Page
          </Link>
        </div>
      </div>
    </main>
  )
}
