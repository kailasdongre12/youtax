import Image from "next/image";

export default function IncomeTax() {
  return (
    <>
     <main className="">
            {/* Info Section */}
            <section className="flex flex-col md:flex-row items-center justify-center gap-10 px-6 py-14 md:py-24 max-w-7xl mx-auto">
              {/* Left Side Image */}
              <div className="w-full md:w-1/2 items-end">
                <Image
                  src="/assets/services/income-tax-e-filing/income-tax-e-filing.png" // update with your actual path
                  alt="incomtaxe--e-filing"
                  width={400}
                  height={50}
                  className="rounded-xl serviceImage w-full"
                />
              </div>
    
              {/* Right Side Content */}
              <div className="w-full md:w-1/2 text-center">
                <h2 className="text-3xl md:text-5xl font-normal secondaryText mb-4">
                   Expert Income Tax E-Filing Consultant for All Your Needs
            </h2>
            <p className="text-gray-600 mb-2 leading-relaxed">
             One of the most important sources of revenue for the government is tax.
              Taxes are collected from every earning individual and business.
              These collected taxes are used by the government for the overall development of the country.
              Taxes are mainly classified into two types, direct taxes, and indirect taxes.
              Of all the direct taxes imposed by the Central Government, 
              the most commonly known tax is the Income Tax. Income Tax is the direct tax imposed by 
              the government on the income earned by individuals and businesses during a financial year.
              Not paying the tax is a legal offense and is punishable by imprisonment and a fine.


          </p>
          </div>
      </section>


        {/* Income Tax Registration Section */}
    <section className="bg-white text-gray-900 px-6 py-12 max-w-8xl mx-auto">
      <h2 className="text-3xl font-bold secondaryText mb-6 text-center">How to File for Income Tax Return Online?</h2>

      <p className="text-lg mb-4">
        Income tax returns can be filed both offline and online. Below is the step-by-step process for filing it online:
      </p>

      <ol className="list-decimal list-inside space-y-2 text-lg">
        <li>Open the Income Tax e-filing portal: <a href="https://incometax.gov.in/iec/foportal/" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">incometax.gov.in/iec/foportal</a></li>
        <li>Log in to the e-filing portal</li>
        <li>Click on the 'e-file' tab and select the 'Income Tax Return' link</li>
        <li>Fill in the necessary details (e.g., assessment year, ITR form number)</li>
        <li>Click on continue</li>
        <li>Read the instructions carefully and fill in all applicable and mandatory fields of the Online ITR form</li>
        <li>Click on the e-verification option</li>
        <li>Click on the 'Preview and Submit' button</li>
        <li>'Submit' the ITR</li>
      </ol>

      <p className="text-lg text-center mt-6">
        The whole process of filing an income tax return can be confusing and time-consuming. 
        Therefore it is highly suggested to consult with an expert while filing the income tax return.
      </p>

      <p className="text-lg text-center mt-4">
        <span className="font-semibold">YouTax</span> YouTax consists of a team of highly professional 
        financial experts with a dominating experience in the field of taxation and financial consultation. 
        YouTax will make sure that your Income-tax return will get filled easily and within no time
      </p>

      <p className="text-lg text-center mt-4">
     Our <span className="font-semibold text-red-600">financial experts</span>  will help you understand the whole process, take care of proper documentation and file the income tax return for you. All you have to do is reach out to us on our website 
        <a href="https://www.youtax.in" className="text-red-600 underline" target="_blank" rel="noopener noreferrer">www.youtax.in</a> or contact us on our number <a href="tel:+918421447373" className="text-red-600 underline">+91 8421447373</a>.
      </p>
    </section>
    </main>
 </>
  );
}
