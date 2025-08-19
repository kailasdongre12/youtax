import Image from "next/image";

export default function udyamregistration() {
  return (
    <>
           <main className="">
             {/* Info Section */}
             <section className="flex flex-col md:flex-row items-center justify-center gap-10 px-6 py-14 md:py-24 max-w-7xl mx-auto">
               {/* Left Side Image */}
               <div className="w-full md:w-1/2 items-end">
                 <Image
                   src="/assets/services/Udyam Registration/udyam.jpeg" // update with your actual path
                   alt="Accounting Services"
                   width={400}
                   height={50}
                   className="rounded-xl serviceImage w-full"
                 />
               </div>
     
               {/* Right Side Content */}
               <div className="w-full md:w-1/2 text-center">
                 <h2 className="text-3xl md:text-5xl font-normal secondaryText mb-4">
     
         What is UdyogAadhar/Udyam?
         </h2>
    <p className="text-gray-600 mb-4 leading-relaxed">
         Udyog Aadhar also known as the Aadhar to Business is a twelve-digit Unique Identification 
         Number provided by the Ministry of Micro, Small, and Medium enterprises. 
         The Udyog Aadhar scheme had been introduced in 2015 and has now been revised as “UDYAM”. 
        The Udyog Aadhar scheme has now been replaced by Udyam by the Government of India. 
         All the industries registered under the Udyog Aadhar now have to be re-registered under 
        the portal of UDYAM. After successfully registering, the unique identification 
        number is issued by the Ministry of Micro, Small, and Medium Enterprises (MSME).
     </p>

          </div>
  </section>

{/* Udyam Section */}
    <section className="secondaryBg py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-white mb-6">
          Who Can Register for Udyog Aadhar / Udyam?
        </h2>

        {/* MSME Criteria */}
        <p className="text-white mb-4 leading-relaxed">
          Only enterprises that fall under the definition of an MSME (Micro, Small, and Medium Enterprise) 
          are eligible for Udyam registration through the Udyam Registration Portal.
        </p>

        <h3 className="text-2xl font-semibold primaryText mb-3">MSME Classification</h3>
        <ul className="list-disc pl-6 text-white space-y-2 mb-8">
          <li>
            <strong>Micro Enterprise:</strong> Those enterprises with investments, not more than 1 crore and turnover not more than 5 crores.

          </li>
          <li>
            <strong>Small Enterprise:</strong>Those enterprises with investments, of not more than 10 crores and a turnover of not more than 50 crores.

          </li>
          <li>
            <strong>Medium Enterprise:</strong> Those enterprises with investments, not more than 50 crores and turnover of not more than 250 crores.

          </li>
        </ul>

        {/* Udyog Aadhar Certificate */}
        <h2 className="text-3xl font-bold text-white mb-6">
          What is Udyog Aadhar / Udyam Registration Certificate?
        </h2>
        <p className="text-white mb-4 leading-relaxed">
          After successfully registering on the official portal issued by the Ministry of Micro, Small, and Medium Enterprises, 
          the ministry issues a <strong>Udyog Aadhar Certificate</strong> (now replaced by the Udyam Registration Certificate) 
          containing a <strong>Unique Registration Number</strong>.
        </p>
        <p className="text-white mb-4 leading-relaxed">
          Enterprises that already possess a Udyog Aadhar certificate are required to re-register on the Udyam Registration Portal 
          to obtain the <strong>Udyam Registration Certificate</strong>. This document is essential for availing 
          the numerous benefits provided by the Government of India to MSMEs.
        </p>
        <p className="text-white mb-4 leading-relaxed">
            The Udyam Registration also like Udyog Aadhar, contains the Unique Registration Number.
            This certificate is absolutely 
            necessary to take advantage of all the benefits provided by the Government of India to MSME’s. 
        </p>

      </div>
    </section>

        {/* How to Apply Section */}

    <section className="bg-gray-50 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center secondaryText mb-6">
          Registration Process
        </h2>

        {/* Process Description */}
        <p className="text-gray-700 mb-4 text-center leading-relaxed">
          The process of obtaining the Udyog Aadhar or Udyam registration has to be conducted online on the 
          government-issued website which is udyamregisteration.gov.in. Those who already have the Udyog Aadhar 
          now have to re-register under the Udyam registration portal. The website has two portals for the same.
          One is for the fresh applicants and one is for those who would re-register under the Udyam registration website. 
          After the successful registration, the Udyam Registration Certificate is issued by the MSME.

          <a
            href="https://udyamregistration.gov.in"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-600 underline hover:text-blue-800"
          >
            udyamregistration.gov.in
          </a>.
        </p>

        
        {/* Complication Notice */}
        <p className="text-gray-700 mb-4 text-center leading-relaxed">
          The registration process for Udyam is a complicated online procedure. The whole process can be confusing and time-consuming. 
          This is where we come in. At YouTax we have a team of experienced professionals who will make the whole process easy and hassle-free. 
          The experts at YouTax will take care of the whole process and makes sure that your enterprise gets registered on time. 
          All you have to do is reach out to us on our website <a href="https://www.youtax.in" className="text-red-600 underline" target="_blank" rel="noopener noreferrer">www.youtax.in</a> or call us at <a href="tel:+918421447373" className="text-red-600 underline">+91 8421447373</a>. our team of experienced professionals will 
          handle the entire process, ensuring your enterprise is registered quickly and without hassle.
        </p>
      </div>
    </section>
    </main>
      </>
  )
}