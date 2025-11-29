import JobCard from '../components/JobCard';
import jobsData from './data/jobs.json';

export default function Home() {
  const jobs = jobsData.job_postings;

  return (
    <main>
     
      <div className="relative max-w-5xl mx-auto py-16 px-6 sm:px-8 z-10">
        {/* Header Section */}
        <div className="mb-12">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2 mb-1">
            <div>
              <h1 className="font-poppins text-[32px] font-black leading-[120%] tracking-normal text-gray-900 mb-1">
                Opportunities
              </h1>
              <p className="font-epilogue text-[16px] font-normal leading-[160%] tracking-normal text-[#7C8493]">
                Showing {jobs.length} results
              </p>
            </div>
            <div className="flex items-center gap-2 ">
              <span className="font-epilogue text-[16px] font-normal leading-[160%] tracking-normal text-[#7C8493]">Sort by:</span>
              <button className="font-epilogue text-[16px] font-semibold leading-[160%] tracking-normal text-[#25324B] flex items-center gap-1">
                Most relevant
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Job List */}
        <div className="space-y-5">
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>

        {/* Empty state message (if no jobs) */}
        {jobs.length === 0 && (
          <div className="text-center py-20">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gray-100 mb-4">
              <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No opportunities found</h3>
            <p className="text-gray-500">Check back later for new positions.</p>
          </div>
        )}
      </div>
    </main>
  );
}

