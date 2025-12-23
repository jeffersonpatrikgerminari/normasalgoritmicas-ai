"use client"

import type React from "react"

import { useState, useEffect, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import {
  BookOpen,
  Brain,
  Scale,
  Linkedin,
  Mail,
  FileText,
  Zap,
  Target,
  GitBranch,
  Shield,
  TrendingUp,
  Building2,
  Lightbulb,
  Instagram,
} from "lucide-react"

type Lang = "en" | "pt"

const content = {
  pt: {
    nav: {
      concept: "Conceito",
      theory: "Teoria",
      applications: "Aplicações",
      founder: "Fundador",
      contact: "Contato",
    },
    hero: {
      title: "NORMAS ALGORÍTMICAS",
      subtitle: "Transformando a Justiça Digital com Normas Algorítmicas",
      lead: "Uma teoria jurídica inovadora que integra Inteligência Artificial aos procedimentos judiciais, mantendo a autonomia judicial e aumentando a eficiência institucional.",
      cta1: "Leia a Teoria",
      cta2: "Contato & Parcerias",
      cta3: "Abrir tese (PDF UFSC)",
    },
    problem: {
      title: "O problema científico",
      text: "Apesar dos avanços no processo judicial eletrônico, o Sistema Judiciário enfrenta um paradoxo crítico: a digitalização não eliminou a morosidade, apenas a transferiu para o ambiente digital. Hoje, os sistemas operam majoritariamente como gestores de documentos, sem uma compreensão inteligente do conteúdo jurídico.",
      text2:
        "Os sistemas operacionais atuais não enfrentam problemas centrais relacionados com: 1) Linguagem Natural: os textos jurídicos são repletos de ambiguidades, contradições e nuances importantes que não são percebidas pelos sistemas atuais; 2) Automação Cartorária: a infraestrutura tecnológica precisa de sinais claros para agir, sem o qual os sistemas ficam totalmente dependentes dos serventuários.",
      text3:
        "No processo eletrônico, infraestruturas técnicas, fluxos automatizados e classificações algorítmicas deixam de ser meros instrumentos auxiliares e passam a organizar o funcionamento institucional: modulam tempo, prioridade, visibilidade e aprimoram a coordenação dos atos processuais.",
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
      text: "Normas Algorítmicas são padrões normativos não positivados, incorporados a sistemas computacionais, que orientam, condicionam ou restringem a atuação institucional no ambiente digital. Não aparecem como texto legal, mas produzem efeitos concretos de organização, priorização e padronização indireta.",
    },
    secondOrder: {
      title: "Normas Algorítmicas de Segundo Grau",
      text: "As Normas Algorítmicas de Segundo Grau surgem como a ponte definitiva entre a decisão judicial e a automação. Ao utilizar modelagem cognitiva baseada em Aprendizado de Máquina, o modelo proposto diagnostica os sinais linguísticos das decisões; traduz esses sinais em comandos operacionais automáticos para o sistema operacional e garante o fechamento operativo do Direito, mantendo a autonomia do juiz enquanto automatiza a atividade-meio.",
      text2:
        "As normas algorítmicas representam um avanço ao sistema de Justiça, atribuindo ao algoritmo a função de interpretar os textos jurídicos e reduzir nulidades processuais, garantindo integridade e eficiência processual.",
      flow: ["Arquitetura do Sistema", "Fluxos e Subfluxos", "Classificação & Priorização", "Condições da Decisão"],
    },
    foundations: {
      title: "Fundamentos teóricos",
      text: "A proposta articula Direito e sistemas técnicos como domínios acoplados: a normatividade emerge de coordenações operacionais e de práticas institucionais mediadas por tecnologia.",
      pills: ["Acoplamento Estrutural", "Normatividade Emergente", "Metaoperação Jurídica", "Tecnologia e Direito"],
    },
    applications: {
      title: "Aplicações Práticas",
      subtitle: "Implementações concretas de Normas Algorítmicas em diferentes dimensões do sistema de justiça",
      items: [
        {
          title: "Processo Eletrônico",
          text: "Desenho de fluxos e subfluxos com rastreabilidade e accountability. Normas algorítmicas estruturam os fluxos processuais, garantindo automação transparente enquanto mantém auditabilidade em cada etapa do processo judicial eletrônico.",
          bullets: [
            "Orquestração automatizada de workflows",
            "Triagem inteligente de petições",
            "Controle de prazos processuais",
            "Rastreabilidade completa de ações",
          ],
        },
        {
          title: "Governança Judicial",
          text: "Critérios, controles e accountability para decisões algorítmicas institucionais. Estruturas de governança que asseguram supervisão humana, transparência e responsabilização na implementação de sistemas automatizados.",
          bullets: [
            "Frameworks de accountability",
            "Auditorias algorítmicas",
            "Protocolos de transparência",
            "Supervisão humana contínua",
          ],
        },
        {
          title: "IA Responsável",
          text: "Auditoria, transparência, explicabilidade e limites normativos para sistemas de IA no contexto judicial. Implementação de princípios éticos e legais em sistemas de inteligência artificial aplicados ao Direito.",
          bullets: [
            "Explicabilidade das decisões",
            "Detecção de viés algorítmico",
            "Conformidade com LGPD",
            "Ética em IA judicial",
          ],
        },
        {
          title: "Eficiência Institucional",
          text: "Otimização de gestão processual sem comprometer garantias. Automação de tarefas cartoriais repetitivas, permitindo que servidores e magistrados se concentrem em atividades de maior valor agregado.",
          bullets: [
            "Redução de tarefas repetitivas",
            "Otimização de recursos humanos",
            "Aceleração processual",
            "Manutenção de garantias processuais",
          ],
        },
      ],
    },
    audiences: {
      title: "Para quem é relevante",
      academia: {
        title: "Academia",
        text: "Pesquisadores em Direito, Ciência da Computação e áreas correlatas encontram aqui um framework teórico robusto para estudar a interseção entre normatividade e tecnologia.",
        cta: "Publicações Científicas",
      },
      tribunals: {
        title: "Tribunais",
        text: "Magistrados e gestores judiciários podem compreender como normas algorítmicas já operam em seus sistemas e como governá-las de forma transparente e responsável.",
        cta: "Implementação Institucional",
      },
      legaltech: {
        title: "LegalTech",
        text: "Empresas de tecnologia jurídica encontram fundamentos teóricos e práticos para desenvolver soluções que respeitam a autonomia do Direito e garantias processuais.",
        cta: "Oportunidades de Parceria",
      },
    },
    founder: {
      title: "Fundador",
      name: "Jefferson Germinari, PhD",
      line1: "Doutor em Direito (UFSC)",
      line2: "Tribunal de Justiça de São Paulo",
      tags: "IA & Direito · Justiça Digital · Teoria Jurídica",
      bio: "Pesquisador líder no campo de Normas Algorítmicas, desenvolvendo teoria jurídica inovadora sobre a intersecção entre inteligência artificial, procedimento judicial e governança algorítmica.",
      links: [
        { label: "Lattes", href: "http://lattes.cnpq.br/5174274917298662" },
        { label: "ORCID", href: "https://orcid.org/0000-0002-3741-5651" },
        { label: "LinkedIn", href: "https://www.linkedin.com/in/jefferson-patrik-germinari-96508765" },
        { label: "Instagram", href: "https://www.instagram.com/jefferson.germinari/" },
      ],
    },
    contact: {
      title: "Contato & Parcerias",
      text: "Convites acadêmicos, projetos institucionais, palestras e cooperação científica. Envie uma mensagem e descreva o contexto.",
      form: {
        name: "Nome",
        email: "E-mail",
        message: "Mensagem",
        send: "Enviar",
        hint: "Clique no botão enviar. Em breve entraremos em contato.",
      },
    },
    footer:
      "© " + new Date().getFullYear() + " Normas Algorítmicas · Um framework teórico sobre normatividade algorítmica",
  },
  en: {
    nav: {
      concept: "Concept",
      theory: "Theory",
      applications: "Applications",
      founder: "Founder",
      contact: "Contact",
    },
    hero: {
      title: "ALGORITHMIC NORMS",
      subtitle: "Transforming Digital Justice with Algorithmic Norms",
      lead: "An innovative legal theory that integrates Artificial Intelligence into judicial procedures, maintaining judicial autonomy and increasing institutional efficiency.",
      cta1: "Read the Theory",
      cta2: "Contact & Partnerships",
      cta3: "Open thesis (UFSC PDF)",
    },
    problem: {
      title: "The scientific problem",
      text: "Despite the advancements in electronic judicial proceedings, the Judiciary faces a critical paradox: digitalization has not eliminated delays; it has merely transferred them to the digital environment. Today, systems operate predominantly as document repositories, lacking an intelligent comprehension of legal content.",
      text2:
        "Current operating systems fail to address core issues related to: 1) Natural Language: legal texts are replete with ambiguities, contradictions, and critical nuances that remain unperceived by current systems; 2) Clerical Automation: the technological infrastructure requires clear signals to act, without which systems remain entirely dependent on court staff.",
      text3:
        "In the electronic process, technical infrastructures, automated workflows, and algorithmic classifications cease to be mere auxiliary instruments and begin to organize institutional operations: they modulate time, priority, and visibility while enhancing the coordination of procedural acts.",
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
      text: "Algorithmic Norms are non-codified normative patterns embedded in computational systems that guide, condition or constrain institutional practice in digital environments. They are not legal text, yet they generate concrete organizational and procedural effects.",
    },
    secondOrder: {
      title: "Second-Order Algorithmic Norms",
      text: "Second-Order Algorithmic Norms emerge as the definitive bridge between judicial decisions and automation. By utilizing cognitive modeling based on Machine Learning, the proposed model diagnoses the linguistic signals within decisions; it translates these signals into automated operational commands for the operating system and ensures the operative closure of the Law, maintaining judicial autonomy while automating back-office activities.",
      text2:
        "Algorithmic norms represent an advancement for the Justice system by assigning the algorithm the function of interpreting legal texts and reducing procedural nullities, ensuring procedural integrity and efficiency.",
      flow: ["System Architecture", "Flows & Subflows", "Classification & Prioritisation", "Decision Conditions"],
    },
    foundations: {
      title: "Theoretical foundations",
      text: "The framework treats law and technical systems as coupled domains: normativity emerges from operational coordination and technology-mediated institutional practice.",
      pills: ["Structural Coupling", "Emergent Normativity", "Legal Meta-operation", "Technology & Law"],
    },
    applications: {
      title: "Practical Applications",
      subtitle: "Concrete implementations of Algorithmic Norms across different dimensions of the justice system",
      items: [
        {
          title: "Electronic Procedure",
          text: "Flow/subflow design with traceability and accountability. Algorithmic norms structure procedural workflows, ensuring transparent automation while maintaining auditability at every stage of the electronic judicial process.",
          bullets: [
            "Automated workflow orchestration",
            "Intelligent petition triage",
            "Procedural deadline control",
            "Complete action traceability",
          ],
        },
        {
          title: "Judicial Governance",
          text: "Criteria, controls and accountability for institutional algorithmic decisions. Governance structures that ensure human oversight, transparency and accountability in the implementation of automated systems.",
          bullets: [
            "Accountability frameworks",
            "Algorithmic audits",
            "Transparency protocols",
            "Continuous human oversight",
          ],
        },
        {
          title: "Responsible AI",
          text: "Audit, transparency, explainability and normative limits for AI systems in the judicial context. Implementation of ethical and legal principles in artificial intelligence systems applied to Law.",
          bullets: [
            "Decision explainability",
            "Algorithmic bias detection",
            "LGPD compliance",
            "Ethics in judicial AI",
          ],
        },
        {
          title: "Institutional Efficiency",
          text: "Process management optimization without compromising guarantees. Automation of repetitive clerical tasks, allowing staff and magistrates to focus on higher-value activities.",
          bullets: [
            "Reduction of repetitive tasks",
            "Human resource optimization",
            "Process acceleration",
            "Maintenance of procedural guarantees",
          ],
        },
      ],
    },
    audiences: {
      title: "Who should care",
      academia: {
        title: "Academia",
        text: "Researchers in Law, Computer Science and related fields find here a robust theoretical framework to study the intersection between normativity and technology.",
        cta: "Scientific Publications",
      },
      tribunals: {
        title: "Courts",
        text: "Magistrates and judicial managers can understand how algorithmic norms already operate in their systems and how to govern them transparently and responsibly.",
        cta: "Institutional Implementation",
      },
      legaltech: {
        title: "LegalTech",
        text: "Legal technology companies find theoretical and practical foundations to develop solutions that respect the autonomy of Law and procedural guarantees.",
        cta: "Partnership Opportunities",
      },
    },
    founder: {
      title: "Founder",
      name: "Jefferson Germinari, PhD",
      line1: "Doctor of Law (UFSC)",
      line2: "São Paulo Court of Justice",
      tags: "AI & Law · Digital Justice · Legal Theory",
      bio: "Leading researcher in the field of Algorithmic Norms, developing innovative legal theory on the intersection between artificial intelligence, judicial procedure and algorithmic governance.",
      links: [
        { label: "Lattes", href: "http://lattes.cnpq.br/5174274917298662" },
        { label: "ORCID", href: "https://orcid.org/0000-0002-3741-5651" },
        { label: "LinkedIn", href: "https://www.linkedin.com/in/jefferson-patrik-germinari-96508765" },
        { label: "Instagram", href: "https://www.instagram.com/jefferson.germinari/" },
      ],
    },
    contact: {
      title: "Contact & Partnerships",
      text: "Academic invitations, institutional projects, lectures and scientific cooperation. Send a message and describe the context.",
      form: {
        name: "Name",
        email: "Email",
        message: "Message",
        send: "Send",
        hint: "Click the send button. We will contact you soon.",
      },
    },
    footer: "© " + new Date().getFullYear() + " Algorithmic Norms · A theoretical framework on algorithmic normativity",
  },
}

export default function Page() {
  const [lang, setLang] = useState<Lang>("en")
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })

  useEffect(() => {
    try {
      const saved = localStorage.getItem("lang")
      if (saved === "pt" || saved === "en") {
        setLang(saved)
        return
      }
      const navLang = (navigator.language || "en").toLowerCase()
      setLang(navLang.startsWith("pt") ? "pt" : "en")
    } catch {
      setLang("en")
    }
  }, [])

  useEffect(() => {
    try {
      localStorage.setItem("lang", lang)
    } catch {
      // ignore
    }
  }, [lang])

  const t = useMemo(() => content[lang], [lang])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    window.location.href = `mailto:contato@algorithmicnorms.net?subject=${lang === "pt" ? "Contato de" : "Contact from"} ${formData.name}&body=${formData.message}%0D%0A%0D%0AE-mail: ${formData.email}`
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2">
            <Brain className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">Algorithmic Norms</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#concept" className="text-sm font-medium hover:text-primary transition-colors">
              {t.nav.concept}
            </a>
            <a href="#theory" className="text-sm font-medium hover:text-primary transition-colors">
              {t.nav.theory}
            </a>
            <a href="#applications" className="text-sm font-medium hover:text-primary transition-colors">
              {t.nav.applications}
            </a>
            <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
              {t.nav.contact}
            </a>
          </nav>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setLang("pt")}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                lang === "pt"
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
              aria-label="Português"
            >
              PT
            </button>
            <button
              onClick={() => setLang("en")}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                lang === "en"
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
              aria-label="English"
            >
              EN
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="container px-4 py-24 md:px-6 md:py-32">
        <div className="mx-auto max-w-5xl text-center space-y-8">
          <Badge variant="outline" className="text-sm">
            {lang === "pt"
              ? "Centro de Estudos sobre Normatividade Algorítmica"
              : "Center for Algorithmic Normativity Studies"}
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-balance">
            {t.hero.title}
          </h1>
          <p className="mx-auto max-w-3xl text-xl text-muted-foreground text-balance">{t.hero.lead}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" asChild>
              <a href="#theory">{t.hero.cta1}</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="https://tede.ufsc.br/teses/PDPC1861-T.pdf" target="_blank" rel="noopener noreferrer">
                <FileText className="mr-2 h-5 w-5" />
                {t.hero.cta3}
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Foundations Overview */}
      <section className="container px-4 py-8 md:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {t.problem.cards.map((card, idx) => (
              <Card key={idx} className="border-2 hover:border-primary/50 transition-colors">
                <CardContent className="p-6 text-center space-y-2">
                  {idx === 0 && <FileText className="h-10 w-10 text-primary mx-auto" />}
                  {idx === 1 && <GitBranch className="h-10 w-10 text-primary mx-auto" />}
                  {idx === 2 && <TrendingUp className="h-10 w-10 text-primary mx-auto" />}
                  {idx === 3 && <Shield className="h-10 w-10 text-primary mx-auto" />}
                  <h3 className="font-bold">{card.title}</h3>
                  <p className="text-sm text-muted-foreground">{card.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Scientific Problem */}
      <section id="theory" className="bg-muted/30 py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-5xl space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">{t.problem.title}</h2>
            </div>

            <Card className="border-2">
              <CardContent className="p-8 space-y-6">
                <p className="text-muted-foreground leading-relaxed">{t.problem.text}</p>
                <p className="text-muted-foreground leading-relaxed">{t.problem.text2}</p>
                <p className="text-muted-foreground leading-relaxed">{t.problem.text3}</p>

                <div className="grid gap-4 sm:grid-cols-2 pt-4">
                  <Card className="bg-primary/5 border-primary/20">
                    <CardContent className="p-6 space-y-2">
                      <Scale className="h-8 w-8 text-primary" />
                      <h4 className="font-semibold">
                        {lang === "pt" ? "Desafio da Linguagem Natural" : "Natural Language Challenge"}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {lang === "pt"
                          ? "Textos jurídicos com ambiguidades, contradições e nuances críticas não percebidas pelos sistemas atuais"
                          : "Legal texts with ambiguities, contradictions, and critical nuances unperceived by current systems"}
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="bg-primary/5 border-primary/20">
                    <CardContent className="p-6 space-y-2">
                      <Zap className="h-8 w-8 text-primary" />
                      <h4 className="font-semibold">
                        {lang === "pt" ? "Gap de Automação Cartorária" : "Clerical Automation Gap"}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {lang === "pt"
                          ? "Infraestrutura técnica dependente de sinais claros, mantendo servidores sobrecarregados com tarefas repetitivas"
                          : "Technical infrastructure dependent on clear signals, keeping staff overwhelmed with repetitive tasks"}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Concept */}
      <section id="concept" className="container px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-5xl space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">{t.concept.title}</h2>
            <p className="mx-auto max-w-3xl text-lg text-muted-foreground text-balance">{t.concept.text}</p>
          </div>

          <Card className="border-2 bg-gradient-to-br from-primary/5 to-background">
            <CardContent className="p-8 space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">{t.secondOrder.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{t.secondOrder.text}</p>
                <p className="text-muted-foreground leading-relaxed">{t.secondOrder.text2}</p>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-3">
                  <h4 className="font-semibold flex items-center gap-2">
                    <Target className="h-5 w-5 text-primary" />
                    {lang === "pt" ? "Inovação Central" : "Core Innovation"}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {lang === "pt"
                      ? "Ponte entre decisões judiciais e automação através de modelagem cognitiva, mantendo autonomia judicial enquanto automatiza atividades-meio"
                      : "Bridges judicial decisions and automation through cognitive modeling, maintaining judicial autonomy while automating back-office activities"}
                  </p>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold flex items-center gap-2">
                    <Brain className="h-5 w-5 text-primary" />
                    {lang === "pt" ? "Abordagem de Machine Learning" : "Machine Learning Approach"}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {lang === "pt"
                      ? "Diagnostica sinais linguísticos nas decisões e os traduz em comandos operacionais automatizados"
                      : "Diagnoses linguistic signals in decisions and translates them into automated operational commands"}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Flow Macro View */}
          <Card className="border-2">
            <CardContent className="p-8 space-y-6">
              <h3 className="text-2xl font-bold text-center">
                {lang === "pt" ? "Fluxo (visão macro)" : "Flow (macro view)"}
              </h3>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {t.secondOrder.flow.map((step, idx) => (
                  <div key={idx} className="space-y-3 text-center">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                      <span className="text-xl font-bold text-primary">{idx + 1}</span>
                    </div>
                    <h4 className="font-semibold">{step}</h4>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Theoretical Foundations */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-5xl space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">{t.foundations.title}</h2>
              <p className="mx-auto max-w-3xl text-lg text-muted-foreground">{t.foundations.text}</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {t.foundations.pills.map((pill, idx) => (
                <Card key={idx}>
                  <CardContent className="p-6 space-y-3">
                    <h4 className="font-semibold">{pill}</h4>
                    <p className="text-sm text-muted-foreground">
                      {lang === "pt"
                        ? idx === 0
                          ? "Direito e sistemas técnicos como domínios acoplados com influência e coordenação mútuas"
                          : idx === 1
                            ? "Normas surgindo da coordenação operacional ao invés de codificação explícita"
                            : idx === 2
                              ? "Operações de segunda ordem que moldam como sistemas jurídicos processam informação"
                              : "Tribunais contemporâneos explicados sem reduzir a 'texto legal' ou 'mera eficiência'"
                        : idx === 0
                          ? "Law and technical systems as coupled domains with mutual influence and coordination"
                          : idx === 1
                            ? "Norms arising from operational coordination rather than explicit codification"
                            : idx === 2
                              ? "Second-order operations that shape how legal systems process information"
                              : "Contemporary courts explained without reducing to 'legal text' or 'mere efficiency'"}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section id="applications" className="container px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-5xl space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">{t.applications.title}</h2>
            <p className="mx-auto max-w-3xl text-lg text-muted-foreground">{t.applications.subtitle}</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {t.applications.items.map((item, idx) => (
              <Card key={idx} className="border-2 hover:border-primary/50 transition-colors hover:shadow-lg">
                <CardContent className="p-8 space-y-4">
                  <div className="flex items-start justify-between">
                    {idx === 0 && <FileText className="h-10 w-10 text-primary" />}
                    {idx === 1 && <Scale className="h-10 w-10 text-primary" />}
                    {idx === 2 && <Brain className="h-10 w-10 text-primary" />}
                    {idx === 3 && <TrendingUp className="h-10 w-10 text-primary" />}
                    <Badge variant="outline">{lang === "pt" ? "Aplicação Principal" : "Core Application"}</Badge>
                  </div>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.text}</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {item.bullets.map((bullet, bidx) => (
                      <li key={bidx} className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Audiences */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-5xl space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">{t.audiences.title}</h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <Card className="border-2 hover:shadow-lg transition-shadow">
                <CardContent className="p-8 space-y-4 text-center">
                  <BookOpen className="h-12 w-12 text-primary mx-auto" />
                  <h3 className="text-xl font-bold">{t.audiences.academia.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{t.audiences.academia.text}</p>
                  <Button variant="outline" className="w-full bg-transparent" asChild>
                    <a href="#contact">{t.audiences.academia.cta}</a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-2 hover:shadow-lg transition-shadow">
                <CardContent className="p-8 space-y-4 text-center">
                  <Building2 className="h-12 w-12 text-primary mx-auto" />
                  <h3 className="text-xl font-bold">{t.audiences.tribunals.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{t.audiences.tribunals.text}</p>
                  <Button variant="outline" className="w-full bg-transparent" asChild>
                    <a href="#contact">{t.audiences.tribunals.cta}</a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-2 hover:shadow-lg transition-shadow">
                <CardContent className="p-8 space-y-4 text-center">
                  <Lightbulb className="h-12 w-12 text-primary mx-auto" />
                  <h3 className="text-xl font-bold">{t.audiences.legaltech.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{t.audiences.legaltech.text}</p>
                  <Button variant="outline" className="w-full bg-transparent" asChild>
                    <a href="#contact">{t.audiences.legaltech.cta}</a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section id="founder" className="container px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-4xl">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">{t.founder.title}</h2>
          </div>

          <Card className="border-2">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                <div className="w-32 h-32 rounded-full overflow-hidden flex-shrink-0 border-4 border-primary/10">
                  <Image
                    src="/images/jefferson.jpg"
                    alt={t.founder.name}
                    width={128}
                    height={128}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="flex-1 space-y-4 text-center md:text-left">
                  <div>
                    <h3 className="text-2xl font-bold">{t.founder.name}</h3>
                    <p className="text-muted-foreground mt-1">{t.founder.line1}</p>
                    <p className="text-muted-foreground">{t.founder.line2}</p>
                  </div>
                  <p className="text-sm text-muted-foreground">{t.founder.tags}</p>
                  <p className="text-muted-foreground leading-relaxed">{t.founder.bio}</p>
                  <div className="flex flex-wrap gap-3 justify-center md:justify-start pt-2">
                    {t.founder.links.map((link) => (
                      <Button key={link.label} variant="outline" size="sm" asChild>
                        <a href={link.href} target="_blank" rel="noopener noreferrer">
                          {link.label === "LinkedIn" && <Linkedin className="mr-2 h-4 w-4" />}
                          {link.label === "Instagram" && <Instagram className="mr-2 h-4 w-4" />}
                          {(link.label === "Lattes" || link.label === "ORCID") && <FileText className="mr-2 h-4 w-4" />}
                          {link.label}
                        </a>
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-muted/30 py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-2xl space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">{t.contact.title}</h2>
              <p className="text-muted-foreground">{t.contact.text}</p>
            </div>

            <Card className="border-2">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="text-sm font-medium">{t.contact.form.name}</label>
                    <Input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="mt-2"
                      placeholder={lang === "pt" ? "Seu nome" : "Your name"}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">{t.contact.form.email}</label>
                    <Input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="mt-2"
                      placeholder={lang === "pt" ? "seuemail@exemplo.com" : "you@example.com"}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">{t.contact.form.message}</label>
                    <Textarea
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="mt-2 min-h-[120px]"
                      placeholder={lang === "pt" ? "Escreva aqui..." : "Write here..."}
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full">
                    <Mail className="mr-2 h-5 w-5" />
                    {t.contact.form.send}
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">{t.contact.form.hint}</p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-background">
        <div className="container px-4 py-8 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">{t.footer}</p>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setLang("pt")}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                  lang === "pt"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                PT
              </button>
              <button
                onClick={() => setLang("en")}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                  lang === "en"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
