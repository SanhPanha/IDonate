import Image from "next/image"
import { Button } from "@/components/ui/button"
import { PlayCircle, ChevronLeft, ChevronRight, Plus } from 'lucide-react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import localFont from 'next/font/local'
import { Input } from "../ui/input"

export default function MissionVisionComponent() {
  return (
    <div className="w-full">
     

      {/* Hero Section */}
      <section className="relative h-[600px]">
        <Image
          src="/placeholder.svg"
          alt="People celebrating"
          fill
          className="object-cover brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent">
          <div className="container mx-auto px-4 py-24">
            <div className="max-w-3xl text-white">
              <h1 className="text-5xl font-bold mb-4">Give Hope,<br />Save Lives</h1>
              <p className="text-lg mb-8 text-gray-200">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget ipsum faucibus,
                efficitur urna at, efficitur massa aliquam.
              </p>
              <div className="flex gap-8">
                <div>
                  <p className="text-3xl font-bold">$1,294,228</p>
                  <p className="text-sm text-gray-300">Donation</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">2,849</p>
                  <p className="text-sm text-gray-300">People Helped</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            ក្រុមការងាររបស់យើងធ្វើការ<br />
            រៀងរាល់ថ្ងៃ
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="text-center md:text-left">
              <Image
                src="/placeholder.svg"
                alt="Heart icon"
                width={120}
                height={120}
                className="mx-auto md:mx-0 mb-6"
              />
              <h3 className="text-xl font-semibold mb-4">បេសកកម្ម</h3>
              <p className="text-gray-600">
                ដើម្បីជួយដល់កុមារកម្ពុជាដែលខ្វះខាតឱកាសក្នុងការទទួលបានការអប់រំ ហើយជួយឲ្យពួកគេមានឱកាសទទួលបានការអប់រំដូចក្មេងដទៃទៀត។
              </p>
              <Button variant="outline" className="mt-4">តែមទៀត</Button>
            </div>
            <div className="text-center md:text-left">
              <Image
                src="/placeholder.svg"
                alt="Vision icon"
                width={120}
                height={120}
                className="mx-auto md:mx-0 mb-6"
              />
              <h3 className="text-xl font-semibold mb-4">ចក្ខុវិស័យ</h3>
              <p className="text-gray-600">
                ដើម្បីជួយដល់កុមារកម្ពុជាដែលខ្វះខាតឱកាសក្នុងការទទួលបានការអប់រំ ហើយជួយឲ្យពួកគេមានឱកាសទទួលបានការអប់រំដូចក្មេងដទៃទៀត។
              </p>
              <Button className="mt-4">មើល</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">ក្រុមការងាររបស់យើងធ្វើការរៀងរាល់ថ្ងៃ</h2>
          <div className="relative aspect-video rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg"
              alt="Video thumbnail"
              fill
              className="object-cover"
            />
            <button className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors">
              <PlayCircle className="w-16 h-16 text-white" />
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: "📚", title: "អប់រំ", description: "ផ្តល់ការអប់រំដល់កុមារដែលខ្វះខាតឱកាស" },
              { icon: "🤝", title: "ទំនាក់ទំនង", description: "ផ្តល់ទំនាក់ទំនងល្អជាមួយសហគមន៍" },
              { icon: "🔄", title: "អភិវឌ្ឍន៍ជាបន្ត", description: "ការអភិវឌ្ឍន៍ជាបន្តបន្ទាប់" },
              { icon: "🌟", title: "សមិទ្ធផលជាក់ស្តែង", description: "សមិទ្ធផលការងារជាក់ស្តែងដែលអាចមើលឃើញ" }
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">សំណួរដែលសួរញឹកញាប់</h2>
          <div className="max-w-2xl mx-auto">
            <Accordion type="single" collapsible>
              {[
                "តើអ្វីទៅជាមូលហេតុដែលយើងត្រូវបរិច្ចាគ?",
                "តើការបរិច្ចាគរបស់អ្នក ត្រូវបានប្រើប្រាស់យ៉ាងដូចម្តេច?",
                "តើធ្វើដូចម្តេចទើបអាចបរិច្ចាគបាន?",
                "តើការបរិច្ចាគរបស់អ្នកត្រូវបានការពារដោយរបៀបណា?"
              ].map((question, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{question}</AccordionTrigger>
                  <AccordionContent>
                    ចម្លើយនឹងត្រូវបានបង្ហាញនៅទីនេះ។
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-12 text-center">ដៃគូសហការ</h2>
          <div className="relative">
            <div className="flex justify-center gap-8">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="w-32 h-32 relative">
                  <Image
                    src="/placeholder.svg"
                    alt={`Partner ${i}`}
                    fill
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
            <button className="absolute left-0 top-1/2 -translate-y-1/2">
              <ChevronLeft className="w-8 h-8" />
            </button>
            <button className="absolute right-0 top-1/2 -translate-y-1/2">
              <ChevronRight className="w-8 h-8" />
            </button>
          </div>
        </div>
      </section>

    </div>
  )
}

