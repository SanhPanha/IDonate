import Image from "next/image"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Instagram, Twitter, Youtube, Globe } from 'lucide-react'

export default function FooterComponent() {
    return (
        <footer className="bg-[#1B2441] text-white w-full px-[100px]">
          {/* Social Media Bar */}
          <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center border-b border-gray-700">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <span className="text-lg font-medium">Follow us on</span>
              <h2 className="text-lg font-bold">Social Media Platform</h2>
            </div>
            <div className="flex gap-4">
              <a href="#" className="hover:text-gray-300">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-gray-300">
                <Globe className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-gray-300">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-gray-300">
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </div>
    
          {/* Main Footer Content */}
          <div className="container mx-auto px-4 py-12 ">
            <div className="grid md:grid-cols-4 gap-8">
              {/* Logo and Description */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Image
                    src="/placeholder.svg"
                    alt="iDONATE Logo"
                    width={48}
                    height={48}
                    className="rounded-lg"
                  />
                  <h3 className="text-xl font-bold">iDONATE</h3>
                </div>
                <p className="text-sm text-gray-300">
                  Donation is the act of giving resources, such as money, goods, or time, to help others or support a cause without expecting anything in return
                </p>
                <div className="space-y-2">
                  <h4 className="font-semibold">Contact Information</h4>
                  <div className="space-y-1">
                    <a href="tel:+85595990910" className="text-sm text-green-400 hover:text-green-300 flex items-center gap-2">
                      (+855) 95 990 910
                    </a>
                    <a href="mailto:info.istad@gmail.com" className="text-sm text-green-400 hover:text-green-300 flex items-center gap-2">
                      info.istad@gmail.com
                    </a>
                  </div>
                </div>
              </div>
    
              {/* Quick Links */}
              <div>
                <h4 className="font-semibold mb-4">Quick Link</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-sm text-gray-300 hover:text-white">Home</a></li>
                  <li><a href="#" className="text-sm text-gray-300 hover:text-white">About Us</a></li>
                  <li><a href="#" className="text-sm text-gray-300 hover:text-white">Contact us</a></li>
                  <li><a href="#" className="text-sm text-gray-300 hover:text-white">Pricing</a></li>
                </ul>
              </div>
    
              {/* Support */}
              <div>
                <h4 className="font-semibold mb-4">Support</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-sm text-gray-300 hover:text-white">Help center</a></li>
                  <li><a href="#" className="text-sm text-gray-300 hover:text-white">Terms of service</a></li>
                  <li><a href="#" className="text-sm text-gray-300 hover:text-white">Legal</a></li>
                  <li><a href="#" className="text-sm text-gray-300 hover:text-white">Privacy policy</a></li>
                  <li><a href="#" className="text-sm text-gray-300 hover:text-white">Status</a></li>
                </ul>
              </div>
    
              {/* Stay up to date */}
              <div className="space-y-8">
                <div>
                  <h4 className="font-semibold mb-4">Stay up to date</h4>
                  <div className="flex">
                    <Input 
                      type="email" 
                      placeholder="Your email address" 
                      className="rounded-r-none bg-gray-700 border-gray-600 text-white placeholder:text-gray-400"
                    />
                    <Button className="rounded-l-none bg-blue-600 hover:bg-blue-700">
                      →
                    </Button>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-4">Our Sponsor</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <Image
                      src="/placeholder.svg"
                      alt="Sponsor 1"
                      width={120}
                      height={60}
                      className="bg-white rounded-lg p-2"
                    />
                    <Image
                      src="/placeholder.svg"
                      alt="Sponsor 2"
                      width={120}
                      height={60}
                      className="bg-white rounded-lg p-2"
                    />
                    <Image
                      src="/placeholder.svg"
                      alt="Sponsor 3"
                      width={120}
                      height={60}
                      className="bg-white rounded-lg p-2"
                    />
                  </div>
                </div>
              </div>
            </div>
    
            {/* Mission Statement */}
            <div className="mt-12 text-right">
              <p className="text-lg">Donation Change their life</p>
              <p className="text-2xl font-bold">
                who are <span className="text-white">orphan and ILLITERATE</span>
              </p>
            </div>
          </div>
    
          {/* Copyright */}
          <div className="border-t border-gray-700">
            <div className="container mx-auto px-4 py-4">
              <p className="text-sm text-center text-gray-400">
                © 2024 Center of Science and Technology Advanced Development | All Rights Reserved
              </p>
            </div>
          </div>
        </footer>
      )
}