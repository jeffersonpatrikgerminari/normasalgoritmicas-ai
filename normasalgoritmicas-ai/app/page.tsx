"use client";

import Image from "next/image";
import React, { useEffect, useMemo, useState } from "react";

type Lang = "en" | "pt";

function cx(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(" ");
}

const content = {
  pt: {
    nav: {
      concept: "O Conceito",
      theory: "Teoria",
      publications: "Publicações",
      applications: "Aplicações",
      founder: "Fundador",
      contact: "Contato",
    },
    hero: {
      title: "Normas Algorítmicas",
      subtitle:
        "Normatividade, inteligência artificial e reconfiguração do processo eletrônico",
      lead:
        "Uma teoria jurídica sobre a normatividade algorítmica na justiça digital e no processo eletrônico.",
      cta1: "Leia a Teoria",
      cta2: "Contato & Parcerias",
      cta3: "Abrir tese (PDF UFSC)",
    },
    problem: {
      title: "O problema científico",
      text: `
Apesar dos avanços no processo judicial eletrônico, o Sistema Judiciário enfrenta um paradoxo crítico: a digitalização não eliminou a morosidade, apenas a transferiu para o ambiente digital. Hoje, os sistemas operam majoritariamente como gestores de documentos, sem uma compreensão inteligente do conteúdo jurídico. Os sistemas operacionais atuais não enfrentam problemas centrais que estão relacionados com: 1) A Linguagem Natural: os textos jurídicos são repletos de ambiguidades, contradições e nuances importantes que não são percebidas pelos sistemas atuais; 2) A Automação Cartorária: A infraestrutura tecnológica precisa de sinais claros para agir, sem o qual os sistemas ficam totalmente dependentes dos próprios serventuários que consomem grande parte do seu tempo para realização de tarefas repetitivas. Essa desconexão gera ruído no sistema judiciário: tarefas manuais repetitivas, erros de triagem e uma camada de burocracia digital que deve ser repelida do Sistema Judicial. No processo eletrônico, infraestruturas técnicas, fluxos automatizados e classificações algorítmicas deixam de ser meros instrumentos auxiliares e passam a organizar o funcionamento institucional: modulam tempo, prioridade, visibilidade e aprimoram a coordenação dos atos processuais, gerando maior domínio cognitivo judicial. Essa camada normativa não se apresenta como lei nem como decisão judicial, mas produz efeitos concretos sobre a jurisdição, a atividade cartorária e a governança do sistema de justiça. O problema científico consiste em compreender como essas normatividades emergem, operam e podem ser diagnosticadas e governadas, sem ruptura com as garantias processuais nem com o fechamento operativo do Direito. Por meio das normas algorítmicas de segundo grau é apresentada uma nova proposta de solução efetiva para problemas corriqueiros da atividade-meio, a alcançar um novo nível de eficiência e desenvolvimento da Justiça eletrônica.
`,
      cards: [
        {
          title: "Dogmática Tradicional",
          text: "Modelos clássicos com baixa resolução para mediações técnicas.",
        },
        {
          title: "Infraestrutura Técnica",
          text: "Sistemas, regras e pipelines que organizam o trabalho institucional.",
        },
        {
          title: "Fluxos Decisórios",
          text: "Triagem, roteamento, tempos e prioridades que moldam a decisão.",
        },
        {
          title: "Governança Algorítmica",
          text: "Transparência, auditoria e responsabilidade no desenho dos sistemas.",
        },
      ],
    },
    concept: {
      title: "O conceito de Normas Algorítmicas",
      text:
        "Normas Algorítmicas são padrões normativos não positivados, incorporados a sistemas computacionais, que orientam, condicionam ou restringem a atuação institucional no ambiente digital. Não aparecem como texto legal, mas produzem efeitos concretos de organização, priorização e padronização indireta.",
    },
    secondOrder: {
      title: "Normas Algorítmicas de Segundo Grau",
      text:
        "As Normas Algorítmicas de Segundo Grau surgem como a ponte definitiva entre a decisão judicial e a automação. Ao utilizar modelagem cognitiva baseada em Aprendizado de Máquina, o modelo proposto diagnostica os sinais linguísticos das decisões (ex: ordens de citação, emenda ou indeferimento); traduz esses sinais em comandos operacionais automáticos para o sistema operacional e garante o fechamento operativo do Direito, mantendo a autonomia do juiz enquanto automatiza a atividade-meio. As normas algorítmicas representam um avanço ao sistema de Justiça, atribuindo ao algoritmo a função de interpretar os textos jurídicos e reduzir nulidades processuais, garantindo integridade e eficiência processual, superando a visão ultrapassada de sistemas operacionais gestores de documentos.",
      flow: [
        "Arquitetura do Sistema",
        "Fluxos e Subfluxos",
        "Classificação & Priorização",
        "Condições da Decisão",
      ],
    },
    foundations: {
      title: "Fundamentos teóricos",
      pills: [
        "Acoplamento Estrutural",
        "Normatividade Emergente",
        "Metaoperação Jurídica",
        "Tecnologia e Direito",
      ],
      text:
        "A proposta articula Direito e sistemas técnicos como domínios acoplados: a normatividade emerge de coordenações operacionais e de práticas institucionais mediadas por tecnologia, permitindo explicar o Judiciário contemporâneo sem reduzir o fenômeno a “texto legal” ou a “mera eficiência”.",
    },
    applications: {
      title: "Aplicações",
      items: [
        {
          title: "Processo Eletrônico",
          text: "Diagnóstico e desenho de fluxos e subfluxos com rastreabilidade.",
        },
        {
          title: "Governança Judicial",
          text: "Critérios, controles e accountability para automações institucionais.",
        },
        {
          title: "IA Responsável",
          text: "Auditoria, transparência, explicabilidade e limites normativos.",
        },
        {
          title: "Eficiência Institucional",
          text: "Melhorias de gestão sem comprometer garantias processuais.",
        },
      ],
    },
    founder: {
      title: "Fundador",
      name: "Jefferson Germinari, PhD",
      line1: "Doutor em Direito (UFSC)",
      line2: "Tribunal de Justiça de São Paulo",
      tags: "AI & Law · Justiça Digital · Legal Theory",
      links: [
        { label: "Lattes", href: "http://lattes.cnpq.br/5174274917298662" },
        { label: "ORCID", href: "https://orcid.org/0000-0002-3741-5651" },
        {
          label: "LinkedIn",
          href: "https://www.linkedin.com/in/jefferson-patrik-germinari-96508765",
        },
        { label: "Instagram", href: "https://www.instagram.com/jefferson.germinari/" },
      ],
    },
    contact: {
      title: "Contato & Parcerias",
      text:
        "Convites acadêmicos, projetos institucionais, palestras e cooperação científica. Envie uma mensagem e descreva o contexto (revista/evento/instituição/tema).",
      form: {
        name: "Nome",
        email: "E-mail",
        message: "Mensagem",
        send: "Enviar",
        hint:
          "Para envio real, conecte este formulário ao Formspree, Basin ou outro serviço (sem backend).",
      },
    },
    footer:
      "© " +
      new Date().getFullYear() +
      " Normas Algorítmicas · A theoretical framework on algorithmic normativity",
  },
  en: {
    nav: {
      concept: "Concept",
      theory: "Theory",
      publications: "Publications",
      applications: "Applications",
      founder: "Founder",
      contact: "Contact",
    },
    hero: {
      title: "Algorithmic Norms",
      subtitle:
        "Normativity, artificial intelligence, and the reconfiguration of digital procedure",
      lead:
        "A legal theory of algorithmic normativity in digital justice and electronic procedure.",
      cta1: "Read the Theory",
      cta2: "Contact & Partnerships",
      cta3: "Open thesis (UFSC PDF)",
    },
    problem: {
      title: "The scientific problem",
      text: `
Despite the advancements in electronic judicial proceedings, the Judiciary faces a critical paradox: digitalization has not eliminated delays; it has merely transferred them to the digital environment. Today, systems operate predominantly as document repositories, lacking an intelligent comprehension of legal content. Current operating systems fail to address core issues related to: 1) Natural Language: legal texts are replete with ambiguities, contradictions, and critical nuances that remain unperceived by current systems; 2) Clerical Automation: the technological infrastructure requires clear signals to act, without which systems remain entirely dependent on court staff, who consume most of their time performing repetitive tasks. This disconnect generates noise within the judicial system: repetitive manual tasks, triage errors, and a layer of digital bureaucracy that must be purged from the Judicial System. In the electronic process, technical infrastructures, automated workflows, and algorithmic classifications cease to be mere auxiliary instruments and begin to organize institutional operations: they modulate time, priority, and visibility, while enhancing the coordination of procedural acts, leading to greater judicial cognitive domain. This normative layer does not present itself as statutory law or a judicial decision, yet it produces concrete effects on adjudication, clerical activities, and the governance of the justice system. The scientific problem lies in understanding how these normativities emerge and operate, and how they can be diagnosed and governed without rupturing procedural guarantees or the operative closure of the Law. Through second-order algorithmic norms, a new proposal for an effective solution to routine back-office challenges is presented, reaching a new level of efficiency and development for electronic Justice (e-Justice).
`,
      cards: [
        {
          title: "Traditional Dogmatics",
          text: "Classic models with limited explanatory power for technical mediation.",
        },
        {
          title: "Technical Infrastructure",
          text: "Systems, rules and pipelines structuring institutional work.",
        },
        {
          title: "Decision Flows",
          text: "Triage, routing, timing and priorities shaping decisions.",
        },
        {
          title: "Algorithmic Governance",
          text: "Transparency, auditability and responsibility by design.",
        },
      ],
    },
    concept: {
      title: "The concept of Algorithmic Norms",
      text:
        "Algorithmic Norms are non-codified normative patterns embedded in computational systems that guide, condition or constrain institutional practice in digital environments. They are not legal text, yet they generate concrete organizational and procedural effects.",
    },
    secondOrder: {
      title: "Second-Order Algorithmic Norms",
      text:
        "Second-Order Algorithmic Norms emerge as the definitive bridge between judicial decisions and automation. By utilizing cognitive modeling based on Machine Learning, the proposed model diagnoses the linguistic signals within decisions (e.g., service of process orders, amendments, or dismissals); it translates these signals into automated operational commands for the operating system and ensures the operative closure of the Law, maintaining judicial autonomy while automating back-office activities. Algorithmic norms represent an advancement for the Justice system by assigning the algorithm the function of interpreting legal texts and reducing procedural nullities, thereby guaranteeing procedural integrity and efficiency, and overcoming the outdated vision of operating systems as mere document managers.",
      flow: [
        "System Architecture",
        "Flows & Subflows",
        "Classification & Prioritisation",
        "Decision Conditions",
      ],
    },
    foundations: {
      title: "Theoretical foundations",
      pills: [
        "Structural Coupling",
        "Emergent Normativity",
        "Legal Meta-operation",
        "Technology & Law",
      ],
      text:
        "The framework treats law and technical systems as coupled domains: normativity emerges from operational coordination and technology-mediated institutional practice, explaining contemporary courts without reducing the phenomenon to “legal text” or “mere efficiency”.",
    },
    applications: {
      title: "Applications",
      items: [
        { title: "Electronic Procedure", text: "Flow/subflow design with traceability and accountability." },
        { title: "Judicial Governance", text: "Criteria, controls and institutional oversight for automation." },
        { title: "Responsible AI", text: "Auditability, transparency, explainability and normative limits." },
        { title: "Institutional Efficiency", text: "Management improvements aligned with procedural guarantees." },
      ],
    },
    founder: {
      title: "Founder",
      name: "Jefferson Germinari, PhD",
      line1: "Doctor of Law (UFSC)",
      line2: "São Paulo Court of Justice",
      tags: "AI & Law · Digital Justice · Legal Theory",
      links: [
        { label: "Lattes", href: "http://lattes.cnpq.br/5174274917298662" },
        { label: "ORCID", href: "https://orcid.org/0000-0002-3741-5651" },
        { label: "LinkedIn", href: "https://www.linkedin.com/in/jefferson-patrik-germinari-96508765" },
        { label: "Instagram", href: "https://www.instagram.com/jefferson.germinari/" },
      ],
    },
    contact: {
      title: "Contact & Partnerships",
      text:
        "Academic invitations, institutional projects, talks, and scientific cooperation. Send a message describing the context (journal/event/institution/topic).",
      form: {
        name: "Name",
        email: "Email",
        message: "Message",
        send: "Send",
        hint:
          "For real delivery, connect this form to Formspree/Basin (no backend needed).",
      },
    },
    footer:
      "© " +
      new Date().getFullYear() +
      " Algorithmic Norms · A theoretical framework on algorithmic normativity",
  },
} as const;

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-ink">
      {children}
    </h2>
  );
}

function Card({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-2xl bg-white border border-black/5 shadow-sm p-6">
      <div className="text-sm font-semibold text-ink">{title}</div>
      <div className="mt-2 text-sm leading-6 text-slate">{text}</div>
    </div>
  );
}

export default function Page() {
  /**
   * ✅ FIX:
   * - Default is English ("en")
   * - On first load, try to restore from localStorage
   * - If nothing saved, detect browser language (pt -> PT, otherwise EN)
   * - Persist choice on every change
   */
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("lang");
      if (saved === "pt" || saved === "en") {
        setLang(saved);
        return;
      }
      const navLang = (navigator.language || "en").toLowerCase();
      setLang(navLang.startsWith("pt") ? "pt" : "en");
    } catch {
      // If storage is blocked, just keep "en"
      setLang("en");
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("lang", lang);
    } catch {
      // ignore
    }
  }, [lang]);

  const t = useMemo(() => content[lang], [lang]);
  const thesisUrl = "https://tede.ufsc.br/teses/PDPC1861-T.pdf";

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/75 backdrop-blur border-b border-black/5">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-accent/10 border border-accent/15 flex items-center justify-center">
              <div className="h-4 w-4 rounded-md bg-accent" />
            </div>
            <div className="leading-tight">
              <div className="text-sm font-semibold text-ink">
                {lang === "pt" ? "Normas Algorítmicas" : "Algorithmic Norms"}
              </div>
              <div className="text-xs text-slate">normasalgoritmicas.ai</div>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm text-slate">
            <a className="hover:text-ink" href="#concept">{t.nav.concept}</a>
            <a className="hover:text-ink" href="#theory">{t.nav.theory}</a>
            <a className="hover:text-ink" href="#publications">{t.nav.publications}</a>
            <a className="hover:text-ink" href="#applications">{t.nav.applications}</a>
            <a className="hover:text-ink" href="#founder">{t.nav.founder}</a>
            <a className="hover:text-ink" href="#contact">{t.nav.contact}</a>
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setLang("pt")}
              className={cx(
                "px-3 py-1.5 rounded-xl text-sm border transition",
                lang === "pt"
                  ? "bg-accent text-white border-accent"
                  : "bg-white text-slate border-black/10 hover:text-ink"
              )}
              aria-label="Português"
            >
              PT
            </button>
            <button
              onClick={() => setLang("en")}
              className={cx(
                "px-3 py-1.5 rounded-xl text-sm border transition",
                lang === "en"
                  ? "bg-accent text-white border-accent"
                  : "bg-white text-slate border-black/10 hover:text-ink"
              )}
              aria-label="English"
            >
              EN
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <main id="top">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-accent/10 via-white to-surface" />
          <div className="absolute -top-20 -right-24 h-72 w-72 rounded-full bg-accent/10 blur-2xl" />
          <div className="absolute top-44 -left-24 h-72 w-72 rounded-full bg-accent2/10 blur-2xl" />

          <div className="relative mx-auto max-w-6xl px-4 py-16 md:py-24">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-ink">
                {t.hero.title}
              </h1>
              <p className="mt-4 text-lg md:text-xl text-slate">
                {t.hero.subtitle}
              </p>
              <p className="mt-6 text-base md:text-lg leading-7 text-slate">
                {t.hero.lead}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#theory"
                  className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold bg-accent text-white shadow-sm hover:opacity-95 transition"
                >
                  {t.hero.cta1}
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold bg-white text-ink border border-black/10 shadow-sm hover:bg-surface transition"
                >
                  {t.hero.cta2}
                </a>
                <a
                  href={thesisUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold bg-surface text-ink border border-black/10 shadow-sm hover:bg-white transition"
                >
                  {t.hero.cta3}
                </a>
              </div>
            </div>

            {/* Problem cards preview */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-4">
              {t.problem.cards.map((c) => (
                <Card key={c.title} title={c.title} text={c.text} />
              ))}
            </div>
          </div>
        </section>

        {/* Problem */}
        <section className="mx-auto max-w-6xl px-4 py-14">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            <div>
              <SectionTitle>{t.problem.title}</SectionTitle>
              <p className="mt-4 text-base leading-7 text-slate">{t.problem.text}</p>
            </div>
            <div className="rounded-2xl bg-white border border-black/5 shadow-sm p-6">
              <div className="text-sm font-semibold text-ink">
                {lang === "pt" ? "Síntese" : "Summary"}
              </div>
              <ul className="mt-3 space-y-2 text-sm text-slate">
                <li>• {lang === "pt" ? "O técnico organiza o institucional." : "The technical structures the institutional."}</li>
                <li>• {lang === "pt" ? "Fluxos definem condições da decisão." : "Flows define decision conditions."}</li>
                <li>• {lang === "pt" ? "Governança é requisito de legitimidade." : "Governance is a legitimacy requirement."}</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Concept */}
        <section id="concept" className="mx-auto max-w-6xl px-4 py-14">
          <div className="max-w-3xl">
            <SectionTitle>{t.concept.title}</SectionTitle>
            <p className="mt-4 text-base leading-7 text-slate">{t.concept.text}</p>
          </div>
        </section>

        {/* Theory */}
        <section id="theory" className="mx-auto max-w-6xl px-4 py-14">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <SectionTitle>{t.secondOrder.title}</SectionTitle>
              <p className="mt-4 text-base leading-7 text-slate">{t.secondOrder.text}</p>
            </div>

            <div className="rounded-2xl bg-white border border-black/5 shadow-sm p-6">
              <div className="text-sm font-semibold text-ink">
                {lang === "pt" ? "Fluxo (visão macro)" : "Flow (macro view)"}
              </div>
              <div className="mt-4 grid grid-cols-1 gap-3">
                {t.secondOrder.flow.map((step, idx) => (
                  <div key={step} className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-xl bg-accent/10 border border-accent/15 flex items-center justify-center text-sm font-semibold text-accent">
                      {idx + 1}
                    </div>
                    <div className="flex-1 rounded-2xl border border-black/10 bg-surface px-4 py-3 text-sm text-ink">
                      {step}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-10 rounded-2xl bg-white border border-black/5 shadow-sm p-8">
            <SectionTitle>{t.foundations.title}</SectionTitle>
            <div className="mt-5 flex flex-wrap gap-2">
              {t.foundations.pills.map((p) => (
                <span
                  key={p}
                  className="inline-flex items-center rounded-full border border-black/10 bg-surface px-3 py-1 text-sm text-ink"
                >
                  {p}
                </span>
              ))}
            </div>
            <p className="mt-5 text-base leading-7 text-slate">{t.foundations.text}</p>
          </div>
        </section>

        {/* Publications */}
        <section id="publications" className="mx-auto max-w-6xl px-4 py-14">
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <SectionTitle>{t.nav.publications}</SectionTitle>
            <div className="text-sm text-slate">
              {lang === "pt"
                ? "Links oficiais e materiais selecionados."
                : "Official links and selected materials."}
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="rounded-2xl bg-white border border-black/5 shadow-sm p-6">
              <div className="text-sm font-semibold text-ink">
                {lang === "pt" ? "Tese (UFSC)" : "Thesis (UFSC)"}
              </div>
              <div className="mt-2 text-sm leading-6 text-slate">
                {lang === "pt"
                  ? "Acesso ao PDF oficial depositado no repositório da UFSC."
                  : "Access the official PDF deposited in UFSC repository."}
              </div>
              <a
                className="mt-4 inline-flex text-sm font-semibold text-accent hover:underline"
                href={thesisUrl}
                target="_blank"
                rel="noreferrer"
              >
                {lang === "pt" ? "Abrir tese em PDF" : "Open thesis PDF"}
              </a>
            </div>

            <Card
              title={lang === "pt" ? "Artigos derivados" : "Derived papers"}
              text={lang === "pt"
                ? "Cards por artigo: título, revista/ano, PDF/DOI (adicione conforme publicar)."
                : "Per-paper cards: title, venue/year, PDF/DOI (add as you publish)."}
            />
            <Card
              title={lang === "pt" ? "Working papers" : "Working papers"}
              text={lang === "pt"
                ? "Textos em construção, versões e agenda de pesquisa."
                : "Work-in-progress drafts, versions and research agenda."}
            />
          </div>
        </section>

        {/* Applications */}
        <section id="applications" className="mx-auto max-w-6xl px-4 py-14">
          <SectionTitle>{t.applications.title}</SectionTitle>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            {t.applications.items.map((it) => (
              <Card key={it.title} title={it.title} text={it.text} />
            ))}
          </div>
        </section>

        {/* Founder */}
        <section id="founder" className="mx-auto max-w-6xl px-4 py-14">
          <div className="rounded-3xl bg-white border border-black/5 shadow-sm p-8 md:p-10 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-1">
              <div className="relative aspect-square w-full max-w-[260px] overflow-hidden rounded-3xl border border-black/10 bg-white">
                <Image
                  src="/jefferson.jpg"
                  alt="Jefferson Germinari"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            <div className="md:col-span-2">
              <SectionTitle>{t.founder.title}</SectionTitle>
              <div className="mt-3 text-lg font-semibold text-ink">{t.founder.name}</div>
              <div className="mt-1 text-sm text-slate">{t.founder.line1}</div>
              <div className="text-sm text-slate">{t.founder.line2}</div>
              <div className="mt-4 inline-flex flex-wrap gap-2 text-sm text-ink">
                {t.founder.tags.split("·").map((tag) => (
                  <span key={tag} className="rounded-full border border-black/10 bg-surface px-3 py-1">
                    {tag.trim()}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {t.founder.links.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-xl border border-black/10 bg-white px-3 py-2 text-sm text-ink hover:bg-surface transition"
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mx-auto max-w-6xl px-4 py-14">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <SectionTitle>{t.contact.title}</SectionTitle>
              <p className="mt-4 text-base leading-7 text-slate">{t.contact.text}</p>
            </div>

            <form
  action="https://formspree.io/f/xykgdydb"
  method="POST"
  className="rounded-2xl bg-white border border-black/5 shadow-sm p-6"
>
              <label className="block text-sm font-semibold text-ink">
                {t.contact.form.name}
              </label>
              <input
  name="name"
  className="mt-2 w-full rounded-2xl border border-black/10 bg-surface px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-accent/25"
  placeholder={lang === "pt" ? "Seu nome" : "Your name"}
/>

              <label className="mt-4 block text-sm font-semibold text-ink">
                {t.contact.form.email}
              </label>
              <input
  type="email"
  name="email"
  className="mt-2 w-full rounded-2xl border border-black/10 bg-surface px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-accent/25"
  placeholder={lang === "pt" ? "seuemail@exemplo.com" : "you@example.com"}
/>

              <label className="mt-4 block text-sm font-semibold text-ink">
                {t.contact.form.message}
              </label>
              <textarea
  name="message"
  className="mt-2 w-full min-h-[120px] rounded-2xl border border-black/10 bg-surface px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-accent/25"
  placeholder={lang === "pt" ? "Escreva aqui..." : "Write here..."}
/>

              <button
                type="submit"
                className="mt-5 inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold bg-accent text-white shadow-sm hover:opacity-95 transition"
              >
                {t.contact.form.send}
              </button>

              <p className="mt-3 text-xs text-slate">{t.contact.form.hint}</p>
            </form>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-black/5 bg-white">
          <div className="mx-auto max-w-6xl px-4 py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="text-sm text-slate">{t.footer}</div>

            {/* ✅ FIX: Correct labels + correct language toggles */}
            <div className="flex gap-2">
              <button
                onClick={() => setLang("en")}
                className={cx(
                  "px-3 py-1.5 rounded-xl text-sm border transition",
                  lang === "en"
                    ? "bg-accent text-white border-accent"
                    : "bg-white text-slate border-black/10 hover:text-ink"
                )}
              >
                EN
              </button>
              <button
                onClick={() => setLang("pt")}
                className={cx(
                  "px-3 py-1.5 rounded-xl text-sm border transition",
                  lang === "pt"
                    ? "bg-accent text-white border-accent"
                    : "bg-white text-slate border-black/10 hover:text-ink"
                )}
              >
                PT
              </button>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
