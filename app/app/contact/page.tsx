export default function Contact() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[60vh] px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-[#222]">Contact Us</h1>
      <div className="mb-8 text-center text-[#444]">
        <p>Phone: +91 9520271285</p>
        <p>Email: lensteasers@gmail.com</p>
        <p>Address: SE 87A, Jaipuria Sunrise Plaza, Ahinsa Khand 1, Indirapuram, Ghaziabad, Uttar Pradesh 201014</p>
      </div>
      <form className="flex flex-col gap-4 w-full max-w-md bg-[#f7f3ed] p-8 rounded-lg shadow-sm border border-[#ececec]">
        <input type="text" placeholder="Your Name" className="p-3 rounded border border-[#ddd]" />
        <input type="email" placeholder="Your Email" className="p-3 rounded border border-[#ddd]" />
        <textarea placeholder="Your Message" rows={4} className="p-3 rounded border border-[#ddd]" />
        <button type="submit" className="bg-[#b48b3c] text-white py-3 rounded font-semibold hover:bg-[#a07a2c] transition-colors">Send Message</button>
      </form>
    </main>
  );
} 