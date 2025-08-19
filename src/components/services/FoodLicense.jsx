// app/food-license/page.jsx or pages/food-license.jsx
import Image from "next/image";

export default function FoodLicensePage() {
  return (
    <>
      <main className="">
        {/* Info Section */}
        <section className="flex flex-col md:flex-row items-center justify-center gap-10 px-6 py-14 md:py-24 max-w-7xl mx-auto">
          {/* Left Side Image */}
          <div className="w-full md:w-1/2 items-end">
            <Image
              src="/assets/services/FoodLicense/FoodLicense.jpeg" // update with your actual path
              alt="food license"
              width={400}
              height={50}
              className="rounded-xl serviceImage w-full"
            />
          </div>

          {/* Right Side Content */}
          <div className="w-full md:w-1/2 text-center">
            <h2 className="text-3xl md:text-5xl font-normal secondaryText mb-4">            
              Expert Assistance in Food License Registration
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              <strong>The food industry, the never-ending industry,</strong> is one of
              the most prominent and invested industries there is. With the rising rate
              of unemployment in the country, many are moving towards entrepreneurship,
              and food is the most preferred industry for this shift.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              It is a well-known fact that one needs a food license to provide any kind
              of food service in the market. Don’t worry — YouTax is just the right
              place for you.
            </p>
            <p className="text-gray-600 leading-relaxed">
              <strong className="text-gray-800">We at YouTax</strong> provide our
              customers with the best consultation based on their business model and
              make the whole procedure a lot easier for our customers.
            </p>
          </div>
      </section>

      {/* FOSCOS FSSAI Registration Section */}
      <section className="secondaryBg mt-2 py-16 px-8">
        <div className="max-w-4xl mx-auto text-white">
          <h1 className="text-3xl font-bold text-white mb-6">
            FOSCOS FSSAI Registration
          </h1>

          <p className="mb-4 leading-relaxed">
            The government of India (2020) replaced the then-existing operating system
            for the registration of food licenses, i.e., FLRS (Food Licensing and
            Registration System) with FOSCOS (Food Safety Compliance System). According
            to this new system, one has to register under FSSAI (Food Safety and Standards
            Authority of India) to run a food product business.
          </p>

          <p className="mb-4 leading-relaxed">
            The Ministry of Health and Family Welfare, Government of India has
            established the FSSAI under the Food Safety and Standards Act, 2006. It is
            absolutely obligatory to get your food service business registered under FSSAI
            and acquire an FSSAI certification. If not registered, one has to face serious
            legal obstacles.
          </p>

          <h2 className="text-2xl font-semibold primaryText mb-3">
            Types of FSSAI License
          </h2>
          <ol className="list-decimal list-inside mb-6 space-y-1">
            <li>Basic FOSCOS FSSAI License</li>
            <li>State FOSCOS FSSAI License</li>
            <li>Central FOSCOS FSSAI License</li>
          </ol>

          <h2 className="text-2xl  font-semibold primaryText mb-3">
            What Are The Documents Required?
          </h2>

          <p className="mb-4 font-medium  text-white leading-relaxed">
            The procedure for acquiring an FSSAI certificate can be complicated and if not done under proper guidance will only be a waste of time and effort.
             {" "}
            <span className="text-red-500">YouTax</span>
            {' '}
             will help you get done with this procedure rapidly and in a hassle-free manner so that you waste absolutely no time worrying about the certification and focus on your food service business. 

          </p>

          <p className="mb-4  leading-relaxed">
            Documentation is the most important of all the procedures and the following are a few of the documents required for registering under FSSAI,
            these will give you a fair idea about the procedure,
            but the list of documents does vary according to the type of license you want to acquire (Basic License or State or Central License):
          </p>

          <ul className="list-disc  list-inside space-y-1">
            <li>Photo ID proof (Basic and FSSAI State and Central License)</li>
            <li>Address Proof (Basic and FSSAI State and Central License)</li>
            <li>Passport Photo (Basic and FSSAI State and Central License)</li>
            <li>Blueprint (FSSAI State and Central License)</li>
            <li>Incorporation Certificate (FSSAI State and Central License)</li>
            <li>List of Partners or Directors (FSSAI State and Central License)</li>
            <li>List of food categories (FSSAI State and Central License)</li>
            <li>NoC from Municipality (FSSAI State and Central License)</li>
            <li>Import Export Code (FSSAI State and Central License)</li>
          </ul>
        </div>
      </section>

        {/* How to Apply Section */}    
    
        <section className=" py-10 px-6 rounded-lg shadow-sm">
      <h2 className="text-2xl font-bold secondaryText mb-4">
        What Are The Benefits Of Acquiring An FSSAI License?
      </h2>
      <p className="mb-4">
        It is absolutely mandatory to acquire an FSSAI license if you want to start or have a Food
        Service Business of your own. Following are a few examples of why you should acquire one as
        soon as possible:
      </p>
      <ul className="list-disc list-inside mb-6 space-y-1">
        <li>Protection from legal consequences</li>
        <li>Facilitates food safety</li>
        <li>Helps in food service business expansion</li>
        <li>Regulates the storage, manufacturing, sale, and import of the product</li>
        <li>Creates goodwill among the customers</li>
      </ul>

      <h3 className="text-xl font-semibold text-blue-600 mb-3">
        Why Choose YouTax?
      </h3>
      <p className="mb-4">
        <span className="font-bold">YouTax is dedicated to providing the very best</span> of service for the growth of your business,
        with a professional and experienced team consisting of Chartered Accountants, Consultants,
        and a Chartered Secretary. We at YouTax will help you fill up the FSSAI registration form.
        Our experts will consult you on how to submit the necessary documents for the same.
      </p>
      <p className="mb-4">
        YouTax will file the application form on your behalf with the government authorities, take
        care of any queries if occurred, and get you your FSSAI License.
      </p>
      <p className="mb-4">
        Want a food service license? Then YouTax is your one-stop solution. All you have to do is
        reach out to us at our contact number{" "}
        <a href="tel:+918421447373" className="text-red-500 font-medium">
          +91 84214 47373
        </a>{" "}
        or visit our website{" "}
        <a href="https://youtax.in" className="text-red-500 font-medium">
          youtax.in
        </a>.
      </p>
    </section>
   </main>
    </>
  );
}
