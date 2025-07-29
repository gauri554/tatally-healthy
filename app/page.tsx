import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Container from "@/components/Container";
import ContainerSection from "@/components/Container";
export default function Home() {
  return (
         <div className="main-layout">
      <Navbar />
      <div className="content-layout">
        <Sidebar />
        <ContainerSection />
      </div>
    </div>

  );

}
