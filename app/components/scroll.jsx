import React from "react";

function scrollTop() {
    window.scrollTo({ top: 0, behavior: 'smooth'});

}

function scrollToBottom() {
    window.scrollTo({top: document.body.scrollHeight,behavior: 'smooth'});
}

const scroll = () => {
    return (
        <div>
            <button onClick={scrollTop}>Scroll to Top</button>
            <button onClick={scrollToBottom}>Scroll to Bottom</button>
            <div className="flex w-full p-4 mt-20 bg-white bg-opacity-200 "></div>
            <div className="flex w-full p-4 mt-20 bg-white bg-opacity-200 ">
                {/* Column 1 */}
                <div className="w-1/4 p-4">
                <div>
                {/* Profile Picture */}
                <img src="/image/jenifa.png" alt="Jennifer Smith" className="rounded-full h-16 w-16 mx-auto" />
                {/* Profile Name */}
                <div className="text-center">Profile Name: Jenner Smith</div>
                {/* Edit Profile Button */}
                <p className="block mb-2 px-4 py-2 text-blue-500 hover:text-white hover:bg-blue-500 rounded cursor-pointer text-center">Edit Profile</p>

                </div>
                <div className="mt-4 flex flex-col">
            {/* Community Contribution */}
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

            <div className="mt-4 flex items-center justify-between">
            {/* My Space */}
            <div>
                <p className="font-bold">My Spaces</p>
            </div>
            {/* Edit button */}
            <div>
            <p className="block mb-2 px-4 py-2 text-blue-500 hover:text-white hover:bg-blue-500 rounded cursor-pointer">Edit</p>

            </div>
            </div>
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
            <div className="w-1/2 p-4">
            <div className="flex">
                {/* Profile Picture */}
                <img src="/image/Eckartt.png" alt="Eckart Walther" className="h-12 w-14 mr-4" />

                {/* Profile Name and Description */}
                <div className="flex flex-col">
                <p className="font-bold">Eckart Walther, CMD modern media - Nov 20</p>
                <h1 className="text-lg font-bold mt-2">Do you have any experience with deploying @ Hubspot?</h1>
                <p>We are series A B2B startup with custom solution today. We are using @mixpanel and working with @Division of Labour to rebuild our pages. @Jennifer Smith, Would love your thoughts as well.</p>
                <div className="w-full h-full">
                    <img src="/image/social.jpg" alt="social work" className="w-full h-40 object-cover" />
                </div>

                </div>
            </div>

                {/* Answer with logo, Pass with logo, Thanks with logo, Insightful with logo */}
                <div className="mt-4">
                <p>Answer with logo, Pass with logo, Thanks with logo, Insightful with logo</p>
                </div>

                {/* Jenner profile picture with placeholder Answer Eckart question */}
                <div className="mt-4">Jenner profile picture with placeholder Answer Eckart question</div>
            </div>

            {/* Column 3 */}
            <div className="w-1/4 p-4">
                <div>
                {/* My Network */}
                <p className="font-bold">My Network</p>
                </div>
                <div className="mt-4">
                {/* Share Buttons */}
                <button className="block mb-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Share Article</button>
                <button className="block mb-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Share Experience</button>
                <button className="block mb-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Ask Question</button>
                </div>
                <div className="mt-4">
                {/* Build your Market */}
                <p className="font-bold">Build your Market</p>
                </div>
                <div className="mt-4">
                {/* Invite a person */}
                <button className="block mb-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">+ Invite a person</button>
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
        </div>
    );
};

export default scroll;