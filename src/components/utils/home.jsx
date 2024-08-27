import logo from '../../assets/pexels-pixabay-87651-removebg-preview.png';

const Home = () => {
  return (
    <div className="flex flex-col items-center mt-12 justify-center text-center py-12 px-4">
{/* Yellow Circle with Hover Animation */}
<div className="flex flex-col items-center justify-center bg-yellow-400 p-7 rounded-full w-[15rem] h-[15rem] transition duration-500 ease-in-out mb-6 hover:bg-yellow-500 hover:shadow-lg hover:scale-105">
  <h1 className="text-3xl font-bold mb-2">
    The
    <span className="flex items-center">
      Global
      <img
        src={logo}
        alt="The Global Actuary"
        width={30} // Adjusted size for better visibility
        className="mx-2 mb-1 Rimg" // Center align with text
      />
    </span>
    Actuary
  </h1>
  <span className="text-sm font-light">Futurity Prowess Unleashed</span>
</div>

      
      {/* Heading Section */}
      <h2 className="text-3xl font-bold mb-4">Futurity Prowess Unleashed!</h2>
      
      {/* Description Section */}
      <p className="text-gray-600 mb-6 max-w-2xl">
        ‘The Global Actuary’ is a platform dedicated to providing a comprehensive educational guide on studying Actuarial Science. 
        Our platform offers a wide range of studying resources including study advice, industry insights, and networking opportunities. 
        We strive to empower Actuary students and professionals by fostering a supportive community and sharing valuable knowledge 
        while also sensitizing non-actuary students on what Actuarial Science is all about. ‘The Global Actuary’ literally unleashes 
        your futurity prowess as an Actuary and related roles in Risk management.
      </p>
      
      {/* Learn More Button */}
      <a
        href="#"
        className="bg-black text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-gray-800 transition duration-300"
      >
        Learn more
      </a>
    </div>
  );
};

export default Home;
