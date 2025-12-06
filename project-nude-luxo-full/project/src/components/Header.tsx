import { Instagram } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-[#2F4F4F] to-[#696969] shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl md:text-3xl font-bold text-[#D4AF37]">
          Bianca Moura Lash Designer
        </h1>
        <a
          href="https://www.instagram.com/bianca.cilioss"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-[#3D9970] hover:bg-[#2F7F5C] text-white px-4 py-2 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg"
        >
          <Instagram size={24} />
          <span className="hidden sm:inline">@bianca.cilioss</span>
        </a>
      </div>
    </header>
  );
}
