import Image from "next/image";
export default function AccountingHero() {
  return (
    <>
      <main className="">
        {/* Info Section */}
        <section className="flex flex-col md:flex-row items-center justify-center gap-10 px-6 py-14 md:py-24 max-w-7xl mx-auto">
          {/* Left Side Image */}
          <div className="w-full md:w-1/2 items-end">
            <Image
              src="/assets/services/accounting/account.jpeg" // update with your actual path
              alt="Accounting Services"
              width={400}
              height={50}
              className="rounded-xl serviceImage w-full"
            />
          </div>

          {/* Right Side Content */}
          <div className="w-full md:w-1/2 text-center">
            <h2 className="text-3xl md:text-5xl font-normal secondaryText mb-4">
              Best Accounting Services in Pune for Financial Success
            </h2>

            {/* Introduction */}
            <p className="text-gray-700 leading-relaxed mb-6">
              Accounting, often referred to as the <strong>financial language of business</strong>, 
              is the process of maintaining a firm’s financial and managerial records. 
              Anyone who wants to keep a close watch on their expenses and income needs proper accounting. 
              <strong> It is an essential element for any business</strong> as it oversees all transactions, 
              cash flows, and financial positions—enabling informed decision-making and strategy development.
            </p>

            {/* Why It Matters */}
            <p className="text-gray-700 leading-relaxed">
              Maintaining accurate accounts is crucial, as failing to do so can lead to legal consequences. 
              At <strong>YouTax</strong>, we are committed to providing you with the best financial and accounting services. 
              By outsourcing your accounting tasks to us, you take a step towards hassle-free and convenient account management.
            </p>
          </div>
      </section>

      {/* Services Overview */}
      <section className="secondaryBg py-12">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <h3 className="text-2xl font-semibold text-white mb-4">
            Accounting Services That We Provide
          </h3>
          <p className="text-white leading-relaxed mb-6">
            Accounting is very essential for channelized and consistent business growth. 
            The information maintained in such reports is very important without which the future operations of the company cannot be efficiently planned. 
            Here at YouTax, we provide you with a team of professionals who are financial experts to consult you with all your business-related requirements.          </p>
        </div>
      </section>

 {/* Accounting Services List Section */}
   <section className="mt-5 py-12">
     <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* Heading */}
          <h2 className="text-3xl font-bold text-white mb-8">
            Accounting Services Provided by YouTax
          </h2>

    {/* Service List */}
       <div className="space-y-6">
       {  
          [
              {
                title: "1. Financial Accounting",
                desc: "We help you prepare a summarized and well-structured financial statement and reports of all your financial transactions."
              },
              {
                title: "2. Auditing",
                desc: " Auditing is an integral part of any business. It provides the actual financial position of the business. Tax audits, company audits, etc. are efficiently done here at Youtax."
              },
                {
                title: "3. Tax Planning",
                desc: "Tax planning is very important so that your business performs in the most tax-effective way. Here at Youtax, we provide you with a team of professional individuals who will help you plan your taxes accordingly."
              },
              {
                title: "4. Consulting Services",
                desc: " When it comes to accounting or any finance-related solution, Youtax is your one-stop solution."


              }
            ].map((service, index) => (
              <div key={index}>
                <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
                <p className="text-gray-700">{service.desc}</p>
              </div>
       ) ) }
    </div>

   {/* Closing Statement */}
      <div className="mt-5 bg-white rounded-lg">
         <p className="text-gray-700">
              <strong>Here at YouTax, we are determined to provide you with the best financial service.</strong> 
              Whether you own a business or are seeking personal financial assistance, outsourcing your accounting 
              to YouTax is the smartest move to grow your business. Our expert team provides consultation and 
              executes the work—making the whole process hassle-free and easy.
            </p>
            <p className="text-gray-700 mt-4">
              📞 <a href="tel:+918421447373" className="text-red-600 font-semibold">+91 8421447373</a>  
              &nbsp;|&nbsp; 🌐 <a href="http://www.youtax.in" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">www.youtax.in</a>
            </p>
          </div>
        </div>
      </section>
    </main>
 </>
  );
}
