/**
 * Luxury Odonto — Centralized site content
 * Source: Brand briefing (10/08/2026) + official company data
 */

export const site = {
  name: "Luxury Odonto",
  legalName: "Instituto Odontológico Luxury LTDA",
  fantasyNames: ["LUXURY Odonto", "Luxury Odontologia", "Odonto Luxury"],
  tagline: "Especialistas em transformar vidas através de sorrisos",
  concept:
    "O luxo está no abraço, no acolhimento, na sinceridade e no carinho. Odontologia humanizada com excelência técnica no coração do Estreito.",
  founded: "20 de agosto de 2020",
  address: {
    street: "Rua Souza Dutra, 145 — Loja 02",
    district: "Estreito",
    city: "Florianópolis",
    state: "SC",
    cep: "88070-605",
    full: "Rua Souza Dutra, 145 — Loja 02, Estreito, Florianópolis/SC — CEP 88070-605",
  },
  contact: {
    phone: "(48) 3054-5586",
    phoneHref: "tel:+554830545586",
    whatsapp: "(48) 9130-2547",
    whatsappNumber: "554891302547",
    email: "contato@odontoluxury.com.br",
    emailHref: "mailto:contato@odontoluxury.com.br",
    website: "https://odontoluxury.com.br",
  },
  social: {
    instagram: "https://instagram.com/luxuryodontologia",
    instagramHandle: "@luxuryodontologia",
    facebook: "https://facebook.com/luxuryodontologia",
    google: "https://g.page/luxury-odonto",
  },
  ratings: {
    google: "5.0",
    reviewsCount: 5,
  },
  hours: [
    { day: "Segunda a Sexta", time: "08h00 — 19h00" },
    { day: "Sábado", time: "08h00 — 12h00" },
    { day: "Domingo e feriados", time: "Fechado" },
  ],
  cro: "CRO/SC 14.561 — Dr. Thiago Villela Barletta",
  cnpj: "38.168.880/0001-82",
  parking: {
    title: "Estacionamento gratuito conveniado",
    description:
      "Entrada pela Rua Marechal Hermes, próxima à clínica. Cortesia exclusiva para pacientes Luxury.",
  },
} as const;

/** WhatsApp deep-links with pre-filled messages */
export const whatsappLinks = {
  geral:
    "https://wa.me/554891302547?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o.",
  implantes:
    "https://wa.me/554891302547?text=Ol%C3%A1!%20Tenho%20interesse%20em%20implantes%20dent%C3%A1rios.",
  lentes:
    "https://wa.me/554891302547?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20lentes%20de%20contato%20dental%20(Natural%20Lux).",
  invisalign:
    "https://wa.me/554891302547?text=Ol%C3%A1!%20Tenho%20interesse%20em%20Invisalign.",
  clareamento:
    "https://wa.me/554891302547?text=Ol%C3%A1!%20Quero%20saber%20mais%20sobre%20clareamento%20dental.",
  harmonizacao:
    "https://wa.me/554891302547?text=Ol%C3%A1!%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20harmoniza%C3%A7%C3%A3o%20orofacial.",
  odontopediatria:
    "https://wa.me/554891302547?text=Ol%C3%A1!%20Quero%20agendar%20uma%20consulta%20para%20meu(a)%20filho(a).",
} as const;

export type ServiceCategory = {
  id: string;
  name: string;
  tagline: string;
  icon: string;
  services: { name: string; description: string }[];
};

export const serviceCategories: ServiceCategory[] = [
  {
    id: "implantes",
    name: "Implantes e Próteses",
    tagline: "Reconstrução completa do seu sorriso",
    icon: "Anchor",
    services: [
      { name: "Implantes Unitários", description: "Substituição de um único dente com naturalidade." },
      { name: "Implantes 2×3", description: "Solução para perda de dois ou mais dentes adjacentes." },
      { name: "Implantes Zigomáticos", description: "Para pacientes com falta de osso maxilar." },
      { name: "Implantes de Carga Imediata", description: "Prótese provisória em até 7 dias." },
      { name: "Prótese Protocolo", description: "Perda total ou quase total — reabilitação completa." },
      { name: "Próteses Fixas e Removíveis", description: "Coroas, pontes e dentaduras sob medida." },
    ],
  },
  {
    id: "ortodontia",
    name: "Ortodontia",
    tagline: "Alinhamento discreto e eficaz",
    icon: "AlignCenterHorizontal",
    services: [
      { name: "Ortodontia Convencional", description: "Aparelho fixo tradicional com resultados comprovados." },
      { name: "Invisalign®", description: "Alinhadores transparentes — os mais avançados do mundo, com escaneamento digital." },
    ],
  },
  {
    id: "estetica",
    name: "Estética Odontológica",
    tagline: "A técnica proprietária Natural Lux®",
    icon: "Sparkles",
    services: [
      { name: "Lentes de Contato Dental — Natural Lux®", description: "Técnica própria: resina sem anestesia, sem desgaste, reversível, em uma única sessão." },
      { name: "Lentes em Porcelana", description: "Alta durabilidade e translucidez natural." },
      { name: "Facetas Dentárias", description: "Porcelana ou resina, conforme indicação clínica." },
      { name: "Clareamento no Consultório", description: "Peroxido de hidrogênio com ativação LED/laser." },
      { name: "Clareamento Caseiro Supervisionado", description: "Moldeiras + peróxido de carbamida com acompanhamento." },
      { name: "Contorno Gengival", description: "Remodelação da gengiva para um sorriso harmonioso." },
    ],
  },
  {
    id: "harmonizacao",
    name: "Harmonização Orofacial",
    tagline: "Equilíbrio entre estética e expressão",
    icon: "Smile",
    services: [
      { name: "Preenchimento Facial Estético", description: "Harmonização delicada com foco em naturalidade." },
    ],
  },
  {
    id: "preventivo",
    name: "Restauradores e Preventivos",
    tagline: "Saúde bucal como prioridade",
    icon: "ShieldCheck",
    services: [
      { name: "Restaurações (Obturações)", description: "Resina composta com acabamento imperceptível." },
      { name: "Tratamento de Canal (Endodontia)", description: "Técnica indolor com tecnologia moderna." },
      { name: "Coroas Dentárias", description: "Reabilitação estrutural com materiais nobres." },
      { name: "Limpeza Dental (Profilaxia)", description: "Recomendada a cada 6 meses para saúde preventiva." },
      { name: "Aplicação de Flúor e Selantes", description: "Proteção extra para adultos e crianças." },
    ],
  },
  {
    id: "cirurgias",
    name: "Cirurgias e Especialidades",
    tagline: "Atendimento completo para toda a família",
    icon: "Stethoscope",
    services: [
      { name: "Extrações Dentárias", description: "Inclusive sisos, com técnica minimamente invasiva." },
      { name: "Cirurgia Periodontal e de Implantes", description: "Procedimentos especializados in-house." },
      { name: "Odontopediatria", description: "Crianças e adolescentes com sedação medicamentosa e óxido nitroso." },
      { name: "Luxury Day", description: "Tratamento intensivo de um dia — diferencial exclusivo Luxury." },
    ],
  },
];

export type TeamMember = {
  name: string;
  shortName: string;
  specialty: string;
  cro: string;
  initials: string;
  bio: string;
  highlight: string;
  whatsapp?: string;
};

export const team: TeamMember[] = [
  {
    name: "Dr. Thiago Villela Barletta",
    shortName: "Dr. Thiago",
    specialty: "Implantodontia e Prótese",
    cro: "CRO-SC 14.561",
    initials: "TT",
    highlight: "Responsável Técnico",
    bio: "Nascido em Carmo de Minas (MG), formado pela FEAD (Belo Horizonte) em 2011. Especialista em Implante e Prótese com ênfase em Periodontia pela FACSETE (2013). Fundador do conceito Luxury — clínica focada em atender o paciente desgastado pelos traumas de gerações em odontologia, transformando a experiência em algo amável e agradável.",
  },
  {
    name: "Dra. Angela Bez",
    shortName: "Dra. Angela",
    specialty: "Ortodontia / Invisalign",
    cro: "CRO-SC 13.987",
    initials: "AB",
    highlight: "Invisalign Doctor",
    bio: "Nascida em Urussanga (SC), formada pela UNISUL (2015), especialista em Ortodontia pela FACSET (2019). Invisalign Doctor credenciada pela Align Technology. Premissa: prestar o serviço que gostaria de receber como paciente, com dever de informação ao paciente.",
    whatsapp: whatsappLinks.invisalign,
  },
  {
    name: "Dr. Walter Gastardi de Castro",
    shortName: "Dr. Walter",
    specialty: "Clínico Geral, Dentística e HOF",
    cro: "CRO-SC 20.157",
    initials: "WG",
    highlight: "Harmonização Orofacial",
    bio: "Nascido em Ipuã (SP). Graduado pela Faculdade de Barretos (2016). Especialização em Dentística pela Visage Odontologia (Uberlândia, 2018) e Business and Dental (Santa Maria, 2019). Capacitação avançada em Harmonização Orofacial pela Sobresp. Atua com facetas em resina, harmonização facial e clínico geral.",
  },
  {
    name: "Dra. Natália Medella",
    shortName: "Dra. Natália",
    specialty: "Endodontia (Tratamento de Canal)",
    cro: "CRO-SC 12.420",
    initials: "NM",
    highlight: "Especialista em Endodontia",
    bio: "Nascida em Florianópolis. Formada pela UFPR (2010), especialista em Endodontia pela FUNORTE (2012). Lida diariamente com a dor do paciente e defende atendimento humanizado com todas as dúvidas sanadas antes do procedimento.",
  },
  {
    name: "Dra. Mariana Perini Zendron",
    shortName: "Dra. Mariana",
    specialty: "Odontopediatria",
    cro: "CRO-SC 16.792",
    initials: "MZ",
    highlight: "Odontopediatria",
    bio: "Nascida em Joinville, mora em Florianópolis. Formada pela UFSC (2018). Especialista em Odontopediatria pelo CEOI. Aperfeiçoamento em Ortopedia Funcional dos Maxilares. Habilitação em sedação medicamentosa e óxido nitroso. Atendimento humanizado para gestantes, bebês, crianças e adolescentes.",
    whatsapp: whatsappLinks.odontopediatria,
  },
];

export type Testimonial = {
  name: string;
  initials: string;
  source: string;
  text: string;
  highlight: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Marcos Ramos",
    initials: "MR",
    source: "Google Reviews",
    highlight: "Profissionalismo e carinho",
    text: "Tive uma experiência excelente na LUXURY Odontologia! Desde o momento em que cheguei, já fui muito bem recebido — a equipe da recepção é super simpática, atenciosa e faz você se sentir à vontade logo de cara. O ambiente da clínica é moderno, organizado e transmite muita confiança. Fui atendido pelo Dr. Thiago, e só tenho elogios! Ele é extremamente profissional, cuidadoso e explica tudo com muita paciência e clareza, o que faz toda a diferença pra quem, como eu, às vezes fica um pouco apreensivo ao ir ao dentista. Saí de lá me sentindo realmente bem, com a sensação de que fui cuidado com carinho e profissionalismo.",
  },
  {
    name: "Tatiane Moraes Garcez",
    initials: "TG",
    source: "Google Reviews",
    highlight: "Diferenciais nos detalhes",
    text: "Na Luxury os diferenciais estão nos detalhes, desde o cuidado com o ambiente (lindo, limpo e acolhedor) até o atendimento com os especialistas, sempre com bom humor, ética e profissionalismo. Uma equipe especializada e muito competente.",
  },
  {
    name: "Lucia Teles",
    initials: "LT",
    source: "Google Reviews — paciente estrangeira",
    highlight: "Atendimento bilíngue",
    text: "Sou estrangeira e fui recebida de forma extremamente acolhedora. Apesar de ainda não falar a língua, os médicos se comunicaram comigo fluentemente em inglês e também utilizaram um tradutor para explicar todas as informações no meu idioma nativo com clareza. Profissionais de nível mundial, que além de um excelente resultado, demonstram verdadeira atenção e compreensão com o paciente. Depois de ter ficado com medo por causa de uma experiência negativa em outra clínica, toda a equipe me tranquilizou, me apoiou e conseguimos continuar o tratamento em um ambiente calmo e confortável.",
  },
];

export type FaqItem = {
  question: string;
  answer: string;
};

export const faqItems: FaqItem[] = [
  {
    question: "A Luxury Odonto atende pacientes estrangeiros ou turistas?",
    answer:
      "Sim. Atendimento bilíngue (português e inglês) é um dos nossos diferenciais competitivos. Nossa equipe se comunica fluentemente em inglês e utilizamos tradutores quando necessário, garantindo clareza total sobre o tratamento para pacientes do mundo todo que visitam Florianópolis.",
  },
  {
    question: "O que é a técnica Natural Lux®?",
    answer:
      "Natural Lux® é uma técnica proprietária da Luxury Odonto para lentes de contato dental em resina. É realizada sem anestesia, sem desgaste dental, é totalmente reversível e pode ser concluída em uma única sessão. Oferece resultado natural e durável, preservando a estrutura original dos dentes.",
  },
  {
    question: "Vocês oferecem estacionamento?",
    answer:
      "Sim. Oferecemos estacionamento gratuito conveniado para nossos pacientes, com entrada pela Rua Marechal Hermes, próxima à clínica. Este é um diferencial competitivo raro entre clínicas odontológicas em Florianópolis.",
  },
  {
    question: "Como funciona o agendamento?",
    answer:
      "O agendamento é feito diretamente via WhatsApp, pelo telefone fixo ou pelo formulário no site. Nossa recepção (Kary) responde rapidamente e encontra o melhor horário para você. A primeira consulta é uma avaliação completa com um de nossos especialistas.",
  },
  {
    question: "Quais formas de pagamento são aceitas?",
    answer:
      "Trabalhamos com particulares, convênios e oferecemos condições especiais para tratamentos extensos. Durante a primeira avaliação, apresentamos um plano de tratamento transparente com todas as opções de pagamento — sempre com dever de informação ao paciente.",
  },
  {
    question: "Vocês atendem crianças?",
    answer:
      "Sim. A Dra. Mariana Perini Zendron é nossa especialista em Odontopediatria, com habilitação em sedação medicamentosa e óxido nitroso. Atendemos gestantes, bebês, crianças e adolescentes em um ambiente calmo e acolhedor, pensado para quebrar o medo histórico de dentista desde cedo.",
  },
  {
    question: "Os implantes podem ser colocados com carga imediata?",
    answer:
      "Em casos selecionados, sim. A carga imediata permite a colocação de uma prótese provisória em até 7 dias após o procedimento cirúrgico. Esta opção depende da qualidade óssea e das condições clínicas do paciente, avaliadas pelo Dr. Thiago durante a consulta inicial.",
  },
  {
    question: "Qual a diferença entre Invisalign e aparelho fixo convencional?",
    answer:
      "O Invisalign utiliza alinhadores transparentes removíveis, praticamente invisíveis, com escaneamento digital 3D para planejamento preciso. É a tecnologia mais avançada do mundo em ortodontia. A Dra. Angela Bez é Invisalign Doctor credenciada pela Align Technology e avalia caso a caso qual a melhor indicação.",
  },
];

export const pillars = [
  {
    icon: "Heart",
    title: "Acolhimento humano",
    description:
      "Quebramos o trauma histórico de gerações com dentista, transformando o atendimento em uma experiência amável. O luxo está no abraço, na sinceridade e no carinho — não na ostentação.",
  },
  {
    icon: "Award",
    title: "Excelência técnica",
    description:
      "Cinco especialistas in-house com CROs ativos e formação contínua. Não terceirizamos: cada profissional é parte da família Luxury, comprometido com resultados de alto nível.",
  },
  {
    icon: "Cpu",
    title: "Tecnologia de ponta",
    description:
      "Moldagem digital, Invisalign, escaneamento 3D e equipamentos modernos para diagnóstico e tratamento. Tecnologia a serviço do seu conforto e da precisão clínica.",
  },
];

export const differentials = [
  {
    icon: "Car",
    title: "Estacionamento gratuito",
    description:
      "Conveniado com entrada pela Rua Marechal Hermes. Raro em Florianópolis — nosso presente para você chegar e sair sem preocupação.",
  },
  {
    icon: "Sparkles",
    title: "Técnica Natural Lux®",
    description:
      "Lentes em resina sem desgaste dental, sem anestesia, reversíveis e em uma única sessão. Método proprietário registrado pela Luxury.",
  },
  {
    icon: "Languages",
    title: "Atendimento bilíngue",
    description:
      "Equipe que fala inglês fluentemente, atendendo estrangeiros e turistas em Florianópolis. Informação clara no seu idioma.",
  },
  {
    icon: "Users",
    title: "5 especialistas in-house",
    description:
      "Equipe completa sem terceirização. Implantes, ortodontia, endodontia, estética e odontopediatria sob o mesmo teto.",
  },
  {
    icon: "Star",
    title: "Avaliação máxima no Google",
    description:
      "5.0 estrelas com depoimentos espontâneos de pacientes reais. Paciência com medo, profissionalismo técnico e ambiente acolhedor.",
  },
];

export const navItems = [
  { label: "Sobre", href: "#sobre" },
  { label: "Especialidades", href: "#especialidades" },
  { label: "Equipe", href: "#equipe" },
  { label: "Localização", href: "#localizacao" },
  { label: "Contato", href: "#contato" },
];

/** Simplified nav structure with dropdown for "A Luxury" group */
export const navStructure = {
  primary: [
    { label: "A Luxury", isDropdown: true, items: [
      { label: "Sobre nós", href: "#sobre", description: "Conheça nossa história e pilares" },
      { label: "Diferenciais", href: "#diferenciais", description: "O que torna a Luxury única" },
      { label: "Equipe", href: "#equipe", description: "Nossos 5 especialistas" },
      { label: "Depoimentos", href: "#depoimentos", description: "Histórias de pacientes reais" },
    ]},
    { label: "Tratamentos", isDropdown: true, items: [
      { label: "Todas as especialidades", href: "#especialidades", description: "12 tratamentos em 6 categorias" },
      { label: "Natural Lux®", href: "#natural-lux", description: "Técnica proprietária de lentes" },
      { label: "Implantes e Próteses", href: "#especialidades", description: "Reabilitação completa" },
      { label: "Invisalign®", href: "#especialidades", description: "Alinhadores transparentes" },
      { label: "Estética e Clareamento", href: "#especialidades", description: "Sorrisos harmônicos" },
    ]},
    { label: "Visite", isDropdown: true, items: [
      { label: "Localização", href: "#localizacao", description: "Estreito, Florianópolis" },
      { label: "Horários", href: "#localizacao", description: "Seg–Sex 8h–19h, Sáb 8h–12h" },
      { label: "Dúvidas frequentes", href: "#faq", description: "Perguntas e respostas" },
      { label: "Fale conosco", href: "#contato", description: "WhatsApp, telefone e formulário" },
    ]},
  ],
};
