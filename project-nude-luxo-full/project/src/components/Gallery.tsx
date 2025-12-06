import ProcedureCard from './ProcedureCard';

const procedures = [
  {
    name: 'Volume Brasileiro',
    price: 'R$ 165,00',
    image: '/whatsapp_image_2025-11-29_at_20.21.39.jpeg',
  },
  {
    name: 'Volume Fox',
    price: 'R$ 165,00',
    image: '/whatsapp_image_2025-11-29_at_20.21.38_(2).jpeg',
  },
  {
    name: 'Volume Fox Marrom',
    price: 'R$ 165,00',
    image: '/whatsapp_image_2025-11-29_at_20.21.38_(1).jpeg',
  },
  {
    name: 'Volume Europeu',
    price: 'R$ 165,00',
    image: '/whatsapp_image_2025-11-29_at_20.21.39.jpeg',
  },
  {
    name: 'Mega Volume',
    price: 'R$ 220,00',
    image: '/whatsapp_image_2025-11-29_at_20.21.38_(2).jpeg',
  },
  {
    name: 'Mega Volume',
    price: 'R$ 220,00',
    image: '/whatsapp_image_2025-11-29_at_20.21.38_(1).jpeg',
  },
];

export default function Gallery() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-[#AFEEEE] to-[#7FFFD4]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-[#2F4F4F] mb-4">
          Catálogo de Procedimentos
        </h2>
        <p className="text-center text-[#D4AF37] mb-12 text-lg">
          Clique nas fotos para ver o efeito de balanço
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {procedures.map((procedure, index) => (
            <ProcedureCard
              key={index}
              name={procedure.name}
              price={procedure.price}
              image={procedure.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
