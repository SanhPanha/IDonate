import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Twitter, Instagram } from 'lucide-react'
import localFont from 'next/font/local'


export default function AboutUsComponent() {
  return (
    <div className="w-full h-[72px] px-[100px]">

      {/* Hero Section */}
      <section className="relative bg-slate-800 text-white">
        <Image
          src="/placeholder.svg"
          alt="Hero background"
          layout="fill"
          objectFit="cover"
          className="opacity-50"
        />
        <div className="relative container mx-auto px-4 py-24">
          <div className="max-w-3xl">
            <p className="text-green-400 mb-2">IT WAS AN INITIATIVE PROGRAM</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              PERSONALIZED<br />
              <span className="text-green-400">SOLUTIONS TO</span><br />
              STREAMLINE DONATION<br />
              PROCESSES
            </h1>
            <p className="text-gray-300 mb-8">
              Empowering change through donations. Your generosity fuels impactful initiatives, fostering a better future for communities in need. Together, we can make a lasting difference.
            </p>
            <div className="flex space-x-4">
              <Button className="bg-green-500 hover:bg-green-600 text-white">Get Started</Button>
              <Button variant="outline" className="text-white border-white hover:bg-white hover:text-slate-800">View our work</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-12">យើងធ្វើអ្វីខ្លះ</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "/placeholder.svg",
                title: "អភិវឌ្ឍន៍មូលនិធិសង្គម",
                description: "កម្មវិធីដែលផ្តល់ជូនដល់អ្នកដែលមានបំណងចង់ធ្វើការបរិច្ចាគ ដើម្បីជួយដល់សង្គមឲ្យកាន់តែប្រសើរឡើង។"
              },
              {
                icon: "/placeholder.svg",
                title: "ការធ្វើឲ្យកាន់តែល្អឡើង",
                description: "កម្មវិធីដែលផ្តល់ជូនដល់អ្នក ដើម្បីជួយដល់សង្គមឲ្យកាន់តែប្រសើរឡើង។"
              },
              {
                icon: "/placeholder.svg",
                title: "ទទួលបានការគាំទ្រពីសហគមន៍",
                description: "កម្មវិធីដែលផ្តល់ជូនដល់អ្នកដែលមានបំណងចង់ធ្វើការបរិច្ចាគ។"
              }
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <Image src={feature.icon} alt={feature.title} width={64} height={64} className="mx-auto mb-4" />
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-12">សមាជិកក្រុម</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {Array.from({ length: 7 }).map((_, i) => (
              <div key={i} className="flex flex-col items-center">
                <Image
                  src="/placeholder.svg"
                  alt="Team member"
                  width={160}
                  height={160}
                  className="rounded-full mb-4 bg-green-500"
                />
                <h3 className="font-semibold">Sreng Chipor</h3>
                <p className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded-full mb-2">TEAM LEADER OF SDGK-END</p>
                <div className="flex space-x-2">
                  <a href="#" className="text-gray-400 hover:text-blue-600"><Facebook size={16} /></a>
                  <a href="#" className="text-gray-400 hover:text-blue-400"><Twitter size={16} /></a>
                  <a href="#" className="text-gray-400 hover:text-pink-600"><Instagram size={16} /></a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}

