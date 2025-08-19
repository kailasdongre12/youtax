import Image from "next/image";

export default function ShopAct() {
  return (
    <>
      <main className="">
             {/* Info Section */}
             <section className="flex flex-col md:flex-row items-center justify-center gap-10 px-6 py-14 md:py-24 max-w-7xl mx-auto">
               {/* Left Side Image */}
               <div className="w-full md:w-1/2 items-end">
                 <Image
                   src="/assets/services/Shop Act License/shop.act.filing.jpeg" // update with your actual path
                   alt="Shop Act License"
                   width={400}
                   height={50}
                   className="rounded-xl serviceImage w-full"
                 />
               </div>
     
               {/* Right Side Content */}
               <div className="w-full md:w-1/2 text-center">
                 <h2 className="text-3xl md:text-5xl font-normal secondaryText mb-4">  Shop Act License     
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
             Any person with an intention to establish a business must surely have heard the term “Shop Act License”. 
             So what exactly is it? Commonly known as Shop Act License is a License provided by the government regulated 
             under the Act of Shop and Establishment Act. It basically is a license to carry out any particular enterprise 
             or business in the state. Every state has its own separate department for issuing the license and the 
             rules as to the license may vary from state to state. The Shop Act license is one of the essential 
             documents required in the whole process of business establishment.
             Therefore any person who wants to start a business or establishment must have a Shop and Establishment License.
          </p>

    </div>
   </section>

 {/* shopact Section */}

    <section className="secondaryBg py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl text-center font-bold text-white mb-6">
          Who Should Get a Shop Act License?
        </h2>
        <p className="text-white mb-4 text-center leading-relaxed">
          All the entities defined under the definition of “Shop” in the Act must get the
          Shop Act License. These include offices, go-downs, warehouses, and storerooms
          used for the purpose of carrying out the said business. Basically, all premises
          where the selling and purchasing of goods take place or where services are
          rendered to customers.
        </p>
        <p className="text-white text-center leading-relaxed">
          Establishments also include all workplaces where persons are employed for
          office work. This includes commercial spaces, banking, trading, or insurance
          establishments, and administrative services. It also includes hotels,
          boarding, cafes, restaurants, theatres, or other public entertainment or
          amusement places.
        </p>
      </div>
    </section>

        {/* Benefits Section */}
        
    <section className="bg-white px-6 py-12 max-w-5xl mx-auto text-gray-800">
      <h2 className="text-3xl font-bold mb-6 secondaryText text-center">
        Process for Obtaining Shop Act License
      </h2>

      <p className="text-lg text-center mb-4">
        The process of obtaining a Shop Act license is available both online and offline. It may vary
        from state to state. Any person seeking such a license should log into their respective State’s
        Labour Department website. For example, in Maharashtra, the website is
        <a
          href="https://mahakamgar.maharashtra.gov.in"
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-600 underline ml-1"
        >
          mahakamgar.maharashtra.gov.in
        </a>.
      </p>

      <p className="text-lg text-center mb-4">
        For offline application, the applicant must fill out the registration form and submit it to the
        Chief Inspector of the relevant area, along with the prescribed fee. If the application is
        correctly filled, the Chief Inspector will issue the Shop Act License.
      </p>

      <p className="text-lg text-center mb-4">
        For online application, the applicant must fill in the application through the website,
        upload the required documents, and pay the prescribed fee. This fee and process may differ from
        state to state. The entire process depends on accurate documentation and can be time-consuming.
        It is highly recommended to consult a financial advisor or consultant before applying.
      </p>

      <p className="text-lg text-center mb-4">
        At <span className="font-semibold">YouTax</span>, we are determined to help you obtain your Shop
        Act License easily and quickly. Our experienced professionals will handle the entire process for
        you.
      </p>

      <p className="text-lg mb-6">
        Contact us at
        <a href="tel:+918421447373" className="text-red-600 font-medium underline mx-1">
          +91 8421447373
        </a>
        or visit our website
        <a
          href="https://youtax.in"
          className="text-red-600 font-medium underline ml-1"
          target="_blank"
          rel="noopener noreferrer"
        >
          youtax.in
        </a>
        to get started with your Shop Act License application.
      </p>
    </section>

     {/* ROC Compliance Section */}

    <section className="bg-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold secondaryText mb-6">
          Documents Required for Shop Act License
        </h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          The following are the documents required for obtaining a Shop Act License:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Shop or business establishment’s address proof</li>
          <li>PAN Card of the proprietor</li>
          <li>ID proof of the proprietor</li>
          <li>Details of the employees</li>
          <li>
            Additional licenses required for the said business (e.g., FSSAI license in case
            of food industry-related businesses)
          </li>
          <li>Payment challan</li>
         </ul>
       </div>
     </section>
   </main>
  </>
  )
}