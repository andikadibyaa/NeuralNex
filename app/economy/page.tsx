import Image from "next/image"
import Link from "next/link"

export default function EconomyPage() {
  return (
    <main className="min-h-screen bg-orange-100">
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

      {/* Economy Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Economy Header */}
          <div className="md:w-1/4">
            <div className="bg-pink-300 rounded-lg p-6 border-2 border-navy-900">
              <h2 className="text-navy-900 text-2xl font-bold text-center">ECONOMY</h2>
            </div>
            <div className="mt-8">
              <Image
                src="/placeholder.svg?height=300&width=300"
                alt="Economy Illustration"
                width={300}
                height={300}
                className="w-full"
              />
            </div>
          </div>

          {/* Main Content */}
          <div className="md:w-3/4">
            <h1 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">
              Unveiling the Potential Pitfalls: Examining the Cons of AI Advancements in Economic Impact
            </h1>

            <p className="text-navy-900 mb-8">
              Artificial intelligence (AI) technologies have advanced rapidly over the last several years. As the
              technology continues to improve, it may have a substantial impact on the economy with respect to
              productivity, growth, inequality, market power, innovation, and employment.
            </p>

            <p className="text-navy-900 mb-8">
              As we stand at the precipice of a new era driven by rapid advancements in Artificial Intelligence (AI), it
              is imperative to scrutinize the potential drawbacks that may accompany this transformative technology. The
              essay unfolds the cons surrounding the economic impact of AI, shedding light on productivity, growth,
              inequality, market power, innovation, and employment.
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-navy-900 mb-2">1. Displacement Effect and Lower Labor Share:</h3>
                <p className="text-navy-900">
                  The heart of the framework posits that AI and robotics replacing human tasks create a powerful
                  displacement effect. This may lead to a lower labor share of economic output, raising concerns about
                  job displacement and potential shifts in the traditional employment landscape.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-navy-900 mb-2">2. Unequal Distribution of Increased Income:</h3>
                <p className="text-navy-900">
                  While AI has the potential to augment productivity and economic growth, the pivotal question remains:
                  how will the increased income from AI be distributed? If history is any indicator, the rise of
                  previous technologies like computers and the internet has been linked to increased inequality due to
                  skill-bias and a heightened capital share. AI might perpetuate or exacerbate such inequality trends.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-navy-900 mb-2">
                  3. Economic Growth Constraints due to Cost Disease:
                </h3>
                <p className="text-navy-900">
                  A critical lens focuses on Baumol&apos;s cost disease, suggesting that sectors with slow productivity
                  growth may experience increases in their share of GDP. The integration of AI, despite boosting
                  productivity in some sectors, may encounter constraints on economic growth, potentially limiting the
                  optimistic outlook often associated with AI advancements.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-navy-900 mb-2">
                  4. Limitations on Technological Advance and Scarcity:
                </h3>
                <p className="text-navy-900">
                  The essay brings attention to the fundamental limit imposed by Baumol&apos;s cost disease on the most
                  optimistic and pessimistic views. Even in scenarios where there is artificial general intelligence or
                  a singularity, the forces of cost disease may act as a constraining factor, limiting both growth and
                  mitigating potential downsides.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-navy-900 mb-2">5. Job Displacement vs. Job Creation:</h3>
                <p className="text-navy-900">
                  While AI&apos;s displacement effect is acknowledged, the countervailing force of job creation through
                  the emergence of new tasks is highlighted. However, the balance between job displacement and creation
                  remains a delicate equilibrium, and the essay prompts a critical examination of how this interplay may
                  shape the future of employment.
                </p>
              </div>
            </div>

            <div className="mt-12">
              <p className="text-navy-900 font-medium">
                In conclusion, as we embark on this journey into the economic implications of AI, it is crucial to
                recognize and address these cons. Navigating the challenges posed by displacement effects, unequal
                income distribution, growth constraints, and the intricate dance between job displacement and creation
                will be essential in crafting policies that harness the benefits of AI while mitigating its potential
                pitfalls.
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
          <Link href="/economy/page2" className="hover:text-orange-300">
            Next Page
          </Link>
        </div>
      </div>
    </main>
  )
}
