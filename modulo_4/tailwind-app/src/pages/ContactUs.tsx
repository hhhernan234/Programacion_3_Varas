// src/pages/ContactUs.tsx

export default function ContactUs() {
  return (
    <main className="min-h-screen bg-slate-950 py-16">
      <div className="mx-auto max-w-2xl px-4">
        <h1 className="text-2xl font-extrabold text-white mb-6">Contáctanos</h1>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <ul className="space-y-2 text-white/70 text-sm">
            <li className="flex items-center gap-2">
              <span className="text-blue-400">→</span> Telefono: +1 (555) 123-4567
            </li>
            <li className="flex items-center gap-2">
              <span className="text-blue-400">→</span> Email: info@company.com
            </li>
            <li className="flex items-center gap-2">
              <span className="text-blue-400">→</span> dirección: 123 Calle Principal, Ciudad, País
            </li>
            <li className="flex items-center gap-2">
              <span className="text-blue-400">→</span> Horario de atención: Lunes a Viernes, 9:00 AM - 5:00 PM
            </li>
            <li className="flex items-center gap-2">
              <span className="text-blue-400">→</span> redes sociales: Twitter, Facebook, LinkedIn
            </li>
            <li className="flex items-center gap-2">
              <span className="text-blue-400">→</span> instagram: @company
            </li>
          </ul>
        </div>
      </div>
    </main>
  )
}