import Image from 'next/image'
import HeroSection from './components/HeroSection'
import NavBar from "./components/navBar";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <NavBar />
      
      <div class="container mt-24 mx-auto px-12 py-24"><HeroSection/></div>
    </main>
  )
}
