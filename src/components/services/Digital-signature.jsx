// app/page.jsx or pages/index.jsx
import Image from "next/image";

export default function Signature() {
  return (
      <main className="">
        {/* Info Section */}
        <section className="flex flex-col md:flex-row items-center justify-center gap-10 px-6 py-14 md:py-24 max-w-7xl mx-auto">
          {/* Left Side Image */}
          <div className="w-full md:w-1/2 items-end">
            <Image
              src="/assets/services/DigitalSignature/DigitalSignature.png" // update with your actual path
              alt="Digital Signature"
              width={400}
              height={50}
              className="rounded-xl serviceImage w-full"
            />
          </div>

          {/* Right Side Content */}
          <div className="w-full md:w-1/2 text-center">
            <h2 className="text-3xl md:text-5xl font-normal secondaryText mb-4">            
                  Get Your Digital Signature Easily with YouTax
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              The world is rapidly changing. Right from communication to transactions,
              everything has been digitalized. Therefore, the use of digital signatures is
              increasing immensely.{" "}
              <strong>
                A digital signature is nothing but an electronic form of authorization
                used in digital platforms.
              </strong>{" "}
              Digital certificates, usernames, and password authentication systems are
              examples.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              <strong>
                Digital signatures work as a system of identification but on a digital
                platform.
              </strong>{" "}
              It is equivalent to a handwritten signature in the digital realm. Usage is
              increasing rapidly on important platforms like government organizations and
              financial institutions; hence, it must be secure and protected.
            </p>
            <p className="text-gray-600 leading-relaxed">
              <strong>Here at YouTax</strong>, we ensure that all safety measures and
              standards are in place to protect your digital signatures. Our professional
              team will not only guide you but also get the job done for you.
            </p>
          </div>
    </section>

    {/* Info Section */}
      <section className="secondaryBg py-12 px-6">
        <div className="max-w-5xl mx-auto">
          {/* What Are Digital Signatures Used For */}
          <h2 className="text-2xl font-bold text-white mb-4">
            What Are Digital Signatures Used For:
          </h2>
          <p className="text-white mb-4">
            A digital signature is used vividly on various platforms. Here are a few examples:
          </p>
          <ul className="list-disc list-inside text-white space-y-2">
            <li>Income tax return filing</li>
            <li>For various government-related tenders</li>
            <li>
              For registration of companies under the Ministry of Corporate Affairs (MCA)
            </li>
            <li>For trademark registrations</li>
            <li>
              For Annual Compliance for Registrar of Companies (ROC)
            </li>
          </ul>

          {/* Types of Digital Signatures */}
          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Types of Digital Signatures:
          </h2>
          <p className="text-white mb-4">
            A digital signature can be identified in various classes determining the
            purpose of such a signature:
          </p>
          <ul className="list-disc list-inside text-white space-y-3">
            <li>
              <strong>Class 1</strong> – Used in low-risk environments. Not for legal
              documentation.
            </li>
            <li>
              <strong>Class 2</strong> – Used in moderate-risk environments for legal
              documents like goods & service tax returns (GST), income tax returns, and
              all types of tax documents.
            </li>
            <li>
              <strong>Class 3</strong> – Used in high-risk environments for verification
              of identification in various certifying authorities such as court filings,
              e-tendering, and e-ticketing.
            </li>
          </ul>
        </div>
      </section>

      <section className="bg-white py-12 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Who Can Issue a Digital Signature */}
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Who Can Issue A Digital Signature?
        </h2>
        <p className="text-gray-600 mb-4">
          <strong>
            The issuance of a digital signature is done by competent authorities appointed
            by the government for the same.
          </strong>{" "}
          After providing the required documents and following the procedure accurately, a
          certificate is issued as proof of such digital identifications. Digital signatures
          cannot be transferred through email or other applications; they must be stored in
          separate digital storage, which is highly protected to avoid misuse. YouTax makes
          this process much more convenient and easy for you.
        </p>

        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          Authorities that issue digital signatures in India:
        </h3>
        <ul className="list-disc list-inside text-gray-600 space-y-1 mb-8">
          <li>E-Mudra</li>
          <li>National Information Centre</li>
          <li>CDAC</li>
          <li>NSDL</li>
        </ul>

        {/* Documents Required */}
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          Documents Required For Digital Signature Certification:
        </h3>
        <p className="text-gray-600 mb-4">
          The documentation procedure can be found hectic, therefore it is highly recommended to consult an expert for the same. 
          YouTax consists of a team of highly intellectual and experienced professionals, who will not only provide you with 
          professional consultation but will also make sure that the whole procedure is hassle-free and quick for your benefit.
        </p>
        <ul className="list-disc list-inside text-gray-600 space-y-1 mb-8">
          <li>PAN and AADHAR</li>
          <li>Photo</li>
          <li>Email</li>
          <li>Contact Number</li>
          <li>Video eKYC</li>
        </ul>

        {/* Closing Note */}
        <p className="text-gray-600">
          Digital signatures are the future of transactions undoubtedly. Therefore acquiring one is a must.
          YouTax helps you acquire your digital signature easily without any complications.We at YouTax have a team of well-qualified 
          personnel who will make sure that your digital signature is well-protected and not misused in any way.
          All you have to do is call us at our contact Call us at{" "}
          <span className="font-bold text-red-600">+91 8421447373</span> or visit{" "}
          <a
            href="https://www.youtax.in"
            className="text-red-500 underline hover:text-red-700"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.youtax.in
          </a>
          .
        </p>
      </div>
    </section>

    </main>
  );
}
