import React from 'react';
import Link from 'next/link';

interface JobCardProps {
  job: {
    id: string;
    title: string;
    company: string;
    description: string;
    image: string;
    about: {
      location: string;
      categories: string[];
    };
  };
}

const JobCard = ({ job }: JobCardProps) => {
  return (
    <Link href={`/jobs/${job.id}`} className="block group">
      <div className="flex gap-6 p-6 border border-[#D6DDEB] rounded-[30px] justify-between cursor-pointer ">      
        {/* Logo Section */}
        <div className="self-start">
          <div className="w-20 h-20">
              <img 
                src={job.image} 
                alt={job.company} 
                className="object-contain p-2 rounded-xl"    
              />
          </div>
        </div>

        {/* Content Section */}
        <div className="flex flex-col flex-grow min-w-0">
          {/* Title and Company */}
          <div className="mb-3">
            <h3 className="font-epilogue text-[20px] font-semibold leading-[120%] tracking-normal text-[#25324B]">
              {job.title}
            </h3>
            <div className="flex flex-wrap items-center gap-2 text-sm mt-3">
              <p className="font-epilogue text-[16px] font-normal leading-[120%] tracking-normal text-[#7C8493]">
                {job.company}
              </p>
              <span className="text-gray-300">•</span>
              <div className="font-epilogue text-[16px] font-normal leading-[120%] tracking-normal text-[#7C8493]">
                <span>{job.about.location}</span>
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="font-epilogue text-[16px] font-normal leading-[160%] tracking-normal text-[#25324B]">
            {job.description}
          </p>

          {/* Tags / Categories */}
          <div className="flex flex-wrap items-center gap-2.5 mt-4">
            {/* Hardcoded 'In Person' tag */}
            <span className="px-4 py-2 font-epilogue text-[12px] font-semibold text-[#56CDAD] bg-emerald-50 rounded-full">
              In Person
            </span>
            {/* Vertical separator */}
            <div className="w-px h-7 bg-[#D6DDEB]"></div>
            
            {/* Dynamic Categories */}
            {job.about.categories.map((category: string, index: number) => (
              <span 
                key={index} 
                className={`px-4 py-2 text-xs font-semibold rounded-full border transition-all ${
                  index % 2 === 0 
                    ? 'text-[#FFB836] border-[#FFB836]' 
                    : 'text-[#3833B2] border-[#3833B2]'
                }`}
              >
                {category}
              </span>
            ))}
          </div>
        </div>

      </div>
    </Link>
  );
};

export default JobCard;