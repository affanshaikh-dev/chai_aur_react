import React from 'react'

function Card({username, btnText="Visit Me"}) {
    return (
        <div className="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mt-5">
        <div className="md:flex">
            <div className="md:flex-shrink-0">
                <img className="h-48 w-full object-cover md:h-full md:w-48" src="https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg" alt="Card Image" />
            </div>
            <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-indigo-500 font-bold">{username}</div>
                <p className="mt-2 text-gray-500">This is a simple card example created using HTML and Tailwind CSS. You can customize this card to suit your needs.</p>
                <div className="mt-4">
                    <a href="#" className="text-indigo-600 hover:text-indigo-900">{btnText}</a>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Card