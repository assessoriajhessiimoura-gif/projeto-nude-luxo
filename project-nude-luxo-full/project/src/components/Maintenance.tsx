export default function Maintenance() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-[#7FFFD4] to-[#AFEEEE]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-[#2F4F4F] mb-12">
          Manutenções
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 max-w-5xl mx-auto">
          <div className="w-full md:w-1/2">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#D4AF37] to-[#C1A061] rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
              <img
                src="/whatsapp_image_2025-11-29_at_20.21.39_(1).jpeg"
                alt="Manutenção de Cílios"
                className="relative rounded-2xl w-full shadow-2xl border-4 border-[#C1A061] transform transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 space-y-6">
            <div className="bg-[#F5F5DC] rounded-2xl p-8 shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer hover:animate-sway">
              <h3 className="text-2xl font-bold text-[#2F4F4F] mb-3">
                Manutenções dos Volumes
              </h3>
              <p className="text-3xl font-bold text-[#3D9970] border-t-2 border-[#C1A061] pt-4">
                R$ 130,00
              </p>
            </div>
            <div className="bg-[#F5F5DC] rounded-2xl p-8 shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer hover:animate-sway">
              <h3 className="text-2xl font-bold text-[#2F4F4F] mb-3">
                Manutenção Mega Volume
              </h3>
              <p className="text-3xl font-bold text-[#3D9970] border-t-2 border-[#C1A061] pt-4">
                R$ 220,00
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
