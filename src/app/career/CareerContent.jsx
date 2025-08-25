"use client";
import Image from "next/image";
import { useState } from "react";
import jobs from "../../../public/data/career.json";

const features = [
  {
    id: "01",
    title: "Automated Compliance Tools",
    desc:
      "Work smarter with advanced tools like our compliance calendar that makes managing deadlines efficient and hassle-free.",
  },
  {
    id: "02",
    title: "Proactive Learning & Alerts",
    desc:
      "Stay ahead with real-time updates and guidance that keep you sharp and industry-ready.",
  },
  {
    id: "03",
    title: "Mentorship from Experts",
    desc:
      "Learn directly from senior professionals with years of hands-on experience in taxation, finance, and advisory.",
  },
  {
    id: "04",
    title: "Career Growth Opportunities",
    desc:
      "Grow with us through challenging assignments, client exposure, and continuous professional development.",
  },
];

export default function CareerContent() {
  const [selectedJob, setSelectedJob] = useState(null);

  return (
    <main className="bg-gray-50">
      {/* Hero Image */}
      <Image
        className="h-auto w-full rounded-3xl object-cover shadow-sm ring-1 ring-gray-100"
        src="/assets/career/careerbg.png"
        width={1440}
        height={500}
        alt="Career background"
        priority
      />

      {/* Why Join Section */}
      <section className="relative mx-auto max-w-8xl px-6 py-16 md:px-10 lg:py-24">
        <p className="text-sm font-semibold tracking-widest text-amber-600 uppercase">
          Why Join Our Team
        </p>

        <p className="mt-2 text-3xl font-extrabold leading-tight secondaryText sm:text-4xl">
          Shaping Financial Experts
          <span className="block secondaryText">for a Stronger Tomorrow</span>
        </p>

        <div className="mt-6 grid gap-10 lg:grid-cols-2 items-start">
          <div className="order-2 lg:order-1 flex items-start">
            <Image
              className="h-auto w-full rounded-3xl object-cover shadow-sm ring-1 ring-gray-100"
              src="/assets/career/whyjoin.png"
              width={1200}
              height={800}
              alt="Why join illustration"
              priority
            />
          </div>

          <div className="mt-0 order-1 lg:order-2 flex flex-col justify-start">
            <p className="max-w-2xl text-base leading-7 text-gray-700">
              At{" "}
              <span className="font-semibold">
                YOUTAX INDIA CONSULTING PRIVATE LIMITED
              </span>
              , we believe that our people are our greatest strength. We’re more
              than just a tax consulting firm — we’re a collaborative space where
              professionals grow, learn, and create meaningful impact.
            </p>
            <p className="mt-4 max-w-2xl text-base leading-7 text-gray-700">
              When you join our team, you become part of a culture that values
              integrity, innovation, and continuous learning. With experienced
              Chartered Accountants, Company Secretaries, and Consultants by your
              side, you’ll gain exposure to diverse projects and unlock your full
              potential.
            </p>

            <ul className="mt-2">
              {features.map((f) => (
                <li key={f.id} className="items-start rounded-2xl">
                  <div className="secondaryText font-bold">
                    {f.id}
                    <div>
                      <h3 className="text-lg font-semibold primaryText leading-6">
                        {f.title}
                      </h3>
                      <p className="text-sm leading-6 text-gray-700">
                        {f.desc}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Jobs Section */}
      <section className="relative mx-auto max-w-8xl px-6 py-16 md:px-10 lg:py-24">
        <h2 className="text-3xl font-bold text-center mb-10">
          Currently Open Positions
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="rounded-xl border border-gray-200 p-5 shadow hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold text-gray-900">
                {job.title}
              </h3>
              <p className="text-sm text-gray-600">Salary: {job.salary}</p>
              <p className="text-sm text-gray-600">
                Experience: {job.experience}
              </p>
              <p className="text-sm text-gray-600">📍 {job.location}</p>

              <button
                onClick={() => setSelectedJob(job)}
                className="mt-4 inline-block rounded-lg bg-orange-500 px-4 py-2 text-white text-sm font-medium hover:bg-orange-600"
              >
                Apply Now →
              </button>
            </div>
          ))}
        </div>

        {/* Job Description Modal */}
        {selectedJob && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-lg">
              <h2 className="text-2xl font-bold mb-2">{selectedJob.title}</h2>
              <p className="text-sm text-gray-600 mb-1">
                Salary: {selectedJob.salary}
              </p>
              <p className="text-sm text-gray-600 mb-1">
                Experience: {selectedJob.experience}
              </p>
              <p className="text-sm text-gray-600 mb-1">
                Location: {selectedJob.location}
              </p>
              <p className="mt-4 text-gray-700">{selectedJob.description}</p>

              <div className="mt-6 flex justify-end gap-3">
                <button
                  onClick={() => setSelectedJob(null)}
                  className="rounded-lg px-4 py-2 text-sm font-medium text-gray-700 border border-gray-300 hover:bg-gray-100"
                >
                  Close
                </button>
                <a
                  href="#apply-form"
                  className="rounded-lg bg-orange-500 px-4 py-2 text-sm font-medium text-white hover:bg-orange-600"
                >
                  Proceed to Apply
                </a>
              </div>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
