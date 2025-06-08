"use client";

export default function Header() {
  return (
    <header className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[90%] max-w-7xl bg-white bg-opacity-90 backdrop-blur-md rounded-xl shadow-md z-50 py-4 px-8 flex justify-between items-center">
      <h1 className="text-xl font-bold text-black">Consulting Firm</h1>
      <nav>
        <ul className="flex space-x-6 text-black font-medium">
          <li><a href="#services" className="hover:underline">Services</a></li>
          <li><a href="#about" className="hover:underline">About</a></li>
          <li><a href="#testimonials" className="hover:underline">Testimonials</a></li>
          <li><a href="#contact" className="hover:underline">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}
