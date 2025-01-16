import { Contact } from "lucide-react";
import Footer from "./Footer";
import ProfilePage from "./Profilepage";
import ProjectsComponent from "./Projects";
import ContactForm from "./Contact";
import Skills from "./Skills";
import './app.css'

export default function App() {
  return (
    <div className="flex items-center justify-between w-full flex-col p-8 min-h-screen">
    <ProfilePage />
    <Skills />
    <ProjectsComponent />
    <ContactForm />
    <Footer />
    </div>
  )
}
