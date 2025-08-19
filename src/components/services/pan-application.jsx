import Image from "next/image";

export default function PanRegister() {
  return (
    <>
      <main className="">
        {/* Info Section */}
        <section className="flex flex-col md:flex-row items-center justify-center gap-10 px-6 py-14 md:py-24 max-w-7xl mx-auto">
          {/* Left Side Image */}
          <div className="w-full md:w-1/2 items-end">
            <Image
              src="/assets/services/pan-application/pan-application.png" // update with your actual path
              alt="pan application"
              width={400}
              height={50}
              className="rounded-xl serviceImage w-full"
            />
          </div>

          {/* Right Side Content */}
          <div className="w-full md:w-1/2 text-center">
            <h2 className="text-3xl md:text-5xl font-normal secondaryText mb-4">
                Streamline Your PAN Application with YouTax
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
             PAN, Permanent Account Number,is a unique alphanumeric ten-digit number allotted by the Income Tax Department to every tax-paying individual.
             It also works as an identity proof and basically be acquired by any citizen of India.
             It can be acquired by only those foreign citizens who pay taxes to the government.

          </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              The allocation of the permanent account number (PAN) is done under the Central Board of Direct Taxes surveillance. The basic motive of PAN is to keep permanent track of an individual’s financial activities. It is proven to be a necessary measure to prevent tax evasion.
              It is a permanent allocation and does not change in any of the states throughout India.
            </p>
          </div>
      </section>


        {/* PAN Registration Section */}
        <section className=" secondaryBg text-white mt-5 px-6 py-12 max-w-8xl mx-auto">
      <h2 className="text-3xl  font-bold mb-8 ">Who Should Get a PAN?</h2>
      <ul className="list-decimal list-inside space-y-2 text-lg">
        <li>Whoever earns a taxable income in India</li>
        <li>Every citizen of India as it is also a recognized identity proof</li>
        <li>Everyone who owns a business that had a turnover exceeding Rs. 5 Lakhs in the previous financial year</li>
        <li>Every foreign national who pays tax to the Indian Government</li>
      </ul>

      <h2 className="text-3xl font-bold mt-12 mb-6 ">Why Get a PAN?</h2>
      <p className="text-lg mb-6">
        PAN is an important document and besides being an identity proof, it is mandatory for the following processes:
      </p>
      <ul className="list-decimal list-inside space-y-3 text-lg">
        <li>To file Income Tax Returns</li>
        <li>To pay Direct Taxes</li>
        <li>To enter any specific transactions. Following are a few examples:
          <ul className="list-disc list-inside ml-6 mt-2 space-y-2">
            <li>Any payments exceeding Rs. 25,000 in hotels and restaurants at one-time</li>
            <li>Payment exceeding Rs. 50,000 for acquiring bonds, shares, or debentures</li>
            <li>Sale or purchase of any immovable property valued at Rs. 5 Lakhs or more</li>
            <li>Sale or purchase of any vehicles</li>
          </ul>
        </li>
      </ul>
    </section>

        {/* Conclusion Section */}
        <section className=" bg-white text-gray-900  px-6 py-12 max-w-8xl mx-auto">
      <h2 className="text-3xl font-bold mb-6  text-center">How to Apply for PAN?</h2>
      
      <p className="ml-10 text-lg mb-4">
        The process for applying for a PAN is available both online and offline. The online application can be filled out as follows:
      </p>

      <ul className="ml-10 list-disc list-inside space-y-2 text-lg">
        <li>Visit the website <a href="https://www.pan.utiitsl.com" className="text-red-600 underline" target="_blank" rel="noopener noreferrer">www.pan.utiitsl.com</a></li>
        <li>Select your application type</li>
        <li>Form 49A - Indian Citizen</li>
        <li>Form 49AA - Foreign Citizen</li>
        <li>Change or Correction in PAN</li>
        <li>Reprint of PAN Card</li>
      </ul>

      <p className=" ml-10 text-lg mt-6">
        The procedure for acquiring a PAN is simple yet can be tricky. We at <span className="font-semibold">YouTax</span> consist of a team of experienced professionals who will make this whole procedure easy for you.
      </p>

      <p className="ml-10 text-lg mt-4">
        For more information, contact us at <a href="tel:+918421447373" className="text-red-600 underline">+91 8421447373</a> or visit our website <a href="https://www.youtax.in" className="text-red-600 underline" target="_blank" rel="noopener noreferrer">www.youtax.in</a>
      </p>
    </section>
</main>
         </>
  );
}


