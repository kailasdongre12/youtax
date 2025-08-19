"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Gst() {
       return (
    <>
      <main className="">
        {/* Info Section */}
        <section className="flex flex-col md:flex-row items-center justify-center gap-10 px-6 py-14 md:py-24 max-w-7xl mx-auto">
          {/* Left Side Image */}
          <div className="w-full md:w-1/2 items-end">
            <Image
              src="/assets/services/Gst/gst.jpeg" // update with your actual path
              alt="GST e Filling"
              width={400}
              height={50}
              className="rounded-xl serviceImage w-full"
            />
          </div>

          {/* Right Side Content */}
          <div className="w-full md:w-1/2 text-center">
            <h2 className="text-3xl md:text-5xl font-normal secondaryText mb-4">
              Affordable Online GST Filing and Return Services for Your Business
            </h2>
            <p className="text-gray-700 mb-4">
               Good and Service Tax Act enacted in 2017 is the recent development for the reformation of indirect taxes in the country. 
               Previously the country levied two types of taxes on the public, Direct Tax, and Indirect Tax. 
               GST is an indirect tax that has replaced other indirect taxes like VAT, Service Tax and Excise Tax.
               Formulated with an aim to implement “one country one tax”, Goods and Service Tax has now become a single indirect tax law for the entire country.
            </p>
            <p className="text-gray-700 mb-4">
               It has helped improve the competitiveness of products in the market by eliminating several taxes and leveeing just one tax, which is the GST. 
               Moreover, it has fastened the whole process of return filings, applications for refunds, etc. 
               by accommodating an online portal to carry out the same. GST is an attempt by the government to increase the base of taxpayers and improvise the regulation of indirect taxation in the country.
            </p>
          </div>
        </section>

   {/* GST Components Section */}
      <section className="bg-gray-100  px-6 md:px-26 py-8 md:py-12">
        <div className="max-w-8xl mx-auto rounded-lg p-8">
          <h1 className="text-3xl font-bold text-center secondaryText mb-6">
            What are the Components of GST?
          </h1>

          <p className="text-gray-700 mb-6">
            Following are the taxes applicable under the Good and Service Tax:
          </p>

          <ul className="space-y-4">
            <li>
              <h2 className="text-xl font-semibold">1. GST</h2>
              <p className="text-gray-600">
                The tax collected by the Central Government on all transactions within the state.
              </p>
            </li>
            <li>
              <h2 className="text-xl font-semibold">2. SGST</h2>
              <p className="text-gray-600">
                The tax collected by the State Government on all transactions within the state.
              </p>
            </li>
            <li>
              <h2 className="text-xl font-semibold">3. IGST</h2>
              <p className="text-gray-600">
                The tax collected by the Central Government on all the transactions within two different states
                (e.g., transactions between the states of Maharashtra and Uttar Pradesh).
              </p>
            </li>
          </ul>

          <p className="mt-6 text-gray-700">
            For all the transactions within the sale, the tax collected would be divided between the Central and
            State governments. For those inter-state transactions, the tax levied would be collected by the Central
            Government, which then shares the collected tax (IGST) with the state.
          </p>

          <h2 className="text-2xl font-bold text-center mt-8">GST Registration</h2>
          <p className="mt-8 text-center text-gray-700">
            The process of registering one as a normal taxable person is called GST registration. It is mandatory
            for certain businesses whose turnover exceeds 40 lakhs in an annual financial year (10 lakhs for NE and
            Hill States). If such businesses carry out business without registering under GST, it is an offense and
            heavy penalties are applied.
          </p>

          <p className="mt-4 text-center text-gray-700">
            It is a lengthy process and requires financial expertise. Here at <span className="font-semibold">YouTax</span>, 
            we are determined to help our customers register their GST hassle-free and rapidly. 
            YouTax is a one-stop destination for all kinds of financial services. 
            Contact us at <a href="tel:+918421447373" className="text-blue-600 underline">+91 8421447373</a> 
            or visit our website <a href="https://youtax.in" target="_blank" className="text-blue-600 underline">youtax.in</a>.
          </p>
        </div>
      </section>


      {/* GST Registration Section */}
      <section className="secondaryBg px-6 md:px-26 py-8 md:py-12">
               <div className="max-w-8xl mx-auto rounded-lg p-8">
        <h1 className="text-3xl font-bold text-white mb-6">
          Who needs to get a GST registration mandatorily?
        </h1>

        <p className="text-white mb-6">
          Following are a few examples that mandatorily have to register for GST:
        </p>

        <ul className="space-y-4 list-disc pl-6 text-white ">
          <li>
            All businesses whose turnover exceeds <strong>40 lakhs</strong> in a financial year
            (Businesses related to the supply of Goods).
          </li>
          <li>
            All businesses in the <strong>Special Category States</strong> (NE and Hill States)
            whose turnover exceeds <strong>10 lakhs</strong> in a financial year
            (Businesses related to the supply of Goods).
          </li>
          <li>
            All businesses whose turnover exceeds <strong>20 lakhs</strong> in a financial year
            (Businesses related to the supply of Services).
          </li>
          <li>All businesses transacting inter-state.</li>
          <li>
            <strong>Casual taxable person</strong> (one who supplies goods/services in a state
            where GST is applicable but does not have a fixed place of business in that state).
          </li>
          <li>
            <strong>Non-resident taxable person</strong> (one who supplies goods/services to the
            country in a state where GST is applicable but does not have a fixed place of business
            in the country).
          </li>
          <li>
            <strong>Input Service Distributor</strong> (office of the supplier of goods/services,
            who receives tax invoices on input services and issues tax invoices for the
            distribution of credits on taxes paid on those services).
          </li>
          <li>
            <strong>E-Commerce aggregator</strong> (e.g., Amazon, Flipkart).
          </li>
          <li>
            A person who supplies via E-Commerce aggregators.
          </li>
        </ul>
      </div>
    
 </section>


 {/* GstReturns */}
   <section className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-8xl mx-auto bg-white  rounded-lg p-8">
        {/* Title */}
        <h1 className="text-3xl font-bold text-center secondaryText mb-6">
          Process of registering under GST
        </h1>

        {/* Description */}
        <p className="text-gray-700 text-center leading-relaxed mb-8">
          The process of GST registration has to be conducted online through the government website{" "}
          <a href="https://www.gst.gov.in" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
            gst.gov.in
          </a>. The said business can be registered under two categories depending upon the nature of the business:
          regular and under the composition scheme. It is a complicated procedure with various steps, including the
          submission and verification of various documents. Here at YouTax, we will simplify the tedious procedure and
          help you obtain your GSTIN and get your business registered under GST.
        </p>

        {/* GST Returns */}
        <h2 className="text-2xl font-semibold text-center text-gray-900 mb-4">GST Returns</h2>
        <p className="text-gray-700 text-center leading-relaxed mb-6">
          A GST return is a document that holds the account of all the purchases and sales. It contains details of all
          the taxes paid on purchases and collected on sales. Essentially, it is a declaration of the income generated
          through all business transactions. The following are the various types of GST returns filed according to the
          nature of the business:
        </p>

        {/* Returns List */}
        <ul className="space-y-3 list-decimal  pl-6 text-gray-700">
          <li>GSTR1  – Tax returns for outward supplies made (Regular Businesses)</li>
          <li>GSTR2  – Tax returns for inward supplies received (Regular Businesses)</li>
          <li>GSTR2B – Income Tax Credit (ITC) statement (Regular Businesses)</li>
          <li>GSTR3  – Monthly cumulated Tax return (Regular Businesses)</li>
          <li>GSTR4  – Annual cumulated Tax return (Regular Businesses)</li>
          <li>GSTR9C – Audit form to be filed when turnover exceeds 2 crores (Regular Businesses)</li>
          <li>GSTR4  – Quarterly returns for compounding vendors (Businesses under Composition Scheme)</li>
          <li>GSTR9A – Annual composition return form for taxpayers under the composition scheme</li>
          <li>GSTR5  – Return for non-resident foreign taxpayers</li>
          <li>GSTR6  – Monthly return for ISDs</li>
          <li>GSTR7  – Monthly return for TDS transactions</li>
          <li>GSTR8  – Monthly return for E-Commerce operators</li>
          <li>GSTR9B – Annual return form for E-Commerce operators</li>
          <li>GSTR10 – Final GST return before canceling a registration</li>
          <li>GSTR11 – For taxpayers with UIN</li>
          <li>GSTR1A – Amendment form to correct the GSTR1 document</li>
          <li>GSTR2A – Auto-drafted tax return based on GSTR1</li>
          <li>GSTR3A – Auto-generated quarterly tax return based on GSTR1, GSTR5, GSTR7</li>
          <li>GSTR3B – Tax notice issued to those who failed to file GST returns on time</li>
        </ul>
      </div>
    </section>


      
      {/* E-Filing */}
      <section className="min-h-screen bg-white py-12 px-6">
        <div className="max-w-8xl mx-auto bg-white rounded-lg p-8">
          <h1 className="text-3xl font-semibold  text-center secondaryText mb-4">
            The process to do E-filling of GST return
          </h1>
          <p className="text-gray-700 text-center leading-relaxed mb-5">
            The whole process has to be conducted through an online platform provided by the government i.e.{" "}
            <a href="https://www.gst.gov.in" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
              gst.gov.in
            </a>. The process of filing a GST return can be a complicated procedure. It involves the filing of various
            forms like GSTR1, GSTR1A, and GSTR9 depending upon the nature of the business conducted. Moreover, various
            types of documents have to be verified and uploaded on the portal for the same. Only after these forms are
            filed correctly, and the documents are verified accordingly, the tax return document for the quarterly or
            annual terms can be achieved.
          </p>
          <p className="text-gray-700 text-center leading-relaxed mb-5">
            It can definitely be a very lengthy and confusing process; therefore, it is very important to consult a GST
            expert. YouTax has been a successful platform where you can easily get assistance for all your tax and
            finance-related queries.
          </p>
          <p className="text-gray-900 text-center font-medium">
            We at YouTax will assist you to file GST returns without any complications or delay.
          </p>
          <p className="text-gray-700 text-center mt-3">
            Here at YouTax, we provide a GST expert specifically to help you understand the whole procedure of GST and
            file a GST return on your behalf for your convenience. So, pick up your phone and dial{" "}
            <span className="font-bold text-green-600">+91 8421447373</span> for the best solution for all your GST and
            finance-related complications.
          </p>
        </div>
 </section>




      </main>
    </>
  );
}
