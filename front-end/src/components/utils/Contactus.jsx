import React from 'react';

const ContactUs = () => {
  return (
    <div className="bg-black text-white py-10">
      <div className="max-w-6xl bg-slate-50 rounded-md  mx-auto px-5">
        <div className="flex flex-col  items-center  justify-center md:flex-row">
          {/* Connect with Us Section */}
          <div className="md:w-1/2 pr-8 text-black">
            <h2 className="text-4xl font-bold mb-5">Connect with Us</h2>
            <p className="mb-5 font-semibold">
              For any inquiries or collaborations, you can reach out to us at the following address:
            </p>
            <a href="mailto:template@company.com" className="text-blue-400 hover:text-blue-600 transition-colors duration-300 block mb-5">
              template@company.com
            </a>
            <div className="mt-5">
              <h3 className="text-xl font-semibold mb-3">Follow us on Social Media</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-xl hover:text-gray-400 transition-colors duration-300">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-xl hover:text-gray-400 transition-colors duration-300">
                  <i className="fab fa-youtube"></i>
                </a>
                <a href="#" className="text-xl hover:text-gray-400 transition-colors duration-300">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#" className="text-xl hover:text-gray-400 transition-colors duration-300">
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="md:border-l md:border-gray-400 md:mx-4"></div>

          {/* Contact Form Section */}
          <div className="md:w-1/2 bg-white text-black p-8 rounded-lg shadow-lg mt-10 md:mt-0">
            <form className="space-y-6">
              <div className="flex flex-col space-y-4">
                <div className="flex flex-col md:flex-row md:space-x-4">
                  <div className="w-full">
                    <label htmlFor="name" className="block mb-2 font-medium">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full p-2 border-b-2 border-black focus:outline-none focus:border-blue-500"
                      placeholder="Enter your name" 
                    />
                  </div>
                  <div className="w-full mt-4 md:mt-0">
                    <label htmlFor="email" className="block mb-2 font-medium">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full p-2 border-b-2 border-black focus:outline-none focus:border-blue-500"
                      placeholder="Enter your email" 
                    />
                  </div>
                </div>
                <div className="flex flex-col md:flex-row md:space-x-4">
                  <div className="w-full">
                    <label htmlFor="phone" className="block mb-2 font-medium">Phone</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      className="w-full p-2 border-b-2 border-black focus:outline-none focus:border-blue-500"
                      placeholder="Enter your phone number" 
                    />
                  </div>
                  <div className="w-full mt-4 md:mt-0">
                    <label htmlFor="address" className="block mb-2 font-medium">Address</label>
                    <input 
                      type="text" 
                      id="address" 
                      className="w-full p-2 border-b-2 border-black focus:outline-none focus:border-blue-500"
                      placeholder="Enter your address" 
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block mb-2 font-medium">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    className="w-full p-2 border-b-2 border-black focus:outline-none focus:border-blue-500"
                    placeholder="Enter subject" 
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-2 font-medium">Your message here...</label>
                  <textarea 
                    id="message" 
                    rows="4" 
                    className="w-full p-2 border-b-2 border-black focus:outline-none focus:border-blue-500"
                    placeholder="Write your message"
                  ></textarea>
                </div>
              </div>
              <button 
                type="submit" 
                className="w-full bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition duration-300"
              >
                Submit
              </button>
            </form>
            <p className="text-center mt-4 text-gray-600">Thank You for Reaching Out!</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center mt-10">
        <p>&copy; 2023 by My Company. Powered and secured by Wix.</p>
      </footer>
    </div>
  );
};

export default ContactUs;
