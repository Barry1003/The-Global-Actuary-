 import about from "../../assets/image-removebg-preview.png"
const NationalRiskCompendium = () => {
  return (
    <div className="flex flex-col gap-4 lg:flex-row items-center justify-center min-h-screen bg-white p-4">
      {/* Left Section */}
      <div className="text-center lg:text-left mb-8 lg:mb-0 lg:mr-8">
        <h1 className="text-3xl font-bold leading-tight lg:text-5xl">
          NATIONAL <br />
          RISK <br />
          COMPENDIUM <br />
          3.0
        </h1>
        <button className="mt-4 px-6 py-2 bg-black text-white rounded-full hover:bg-white/50 hover:text-black">
          Click here
        </button>
      </div>

      {/* Right Section */}
      <div className="flex justify-center">
        <img
          src=  {about}
          alt="National Risk Compendium 3.0"
          className="w-full max-w-md lg:max-w-lg"
        />
      </div>
    </div>
  );
};

export default NationalRiskCompendium;
