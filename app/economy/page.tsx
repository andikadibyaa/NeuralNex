import Image from "next/image"
import Link from "next/link"

export default function Economy() {
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

      {/* Economy Content */}
      <div className="container mx-auto px-4 py-12 bg-orange-400">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Economy Header */}
          <div className="md:w-1/3">
            <Image
              src="/each-cards-economy.png"
              alt="Economy Header"
              width={400}
              height={150}
              className="w-full mb-8"
              priority
            />
            <Image
              src="cards/Banknote-bro1.png"
              alt="Economy Illustration"
              width={800}
              height={400}
              className="w-full object-cover mb-8"
              priority
            />
          </div>

          {/* Main Content */}
          <div className="md:w-2/3 bg-white p-8 rounded-lg">
            <h1 className="text-3xl md:text-4xl font-bold text-navy-900 mb-8">
              Growing the Potential Fields: Exploring the Core of AI Applications in Economics
            </h1>

            <p className="text-navy-900 mb-8">
              Artificial Intelligence is revolutionizing the economic landscape, transforming how businesses operate,
              markets function, and economic decisions are made. From predictive analytics to automated trading,
              AI is reshaping the fundamental aspects of economic systems and financial markets.
            </p>

            <div className="space-y-8">
              <div>
                <p className="text-navy-900">
                  One of the most significant impacts of AI in economics is in financial markets. Algorithmic trading
                  systems powered by AI can analyze vast amounts of market data in real-time, identifying patterns
                  and making trading decisions at speeds impossible for human traders. These systems can process
                  news, social media sentiment, and market indicators simultaneously, leading to more efficient
                  markets and reduced transaction costs.
                </p>
              </div>

              <div>
                <p className="text-navy-900">
                  AI is also transforming risk assessment and credit scoring. Traditional credit scoring models are
                  being enhanced with AI algorithms that can analyze alternative data sources, such as social media
                  activity, online behavior, and even smartphone usage patterns. This allows for more accurate
                  risk assessment and potentially greater financial inclusion for underserved populations.
                </p>
              </div>

              <div className="bg-orange-200 p-6 rounded-lg">
                <p className="text-navy-900">
                  According to a report by McKinsey Global Institute, AI has the potential to deliver additional
                  global economic output of about $13 trillion by 2030, boosting global GDP by about 1.2 percent
                  a year. This growth will come from three main sources: labor automation, innovation in products
                  and services, and increased consumer demand resulting from the availability of personalized and
                  AI-enhanced offerings.
                </p>
              </div>

              <div>
                <p className="text-navy-900">
                  The impact of AI on employment and the labor market is a critical economic consideration. While
                  AI automation may displace certain jobs, it also creates new opportunities and enhances
                  productivity. The World Economic Forum estimates that while 85 million jobs may be displaced
                  by AI and automation by 2025, 97 million new roles may emerge that are more adapted to the
                  new division of labor between humans, machines, and algorithms.
                </p>
              </div>

              <div>
                <p className="text-navy-900">
                  AI is also playing a crucial role in economic forecasting and policy-making. Central banks and
                  government agencies are increasingly using AI to analyze economic indicators, predict market
                  trends, and simulate the potential impact of policy decisions. These AI-powered tools can
                  process vast amounts of data from multiple sources, providing more accurate and timely
                  economic forecasts.
                </p>
              </div>

              <div>
                <p className="text-navy-900">
                  The rise of AI in economics also brings challenges that need to be addressed. Issues such as
                  algorithmic bias, data privacy, and the concentration of AI capabilities in large tech
                  companies raise important questions about economic equity and competition. Ensuring that
                  the benefits of AI are distributed fairly across society will be crucial for sustainable
                  economic growth.
                </p>
              </div>
            </div>

            <div className="mt-8">
              <p className="text-navy-900 font-medium">
                In conclusion, AI is fundamentally transforming the economic landscape, offering unprecedented
                opportunities for growth and efficiency while presenting new challenges that need to be carefully
                managed. The successful integration of AI into economic systems will require collaboration
                between policymakers, businesses, and technologists to ensure that the benefits are maximized
                while mitigating potential risks.
              </p>
              <p className="text-navy-900 font-medium mt-4">
                As we move forward, the focus should be on developing AI systems that enhance human capabilities
                rather than replace them, creating an economic environment that is both more efficient and more
                equitable. The future of economics will be shaped by our ability to harness AI's potential while
                maintaining the human values that underpin our economic systems.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Navigation */}
      <div className="bg-navy-900 text-white p-4">
        <div className="container mx-auto flex justify-between">
          <Link href="/" className="hover:text-orange-300">
            Home
          </Link>
          <Link href="/art-design" className="hover:text-orange-300">
            Next Page
          </Link>
        </div>
      </div>
    </main>
  )
}
