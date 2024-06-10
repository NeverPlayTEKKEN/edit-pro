'use client'

import Header from "./components/Header";
import Image from "next/image";

const Home = () => {
  return (
    <div>
      <Header />
      <div class="h-6"></div>
      <div class="grid grid-cols-4 md:grid-cols-12">
        <div class="bg-black col-span-6 m-2"></div>
        <div class="bg-black col-span-6 m-4">
          <Image src="/background.png" width={900} height={636}/>
        </div>
      </div>
    </div>
  )
}

export default Home;