import Image from "next/image"
import Link from "next/link"

export default function Healthcare() {
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

      {/* Healthcare Content */}
      <div className="container mx-auto px-4 py-12 bg-orange-400">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Healthcare Header */}
          <div className="md:w-1/3">
            <Image
              src="/each-cards-healthcare.png"
              alt="Healthcare Header"
              width={400}
              height={150}
              className="w-full mb-8"
              priority
            />
            <Image
              src="cards/Medical research-bro1.png"
              alt="Healthcare Illustration"
              width={800}
              height={400}
              className="w-full object-cover mb-8"
              priority
            />
          </div>

          {/* Main Content */}
          <div className="md:w-2/3 bg-white p-8 rounded-lg">
            <h1 className="text-3xl md:text-4xl font-bold text-navy-900 mb-8">
              Doctors mustn&apos;t be replaced with Artificial Intelligence
            </h1>

            <p className="text-navy-900 mb-8">
              Artificial Intelligence (AI) has become one of the most transformative technologies of the 21st century,
              impacting every aspect of our lives, from the way we work and learn to the way we communicate and interact
              with one another. The rise of AI has brought with it a wave of automation that is reshaping the workforce,
              changing the way we approach healthcare, transforming the way we interact with technology, and raising
              concerns about the potential impact of AI on society. Here are some of disadvantages of artificial
              intelligence in healthcare
            </p>

            <div className="space-y-8">
              <div>
                <p className="text-navy-900">
                  Firstly is training complications, AI technology needs to be extensively trained with curated data
                  sets in order to perform as expected. However, due to privacy concerns, it can be difficult to access
                  some of the data necessary to provide AI learning with the breadth and depth of information it needs.
                </p>
              </div>

              <div>
                <p className="text-navy-900">
                  Second, change can be difficult for us. In any industry, change can prove challenging. Since the
                  healthcare industry is crucial for patient care, the medical community needs proof that AI will be
                  effective, as well as a plan to show investors it is going to be worth the cost. Everyone working
                  alongside AI technology will need to have an understanding.
                </p>
              </div>

              <div className="bg-orange-200 p-6 rounded-lg">
                <p className="text-navy-900">
                  AI expert, Dr. Maia Hightower, chief digital and technology officer at University of Chicago Medicine,
                  pointed out the growing role of AI as an administrative tool in the opaque interface among doctors,
                  patients and insurance companies. &quot;So in order to communicate with payers, with our insurance
                  companies, we&apos;ll often have bots or automation that transfers information from the health system
                  to the insurance company and back,&quot; Hightower said. &quot;In the case of insurance companies, we
                  know that they often will use AI algorithms for prior authorization of procedures, whether or not to
                  cover a particular medication or test. And in those cases, there isn&apos;t much transparency on our
                  side as a provider organization.&quot; this technology and how it can assist them with day-to-day
                  tasks.
                </p>
              </div>

              <div>
                <p className="text-navy-900">
                  Common AI mistakes in healthcare are often not too different from mistakes born out of natural human
                  error. For example, AI-driven medical technology may fail to diagnose a tumour correctly, or a patient
                  could be misdiagnosed due to a lack of AI understanding around speech recognition for different
                  accents or dialects. It&apos;s important to remember that AI is man-made, and so constant supervision
                  and feedback is necessary to get the most out of using AI in healthcare.
                </p>
              </div>

              <div>
                <p className="text-navy-900">
                  This also ties in to discussions around social prescribing, which is becoming more common in the NHS.
                  Simply put, social prescribing is the process of healthcare providers referring their patients to
                  community-based support services to aid in general health and wellbeing.
                </p>
              </div>

              <div>
                <p className="text-navy-900">
                  At 8 months follow-up there were no differences between patients referred to social prescribing and
                  the controls for general health, depression, anxiety and &apos;positive and active engagement in
                  life&apos;. Social prescribing patients had high GP consultation rates, which fell in the year
                  following referral. The qualitative study indicated that most patients had a positive experience with
                  social prescribing but the service was not utilized to its full extent. Changes in general health and
                  well-being following referral were very limited and comprehensive implementation was difficult to
                  optimize.
                </p>
              </div>

              <div>
                <p className="text-navy-900">
                  There&apos;s plenty of evidence to suggest that social prescribing leads to positive outcomes for
                  patients, however, there can be a number of disadvantages of social prescribing when not done
                  correctly. This method requires soft skills to help connect with the patient in the best way to help
                  guide them to non-medical resources, and so healthcare providers should exercise caution when looking
                  to integrate AI with social prescribing.
                </p>
              </div>
            </div>

            <div className="mt-8">
              <p className="text-navy-900 font-medium">
                In conclusion, the impact of AI on society is both exciting and challenging. AI has the potential to
                transform the way we work, communicate, and interact with technology, but it also raises concerns about
                the displacement of jobs, bias and discrimination, and the potential for misuse or abuse.
              </p>
              <p className="text-navy-900 font-medium mt-4">
                As we continue to develop and deploy AI, it is important that we address these concerns and work to
                ensure that the benefits of AI are shared by all members of society. This requires a multi-disciplinary
                approach that brings together experts from a variety of fields, including technology, ethics, and
                policy.
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
          <Link href="/technology" className="hover:text-orange-300">
            Next Page
          </Link>
        </div>
      </div>
    </main>
  )
}
