const conversations = [
  {
    company: "Distribuidora Andina",
    initials: "DA",
    messages: [
      { text: "Hola, necesito reponer inventario para esta semana.", side: "in", time: "03:28 p. m." },
      { text: "Tengo stock disponible y puedo separar tu pedido ahora.", side: "out", time: "03:29 p. m." },
      { text: "Perfecto. Envía la cotización al correo de compras.", side: "in", time: "03:30 p. m." },
      { text: "Listo. Cotizacion enviada y seguimiento creado para mañana.", side: "out", time: "03:30 p. m." }
    ]
  },
  {
    company: "Clínica Dental Sonrisa",
    initials: "CS",
    messages: [
      { text: "Buenas tardes, quiero agendar una limpieza dental.", side: "in", time: "11:12 a. m." },
      { text: "Claro. Tenemos disponibilidad mañana a las 10:00 a. m. o 4:30 p. m.", side: "out", time: "11:12 a. m." },
      { text: "La de 4:30 está bien.", side: "in", time: "11:13 a. m." },
      { text: "Tu cita quedó confirmada. Te enviaremos recordatorio automático.", side: "out", time: "11:13 a. m." }
    ]
  },
  {
    company: "Ferreteria Industrial",
    initials: "FI",
    messages: [
      { text: "Muy bien, pueden entregar esta semana?", side: "out", time: "03:34 p. m." },
      { text: "Sí. Tenemos stock completo. Entrega en 24-48 horas hábiles en toda la región.", side: "in", time: "03:34 p. m." },
      { text: "Sí confirmo, necesito la cotización para mostrarsela al dueño de la obra.", side: "out", time: "03:34 p. m." },
      { text: "Perfecto. Aquí tienes tu cotización oficial lista para presentar.", side: "in", time: "03:34 p. m." }
    ]
  }
];

export function RobotHeroVisual() {
  return (
    <div className="relative min-h-[700px]">
      <div className="neural-field absolute inset-0 opacity-18" />
      <div className="absolute left-1/2 top-8 h-[620px] w-[620px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(255,108,240,0.26),transparent_64%)] blur-2xl" />
      <div className="absolute left-1/2 top-24 h-[440px] w-[440px] -translate-x-1/2 rounded-full bg-nova-electric/18 blur-3xl" />

      <div className="phone-live absolute left-1/2 top-4 w-[390px] max-w-[90vw] sm:w-[430px]">
        <div className="relative rounded-[44px] border border-nova-pink/25 bg-[#090412] p-3 shadow-[0_36px_120px_rgba(255,61,255,0.24)]">
          <div className="phone-glow-live absolute -inset-1 rounded-[46px] bg-gradient-to-br from-nova-electric/28 via-nova-fuchsia/22 to-nova-gold/14 blur-xl" />
          <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-[#0a0f1c]">
            <div className="flex items-center justify-between border-b border-white/10 bg-gradient-to-r from-[#2d0b5f] via-[#4c1d95] to-[#7e22ce] px-5 py-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 overflow-hidden rounded-full bg-white/15 ring-1 ring-white/20">
                  <div className="header-avatar-live flex flex-col">
                    {conversations.map((conversation) => (
                      <span
                        key={conversation.initials}
                        className="grid h-10 w-10 shrink-0 place-items-center text-xs font-black text-white"
                      >
                        {conversation.initials}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="h-5 w-48 overflow-hidden">
                    <div className="header-title-live flex flex-col">
                    {conversations.map((conversation) => (
                      <p
                        key={conversation.company}
                        className="h-5 shrink-0 truncate text-sm font-black text-white"
                      >
                        {conversation.company}
                      </p>
                    ))}
                    </div>
                  </div>
                  <p className="text-xs text-white/80">en línea - Agente IA</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-white">
                <span className="online-live h-2.5 w-2.5 rounded-full bg-emerald-300" />
                <span className="text-sm">tel</span>
                <span className="text-lg leading-none">...</span>
              </div>
            </div>

            <div className="relative h-[500px] overflow-hidden bg-[linear-gradient(180deg,rgba(6,10,24,0.99),rgba(7,3,16,0.98))]">
              <div className="absolute inset-0 opacity-12 neural-field" />
              <div className="chat-deck-live relative flex flex-col">
              {conversations.map((conversation, sceneIndex) => (
                <div key={conversation.company} className="flex h-[500px] shrink-0 flex-col justify-end gap-3 px-5 py-6">
                  {conversation.messages.map((message, index) => (
                    <div
                      key={`${conversation.company}-${message.text}`}
                      style={{ animationDelay: `${sceneIndex * 6 + 0.25 + index * 0.46}s` }}
                      className={`message-live max-w-[90%] rounded-2xl px-4 py-3 text-[15px] leading-6 shadow-sm ${
                        message.side === "out"
                          ? "ml-auto rounded-tr-sm bg-gradient-to-r from-[#6a00ff] to-[#b200ff] text-white shadow-[0_10px_24px_rgba(106,0,255,0.22)]"
                          : "rounded-tl-sm bg-[#263142] text-white shadow-[0_10px_24px_rgba(0,0,0,0.18)]"
                      }`}
                    >
                      <p>{message.text}</p>
                      <p className="mt-1 text-right text-[10px] text-white/[0.58]">
                        {message.time} {message.side === "out" ? "leído" : ""}
                      </p>
                    </div>
                  ))}

                  <div className="flex max-w-[42%] items-center gap-1 rounded-2xl rounded-tl-sm bg-[#263142] p-3 shadow-[0_10px_24px_rgba(0,0,0,0.18)]">
                    <span className="typing-dot h-2 w-2 rounded-full bg-white/60" />
                    <span className="typing-dot h-2 w-2 rounded-full bg-white/60 [animation-delay:0.18s]" />
                    <span className="typing-dot h-2 w-2 rounded-full bg-white/60 [animation-delay:0.36s]" />
                  </div>
                </div>
              ))}
              </div>
            </div>

            <div className="border-t border-white/10 bg-[#0b1020] px-4 py-4">
              <div className="mb-3 flex items-center gap-2">
                <div className="h-10 flex-1 rounded-full bg-white/[0.08] px-4 py-2 text-sm text-white/[0.45]">
                  Escribe un mensaje...
                </div>
                <button
                  type="button"
                  aria-label="Envíar mensaje de demostración"
                  className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-r from-nova-gold to-nova-amber text-xs font-black text-nova-black shadow-gold"
                >
                  Envíar
                </button>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {conversations.map((conversation, index) => (
                  <div
                    key={`selector-${conversation.company}`}
                    className="wa-selector truncate rounded-full border px-3 py-2 text-center text-[10px] font-bold"
                    style={{ animationDelay: `${index * -6}s` }}
                  >
                    {conversation.company}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
