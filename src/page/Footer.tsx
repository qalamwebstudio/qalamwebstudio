import React from 'react'

export const Footer = () => {
  return (
    <footer className="w-full h-full flex flex-col  rounded-t-2xl bg-white text-[#212121] font-Neue p-[3.8vw] relative overflow-hidden">
    

      <div className="flex-grow pt-20 px-2">
        <h1 className="text-3xl font-bold font-Neue"><span className="text-emerald-700 text-[8vw] lg:text-[3vw]">eMTrix-</span><br></br>Empowering Startups and Growing Businesses</h1>
      </div>

      <div className="flex-grow mt-5">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="flex flex-col space-y-4 px-4">
            <h2 className="text-xl font-semibold">Contact Us</h2>
            <p className="text-gray-600">123 Startup Lane<br />siddhpur City, IN 384151</p>
            <p className="text-gray-600">Email: emtrix2025@emtrix.com</p>
          </div>

          {/* Mobile: row for Follow Us and Quick Links */}
          <div className="flex flex-row w-full justify-between md:hidden mt-8 px-4 ">
            <div className="flex flex-col space-y-2 items-start ">
              <h2 className="text-xl font-semibold mb-2">Follow Us</h2>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-emerald-700 underline">Instagram</a>
              <a href="https://behance.net" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-emerald-700 underline">Behance</a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-emerald-700 underline">Facebook</a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-emerald-700 underline">LinkedIn</a>
            </div>
            <div className="flex flex-col space-y-2 items-end">
              <h2 className="text-xl font-semibold mb-2">Quick Links</h2>
              <a href="/" className="text-gray-600 hover:text-emerald-700 underline">Home</a>
              <a href="/services" className="text-gray-600 hover:text-emerald-700 underline">Services</a>
              <a href="/ourwork" className="text-gray-600 hover:text-emerald-700 underline">Our work</a>
              <a href="/about" className="text-gray-600 hover:text-emerald-700 underline">About us</a>
              <a href="/blog" className="text-gray-600 hover:text-emerald-700 underline">Blog</a>
              <a href="/contact" className="text-gray-600 hover:text-emerald-700 underline">Contact us</a>
            </div>
          </div>

          {/* Desktop: columns for Follow Us and Quick Links */}
          <div className="hidden md:flex flex-row gap-8 ">
            <div className="flex flex-col space-y-4 items-end md:items-start lg:mr-36">
              <h2 className="text-xl font-semibold">Follow Us</h2>
              <div className="flex flex-col space-y-2 text-right md:text-left">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-emerald-700 underline">Instagram</a>
                <a href="https://behance.net" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-emerald-700 underline">Behance</a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-emerald-700 underline">Facebook</a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-emerald-700 underline">LinkedIn</a>
              </div>
            </div>
            <div className="flex flex-col space-y-4 items-end md:items-start">
              <h2 className="text-xl font-semibold">Quick Links</h2>
              <div className="flex flex-col space-y-2 text-right md:text-left">
                <a href="/" className="text-gray-600 hover:text-emerald-700 underline">Home</a>
                <a href="/services" className="text-gray-600 hover:text-emerald-700 underline">Services</a>
                <a href="/ourwork" className="text-gray-600 hover:text-emerald-700 underline">Our work</a>
                <a href="/about" className="text-gray-600 hover:text-emerald-700 underline">About us</a>
                <a href="/blog" className="text-gray-600 hover:text-emerald-700 underline">Blog</a>
                <a href="/contact" className="text-gray-600 hover:text-emerald-700 underline">Contact us</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      
       
        
      <div className="border-t border-gray-300 pt-4">
      </div>
      <div className="text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Emtrix. All rights reserved.
        </div>

    </footer>
  )
}

