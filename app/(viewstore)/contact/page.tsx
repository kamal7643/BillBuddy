"use client";
export default function Contact() {
    return (
        <div>
            <div id="contact-card" className="fixed bottom-0 text-black left-0 w-[450px] bg-white p-6 shadow-md transform transition-transform duration-500 ease-in-out -translate-y-full">
                <div className="text-center">
                    <h2 className="text-lg font-semibold">Contact Us</h2>
                    <p>Email: contact@example.com</p>
                    <p>Phone: +1234567890</p>
                </div>
                <button className="block mx-auto mt-4 px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700" >Close</button>
            </div>

        </div>
    )
}