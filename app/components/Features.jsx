import React from 'react';
import { Check } from 'react-feather'; // Import the Check icon
import { FaComment, FaSearch, FaThumbsUp,FaHeart } from 'react-icons/fa';

import { Answer, Pass, Thanks, Insightful } from 'react-feather'; // Example import statement, adjust as per your icon library

import Link from 'next/link';
import FeaturesModule from '../components/features';



// components/features.jsx


const FeaturesComponent = ({ features }) => {
  return (
    <div className="flex w-full p-4 mt-3 bg-white border border-gray-300 rounded-md">
    {/* Column 1 */}
    <div className="w-1/4 p-4 border border-gray-300 mr-4 rounded-md">
      <div className="mb-4 shadow-lg">
        {/* Profile Picture */}
        <img src="/image/jenifa.png" alt="Jennifer Smith" className=" h-16 w-16 rounded-full aspect-square object-cover mx-auto" />
        {/* Profile Name */}
        <div className="font-bold text-center">Jennifer Smith</div>
        <p className="text-center text-gray-500">Brand at Modern Media</p>
        {/* Edit Profile Button */}
        <a href="/profile" className="block mb-2 px-4 py-2 text-blue-500 hover:text-white hover:bg-blue-500 rounded cursor-pointer text-center">Edit Profile</a>
      </div>
      {/* Community Contribution */}
      <div className="mt-4 flex flex-col gap-4 justify-between shadow-lg">
        <p className="font-bold text-xs">Community Contribution</p>
        <div className="flex justify-between">
          <p className="mr-4">Posts:</p>
          <p>43</p>
        </div>
        <div className="flex justify-between">
          <p className="mr-4">Views:</p>
          <p>8.5k</p>
        </div>
        <div className="flex justify-between">
          <p className="mr-4">Thanks:</p>
          <p>105</p>
        </div>
        <div className="flex justify-between">
          <p className="mr-4">Insightful:</p>
          <p>342</p>
        </div>
      </div>
      {/* My Spaces */}
      <div className="mt-4 flex items-center justify-between shadow-lg">
        <div>
          <p className="font-bold">My Spaces</p>
        </div>
        <div>
          <p className="block mb-2 px-4 py-2 text-blue-500 hover:text-white hover:bg-blue-500 rounded cursor-pointer">Edit</p>
        </div>
      </div>
      {/* Categories */}
      <div className="mt-4">
        <div className="flex">
          <p>#Advertising</p>
          <span className="bg-red-500 text-white px-1 py-0.3 rounded-l-lg rounded-r-lg border border-red-20 text-xs">12</span>
        </div>
        <p>#Performance</p>
        <p>#Special Media</p>
        <div className="flex">
          <p>#Public Relationship</p>
          <span className="bg-red-500 text-white px-1 py-0.3 rounded-l-lg rounded-r-lg border border-red-20 text-xs">12</span>
        </div>
      </div>
    </div>

    {/* Column 2 */}
    <div className="w-1/2 p-4 border border-gray-300">
      <div className="flex shadow-lg">
        {/* Profile Picture */}

        <img src="/image/jenifa.png" alt="Jennifer Smith" className="ml-2 h-16 w-16 mr-4 rounded-full aspect-square object-cover " />
        {/* Search Container */}
       
          <label className='input-label' htmlFor='questionIn'></label>
          <input type='text' id='questionIn' placeholder='Ask Question' className='placeholder-opacity-50 text-sm h-8 w-full shadow-xl pl-2 rounded-full'/>
          
        
        
        
        
      </div>
      {/* Profile and Question */}
      <div className="flex shadow-xl mr-2 px-0 border-b border-gray-300 border-t-10">
        {/* Profile Picture */}
        <div>
          <img src="/image/Eckartt.png" alt="Eckart Walther" className="h-13 w-40 mr-6 rounded-full aspect-square object-cover  " />
        </div>
        {/* Profile Name and Description */}
        <div className="flex flex-col ml-3">
          <div>
            <p className="text-sm"><span className="font-bold">Eckart Walther,</span> CMD modern media - Nov 20</p>
            <p>Asked a question<span className="text-blue-500 text-left md:text">#design #content-marketing #branding</span> </p>
            <h1 className="text-lg font-bold mt-2 mr-8">Do you have any experience with deploying @ Hubspot?</h1>
          </div>
          <p>We are series A B2B startup with custom solution today. We are using <span className="text-blue-500">@mixpanel</span> and working with <span className="text-blue-500">@Division of Labour</span> to rebuild our pages. <span className="text-blue-500">@Jennifer Smith,</span> Would love your thoughts as well.</p>
          <div className="w-full h-full mr-8">
            <img src="/image/social.png" alt="social work" className="w-full h-32 object-cover ml-0" />
          </div>
        </div>
      </div>
      {/* Actions */}
      <div className="mt-2 flex justify-start items-center shadow-lg">
        <span className="flex items-center mr-2 px-4 py-2 bg-white rounded hover:bg-blue-600">
          <FaComment className="mr-2" /> {/* Answer icon */}
          <span>Answer</span>
        </span>
        <span className="flex items-center mr-2 px-4 py-2 bg-white rounded hover:bg-blue-600">
          <FaThumbsUp className="mr-2" /> {/* Pass icon */}
          <span>Pass</span>
        </span>
        <span className="flex items-center mr-4 px-4 py-2 bg-white rounded hover:bg-blue-600">
          <FaHeart className="mr-2" /> {/* Thanks icon */}
          <span>Thanks</span>
        </span>
        <span className="flex items-center px-2 py-2 bg-white rounded hover:bg-blue-600">
          <FaHeart className="mr-1" /> {/* Insightful icon */}
          <span>Insightful</span>
        </span>
      </div>
      {/* Jennifa's profile picture with placeholder for Answering Eckart's question */}
      <div className="flex items-center shadow-lg mt-2">
        {/* Profile Picture */}
        <img src="/image/jenifa.png" alt="Jennifer Smith" className="ml-2 h-16 w-16 mr-4 rounded-full aspect-square object-cover " />
        {/* Search Container */}
        <div className="flex-grow shadow-lg w-full">
          <div className="search-container w-full pl-2 rounded-full border-none">
               <input type="text" id='Answer' placeholder="Answer Eckart's question..." className="w-full rounded-full shadow-xl pl-2" />
          </div>
        </div>
      </div>
    </div>

    {/* Column 3 */}
    <div className="w-1/4 p-4 border border-gray-300 ml-4 rounded-md">
      <div>
        {/* My Network */}
        <p className="font-bold">My Network</p>
      </div>
      <div className="mt-4">
        {/* Share Buttons */}
        <button className="w-full block mb-2 px-2 py-2 bg-white text-blue-500 rounded-full hover:bg-blue-600 shadow-lg">Share Article</button>
        <button className="w-full block mb-2 px-2 py-2 bg-white text-blue-500 rounded-full hover:bg-blue-600 shadow-lg">Share Experience</button>
        <button className="w-full block mb-2 px-2 py-2 bg-white text-blue-500 rounded-full hover:bg-blue-600 shadow-lg">Ask Questions</button>
      </div>
      <div className="mt-4">
        {/* Build your Market */}
        <p className="font-bold">Build your Market</p>
      </div>
      <div className="mt-4">
        {/* Invite a person */}
        <button className="w-full block mb-2 px-2 py-2 bg-white text-blue-500 rounded-full hover:bg-blue-600 shadow-lg">+ Invite a Person</button>
        {/* Checkboxes */}
        <div className="flex items-center mt-2">
          <input type="checkbox" id="fill-profile" className="mr-2" />
          <label htmlFor="fill-profile">Fill out your profile</label>
        </div>
        <div className="flex items-center mt-2">
          <input type="checkbox" id="ask-question" className="mr-2" />
          <label htmlFor="ask-question">Ask first question</label>
        </div>
        <div className="flex items-center mt-2">
          <input type="checkbox" id="answer-question" className="mr-2" />
          <label htmlFor="answer-question">Answer a question</label>
        </div>
      </div>
    </div>
  </div>
);
};

export default FeaturesComponent;