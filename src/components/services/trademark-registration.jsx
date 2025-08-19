import Image from "next/image";

export default function Trademark() {
  return (
    <>
     <main className="">
                  {/* Info Section */}
                  <section className="flex flex-col md:flex-row items-center justify-center gap-10 px-6 py-14 md:py-24 max-w-7xl mx-auto">
                    {/* Left Side Image */}
                    <div className="w-full md:w-1/2 items-end">
                      <Image
                        src="/assets/services/Trademark Registration/trademark.png" // update with your actual path
                        alt="Trademark Registration"
                        width={400}
                        height={50}
                        className="rounded-xl serviceImage w-full"
                      />
                    </div>
          
                    {/* Right Side Content */}
                    <div className="w-full md:w-1/2 text-center">
                      <h2 className="text-3xl md:text-5xl font-normal secondaryText mb-4">
                      Trademark Registration
                     </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
             Trademark is the most significant aspect of any good or any service 
             provided as it is intended to be an identity of that good or service in the market. 
             Trademark is like a unique identity to define you in the market. 
             It can be anything, a word, a symbol, a combination of both, a design, or 
             anything that is used by customers to recognize your good or service in the market.

          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            A trademark can also be a product, for example, iPod is a registered product of the company Apple Inc. 
            After successful registration of your good or service, it becomes your very own Intellectual 
            Property (IP). Therefore it becomes very important to gain legal protection on these trademarks. 
            By getting your trademark registered you get legal protection from any fraud or any kind of counterfeit.
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            It protects the investment made by the investors and creates a sense of trust and loyalty 
            among the customers. Registering your trademark gives you the right to sue in case of misuse
            or imitation of your trademark. Here at YouTax, our team of highly experienced professionals 
            understands the value of your trademark and therefore we make sure to protect it against every
            possible blunder. Our experienced consultants will guide you through the whole process and
            make sure that your trademark is secured and registered.
          </p>
          </div>
      </section>

        {/* Trademark Section */}

    <section className="secondaryBg py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-white mb-6">
          What Can Be Registered as a Trademark?
        </h2>

        {/* Description */}
        <p className="text-white mb-4 leading-relaxed">
          Trademarks should be chosen wisely — they protect the unique aspects of your goods 
          or services that distinguish them in the market. Elements that make your products 
          stand out are ideal for registration.
        </p>

        {/* Examples */}
        <ul className="list-disc pl-6 text-white mb-8 space-y-6">
          <li>
            <strong>1) Name:</strong> A person’s name or surname, the product name, or abbreviations can be registered as a trademark 


          </li>
          <li>
            <strong>2) Logo or Symbols:</strong> Logo or symbols are registered as a trademark


          </li>
          <li>
            <strong>3) Taglines:</strong> Taglines are also registered as a trademark. If you have a tagline for your business you can get it registered as well.


          </li>
          <li>
            <strong>4) Color, Scent, or Sound:</strong>  A Color or Scent or a particular sound that provides a uniqueness to your product can also be registered


          </li>
        </ul>

        {/* Trademark Class */}
        <h3 className="text-2xl font-semibold text-white mb-6">
          What is a Trademark Class?
        </h3>
        <p className="text-white mb-4 leading-relaxed">
          The <strong>Nice Agreement of 1957</strong> established the WIPO Nice Classifications, 
          updated yearly by the World Intellectual Property Organization (WIPO). 
          A Trademark Class is an internationally recognized system for classifying goods 
          and services into 45 categories.  
        </p>
        <p className="text-white mb-4 leading-relaxed">
          A Trademark class is an internationally recognized standard for the classification of goods 
          and services. There are 45 Classes in total. Before registering your product or service one
           must understand the class in which it qualifies. This is a tricky process, therefore it is
            necessary to consult an expert before you register your good or service. 
        </p>
        <p className="text-white mb-4 leading-relaxed">
            YouTax has the best consultants with vivid experiences in trademark registrations, these professionals will help you identify the class of your good or service and get it registered quickly for your benefit. 

        </p>

        {/* Popular Classes */}
        <h4 className="text-xl font-semibold primaryText mb-3">
          Popular Trademark Classes in India:
        </h4>
        <ul className="list-disc pl-6 text-white space-y-4 mb-8">
          <li>Class 1 – Chemicals used in industry, agriculture, science, etc.</li>
          <li>Class 4 – Industrial oils, greases, lubricants, etc.</li>
          <li>Class 25 – Clothing, footwear, etc.</li>
          <li>Class 30 – Coffee, tea, rice, cocoa, sugar, etc.</li>
          <li>Class 41 – Education, sports, cultural activities, etc.</li>
        </ul>
      </div>
    </section>

        {/* Process Section */}
    <section className="bg-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl font-bold secondaryText mb-6">
          How to Register Your Trademark
        </h2>

        {/* Description */}
        <p className="text-gray-700 mb-4 leading-relaxed">
          Registration of a trademark is a tricky process. It takes profound knowledge in the field of 
          intellectual property to understand the class in which your trademark falls. If failed to 
          understand the same, it would just end up not getting registered. Therefore it is highly 
          recommended to consult an expert. That is where we come into the picture, YouTax consists of a
          team of highly professional individuals with profound knowledge in the field of trademarks and
          Intellectual Property. We will not only identify the product for you but will get it 
          registered for you in a hassle-free manner rapidly.
        </p>

        {/* Documents Heading */}
        <h3 className="text-2xl font-semibold secondaryText mt-10 mb-4">
          Documents Required to Register a Trademark
        </h3>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Documentation is the most important procedure for the registration of a trademark. 
          It is a tedious procedure and often mistakes are made while filing the documents. 
          Therefore it is highly recommended that a professional does the part of the documentation. 
          YouTax consists of a team of highly professional individuals who will take care of this tedious procedure for you.
        </p>

        {/* Document List */}
        <ul className="list-disc pl-6 text-gray-700 space-y-4 mb-8">
          <li>Name of the Applicant</li>
          <li>Name of the Brand, Logo, or Symbol</li>
          <li>Type of the Business</li>
          <li>Address for Registration</li>
          <li>Identification and Address Proof of the Signatory</li>
          <li>Business Proof (based on the type of business)</li>
        </ul>

         </div>
    </section>
     </main>
      </>
  )
}