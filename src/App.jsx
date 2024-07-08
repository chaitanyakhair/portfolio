import { Contact } from "lucide-react";
import Footer from "./Footer";
import ProfilePage from "./Profilepage";
import ProjectsComponent from "./Projects";
import ContactForm from "./Contact";

export default function App() {
  return (
    <div className="flex items-center justify-between w-full flex-col p-8 min-h-screen">
    <ProfilePage />
    <ProjectsComponent />
    <ContactForm />
    <Footer />
    </div>
  )
}
