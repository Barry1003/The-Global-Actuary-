import NationalRiskCompendium from "./utils/about"
import BlogPosts from "./utils/Bolgs"
import ContactUs from "./utils/Contactus"
import Home from "./utils/home"
import Nav from "./utils/nav"
import ProfileCard from "./utils/section3"

 
const Index = () => {
  return (
    <div className="relative">
      <div className="flex flex-col gap-4" >
          <Nav/>
          <Home/>
          <NationalRiskCompendium/>
          <ProfileCard/>
          <BlogPosts/>
          <ContactUs/>
      </div>
      <div className="fixed bottom-2 right-4 capitalize  bg-slate-300 px-4 py-1 font-semibold"> <a href="https://wa.me/+2349157277069"> let's chat</a></div>
    </div>
  )
}

export default Index
