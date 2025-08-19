"use client";

export default function Plans() {
  const plans = [
    {
      title: "1-Day Visit",
      price: 2000,
      duration: "Per Day",
      features: [
        "1-Day Access",
        "Up to 250 entries/day",
        "1 Bookkeeping Officers (On site)",
        "1 Accountant",
        "Technical Team",
        "Technical Team Support",
      ],
    },
    {
      title: "Monthly Plan",
      price: 7000,
      duration: "Per Month",
      features: [
        "4-Day Access",
        "Up to 1000 entries/month",
        "GST Return",
        "TDS Return",
        "1 Bookkeeping Officers (On site)",
        "1 Accountant",
        "Technical Team",
        "Technical Team Support",
      ],
    },
    {
      title: "Yearly Plan",
      price: 60000,
      duration: "Per Year",
      features: [
        "48-Day Access",
        "Up to 18,000 entries/year",
        "GST Return",
        "TDS Return",
        "Income Tax Return without Audit",
        "1 Bookkeeping Officers (On site)",
        "1 Accountant",
        "Technical Team",
        "Technical Team Support",
      ],
    },
  ];

  return (
    <section id="Plans" className="mx-auto px-5 sm:px-60 py-16 text-center">
      <p className="text-md primaryText uppercase tracking-wider font-semibold">
          Our Offering 
        </p>
        <h2 className="text-4xl font-semibold secondaryText leading-tight">
          Simplifying Your Finances, Customized Accounting Service!
        </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12 text-left">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="border border-amber-300 rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-6 flex flex-col justify-between bg-white"
          >
            <div>
              <h3 className="text-xl font-semibold secondaryText mb-2">
                {plan.title}
              </h3>
              <p className="text-xl font-bold text-black mb-1">
                ₹{plan.price}{" "}
                <span className="text-gray-600 text-sm mb-4">
                  {plan.duration}
                </span>
              </p>
              {/* <p className="text-gray-600 text-sm mb-4">{plan.duration}</p> */}

              <ul className="list-none list-inside space-y-4 mt-4 text-gray-700 font-medium text-sm">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <span className="w-5 h-5 flex justify-center items-center primaryBg text-white rounded-sm mr-3">
                      ✓
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="https://youbuz.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 primary-btn text-white py-2 rounded-lg transition text-center block"
            >
              Buy Plan
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
