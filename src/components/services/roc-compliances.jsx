import Image from "next/image";

export default function Compliances() {
  return (
    <>
               <main className="">
                      {/* Info Section */}
                      <section className="flex flex-col md:flex-row items-center justify-center gap-10 px-6 py-14 md:py-24 max-w-7xl mx-auto">
                        {/* Left Side Image */}
                        <div className="w-full md:w-1/2 items-end">
                          <Image
                            src="/assets/services/ROC COMPLIANCES/roc.compliance.png" // update with your actual path
                            alt="ROC COMPLIANCES"
                            width={400}
                            height={50}
                            className="rounded-xl serviceImage w-full"
                          />
                        </div>
              
                        {/* Right Side Content */}
                        <div className="w-full md:w-1/2 text-center">
                          <h2 className="text-3xl md:text-5xl font-normal secondaryText mb-4">
                     Best ROC Compliance Services in Pune for Your Business
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
             Every Company and LLP registered under the Companies Act, 2013 and Limited Liability 
             Partnership Act, 2008 has to mandatorily file an annual declaration to the Registrar of 
             Companies of the state in which the Company or LLP is instituted. ROC compliances 
             can be made once a year or on the happening of an event. Registrar of Company is a 
             body governed by the Ministry of Corporate Affairs (MCA) that looks after the 
             administration of companies and LLP. It is also responsible to issue certification of 
             incorporation or registration and take cognizance of every new development in 
             the affairs of the companies and LLP. 
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            In any ROC compliance, the company or LLP has to inform the ROC about every change that 
            takes place within the company or LLP like a change in the directors, change in name, or 
            association. The ROC compliance must include the annual returns, agreements, and other 
            financial details. Also, the company and LLP have to file various forms with the ROC 
            compliances which are related to a specific purpose like the passing of any new resolution or 
            appointment of a director.
            </p>
          </div>
      </section>


        {/* Compliances Section */}
    <section className="secondaryBg py-12 px-6 mix-w-6xl mx-auto">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Benefits Section */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-6">
            Benefits of Conducting ROC Compliance
          </h2>
          <ul className="list-disc list-inside space-y-2 text-white">
            <li>Avoiding penalties and being secured</li>
            <li>Avoid legal consequences for not filing ROC on time</li>
            <li>
              ROC is seen as proof of existence for the company or LLP when their annual
              reports are regularly filed
            </li>
            <li>
              Helps maintain, update, and organize the company’s administrative, legal,
              and financial situations
            </li>
          </ul>
        </div>

     {/* Forms Section */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-6">
            Forms to Be Filed with ROC
          </h2>
          <p className="text-white  mb-4">
            ROCs are made annually or when an event takes place. Such events are to be mandatorily submitted to the ROC. 
            Therefore there are certain forms that are to be filed whenever a ROC is filed on the happening of a certain event.          
            </p>
            <p className="text-white mb-4">
              Following are examples of a few forms to be filed while filing for ROC:
            </p>
          <ul className="list-disc list-inside space-y-2 text-white">
            <li>
              <strong>MGT-7:</strong> To be filed by all registered companies for the purpose of filing annual returns

            </li>
            <li>
              <strong>Form 11:</strong>  To be filed by all registered LLPs for the purpose of filing annual returns
            </li>

            <li>
              <strong>Form 8:</strong> To be filed by all registered LLPs for the purpose of submitting the annual statement
            </li>

            <li>
              <strong>ADT-1:</strong> To be filed by all registered, unregistered, listed, and unlisted companies for the purpose of auditor appointment

            </li>

            <li>
              <strong>ADT-3:</strong> If any auditor resigns
            </li>
            <li>
              <strong>INC-22:</strong> To be filed by all registered companies if there is a change in the location of its registered office.

            </li>
            <li>
              <strong>INC-23:</strong>To be filed by all registered companies if there is a change in the location of its registered office from one state to another. The approval of the regional director is mandatory for this purpose.

            </li>
          </ul>
        </div>
      </div>
    </section>

     {      /* infomation */}
     
    <section className="bg-white text-gray-800 px-6 py-12 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 secondaryText text-center">
        Procedure as to ROC Compliance
      </h2>

      <p className="text-lg text-center mb-4">
        ROC compliance is totally based on documentation. The procedure is difficult and can often be found 
        confusing. We at YouTax with the help of our reliable consultants have successfully filed various 
        ROC in accordance with the customer demand and have satisfied our customers. The point to consider 
        here is that we will be filing ROC as per your demands and therefore the procedure would change as 
        to the purpose of filing ROC.
      </p>

      <p className="text-lg  mb-6">The following is therefore a standard procedure to file a ROC:</p>

      <ol className="list-decimal list-inside space-y-3 text-lg mb-6">
        <li>
          <strong>Information as to the Application:</strong>  Based on the purpose of filing the ROC, 
          you would have to provide us with the information necessary to fulfill the registration of that purpose. 
          This information will change as per the forms which are needed to be filed with ROC.
        </li>
        <li>
          <strong>Documentation:</strong> After the collection of information, you would have to provide us with 
          the necessary documents which are necessary to file the ROC.These documents will vary as per the requirements of the form which are needed to be filed with ROC
        </li>
        <li>
          <strong>ROC Form Filing:</strong> The Annual ROC Form or any other form will be filed by us 
          after collecting the necessary information and verifying and cross-examining the documents provided by you
        </li>
      </ol>

      <p className="text-lg text-center mb-4">
        The whole procedure is quite complicated therefore it is important to consult with financial experts. 
        We at YouTax consist of a team of highly experienced professional individuals, who will make this whole process easy for you. We at YouTax are determined to make ROC filing easy, 
        hassle-free, and quick for all our customers. All you have to do is reach out to us on our website  
        <a href="https://www.youtax.in" target="_blank" rel="noopener noreferrer" className="text-red-600 font-medium underline ml-1">
          youtax.in
        </a>  Contact us at <a href="tel:+918421447373" className="text-red-600 font-medium underline mx-1">+91 8421447373</a>
        or visit
    </p>
    </section>
    </main>
    </>
  )
}


