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
      <div className="fixed bottom-4 right-4 capitalize font-semibold"> let's chat</div>
    </div>
  )
}

export default Index
