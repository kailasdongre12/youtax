"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function CompanyIncorporation() {
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
              src="/assets/services/companyAudit/companyAudit.png" // update with your actual path
              alt="Tax Audit"
              width={400}
              height={50}
              className="rounded-xl serviceImage w-full"
            />
          </div>

          {/* Right Side Content */}
          <div className="w-full md:w-1/2 text-center">
            <h2 className="text-3xl md:text-5xl font-normal secondaryText mb-4">
              Best Company Audit Services in Pune, for Financial Accuracy
            </h2>
            <p className="text-gray-700 mb-4">
              In order to understand what a company audit is, it is important to understand the term “audit”. In layman's terms, an audit can be understood as an official inspection of the accounts of an individual or an organization. But to formally define an audit, it is a systematic, documented, and independent process for obtaining evidence in order to confirm the accuracy of the financial statements provided by an organization. An audit can be done internally, by the employees of the organization or by an independent auditor, or by an organization externally. An external inspection is usually preferred to check if there is no fraud committed while maintaining the books of accounts.
            </p>
          </div>
        </section>

{/* =================== */}
        <section className="bg-gray-100 text-center px-6 md:px-26 py-8 md:py-12">
          <h3 className="text-2xl md:text-3xl font-semibold secondaryText">What is a Company Audit?</h3>
          <p className="mt-4">
            Among all the statutory audits, company audits are the most famous. Company Audits are done with the objective of reporting the state of the company’s accounts and finance to the regulatory authority. The Company Audits are governed by the Companies Act, of 2013. The audit report forms have their own set of rules and instructions which are set by the government and are to be followed thoroughly while filing for a company audit. This is where you need to have a financial assessment and Youtax is exactly the place to be. Our reliable financial experts will provide you with proper consultation and make sure your company gets audited on time.
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

        {/* ================== */}
        <section className="text-center px-6 md:px-26 py-8 md:py-12">
          <h3 className="text-2xl md:text-3xl font-semibold secondaryText">How do get your company audited?</h3>
          <p className="mt-4">
            Every Company registered under the Companies Act has to be audited. The company has to be audited by a practicing Chartered Account. The appointment of an auditor for the purpose is mandatory. As per Section 228 of the Companies Act, 1956, where the company has a branch office, its accounting should also be audited. The audit of accounts of the branch can be done either by the company auditor or by any other person who is qualified to act as the company’s auditor. <br/>
	        We at YouTax consist of a team of highly qualified experts who have the necessary skill and knowledge to conduct an audit of the company efficiently. You can visit us on our website or reach out to us at our contact number<a href="tel:8421447373" className="primaryText font-semibold">+(91) 8421447373</a>. You Tax is determined to make this whole procedure easy for you and get your company audited on time.
          </p>
        </section>

      </main>
    </>
  );
}
