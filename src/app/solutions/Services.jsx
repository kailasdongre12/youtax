// components/Services.jsx
import React from "react";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Affordable Income Tax Audit Services Tailored to Your Needs",
      description:
        "To understand what a tax audit is, it is important to understand the term “audit”. In layman’s terms, an audit can be understood as an official inspection of the accounts of an individual or an organization. But to formally define an audit, it is a systematic, documented, and independent process for obtaining evidence to confirm the accuracy of the financial statements provided by an organization. An audit can be done internally, by the employees of the organization by an independent auditor, or by an organization externally. An external inspection is usually preferred to check if there is no fraud committed while maintaining the books of accounts.",
      image: "/images/web-development.jpg",
    },
    {
      id: 2,
      title: "Expert Assistance in Food License Registration",
      description:
        "The food industry, the never-ending industry, is one of the most prominent and invested industries there is. With the rising rate of unemployment in the country, a lot of people are moving towards entrepreneurship and food is the most preferred industry for the same. It is a well-known fact that one needs a food license in order to provide any kind of food service in the market. Don’t worry, YOuTax is just the right place for you. We at YouTax provide our customers with the best consultation based on their business model and make the whole procedure a lot easier for our customers.",
      image: "/images/ecommerce.jpg",
    },
    {
      id: 3,
      title: "Affordable Income Tax Audit Services Tailored to Your Needs",
      description:
        "To understand what a tax audit is, it is important to understand the term “audit”. In layman’s terms, an audit can be understood as an official inspection of the accounts of an individual or an organization. But to formally define an audit, it is a systematic, documented, and independent process for obtaining evidence to confirm the accuracy of the financial statements provided by an organization. An audit can be done internally, by the employees of the organization by an independent auditor, or by an organization externally. An external inspection is usually preferred to check if there is no fraud committed while maintaining the books of accounts.",
      image: "/images/seo.jpg",
    },
    {
      id: 4,
      title: "Expert Assistance in Food License Registration",
      description:
        "The food industry, the never-ending industry, is one of the most prominent and invested industries there is. With the rising rate of unemployment in the country, a lot of people are moving towards entrepreneurship and food is the most preferred industry for the same. It is a well-known fact that one needs a food license in order to provide any kind of food service in the market. Don’t worry, YOuTax is just the right place for you. We at YouTax provide our customers with the best consultation based on their business model and make the whole procedure a lot easier for our customers.",
      image: "/images/seo.jpg",
    },
  ];

  return (
    <section className="py-12 px-6 lg:px-20 ">
      <div className="text-center">
        <p className="text-md primaryText uppercase tracking-wider font-semibold">
            Services
          </p>
          <h2 className="text-4xl font-semibold secondaryText leading-tight">
            Smart Financial Planning & Hassle-Free Compliance for Individuals
          </h2>
      </div>
      <div className="space-y-16 mt-12">
        {services.map((service, index) => {
          const isReversed = index % 2 !== 0;

          return (
            <div key={service.id}>
              <div
                className={`flex flex-col md:flex-row items-center ${
                  isReversed ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Image */}
                <div className="md:w-1/3 flex justify-center">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-64 h-64 object-cover rounded-full shadow-lg"
                  />
                </div>

                {/* Text */}
                <div className="md:w-2/3 mt-6 md:mt-0 md:px-8 text-center md:text-left">
                  <h3 className="text-2xl font-semibold mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>

              {/* Divider after every service except the last one */}
              {index !== services.length - 1 && (
                <hr className="w-full border-1 border-[#FFBF00] my-10" />
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
