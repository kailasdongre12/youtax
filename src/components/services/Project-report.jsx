import Image from "next/image";

export default function ProjectRepot() {
  return (
    <>
     <main className="">
                      {/* Info Section */}
                      <section className="flex flex-col md:flex-row items-center justify-center gap-10 px-6 py-14 md:py-24 max-w-7xl mx-auto">
                        {/* Left Side Image */}
                        <div className="w-full md:w-1/2 items-end">
                          <Image
                            src="/assets/services/PROJECT REPORT/project.report.jpeg" // update with your actual path
                            alt="PROJECT REPORT"
                            width={400}
                            height={500}
                            className="rounded-xl serviceImage w-full"
                          />
                        </div>
              
    {/* Right Side Content */}
          <div className="w-full md:w-1/2 text-center">
           <h2 className="text-3xl md:text-5xl font-normal secondaryText mb-4">          
            PROJECT REPORT
         </h2>
      <p className="text-gray-600 mb-4 leading-relaxed">
             Information today is the most important tool which plays a vital role when it comes to 
             developing a business or starting any startup, or enterprise. The project report is a 
             document that holds constructive information about everything necessary for the development, 
             expansion, or growth of a business or enterprise. It serves as a blueprint for all the 
             operations necessary for a business. It is an important document as it helps in 
             developing the business idea into a productive enterprise. In simple terms, a project 
             report is a document that defines the strategies or plan of action for successful project 
             implementation.
          </p>
          </div>
      </section>


        {/* Project repot */}
       
    <section className="bg-white text-gray-800 px-6 py-12 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">
        Essential Elements in any Detailed Project Report
      </h2>

      <p className="text-lg mb-4">
        A detailed project report is a very important document for any budding entrepreneur. 
        Therefore it is very important that it holds all the key information which helps to develop, 
        expand or grow the business. Following are a few elements that are absolutely necessary for 
        the purpose of building a detailed project report:
      </p>

      <ol className="list-decimal list-inside space-y-5 text-lg mb-6">
        <li>
          <strong>Introduction:</strong> Project information, history, properties, proprietor details, mission
          statement, etc.
        </li>
        <li>
          <strong>Market Survey:</strong> The present market position and details of expected future developments in
          the market.
        </li>
        <li>
          <strong>Raw Materials:</strong> Detailed list of required raw materials, cost or rates, quantity, and quality.
        </li>
        <li>
          <strong>Manufacturing Techniques:</strong> Process of manufacture, flow sheet diagrams, etc.
        </li>
        <li>
          <strong>Financial Details:</strong> Costs of raw materials, building, machinery, cash flow statement,
          break-even point, etc.
        </li>
      </ol>

      <p className="text-lg mb-4">
        Information details of the product like future or present demand, market potential regarding imports or exports, 
        availability of raw material and manpower, overall cost, payback period, etc. is absolutely necessary 
        for any entrepreneur. Therefore it is very important that your project report is highly detailed and 
        well-constructed. We at YouTax with the help of our expert consultants make sure that the project 
        report is well constructed taking into consideration the changing Indian market and the developing 
        business opportunities in India. 
      </p>

      <p className="text-lg mb-4">
       We at <strong className="text-red-500">YouTax with the help of our reliable business consultants</strong>.
        At will make sure that your project report contains all the necessary details as per your business requirement. All you have to do is reach out to us on our website 
      </p>

      <p className="text-lg mb-6">
        We at <span className="font-semibold">YouTax</span>,with our experienced business consultants, ensure that
        your project report includes all necessary details as per your business requirements. Reach out to us at
        <a href="tel:+918421447373" className="text-red-600 font-medium underline mx-1">+91 8421447373</a>
        or visit
        <a href="https://www.youtax.in" target="_blank" rel="noopener noreferrer" className="text-red-600 font-medium underline ml-1">
          youtax.in
        </a>.
      </p>
    </section>
    </main>
      </>
  )
}


