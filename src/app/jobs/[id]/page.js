'use client';
import React from 'react';
import Link from 'next/link';
import jobsData from '../../data/jobs.json';
import { BsCheckCircle } from 'react-icons/bs';
import { HiOutlineLocationMarker, HiOutlineCalendar, HiOutlineArrowLeft } from 'react-icons/hi';
import { useParams } from 'next/navigation';

export default function JobDetail() {
  const params = useParams();
  const id = params.id;
  const job = jobsData.job_postings.find((job) => job.id === id);

  if (!job) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-6">
        <div className="text-center bg-white p-12 rounded-2xl shadow-lg border border-gray-200">
          <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-10 h-10 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Job not found</h2>
          <p className="text-gray-600 mb-6">The job you're looking for doesn't exist.</p>
          <Link href="/" className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
            <HiOutlineArrowLeft className="w-5 h-5" />
            Back to Opportunities
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto mt-6 px-6 sm:px-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* LEFT COLUMN: Main Content */}
          <div className="lg:w-2/3 space-y-8 mb-12">
            {/* Description Card */}
            <div className='mt-8'>
              <div className="flex items-center gap-3 mb-6">
           
                <h2 className="font-poppins font-black text-[24px] leading-[120%] tracking-normal text-gray-700">Description</h2>
              </div>
              <p className="font-epilogue text-[16px] leading-[160%] tracking-normal text-gray-700">
                {job.description}
              </p>
            </div>

            {/* Responsibilities Card */}
            <div className="">
              <div className="flex items-center gap-3 mb-4 mt-8">
                <h2 className="font-poppins font-black text-[24px] leading-[120%] tracking-normal text-gray-700">Responsibilities</h2>
              </div>
              <div className="space-y-2">
                {job.responsibilities.map((res, index) => (
                  <div key={index} className="flex gap-2 items-start group">
                    <div className="flex-shrink-0 mt-1">
                      <BsCheckCircle className="w-4 h-4 text-emerald-500 group-hover:scale-110 transition-transform" />
                    </div>
                    <p className="font-epilogue text-[16px] leading-[160%] tracking-normal text-gray-700">{res}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Ideal Candidate Card */}
            <div className="py-6">
              <div className="flex items-center gap-3 mb-6">
                <h2 className="font-poppins font-black text-[24px] leading-[120%] tracking-normal text-gray-700">Ideal Candidate we want</h2>
              </div>
              <ul className="list-disc space-y-2 pl-6">
                {/* Age and Gender combined */}
                <li className="text-gray-700">
                  {job.ideal_candidate.age !== "Any" && job.ideal_candidate.gender !== "Any" 
                    ? `Young(${job.ideal_candidate.age} year old) ${job.ideal_candidate.gender} ${job.title.toLowerCase()}`
                    : job.ideal_candidate.age !== "Any" && job.ideal_candidate.gender === "Any"
                    ? `${job.ideal_candidate.age} year old ${job.title.toLowerCase()}`
                    : job.ideal_candidate.age === "Any" && job.ideal_candidate.gender !== "Any"
                    ? `${job.ideal_candidate.gender} ${job.title.toLowerCase()}`
                    : job.title
                  }
                </li>
                {/* Traits with bold keywords */}
                {job.ideal_candidate.traits.map((trait, index) => {
                  // Split trait by colon to separate bold keyword from description
                  const parts = trait.split(':');
                  const keyword = parts[0];
                  const description = parts.slice(1).join(':');
                  
                  return (
                    <li key={index} className="text-gray-700">
                      {description ? (
                        <>
                          <span className="font-bold">{keyword}:</span>
                          {description}
                        </>
                      ) : (
                        trait
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* When & Where Card */}
              <div className="flex items-center gap-3 mb-6">
             
                <h2 className="font-poppins font-black text-[24px] leading-[120%] tracking-normal text-gray-700">When & Where</h2>
              </div>
              <div className="flex items-start gap-4 ">
                <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 border border-gray-200">
                  <HiOutlineLocationMarker className="w-4 h-4 text-blue-400" />
                </div>
                <p className="font-epilogue text-[16px] leading-[160%] tracking-normal text-gray-700">{job.when_where}</p>
              </div>
            </div>
          

          {/* RIGHT COLUMN: Sidebar */}
          <div className="lg:w-1/3">
            <div className='w-4/5'>
              <h3 className="font-poppins font-black text-[24px] leading-[120%] tracking-normal text-gray-700 mb-5">About</h3>
              
              <div className="space-y-6 font-epilogue text-[16px] leading-[160%] tracking-normal text-gray-700">
                <SidebarItem 
                  imageSrc="/icons/icon1.png" 
                  title="Posted On" 
                  value={job.about.posted_on} 
                />
                <SidebarItem 
                  imageSrc="/icons/icon2.png" 
                  title="Deadline" 
                  value={job.about.deadline} 
                />
                <SidebarItem 
                  imageSrc="/icons/icon3.png" 
                  title="Location" 
                  value={job.about.location} 
                />
                <SidebarItem 
                  imageSrc="/icons/icon4.png" 
                  title="Start Date" 
                  value={job.about.start_date} 
                />
                <SidebarItem 
                  imageSrc="/icons/icon5.png" 
                  title="End Date" 
                  value={job.about.end_date} 
                />
              </div>

              <hr className="my-8 border-gray-200"/>

              {/* Categories */}
              <div className="mb-8">
                <h4 className="font-poppins font-black text-[24px] leading-[120%] tracking-normal text-gray-700 mb-4">Categories</h4>
                <div className="flex flex-wrap gap-2.5">
                  {job.about.categories.map((cat, i) => (
                    <span 
                      key={i} 
                      className={`px-4 py-2 text-xs font-semibold rounded-full ${
                        i % 2 === 0 
                          ? 'text-[#FFB836] bg-[#FFB836]/10' 
                          : 'text-[#56CDAD] bg-[#56CDAD]/10'
                      }`}
                    >
                      {cat}
                    </span>
                  ))}
                </div>
              </div>

              <hr className="my-8 border-gray-200"/>

              {/* Required Skills */}
              <div>
                <h4 className="font-poppins font-black text-[24px] leading-[120%] tracking-normal text-gray-700 mb-4">Required Skills</h4>
                <div className="flex flex-wrap gap-2.5">
                  {job.about.required_skills.map((skill, i) => (
                    <span 
                      key={i} 
                      className="font-epilogue text-[16px] leading-[160%] tracking-normal px-4 py-2 bg-[#3833B2]/5 text-[#3833B2]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Enhanced Sidebar Item Component
const SidebarItem = ({ imageSrc, title, value }) => (
  <div className="flex gap-4 items-start group">
    <div className="w-12 h-12 flex items-center justify-center">
      <img src={imageSrc} alt={title} className="w-10 h-10 object-contain" />
    </div>
    <div className="flex-grow min-w-0">
      <p className="text-gray-500 text-xs font-medium mb-1 uppercase tracking-wide">{title}</p>
      <p className="text-gray-900 font-bold text-base break-words">{value}</p>
    </div>
  </div>
);