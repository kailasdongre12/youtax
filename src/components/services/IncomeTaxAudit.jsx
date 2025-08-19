"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function IncomeTaxAudit() {
  const process = [
    {
      title: "Analysis",
      image: "/assets/services/incomeTaxAudit/analysis.png",
      description:
        "This handy tool helps you create dummy text for all your layout needs. We are gradually adding new ",
    },
    {
      title: "Plan",
      image: "/assets/services/incomeTaxAudit/plan.png",
      description:
        "This handy tool helps you create dummy text for all your layout needs. We are gradually adding new ",
    },
    {
      title: "Process",
      image: "/assets/services/incomeTaxAudit/process.png",
      description:
        "This handy tool helps you create dummy text for all your layout needs. We are gradually adding new",
    },
  ];
  return (
    <>
      <main className="">
        {/* Info Section */}
        <section className="flex flex-col md:flex-row items-center justify-center gap-10 px-6 py-14 md:py-24 max-w-7xl mx-auto">
          {/* Left Side Image */}
          <div className="w-full md:w-1/2 items-end">
            <Image
              src="/assets/services/incomeAudit.png" // update with your actual path
              alt="Tax Audit"
              width={400}
              height={50}
              className="rounded-xl serviceImage w-full"
            />
          </div>

          {/* Right Side Content */}
          <div className="w-full md:w-1/2 text-center">
            <h2 className="text-3xl md:text-5xl font-normal secondaryText mb-4">
              Affordable Income Tax Audit Services Tailored to Your Needs
            </h2>
            <p className="text-gray-700 mb-4">
              To understand what a tax audit is, it is important to understand the term “audit”. In layman’s terms, an audit can be understood as an official inspection of the accounts of an individual or an organization. But to formally define an audit, it is a systematic, documented, and independent process for obtaining evidence to confirm the accuracy of the financial statements provided by an organization. An audit can be done internally, by the employees of the organization by an independent auditor, or by an organization externally. An external inspection is usually preferred to check if there is no fraud committed while maintaining the books of
              accounts.
            </p>
          </div>
        </section>

{/* =================== */}
        <section className="bg-gray-100 text-center px-6 md:px-26 py-8 md:py-12">
          <h3 className="text-2xl md:text-3xl font-semibold secondaryText">Tax Audit?</h3>
          <p className="mt-4">
            The tax audit as the name suggests is an official inspection of the accounts of any profession or business carried out by an individual or an organization but with the view of Income Tax, which means, an audit conducted to analyze the accuracy of Income Tax returns of the individual’s profession or business. In a broader sense, a tax audit is done to ensure that the books of accounts are been correctly maintained and also to get the certification of the same, to check if any malpractices were committed while filing Income Tax returns, and to report, all the details required under the Income Tax law regarding tax depreciation, Compliance, etc. It is mandatory to do a tax audit under the provisions of the Income Tax Act in India, to ensure that the organization or an individual complies with the laws
            provided under the act regarding Income Tax.
          </p>

          <h3 className="text-2xl md:text-3xl font-semibold secondaryText mt-18">
            Who Conducts A Tax Audit?
          </h3>
          <p className="mt-4">
            Tax audits are conducted by a Chartered Accountant (CA) or by a firm of Chartered Accountants. YouTax provides you with a team of highly professional and experienced individuals who will consult you through the whole process of a tax audit. Here at You Tax, we are  determined to provide you with the easiest and quickest way to audit your tax. Want to get your tax audited? You Tax is your one-stop solution. All you have to do is contact us via 
            <a href="tel:8421447373" className="primaryText font-semibold">
              +(91) 8421447373
            </a>.
          </p>
        </section>

        {/* Our Process Section */}
        <section className="bg-[#F8F8F8] py-14 px-6 md:px-24 text-center">
          <h2 className="secondaryText text-2xl md:text-3xl font-semibold mb-8">Our Process</h2>
          <div className="grid md:grid-cols-3 gap-8 md:gap-22">
            {process.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative overflow-hidden px-4 py-8 primaryBg flex flex-col justify-start text-center rounded-lg`}
              >
                {/* Background Image */}
                <div className="relative z-10 px-4 rounded-xl">
                  <Image
                    src={card.image}
                    alt={card.title}
                    width={20}
                    height={20}
                    className="w-14 h-14 rounded-2xl mx-auto"
                  />

                  <h3 className="text-2xl font-semibold mb-4 mt-4 secondaryText">
                    {" "}
                    {card.title}
                  </h3>
                  <hr className="w-full border-gray-800 mx-auto mb-4" />
                  <p className="text-md leading-relaxed">{card.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

            {/* ========= */}
        <section className="secondaryBg py-8 md:py-14 px-6 md:px-24">
          <h3 className="text-2xl md:text-3xl font-semibold text-white">Who Should Do A Tax Audit?</h3>
          <p className=" text-white mt-4">
            Not everyone needs to get a tax audit done, but everyone can certainly file for an Income Tax return. However, under Section 44 B of the Income Tax Act, that class of people for whom it is mandatory to file an Income tax audit has been mentioned. <br/>
            To narrow it down, the following is the list of persons to whom it is mandatory to get their accounts audited:
          </p>
          <h4 className="primaryText text-xl md:text-2xl my-6">For persons carrying on a business:</h4>
            <ol className="text-white list-decimal pl-5 space-y-2">
                <li>If the gross earning or turnover of your business is above 1 crore in the Financial Year. (The threshold limit of turnover for a tax audit is increased to Rs. 10 crores if the cash transactions are up to 5 percent of total gross receipts and payments).</li>
                <li>If your business falls under presumptive taxation mentioned in Section 44 AE (Retail businesses), 44 BB (business of exploration, etc., of mineral oils), or 44 BBB (business of civil construction, etc., in certain turnkey power projects). An audit is necessary when you claim profits to be less than the prescribed limit under the Presumptive Taxation Scheme.</li>
                <li> If your business falls under presumptive taxation mentioned in Section 44 AD (business on presumptive basis). When you claim that the taxable income has been below the limits specified per the presumptive taxation and income exceeds the basic threshold limit, an audit is necessary.</li>
                <li> If your business is falling under presumptive taxation mentioned in Section 44 AD and is declaring profits as per the Presumptive Taxation Scheme. If the gross receipts or turnover exceeds Rs. 2 crores in a Financial Year an audit is necessary..</li>
            </ol>


            <h4 className="primaryText text-xl md:text-2xl my-6">For Persons In Certain Professions:</h4>
            <ol className="text-white list-decimal pl-5 space-y-2">
                <li>If you carry on a profession in which your gross income is more than 50 lakhs in a Financial Year.</li>
                <li>If your profession falls under presumptive taxation mentioned in Section 44 ADA. When you claim profits to be less than the stipulated limit under the Presumptive Taxation Scheme and when you claim that the income is more than the amount up to which Income Tax is not chargeable, an audit is necessary.</li>                
            </ol>

          <h4 className="text-white text-2xl md:text-3xl my-6">Who Does Not Require A Tax Audit?</h4>
            <ol className="text-white list-decimal pl-5 space-y-2">
                <li>If  the assessee is a non-resident and is engaged in the shipping business (Section 44 B).</li>
                <li>If  the assessee is a non-resident and is engaged in the business of operation of aircraft (Section 44 BBA).</li>
                <li>  If any taxpayer has had his books of accounts audited under any other law than the Income Tax Law, he is not required to carry on a tax audit.</li>
                <li> If your business is falling under presumptive taxation mentioned in Section 44 AD and is declaring profits as per the Presumptive Taxation Scheme and if the gross receipts or turnover does not exceed Rs. 2 crores in a Financial Year, it is not necessary to carry on a tax audit.</li>
            </ol>
        </section>

        {/* ================== */}
        <section className="text-center px-6 md:px-26 py-8 md:py-12">
          <h3 className="text-2xl md:text-3xl font-semibold secondaryText">What Is The “Presumptive Taxation Scheme”?</h3>
          <p className="mt-4">
            The government of India came up with a Presumptive Taxation Scheme in order to make filing taxes easier for small businessmen and professionals. This scheme gives the liberty not to maintain books of accounts. Your income is calculated on a presumptive basis instead, provided your turnover is below a stipulated limit under the Income Tax Act. Any person opting for this scheme to file the Income-tax return has to declare his income at a prescribed rate, in return he is relieved from maintaining those books of accounts. The Income Tax Act has defined this scheme under three sections- Section 44-AD, 44-ADA, and 44-AE, based on the type of businesses and professions.  
          </p>

          <h3 className="text-2xl md:text-3xl font-semibold secondaryText mt-18">
            How To Get Your Tax Audit Done?
          </h3>
          <p className="mt-4">
            To get a tax audit done, there are a few forms that are to be submitted compulsorily. These forms are prescribed by the Income Tax Act under Section 44 AB.<br/>
             Form 3 CA – If any law other than the Income Tax Law has mandated the taxpayer carrying on a business or a profession to carry on a tax audit.
            <br/>Form 3 CB – If the taxpayer carrying on a business or a profession is conducting a tax audit under the Income Tax law.
             <br/>Form 3 CD – It is a detailed statement of various aspects of the business and its transactions. 
             <br/>Form 3 CE – This form is to be filled by Non –residential Indians and foreign companies receiving royalties or fees for technical services from the Indian government.
          </p>

          <h3 className="text-2xl md:text-3xl font-semibold secondaryText mt-18">When To Get Your Tax Audit Report?</h3>
          <p className="mt-4">
            The due date to get the tax audit report for all taxpayers is the 30th of September of the assessment year. For all the international transactions it is the 31st of October of the assessment year. <br/>
            YouTax is a one-stop solution for all your taxation and finance-related problems. Contact us at<a href="tel:8421447373" className="primaryText font-semibold">+(91) 8421447373</a>  or visit us on our website youtax.in and get your tax audited in no time.   
          </p>
        </section>

      </main>
    </>
  );
}
