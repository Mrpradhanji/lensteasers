export default function Contact() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[60vh] px-2 sm:px-4 py-8 sm:py-16">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-[#222]">Contact Us</h1>
      <div className="mb-8 text-center text-[#444] text-sm sm:text-base">
        <p>Phone: +91 9520271285</p>
        <p>Email: lensteasers@gmail.com</p>
        <p>Address: SE 87A, Jaipuria Sunrise Plaza, Ahinsa Khand 1, Indirapuram, Ghaziabad, Uttar Pradesh 201014</p>
      </div>
      <form className="flex flex-col gap-4 w-full max-w-md bg-[#f7f3ed] p-4 sm:p-8 rounded-lg shadow-sm border border-[#ececec]">
        <input type="text" placeholder="Your Name" className="p-2 sm:p-3 rounded border border-[#ddd] text-sm sm:text-base" />
        <input type="email" placeholder="Your Email" className="p-2 sm:p-3 rounded border border-[#ddd] text-sm sm:text-base" />
        <textarea placeholder="Your Message" rows={4} className="p-2 sm:p-3 rounded border border-[#ddd] text-sm sm:text-base" />
        <button type="submit" className="bg-[#b48b3c] text-white py-2 sm:py-3 rounded font-semibold hover:bg-[#a07a2c] transition-colors text-sm sm:text-base">Send Message</button>
      </form>
    </main>
  );
} 