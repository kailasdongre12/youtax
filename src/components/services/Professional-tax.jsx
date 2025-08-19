import Image from "next/image";

export default function ProfessionalTax() {
  return (
    <>
          <main className="">
                 {/* Info Section */}
                 <section className="flex flex-col md:flex-row items-center justify-center gap-10 px-6 py-14 md:py-24 max-w-7xl mx-auto">
                   {/* Left Side Image */}
                   <div className="w-full md:w-1/2 items-end">
                     <Image
                       src="/assets/services/Professional Tax/Professional-Tax.jpeg" // update with your actual path
                       alt="Professional Tax"
                       width={400}
                       height={500}
                       className="rounded-xl serviceImage w-full"
                     />
                   </div>
         
                   {/* Right Side Content */}
                   <div className="w-full md:w-1/2 text-center">
                     <h2 className="text-3xl md:text-5xl font-normal secondaryText mb-4">

                    </h2>
     
            <p className="text-gray-600 mb-4 leading-relaxed">
             The term professional tax should not be confused with tax which has to be paid by professionals such as doctors or employees such as government servants only. 
             It has a very wide meaning and accommodates a lot of other sectors for the same purpose as well. 
             The term Professional Tax means the tax levied by the State government on any person who is earning a living through a medium. 
             Basically, it is the tax that has to be paid by every single earning individual which includes freelancers, traders, and business professionals as well.

          </p>
          </div>
      </section>

        {/* Professional Tax  */}
       
    <section className="secondaryBg py-12 px-6">
      <div className="max-w-6xl mx-auto  gap-12">
        
        {/* Who has to pay */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-6">
            Who Has to Pay Professional Tax?
          </h2>
          <p className="text-white mb-4">
            Following are a few examples of individuals and entities that have to pay professional tax:
          </p>
          <ul className="list-disc list-inside space-y-1 text-white">
            <li>Companies</li>
            <li>LLP’s</li>
            <li>Firms</li>
            <li>Societies</li>
            <li>Corporations</li>
            <li>Chartered Accountants</li>
            <li>Chartered Secretary</li>
            <li>Tax Consultants</li>
            <li>Doctors, Dentists, Medical Consultants</li>
            <li>Contractors</li>
            <li>Engineers</li>
            <li>Architects</li>
          </ul>
        </div>

        {/* Who doesn’t have to pay */}
        <div>
          <h2 className="text-3xl  mt-15 font-bold primaryText mb-6">
            Who Doesn’t Have to Pay Professional Tax?
          </h2>
          <p className="text-white mb-4">
            Following are a few examples of entities that are exempted from paying professional tax:
          </p>
          <ul className="list-disc list-inside space-x-3  text-white">
            <li>Ex-Servicemen [SI No.1 (Schedule)]</li>
            <li>Individuals who run an educational institute (Classes up to 12th STD.)</li>
            <li>Handicapped Individuals (At least 40% disability)</li>
            <li>Individuals in Central Para Military Force (CPMF)</li>
            <li>
              Individuals with visual and hearing disabilities and who are earning a salary
            </li>
          </ul>
        </div>
      </div>
    </section>



        {/* Professional Tax info */}
    
    <section className="bg-white secondaryText px-6 py-12 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">Who Collects the Professional Tax?</h2>

      <p className="text-lg mb-4">
       The Professional Tax is levied by the <strong> State Government</strong> and therefore varies from State to State. The procedure to pay professionals is online as well as offline. Each state has a different slab for its professional taxes. Following is the tax slab for the state of Maharashtra:

      </p>

      {/* Tax Slab Table */}
      <div className="overflow-x-auto min-w-4xl">
        <table className="min-w-full border border-gray-300 text-center mb-6">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 border">Monthly Salary</th>
              <th className="px-4 py-2 border">Tax</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2 border">Up to ₹7,500 for men</td>
              <td className="px-4 py-2 border">No tax is levied</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border">Up to ₹10,000 for women</td>
              <td className="px-4 py-2 border">No tax is levied</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border">₹7,501 to ₹10,000</td>
              <td className="px-4 py-2 border">₹175</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border">₹10,000 and above</td>
              <td className="px-4 py-2 border">₹200 for 12 months and ₹300 for the last month</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Explanation */}
      <p className="text-lg text-center mb-4">
        If you are an employee at a firm or in a company, the employer deducts the Professional Tax from your salary and later submits it to the government. 
        If you are self-employed then you have to pay the tax yourself.
      </p>
      <p className="text-lg text-center mb-4">
        If you are self-employed, in that case, to pay the professional tax you have to fill out a form available on the official website of the State Government. 
        For the state of Maharashtra, the website is mahagst.gov.in. The applicant must then fill out the enrollment application form and a few other forms for the same. 
        This whole process is thoroughly based on documentation. It is highly recommended to consult a financial expert or consultant like YouTax before applying for the same.
     </p>

      <p className="text-lg text-center mb-4">
       We at YouTax have the best financial experts with profound experience in the field. 
       We can take care of your Professional Tax submission, be it as a self-employed individual or a 
       professional enterprise. We have a team of highly professional technical and financial experts
      who will make sure that your taxes are paid on time. All you have to do is contact us on our contact 
      number which is <a href="tel:+918421447373" className="text-red-600 font-medium underline mx-1">+91 8421447373</a> 
      or visit our website <a href="https://www.youtax.in" target="_blank" rel="noopener noreferrer" className="text-red-600 font-medium underline ml-1">youtax.in</a>.
      </p>
      <p className="text-lg text-center mb-4">
        We are committed to making this whole tedious procedure easy for you and satisfying all of your taxation-related issues.
     </p>

      {/* Consequences Section */}
      <h2 className="text-3xl font-bold mt-12 mb-6 text-center">Consequences of Not Paying Professional Tax</h2>

      <p className="text-lg text-center mb-4">
        A penalty is imposed by the State government if one does not register to pay the professional tax.The 
        penalty may defer from State to State. The state government also imposes taxes on those who do not pay 
        Professional tax within the due date. For example, the State Government imposes Rs.5 per day for delays in registration. 

      </p>

      <p className="text-lg text-center mb-4">
        Therefore it becomes very important to make sure that your professional tax is been paid to the 
        state Government. We at Youtax will make sure that your enterprise pays the professional tax on 
        time, if you are a self-employed individual we will make sure that you get registered on time and pay your professional tax in a hassle-free manner.
      </p>
     </section>
     </main>
      </>
  )
}
