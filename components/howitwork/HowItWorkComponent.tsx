import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"


export default function Howitwork() {
  return (
    <div className="w-full h-[72px] px-[100px]">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 to-white">
        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl font-bold">
                ការចែករំលែកគឺជាការថែទាំ
              </h1>
              <h2 className="text-2xl font-semibold text-green-600">
                និងជួយដល់អ្នកដែលត្រូវការ
              </h2>
              <p className="text-gray-600">
                ដើម្បីជួយដល់កុមារកម្ពុជាដែលខ្វះខាតឱកាសក្នុងការទទួលបានការអប់រំ ហើយជួយឲ្យពួកគេមានឱកាសទទួលបានការអប់រំដូចក្មេងដទៃទៀត។
              </p>
              <Button className="bg-[#1a237e]">View Cause</Button>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="/placeholder.svg"
                alt="Children smiling"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-12 text-center">
            ប្រវត្តិនៃការបរិច្ចាគបច្ចុប្បន្ន
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg"
                  alt="Step 1"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="font-semibold">១. ជំហានទី ១៖ ចុះឈ្មោះ</h3>
              <p className="text-gray-600">ធ្វើការចុះឈ្មោះដើម្បីបង្កើតគណនី</p>
            </div>
            <div className="space-y-4">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg"
                  alt="Step 2"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="font-semibold">២. ជំហានទី ២៖ បរិច្ចាគ (ជាប្រាក់ឬ អំណោយ)</h3>
              <p className="text-gray-600">បង្ហាញពីចំណាប់អារម្មណ៍៖ ចូលរួមជាមួយអ្នកដទៃ ឬ បង្កើតមូលនិធិផ្ទាល់ខ្លួន!</p>
            </div>
            <div className="space-y-4">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg"
                  alt="Step 3"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="font-semibold">៣. ជំហានទី ៣៖ ចែករំលែក</h3>
              <p className="text-gray-600">អញ្ជើញមិត្តភក្តិនិងសមាជិកគ្រួសារ ឲ្យចូលរួមក្នុងការជួយដល់សហគមន៍របស់យើង</p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-8">ដំណើរការរបស់សប្បុរសជន</h2>
          <p className="mb-12 text-gray-600">
            បរិច្ចាគដោយប្រើប្រាស់កម្មវិធី iDonate ដែលមានសុវត្ថិភាព និងងាយស្រួល
          </p>
          <div className="relative h-[300px] mb-12">
            <Image
              src="/placeholder.svg"
              alt="Community"
              fill
              className="object-cover rounded-lg"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="grid grid-cols-3 gap-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="relative h-16 w-16">
                    <Image
                      src="/placeholder.svg"
                      alt={`Profile ${i}`}
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-12 text-center">
            ដំណើរការរបស់សប្បុរសជន
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="inline-flex p-3 rounded-full bg-green-100">
                <div className="h-12 w-12 rounded-full bg-green-600" />
              </div>
              <h3 className="font-semibold">ធ្វើឲ្យប្រសើរឡើងដល់ iDonate</h3>
              <p className="text-gray-600">ដើម្បីធ្វើឲ្យប្រព័ន្ធកាន់តែប្រសើរឡើង!</p>
            </div>
            <div className="text-center space-y-4">
              <div className="inline-flex p-3 rounded-full bg-yellow-100">
                <div className="h-12 w-12 rounded-full bg-yellow-600" />
              </div>
              <h3 className="font-semibold">ចាប់ផ្តើមប្រើប្រាស់កម្មវិធី</h3>
              <p className="text-gray-600">ចាប់ផ្តើមប្រើប្រាស់កម្មវិធី iDonate ដើម្បីចែករំលែកសេចក្តីល្អ</p>
            </div>
            <div className="text-center space-y-4">
              <div className="inline-flex p-3 rounded-full bg-green-100">
                <div className="h-12 w-12 rounded-full bg-green-600" />
              </div>
              <h3 className="font-semibold">iDonate</h3>
              <p className="text-gray-600">ធ្វើឲ្យប្រសើរឡើងដល់ការបរិច្ចាគតាមប្រព័ន្ធឌីជីថល</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

