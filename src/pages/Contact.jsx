import emailjs from 'emailjs-com'
import { useState } from 'react';


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then((result) => {
        alert('Message Sent!');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch(() => alert('Oops! Something went wrong. Please try agein.'));
  }

  return (
    <section className="min-h-screen flex items-center justify-center py-20">
      <div className="py-4 px-4 w-150  rounded-2xl ">
        <h2 className="text-3xl mx-auto w-fit text-transparent font-bold mb-8 bg-gradient-to-r from-amber-400 to-blue-800 bg-clip-text">
          Contact form
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              className="w-full bg-white/30 border border-white/80 rounded-2xl px-4 py-3 text-gray-500 transition focus:outline-none focus:border-blue-800 focus:bg-blue-500/5"
              placeholder="Name..."
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </div>
          <div className="relative">
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              className="w-full bg-white/30 border border-white/80 rounded-2xl px-4 py-3 text-gray-500 transition focus:outline-none focus:border-blue-800 focus:bg-blue-500/5"
              placeholder="example@gmail.com"
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>
          <div className="relative">
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={formData.message}
              className="w-full bg-white/30 border border-white/80 rounded-2xl px-4 py-3 text-gray-500 transition focus:outline-none focus:border-blue-800 focus:bg-blue-500/5"
              placeholder="Your message..."
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-b from-amber-900 via-amber-400 to-amber-900 text-white py-3 px-6 rounded font-medium transition-transform duration-300 ease-in-out relative overflow-hidden cursor-pointer hover:scale-[1.01] active:translate-y-1"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
export default Contact