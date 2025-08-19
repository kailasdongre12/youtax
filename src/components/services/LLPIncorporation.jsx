// app/page.jsx
import Image from "next/image";

export default function LLPIncorporation() {
  return (
      <main className="">
        {/* Info Section */}
        <section className="flex flex-col md:flex-row items-center justify-center gap-10 px-6 py-14 md:py-24 max-w-7xl mx-auto">
          {/* Left Side Image */}
          <div className="w-full md:w-1/2 items-end">
            <Image
              src="/assets/services/LLPIncorporation/LLPIncorporation.png"
              alt="LLP Registration"
              width={400}
              height={50}
              className="rounded-xl serviceImage w-full"
            />            
          </div>    

        {/* Text Right */}
          <div className="w-full md:w-1/2 text-center">
            <h2 className="text-3xl md:text-5xl font-normal secondaryText mb-4">
            How to Incorporate an LLP Get Expert Guidance with YouTax
          </h2>
          <p className="text-gray-700 mt-4 leading-relaxed">
            Limited Liability Partnership (LLP) is an alternate hybrid corporate business form,
            designed to provide limited liabilities to partners while offering the flexibility
            of a partnership. It combines the benefits of limited liability like a company with
            the operational flexibility of a partnership.
          </p>
          <p className="text-gray-700 mt-4 leading-relaxed">
            The LLP Act of 2008 governs LLPs in India. This structure has proven to be more
            flexible and efficient for entrepreneurs and professionals, allowing them to
            create partnership structures tailored to their needs.
          </p>
          <p className="text-gray-700 mt-4 leading-relaxed">
            Once incorporated, an LLP becomes a separate legal entity with the rights to sue
            or be sued, sign contracts, and own property in its own name. It is cheaper and
            easier to operate than a private limited company due to fewer compliance
            requirements.
          </p>
          <p className="text-gray-700 mt-4 leading-relaxed">
            Unless otherwise agreed in a formal LLP agreement, LLPs are governed by
            Schedule One of the LLP Act.
          </p>
        </div>
      </section>

      {/* Key Benefits and LLP Agreement Section */}
      <section className="secondaryBg py-12 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Key Benefits */}
          <h2 className="text-2xl font-bold mb-4 text-white">Key benefits of LLP incorporation:</h2>
          <ul className="list-disc pl-6 space-y-1 text-white">
            <li>A separate legal entity</li>
            <li>Flexibility to draft rules and duties regarding partnership agreement</li>
            <li>No requirement for minimum capital contribution</li>
            <li>Fewer compliances and fewer regulations</li>
            <li>Easier and cheaper to operate</li>
            <li>Easier to dissolve</li>
            <li>Limited liability</li>
          </ul>

          {/* What is an LLP Agreement */}
          <h2 className="text-2xl font-bold mt-8 mb-4 text-white">What is an LLP agreement?</h2>
          <p className="text-white mb-4">
            An LLP agreement must be filed within 30 days of incorporation with the Ministry
            of Corporate Affairs. It defines the rights and duties of the partners towards
            each other and the LLP, covering changes in partner roles, addition or removal
            of partners, and ensuring smooth functioning of the business.
            Without such an agreement, the LLP will be governed by Schedule One of the LLP Act.
          </p>

          {/* Key contents */}
          <p className="font-semibold mb-2 primaryText">
            Key contents required in an LLP agreement:
          </p>
          <ol className="list-decimal pl-6 space-y-1 text-white">
            <li>Name of the LLP</li>
            <li>Date of the agreement</li>
            <li>Parties to the agreement</li>
            <li>Contribution of the partners (capital contribution and profit ratios)</li>
            <li>Admission of new partners and dissociation of partners</li>
            <li>Place of business</li>
            <li>Business activity</li>
            <li>Books of accounts and audits</li>
            <li>Allocation and distribution of profits</li>
          </ol>

          {/* Closing note */}
          <p className="text-gray-700 mt-4">
            The agreement may also contain other provisions as per the partners’ requirements.
          </p>
        </div>
      </section>

      {/* How to get LLP incorporated Section */}
<section className="bg-white py-12 px-6">
  <div className="max-w-4xl mx-auto">
    {/* Heading */}
    <h2 className="text-2xl md:text-3xl font-bold secondaryText mb-4">
      How to get LLP incorporated?
    </h2>

    {/* Intro paragraph */}
    <p className="text-gray-700 leading-relaxed mb-4">
      The incorporation of an LLP basically means registering it with the Ministry of
      Corporate Affairs (MCA). The process is simple yet can be time-consuming and tricky.
      A minimum of two partners are required to incorporate an LLP, and at least one partner
      must be a citizen of India. If an LLP agreement is made, the rights and duties of the
      partners are determined by it. The LLP agreement is directly responsible for compliance
      with all provisions of the LLP Act, 2009.
    </p>

    {/* Procedure List */}
    <h3 className="text-lg font-semibold mt-6 mb-3 secondaryText">
      Procedure to incorporate an LLP:
    </h3>
    <ol className="list-decimal pl-6 space-y-2 text-gray-700">
      <li>Obtain a DSC (Digital Signature Certificate)</li>
      <li>Apply for DIN (Director Identification Number)</li>
      <li>RUN-LLP (Reserve Unique Name) approval</li>
      <li>Incorporation of LLP</li>
      <li>File for LLP agreement</li>
    </ol>

    {/* Additional Info */}
    <p className="text-gray-700 leading-relaxed mt-4">
      The procedure must be followed precisely step by step. Moreover, various documentation
      of partners and the LLP is also a prerequisite while incorporating an LLP. It takes
      approximately 15 days to successfully register an LLP, subject to the availability of
      all required documents.
    </p>
  </div>
</section>

    </main>
  );
}
