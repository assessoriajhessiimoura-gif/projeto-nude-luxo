export default function Hero() {
  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-b from-[#7FFFD4] to-[#AFEEEE]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#D4AF37] to-[#C1A061] rounded-full blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              <img
                src="/whatsapp_image_2025-11-29_at_21.16.18.jpeg"
                alt="Bianca Moura - Lash Designer"
                className="relative rounded-full w-64 h-64 md:w-80 md:h-80 object-cover shadow-2xl border-4 border-[#C1A061] transform transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-5xl font-bold text-[#2F4F4F] mb-6">
              Sobre mim
            </h2>
            <p className="text-lg md:text-xl text-[#D4AF37] leading-relaxed">
              Sou Bianca Moura, Lash Designer especializada em realçar a beleza do olhar com técnica, segurança e personalização. Meu objetivo é entregar resultados leves, duradouros e adaptados para cada cliente.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
