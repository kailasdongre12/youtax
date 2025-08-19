import Image from "next/image";

export default function Partnershipe() {
  return (
    <>
      <main className="">
        {/* Info Section */}
        <section className="flex flex-col md:flex-row items-center justify-center gap-10 px-6 py-14 md:py-24 max-w-7xl mx-auto">
          {/* Left Side Image */}
          <div className="w-full md:w-1/2 items-end">
            <Image
              src="/assets/services/PARTNERSHIP FIRM REGISTRATION/PARTNERSHIP-FIRM-REGISTRATION.jpeg" // update with your actual path
              alt="PARTNERSHIP FIRM REGISTRATION"
              width={400}
              height={50}
              className="rounded-xl serviceImage w-full"
            />
          </div>

          {/* Right Side Content */}
          <div className="w-full md:w-1/2 text-center">
            <h2 className="text-3xl md:text-5xl font-normal secondaryText mb-4">            

                Best Partnership Firm Registration Services in Pune

            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
             The partnership is one of the most famous business organizations today. 
             It is easy to form with less compliance as compared to other organizations (for example a company). 
             A partnership firm is formed when two or more people come together to form, run and operate a firm. 
             Any Partnership can be incorporated by forming a partnership deed. Every partnership requires partnership deeds in which the roles, duties, profits, and purposes of every partner are decided and hence is one important document while forming a partnership firm. To incorporate a partnership 
             firm is to legalize it and by making a partnership deed the Partnership Firm thus gets legalized.

             </p>
          </div>
      </section>


 {/* Partnership Registration Section */}
    <section className="secondaryBg py-12 px-6">
      <div className="max-w-5xl mx-auto">
        
        {/* Heading */}
        <h2 className="text-3xl font-bold text-white mb-6">
          Advantages of Incorporating a Partnership
        </h2>

        {/* Introduction */}
        <p className="text-white mb-6 leading-relaxed">
          Incorporating a partnership firm is very beneficial as it provides the partners with certain rights to the partnership. 
          Following are a few benefits of incorporating a partnership firm:
        </p>

        {/* Advantages List */}
        <ul className="space-y-4">
          <li className="flex items-start">
            <span className="text-blue-600 font-bold mr-2">1.</span>
            <span className="text-white">
              Once registered, every partner gets the right to sue any other partner or the partnership firm 
              for enforcing his rights as per the partnership deed.
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 font-bold mr-2">2.</span>
            <span className="text-white">
              Once registered, the partnership firm gets the right to sue any third party to enforce a right. 
              However, any third party can sue the firm irrespective of it being unregistered.
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 font-bold mr-2">3.</span>
            <span className="text-white">
              Once registered, the firm can claim set-offs or initiate other proceedings to enforce a right 
              against any third party.
            </span>
          </li>
        </ul>
      </div>
    </section>

        {/* Conclusion Section */}
    <section className=" secondaryText px-6 py-12 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">How to Register a Partnership Firm?</h2>

      <p className="text-lg text-center mb-4">
        The registration process is available online mode. An application form has to be filed with the 
        Registrar of Firms of the State in which the Firm is instituted with the prescribed amount of fees 
        and have to be submitted to the office of the Registrar of the State. The application has to be 
        signed by all the partners of the partnership firm.  After the documents are checked thoroughly, 
        the Registrar makes sure that all the criteria are fulfilled by the applicant in the application 
        and issues the “Certificate of Registration”.
      </p>

      <p className="text-lg text-center mb-4">
        The process of incorporating a partnership can be a complicated procedure and completely document-based. 
        Therefore it is very important to consult an expert while making an application.YouTax consists of a team of highly experienced       
         <span className="font-medium text-red-600"></span>.
         who will make sure that your partnership firm is incorporated within no time and in a hassle-free manner. 
      </p>

      <p className="text-lg text-center mb-6">
        We at YouTax, with the help of our reliable consultants, have incorporated various partnership firms 
        according to the customer's demand and have provided satisfying results to our customers. 
        All you have to do is contact us on our contact number
        <a href="tel:+918421447373" className="text-red-600 underline font-medium mx-1">+91 8421447373</a> 
        or visit our website 
        <a href="https://www.youtax.in" target="_blank" rel="noopener noreferrer" className="text-red-600 underline font-medium ml-1">youtax.in</a>.
      </p>

      </section>
    </main>
 </>
  )
}


