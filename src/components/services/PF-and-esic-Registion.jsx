// pages/PF-and-esic-registration.js
import Image from "next/image";

export default function PFESICRegistration() {
  return (
      <main className="">
        {/* Info Section */}
        <section className="flex flex-col md:flex-row items-center justify-center gap-10 px-6 py-14 md:py-24 max-w-7xl mx-auto">
          {/* Left Side Image */}
          <div className="w-full md:w-1/2 items-end">
            <Image
              src="/assets/services/PF-ESIC-Registration/pf-esic.jpeg" // update with your actual path
              alt="GST e Filling"
              width={400}
              height={50}
              className="rounded-xl serviceImage w-full"
            />
          </div>

          {/* Right Side Content */}
          <div className="w-full md:w-1/2 text-center">
            <h2 className="text-3xl md:text-5xl font-normal secondaryText mb-4">
           Get Professional Assistance for PF and ESIC Registration with YouTax
       </h2>
         <p className="text-gray-700 leading-relaxed mb-2">
              The Employees' Provident Fund and the Employees' State Insurance are two of the most
              well-known schemes for salaried employees. Both schemes are highly beneficial and
              popular investment options. In each scheme, a specific amount is deducted from the
              employee's salary, with an additional contribution from the employer. This combined
              amount is deposited into the employee's account.
            </p>

            <p className="text-gray-700 leading-relaxed mb-2">
              The EPF was introduced under the Employees' Provident Fund and Miscellaneous Act, 1952.
              It is regulated by the Ministry of Labor and Employment and managed by the Employees'
              Provident Fund Organisation (EPFO). The deducted amount can be used for post-retirement
              or emergency purposes, with the percentage pre-defined under the Act.
            </p>

            <p className="text-gray-700 leading-relaxed">
              The ESIC, or Employees' State Insurance Corporation, is an autonomous body established
              to provide health and insurance benefits to employees. Funded jointly by employees and
              employers, ESIC can also set up hospitals and provide medical care. It can raise loans
              for employee needs and collaborate with the State Government for healthcare services.
            </p>
          </div>
    </section>

      {/* Benefits Section - Full Width */}
      <section className="mt-20 secondaryBg p-8 w-full">
        <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl text-center font-bold text-white mb-4">
            PF and ESIC Registration</h2>
          <h2 className="text-2xl font-bold primaryText mb-4">Benefits of PF</h2>
          <ul className="list-decimal list-inside space-y-2 text-white">
            <li>It can be withdrawn at any time for any purpose.</li>
            <li>The PF is created and maintained online, and the employee can access their PF funds from anywhere.</li>
            <li>The amount is exempt from income tax liability if withdrawn after 5 years of continuous employment.</li>
            <li>In case of death, the nominee gets the PF amount and interest accumulated.</li>
          </ul>

          <h2 className="text-2xl font-bold primaryText mt-8 mb-4">Benefits of ESIC</h2>
          <ul className="list-decimal list-inside space-y-2 text-white">
            <li>Medical benefits for employees and family members.</li>
            <li>Maternity benefits for women: 26 weeks paid leave and 6 weeks leave in case of miscarriage.</li>
            <li>Dependent benefits for the dependents of the insured person.</li>
            <li>Enhanced and extended sickness benefits.</li>
            <li>Disability benefits provided as long as the disability continues.</li>
          </ul>
        </div>
      </section>

      {/* How to Register Section */}
      <section className="bg-white py-12 mt-10">
    
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        {/* Heading */}
        <h2 className="text-3xl text-center font-bold secondaryText mb-6">
          How to register for PF and ESIC?
        </h2>

        {/* Paragraphs */}
        <p className="text-gray-700 leading-relaxed mb-6">
          The registration of PF and ESIC is a quirky process and can be confusing as it is a documented process. 
          We at YouTax provide you with proper consultations for your PF requirements. 
          We will make sure that your PF and ESIC registration is done as soon as possible and in a hassle-free manner. 
          We ensure that your application is prepared accurately by us. The documentation process is handled by us, and after 
          cross-checking and verifying the documents provided by you, our financial consultants fill out the application form 
          for you. After these tedious processes, we make sure that you get your license approved.
        </p>

        <p className="text-gray-700 leading-relaxed">
          The whole process is completely documentation-based, and therefore financial consultation is a must while making 
          registration for EPF and ESIC schemes. Our reliable consultants make sure that your PF and ESIC registration gets 
          done in no time. All you have to do is contact us on our mobile number 
          <span className="font-semibold text-blue-600"> +91 8421447273 </span> 
          or just visit our website 
          <a href="https://youtax.in" className="text-blue-500 underline ml-1">
            youtax.in
          </a>.
        </p>
      </div>
    </section>
    </main>
  );
}
