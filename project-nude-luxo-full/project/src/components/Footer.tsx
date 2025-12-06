import { Instagram, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#2F4F4F] to-[#696969] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-[#D4AF37] mb-2">
              Bianca Moura Lash Designer
            </h3>
            <p className="text-[#C1A061]">
              Realçando a beleza do seu olhar
            </p>
          </div>
          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/bianca.cilioss"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#3D9970] hover:bg-[#2F7F5C] px-6 py-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg"
            >
              <Instagram size={24} />
              <span>Instagram</span>
            </a>
            <a
              href="https://wa.me/5531991028853"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#3D9970] hover:bg-[#2F7F5C] px-6 py-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg"
            >
              <MessageCircle size={24} />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-[#C1A061] border-t border-[#C1A061]/30 pt-6">
          <p>&copy; 2024 Bianca Moura Lash Designer. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
