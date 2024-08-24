import nag from "../../assets/nag.jpg" 

const ProfileCard = () => {
  return (
    <div className="flex flex-col lg:flex-row  container items-center gap-8 justify-center min-h-screen bg-white p-4">
      {/* Left Section: Image */}
      <div className="mb-8 w-1/3 h[80%] lg:mb-0 lg:mr-8">
        <img
          src={nag}
          alt="Najite Dede Stephen"
          className=" object-contain  rounded-lg shadow-lg"
        />
      </div>

      {/* Right Section: Text */}
      <div className="text-center w-1/3 lg:text-left">
        <h1 className="text-3xl lg:text-4xl font-bold mb-2">
          Najite Dede Stephen
        </h1>
        <p className="text-gray-500 mb-4">CEO, The Global Actuary</p>
        <p className="text-lg  font-bold leading-relaxed">
          Hello! My name is Najite (nah-gee-tay). I'm the creative director of
          The Global Actuary, an educational platform that aims to enhance the
          journey of Actuarial students to become world-class professionals. It
          also educates non-actuary professionals and students about Actuarial
          Science and provides a social networking avenue for Actuaries, Actuary
          students and student Actuaries through content creation and creative
          ways by myself and my team. As a future Global Actuary, the aim is
          also to share my journey on becoming a certified Actuary through this
          platform.
        </p>
        <p className="text-lg font-bold  leading-relaxed mt-4">
          The Global Actuary is representing Nigeria in the global industry of
          Actuaries, and it aims to make Actuarial Science more accessible and
          appealing as a career path to Nigerians and a wider audience.
        </p>
      </div>
    </div>
  );
};

export default ProfileCard;
