import { useState } from 'react';

interface ProcedureCardProps {
  name: string;
  price: string;
  image: string;
}

export default function ProcedureCard({ name, price, image }: ProcedureCardProps) {
  const [isSwaying, setIsSwaying] = useState(false);

  return (
    <div
      onClick={() => setIsSwaying(!isSwaying)}
      className={`bg-[#F5F5DC] rounded-2xl overflow-hidden shadow-xl cursor-pointer transition-all duration-300 hover:shadow-2xl ${
        isSwaying ? 'animate-sway' : ''
      }`}
    >
      <div className="relative overflow-hidden group">
        <img
          src={image}
          alt={name}
          className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2F4F4F]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div className="p-6 text-center">
        <h3 className="text-xl font-bold text-[#2F4F4F] mb-2">{name}</h3>
        <p className="text-2xl font-bold text-[#3D9970] border-t-2 border-[#C1A061] pt-3">
          {price}
        </p>
      </div>
    </div>
  );
}
