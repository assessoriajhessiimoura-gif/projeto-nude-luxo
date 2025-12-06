import { useState } from 'react';
import { MessageCircle } from 'lucide-react';

const procedures = [
  { name: 'Volume Brasileiro', price: 'R$ 165,00' },
  { name: 'Volume Fox', price: 'R$ 165,00' },
  { name: 'Volume Fox Marrom', price: 'R$ 165,00' },
  { name: 'Volume Europeu', price: 'R$ 165,00' },
  { name: 'Mega Volume', price: 'R$ 220,00' },
];

export default function BookingForm() {
  const [selectedProcedure, setSelectedProcedure] = useState('');

  const handleWhatsApp = () => {
    if (!selectedProcedure) {
      alert('Por favor, selecione um procedimento');
      return;
    }

    const message = `Olá Bianca! Quero agendar esse procedimento: ${selectedProcedure}.`;
    const whatsappNumber = '5531991028853';
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-[#AFEEEE] to-[#7FFFD4]">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto bg-[#F5F5DC] rounded-3xl shadow-2xl p-8 md:p-12 transform transition-all duration-300 hover:shadow-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#2F4F4F] mb-8">
            Agende seu Procedimento
          </h2>
          <div className="space-y-6">
            <div>
              <label className="block text-lg font-bold text-[#2F4F4F] mb-3">
                Escolha o procedimento desejado:
              </label>
              <select
                value={selectedProcedure}
                onChange={(e) => setSelectedProcedure(e.target.value)}
                className="w-full px-4 py-4 text-lg border-2 border-[#C1A061] rounded-xl focus:outline-none focus:ring-4 focus:ring-[#3D9970] focus:border-[#3D9970] bg-nudeLight text-[#2F4F4F] cursor-pointer transition-all duration-300 hover:border-[#3D9970] hover:shadow-lg"
              >
                <option value="">Selecione um procedimento...</option>
                {procedures.map((procedure, index) => (
                  <option key={index} value={`${procedure.name} ${procedure.price}`}>
                    {procedure.name} - {procedure.price}
                  </option>
                ))}
              </select>
            </div>
            <button
              onClick={handleWhatsApp}
              className="w-full bg-[#3D9970] hover:bg-[#2F7F5C] text-white font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-3 transition-all duration-300 transform hover:scale-105 hover:shadow-xl text-lg"
            >
              <MessageCircle size={28} />
              Agendar via WhatsApp
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
