// src/app/pages/TdsReturns.jsx
import Image from "next/image";

export default function TdsReturns() {
  return (
          <main className="">
            {/* Info Section */}
            <section className="flex flex-col md:flex-row items-center justify-center gap-10 px-6 py-14 md:py-24 max-w-7xl mx-auto">
              {/* Left Side Image */}
              <div className="w-full md:w-1/2 items-end">
                <Image
                  src="/assets/services/TDS Preparation and E-Filling/TDS Preparation and E-Filling.jpeg" // update with your actual path
                  alt="TDS Preparation and E-Filling"
                  width={400}
                  height={50}
                  className="rounded-xl serviceImage w-full"
                />
              </div>
 {/* Right Side Content */}
          <div className="w-full md:w-1/2 text-center">
            <h2 className="text-3xl md:text-5xl font-normal secondaryText mb-4">
                How to Prepare TDS Returns—Get Expert Guidance with YouTax
            </h2>
            <p className="text-lg md:text-xl text-gray-700 mb-6">
              <strong>
                  The tax deducted at the very source of the income is nothing but TDS.
                </strong>{" "}
                Tax Deducted at Source is a concept introduced in order to collect income tax in advance. 
                It can be deducted by any person who makes a payment of a specified nature like salary, interest, 
                professional fees, etc., to any other person. The person making the payment is called a{" "}
                <em>deductor</em>, and the person receiving the payment is called a <em>deductee</em>. 
                The deductor collects the tax at the source and conveys the same to the Government.
              </p>
              <p className="text-gray-700 leading-relaxed">
                The deductee then receives the net amount after TDS deduction. Like every taxpayer, when the deductee 
                files their income tax return with their gross income, the final tax liability is adjusted with the TDS 
                amount. The deductee thus takes credit for the tax paid on their behalf.
              </p>
            </div>
 </section>

{/* TDS Deduction Section */}
      <section className="mt-20 secondaryBg py-12">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          {/* Heading */}
          <h2 className="text-3xl text-center font-bold text-white mb-6">
            Who should deduct TDS?
          </h2>

          {/* Description */}
          <p className="text-white leading-relaxed mb-4">
            Any person who makes payments of a specified nature under the provisions of the Income Tax Act, 1961, 
            is liable to deduct tax at source. For most payments, TDS rates are provided in the Income Tax Act. 
            The deductor must deduct TDS according to these rates.
          </p>
          <p className="text-white leading-relaxed mb-4">
            No TDS is required if the payer is an individual or Hindu Undivided Family (HUF) whose accounts are not 
            required to be maintained. However, if such a person pays rent exceeding ₹50,000 per month, they must 
            deduct tax at source, and such deductors need not apply for TAN (Tax Deduction Account Number).
          </p>
          <p className="text-white leading-relaxed mb-4">
            Employers deduct TDS as per applicable income tax slab rates. Banks deduct 10% TDS on interest income 
            if PAN is provided, otherwise 20%. Submission of Form 15G/15H to the bank can prevent TDS if the total 
            taxable income is below the taxable limit.
          </p>

          {/* Examples List */}
          <h3 className="text-xl font-semibold text-white mt-6 mb-4">
            Examples where TDS should <span className="text-red-600">not</span> be deducted:
          </h3>
          <ul className="list-disc list-inside text-white space-y-1">
            <li>Payment to Government agencies</li>
            <li>Interest earned on investment schemes like NSC, VPS, etc.</li>
            <li>On declaration on Form 15G or 15H</li>
            <li>Certificates issued by Income Tax Officer under section 197 of the Income Tax Act</li>
            <li>Interest earned through deposits or savings accounts in cooperative societies</li>
            <li>Exempt income (not chargeable to tax as per income tax law)</li>
          </ul>

          {/* TDS Certificate */}
          <h3 className="text-xl font-semibold primaryText mt-10 mb-4">
            What is a TDS Certificate?
          </h3>
          <p className="text-white leading-relaxed mb-4">
            TDS certificates detail various transactions between the deductor and deductee. They serve as proof 
            of tax deduction at source and must be issued to taxpayers. These certificates are necessary when 
            claiming credit while filing the annual income tax return.
          </p>

          {/* Certificate Types */}
          <ul className="list-decimal list-inside text-white space-y-1">
            <li>Form 16  – TDS on salary payment</li>
            <li>Form 16A – TDS on non-salary payment</li>
            <li>Form 16B – TDS on sale of property</li>
            <li>Form 16C – TDS on rent</li>
          </ul>
        </div>
      </section>

      {/* How to File a TDS Return Section */}
<section className="mt-10 py-12">
  <div className="max-w-6xl mx-auto px-6 lg:px-12">
    {/* Heading */}
    <h2 className="text-3xl font-bold secondaryText mb-6">
      How to File for a TDS Return?
    </h2>
    <p className="text-gray-700 leading-relaxed mb-6">
      Following are the forms one needs to file depending on the nature of the payment and the due dates by which the form has to be filed in order to file TDS and receive the TDS certificate:
    </p>

    {/* Forms List */}
    <ol className="list-decimal list-inside text-gray-700 space-y-4">
      <li>
        <strong>Form 24Q</strong> – For TDS on salary payment  
        <br />
        <span className="text-sm text-gray-600">
          Due Date: 31st July (Quarter 1), 31st October (Quarter 2), 31st January (Quarter 3), 31st May (Quarter 4)
        </span>
      </li>
      <li>
        <strong>Form 27Q</strong> – For TDS on payments made to non-residents except salaries  
        <br />
        <span className="text-sm text-gray-600">
          Due Date: 31st July (Quarter 1), 31st October (Quarter 2), 31st January (Quarter 3), 31st May (Quarter 4)
        </span>
      </li>
      <li>
        <strong>Form 26QB</strong> – For TDS on sale of property  
        <br />
        <span className="text-sm text-gray-600">
          Due Date: 30 days from the end of the month in which TDS is deducted
        </span>
      </li>
      <li>
        <strong>Form 26QC</strong> – For TDS on rent  
        <br />
        <span className="text-sm text-gray-600">
          Due Date: 30 days from the end of the month in which TDS is deducted
        </span>
      </li>
    </ol>

    {/* Description */}
    <p className="text-gray-700 leading-relaxed mt-8">
      The filing of TDS is a prolonged process, where various forms have to be filed depending on the nature of the payment made. 
      It is a tedious procedure and can easily go wrong. Therefore, it is recommended to opt for a financial expert while filing your TDS.
    </p>

    {/* Contact Info */}
    <p className="text-gray-700 leading-relaxed mt-4">
      Here at <strong>YouTax</strong>, we assist you to file your TDS without any complications. 
      We provide the best financial expert for the same. You can reach out to us by visiting our website 
      or just give us a call at the following number: <strong>+91 8421447373</strong>
    </p>
  </div>
 </section>
</main>
);
}
