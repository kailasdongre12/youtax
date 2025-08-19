import Image from "next/image";

export default function TanApplication() {
  return (
    <>
     <main className="">
        {/* Info Section */}
          <section className="flex flex-col md:flex-row items-center justify-center gap-10 px-6 py-14 md:py-24 max-w-7xl mx-auto">
          {/* Left Side Image */}
           <div className="w-full md:w-1/2 items-end">
            <Image
              src="/assets/services/TAN APPLICATION/tan.application.png" // update with your actual path
               alt="TAN APPLICATION"
               width={400}
               height={50}
               className="rounded-xl serviceImage w-full"
      />
    </div>
               
  {/* Right Side Content */}
    <div className="w-full md:w-1/2 text-center">
      <h2 className="text-3xl md:text-5xl font-normal secondaryText mb-4">
                 TAN APPLICATION
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
             TAX APPLICATION NUMBER is a unique alphanumeric number provided by the Income Tax Department 
             for the purpose of tax deduction The Tax Application Number is a prerequisite while filing for 
             TDS i.e. Tax Deduction at Source and TCS i.e. Tax Collected at Source. 
             It works as an identifier for any individual and all entities who deduct tax at the source.              
             TAN is provided to any person who makes an application for it and every TDS and TCS payment is to be made by using this TAN number. 
             TAN is also used while making payments of professional fees, and rents, salary to name a few. 
             TAN applications are of two types: TAN application for allotment and TAN application for correction.
      </p>

   </div>
      </section>
        {/* TAN Section */}

    <section className="bg-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* TAN Application for Allotment */}
        <h2 className="text-3xl font-bold secondaryText mb-4">
          TAN Application for Allotment
        </h2>
        <p className="text-gray-700 mb-6 leading-relaxed">
          Application for a new TAN can be made online as well as offline. The applicant has to visit the NSDL-TIN for an online application. 
          For offline application, the applicant must download and fill the form 49B which should be submitted to the nearest TIN Facilitation Centre (TIN-FC). 
          The address to centers is provided on the NSDL-TIN website.         </p>

        {/* TAN Application for Correction or Change */}
        <h2 className="text-3xl font-bold secondaryText mb-4">
          TAN Application for Correction or Change
        </h2>
        <p className="text-gray-700 mb-6 leading-relaxed">
          Such an application is usually made after the TAN is received. If there is any correction in the data 
          provided in the TAN application or any kind of correction has to be made in the previous application, 
          one has to submit an application to the IT department of the TIN- Felicitation center where the application 
          for Tan was originally submitted. One must provide the TAN allotment letter and all the details of the TAN for the same.
        </p>

        {/* Documents Required */}
        <h2 className="text-3xl font-bold secondaryText mb-4">
          Documents Required for TAN Application
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>No document other than the AADHAR card and PAN card is required while applying for a TAN. 
            However, if the application is made online, then the acknowledgment generated during the 
            submission of the form must be downloaded, signed, and forwarded to the NSDL through the post. 
          </li>
        </ul>
      </div>
    </section>

        {/* Contact Section */}

    <section className="bg-gray-50 py-12 px-6">
      <div className="max-w-5xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl font-bold secondaryText mb-6">
          How to Apply for TAN
        </h2>

        {/* Description */}
        <p className="text-gray-700 mb-8 leading-relaxed">
          TAN can be applied online as well as offline. The procedure for the TAN application can be a 
          confusing and tedious procedure. Therefore it is always wise to refer to an expert before making such an application. We at YouTax, are determined to make this whole procedure easy, convenient, and hassle-free.
          Our team of experts will make sure that your TAN application is submitted correctly and rapidly. 
          All you have to do is reach out to us on our website {" "}
          <a
            href="https://www.youtax.in"
            className="text-red-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.youtax.in
          </a>{" "}
          or contact us at{" "}
          <a
            href="tel:+918421447373"
            className="text-red-600 hover:underline"
          >
            +(91) 8421447373
          </a>.
        </p>  
      </div>
    </section>
    </main>
      </>
  )
}