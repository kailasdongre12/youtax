import Image from "next/image";

export default function GstRegister() {
  return (
    <>
      <main className="">
        {/* Info Section */}
        <section className="flex flex-col md:flex-row items-center justify-center gap-10 px-6 py-14 md:py-24 max-w-7xl mx-auto">
          {/* Left Side Image */}
          <div className="w-full md:w-1/2 items-end">
            <Image
              src="/assets/services/GstRegister/GstRegister.jpeg" // update with your actual path
              alt="Gst Ragistration"
              width={400}
              height={500}
              className="rounded-xl serviceImage w-full"
            />
          </div>

          {/* Right Side Content */}
          <div className="w-full md:w-1/2 text-center">
            <h2 className="text-3xl md:text-5xl font-normal secondaryText mb-4">
             Expert GST Registration Consultant for All Your Needs   
            </h2>
            <p className="text-gray-600 mb-2 leading-relaxed">
             Good and Service Tax Act enacted in 2017 is the recent development for the reformation of indirect
             taxes in the country. Previously the country levied two types of taxes on the public, Direct Tax,
             and Indirect Tax. GST is an indirect tax that has replaced other indirect taxes like VAT,
             Service Tax and Excise Tax
          </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Formulated with an aim to implement “one country one tax”. 
              Goods and Service Tax has now become a single indirect tax law for the entire country. 
              It has helped improve the competitiveness of products in the market by eliminating several
             taxes and leveeing just one tax, which is the GST. 
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
                Moreover, it has fastened the whole process of return filings, applications for refunds, etc. 
                by accommodating an online portal to carry out the same. GST is an attempt by the government 
                to increase the base of taxpayers and improvise the regulation of indirect taxation in the country.
            </p>
          </div>
      </section>


 {/* GST Registration Section */}
  <section className=" secondaryBg text-white px-8 py-4 max-w-screen mx-auto">
      {/* Components of GST */}
      <h2 className="text-3xl font-bold mb-6 text-center">What are the Components of GST?</h2>

      <ul className="list-decimal list-inside text-lg space-y-4">
        <li>
          <strong>CGST</strong> - The tax collected by the Central Government on all transactions within the state.
        </li>
        <li>
          <strong>SGST</strong> - The tax collected by the State Government on all transactions within the state.
        </li>
        <li>
          <strong>IGST</strong> - The tax collected by the Central Government on all transactions between two different states
          (e.g., Maharashtra and Uttar Pradesh).
        </li>
      </ul>

      <p className="mt-4 text-lg">
        For transactions within a single state, CGST and SGST are collected and shared between the Central and State Governments.
        For inter-state transactions, IGST is levied by the Central Government and then shared with the destination state.
      </p>

      {/* GST Registration Requirement */}
      <h2 className="text-3xl font-bold mt-12 mb-6 text-center">Who Needs to Get a GST Registration Mandatorily?</h2>

      <p className="text-lg mb-4">Below are some examples where GST registration is mandatory:</p>

      <ul className="list-decimal list-inside text-lg space-y-4">
        <li>
          All businesses whose turnover exceeds ₹40 lakhs in a financial year (related to supply of goods).
        </li>
        <li>
          Businesses in Special Category States (NE and Hill States) with turnover exceeding ₹10 lakhs (supply of goods).
        </li>
        <li>
          Businesses whose turnover exceeds ₹20 lakhs in a financial year (supply of services).
        </li>
        <li>All businesses transacting inter-state.</li>
        <li>
          Casual taxable persons (supply in a state where GST is applicable but without a fixed place of business).
        </li>
        <li>
          Non-resident taxable persons (supplying goods/services from a foreign location into India).
        </li>
        <li>
          Input Service Distributors (offices distributing tax credits on services used centrally).
        </li>
        <li>
          E-Commerce aggregators (e.g., Amazon, Flipkart).
        </li>
        <li>
          Persons supplying via e-commerce aggregators.
        </li>
      </ul>
    </section>



        {/* Conclusion Section */}
        <section className=" text-gray-900  px-6 py-12 max-w-8xl mx-auto">
      <h2 className="text-3xl font-bold mb-6  text-center">GST Registration:</h2>
        <p className="ml-10 text-center text-lg mb-4">
          The process of registering one as a normal taxable person is called GST registration. 
          It is mandatory for certain businesses whose turnover exceeds 40 lakhs in an annual financial year (10 lakhs for NE and Hill States). 
          If such businesses carry out business without registering themselves under GST, it is an offense and heavy penalties are applied to such businesses.  
        </p>
        <p className="ml-10 text-center text-lg mb-4">
            It is a lengthy process and requires financial expertise. 
            Here at You Tax we are determined to help our customers register their GST hassle-free and rapidly. 
            YouTax is a one-stop destination for all kinds of financial services. 
            All you have to do is reach out to us at our contact number <a href="tel:+918421447373" className="text-blue-600 underline">+91 8421447373</a> or visit our website <a href="https://www.youtax.in" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">www.youtax.in</a>
        </p>
        </section>
       </main>
      </>
  );
}
