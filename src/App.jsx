  import { useState } from 'react'
  import { useEffect} from "react";
  import { motion, AnimatePresence } from "framer-motion";
  import { QRCodeCanvas } from "qrcode.react";
  import './App.css';
  import logo from "../src/assets/logo.jpeg";



  // ✅ Links principais
  const siteUrl = "https://itapiplast.com.br";
  // Se você publicar, mova o PDF para /public e troque por "/ITAPIPLAST-ECOEMPREENDIMENTOS.pdf"
  const pdfUrl = "/ITAPIPLAST-ECOEMPREENDIMENTOS.pdf";

  const cards = [
    {
      title: "Missão",
      text:
        "Reduzir a poluição marinha por meio da coleta de plásticos da pesca, promovendo sustentabilidade e economia circular.",
    },
    {
      title: "Visão",
      text:
        "Ser referência regional na triagem de plásticos da pesca, impulsionando preservação marinha e desenvolvimento sustentável.",
    },
    {
      title: "Valores",
      text:
        "Sustentabilidade, Inovação, Responsabilidade socioambiental, Ética e Compromisso com a comunidade.",
    },
  ];

  const isos = [
    {
      code: "ISO 14001",
      text:
        "Garante que a empresa cuide do meio ambiente, controlando e reduzindo seus impactos ambientais.",
    },
    {
      code: "ISO 45001",
      text:
        "Assegura a saúde e segurança dos trabalhadores, prevenindo acidentes e criando um ambiente de trabalho seguro.",
    },
    {
      code: "ISO 9001",
      text:
        "Foca na qualidade dos produtos e processos, buscando sempre a satisfação do cliente e a melhoria contínua.",
    },
  ];

  const badges = [
    "ODS 12 · Consumo Responsável",
    "ODS 14 · Vida na Água",
    "ISO 14001 · Gestão Ambiental",
    "Comunidades Pesqueiras",
  ];

  export default function App() {
    const [open, setOpen] = useState(false);

    // Fechar modal com tecla ESC
    useEffect(() => {
      const onEsc = (e) => e.key === "Escape" && setOpen(false);
      window.addEventListener("keydown", onEsc);
      return () => window.removeEventListener("keydown", onEsc);
    }, []);

    return (
      <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-emerald-50 text-slate-800">
        {/* Header */}
        <header className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
            src= {logo}
            alt="Logo ITAPIPLAST"
            className="h-9 w-9 rounded-xl object-cover"
            />

            <div className="h-9 w-9 rounded-xl bg-emerald-600" />
            <span className="font-semibold tracking-tight">ITAPIPLAST</span>
          </div>
          <nav className="flex items-center gap-4">
            <a
              href="#isos"
              className="text-sm underline underline-offset-4 hover:no-underline"
            >
              Certificações
            </a>
            <a
              href={pdfUrl}
              className="text-sm underline underline-offset-4 hover:no-underline"
              target="_blank"
              rel="noreferrer"
              download
            >
              Baixar Dossiê
            </a>
          </nav>
        </header>

        {/* Hero */}
        <main className="max-w-6xl mx-auto px-6">
          <section className="pt-6 pb-12 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-5xl font-extrabold tracking-tight text-emerald-900"
              >
                Reciclagem de Plásticos da Pesca
              </motion.h1>
              <p className="mt-4 text-lg leading-relaxed max-w-prose">
                Somos especializados na coleta e distribuição de resíduos plásticos da atividade pesqueira, atuando como elo entre comunidades, empresas e recicladoras. Garantimos destino correto dos materiais, reduzindo a poluição marinha e fortalecendo a economia circular em Itapissuma–PE.
              </p>

              <ul className="mt-6 grid grid-cols-2 gap-3 text-sm">
                {badges.map((b) => (
                  <li key={b} className="p-3 rounded-2xl bg-white shadow-sm border">
                    {b}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="mt-6 flex gap-3">
                <a
                  href={pdfUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center px-4 py-2 rounded-xl bg-emerald-600 text-white text-sm font-medium shadow hover:bg-emerald-700"
                >
                  📄 Ver Dossiê
                </a>
                <a
                  href={siteUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center px-4 py-2 rounded-xl border text-sm font-medium hover:bg-white"
                >
                  🌐 Ir para o site
                </a>
              </div>
            </div>

            {/* QR Code Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white border shadow-xl rounded-3xl p-6 flex flex-col items-center gap-4"
            >
              <div className="text-center">
                <h2 className="text-xl font-semibold">Aponte a câmera ou clique</h2>
                <p className="text-sm text-slate-500">Acesse o site da empresa</p>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setOpen(true)}
                className="rounded-2xl p-4"
                aria-label="Abrir painel da empresa"
                aria-expanded={open}
              >
                <div className="bg-white p-3 rounded-xl border">
                  <QRCodeCanvas value={siteUrl} size={180} includeMargin />
                </div>
              </motion.button>
              <p className="text-xs text-slate-500">Clique ou escaneie o QR</p>
            </motion.div>
          </section>

          {/* Missão, Visão, Valores */}
          <section className="pb-12 space-y-10">
            <div className="grid md:grid-cols-3 gap-4">
              {cards.map((card) => (
                <article key={card.title} className="bg-white rounded-3xl border shadow-sm p-5">
                  <h3 className="font-semibold text-emerald-900 mb-2">{card.title}</h3>
                  <p className="text-sm text-slate-700">{card.text}</p>
                </article>
              ))}
            </div>
          </section>

          {/* ISOs (seguindo o mesmo padrão visual) */}
          <section id="isos" className="pb-16 space-y-6">
            <header className="flex items-end justify-between">
              <h2 className="text-2xl font-bold text-emerald-900">Certificações ISO</h2>
              <span className="text-xs text-slate-500">Compromisso com qualidade, segurança e meio ambiente</span>
            </header>
            <div className="grid md:grid-cols-3 gap-4">
              {isos.map((iso) => (
                <article key={iso.code} className="bg-white rounded-3xl border shadow-sm p-5">
                  <h3 className="font-semibold text-emerald-900 mb-2">{iso.code}</h3>
                  <p className="text-sm text-slate-700">{iso.text}</p>
                </article>
              ))}
            </div>
          </section>

          {/* ODS + Conformidades (extra opcional, fácil remover) */}
          <section className="pb-20 space-y-6">
            <h2 className="text-2xl font-bold text-emerald-900">ODS e Conformidades</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <article className="bg-white rounded-3xl border shadow-sm p-5">
                <h3 className="font-semibold text-emerald-900 mb-2">ODS Adotadas</h3>
                <ul className="list-disc list-inside text-sm text-slate-700 space-y-1">
                  <li>ODS 12 – Consumo e produção responsáveis</li>
                  <li>ODS 14 – Vida na água</li>
                  <li>ODS 8 – Trabalho decente e crescimento econômico</li>
                  <li>ODS 9 – Indústria, inovação e infraestrutura</li>
                </ul>
              </article>
              <article className="bg-white rounded-3xl border shadow-sm p-5">
                <h3 className="font-semibold text-emerald-900 mb-2">Conformidades Legais</h3>
                <ul className="list-disc list-inside text-sm text-slate-700 space-y-1">
                  <li>PNRS (Lei nº 12.305/2010)</li>
                  <li>Resoluções CONAMA (ex.: nº 275)</li>
                  <li>Normas ambientais da CPRH e regulamentos municipais</li>
                  <li>NRs – Normas de segurança do trabalho</li>
                </ul>
              </article>
            </div>
          </section>
        </main>

        {/* Modal do QR Code */}
        <AnimatePresence>
          {open && (
            <motion.div
              role="dialog"
              aria-modal="true"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm flex items-center justify-center p-4"
              onClick={() => setOpen(false)}
            >
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 10, opacity: 0 }}
                className="w-full max-w-5xl bg-white rounded-3xl overflow-hidden shadow-2xl border"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between px-4 py-3 border-b bg-slate-50">
                  <span className="text-sm font-medium">Painel · ITAPIPLAST</span>
                  <button
                    onClick={() => setOpen(false)}
                    className="text-sm px-2 py-1 rounded-lg hover:bg-slate-100"
                  >
                    Fechar
                  </button>
                </div>
                <div className="h-[75vh] flex items-center justify-center">
                  <QRCodeCanvas value={siteUrl} size={300} includeMargin />
                </div>
                <div className="p-4 text-right border-t">
                  <a
                    href={siteUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm underline hover:no-underline"
                  >
                    Abrir site
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer */}
        <footer className="max-w-6xl mx-auto px-6 py-10 text-xs text-slate-500">
          <h2>"Menos plástico no oceano, mais vida na água.</h2>
          © {new Date().getFullYear()} ITAPIPLAST · Reciclagem de plásticos da pesca.
        </footer>
      </div>
    );
  }
