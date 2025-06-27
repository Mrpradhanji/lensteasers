const services = [
  "Wedding Photography",
  "Pre Wedding Shoot",
  "Birthday Event Photography",
  "Maternity Shoot",
  "Baby & Kids Photography",
  "Product Photography",
  "Cinematography",
];

export default function Services() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[60vh] px-2 sm:px-4 py-8 sm:py-16">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-[#222]">Our Services</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-6 max-w-2xl w-full">
        {services.map((service) => (
          <li key={service} className="bg-[#f7f3ed] rounded-lg p-4 sm:p-6 text-base sm:text-lg text-[#444] shadow-sm border border-[#ececec]">
            {service}
          </li>
        ))}
      </ul>
    </main>
  );
} 