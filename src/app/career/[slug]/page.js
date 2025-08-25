"use client";
import { useState } from "react";
import jobs from "../../../public/data/career.json";

export default function JobsPage() {
  const [selectedJob, setSelectedJob] = useState<any | null>(null);

  return (
    <main className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">
        Currently Open Positions
      </h1>

      {/* Jobs Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="rounded-xl border border-gray-200 p-5 shadow hover:shadow-md transition"
          >
            <h2 className="text-lg font-semibold text-gray-900">
              {job.title}
            </h2>
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
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
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
    </main>
  );
}
