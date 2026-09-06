export const defaultLang = "en";

export const languages = {
  de: "Deutsch",
  en: "English",
  zh: "中文",
} as const;

export type Lang = keyof typeof languages;

export const ui = {
  de: {
    nav: {
      home: "Startseite",
      services: "Leistungen",
      cases: "Referenzen",
      about: "Über uns",
      contact: "Kontakt",
    },
    hero: {
      kicker: "Engineering · Industrieservices · Logistik",
      title: "Ihr Partner für Engineering, Industrieservices und Logistik in Deutschland",
      lead: "Die E-Vision GmbH ist ein diversifiziertes Dienstleistungsunternehmen mit Sitz in Willich. Wir arbeiten in energienahen Feldern und Industrieservices und bieten One-Stop-Lösungen für Unternehmen, die in Deutschland und den Nachbarländern Standorte aufbauen oder betreiben.",
      ctaPrimary: "Kontakt aufnehmen",
      ctaSecondary: "Unsere Leistungen",
    },
    stats: [
      { value: "2017", label: "Gegründet in Willich" },
      { value: "4", label: "Geschäftsfelder" },
      { value: "4", label: "Lagerstandorte in Deutschland" },
      { value: "52.000 m²+", label: "Lagerfläche" },
    ],
    services: {
      kicker: "Leistungen",
      title: "Vier Geschäftsfelder, ein Ansprechpartner",
      desc: "Von Energiespeichersystemen über Projekt- und Baumanagement bis zu Beschaffung, Industrieservices und Lagerlogistik.",
      readMore: "Mehr erfahren",
      otherServices: "Weitere Leistungen",
    },
    cases: {
      kicker: "Referenzen",
      title: "Projekte, die für uns sprechen",
      desc: "Ausgewählte Projekte aus unserem Company Profile – von der Lagererschließung bis zur Produktionslinie.",
      all: "Alle Referenzen ansehen",
      client: "Kunde",
      sector: "Branche",
      location: "Standort",
      services: "Leistungen",
      back: "Zurück zu den Referenzen",
    },
    partners: {
      kicker: "Partner",
      title: "Langjährige Partnerschaften",
    },
    cta: {
      title: "Lassen Sie uns über Ihr Projekt sprechen",
      desc: "Ein Ansprechpartner für das ganze Projekt – vor Ort in Deutschland, in Ihrer Sprache und der der Behörden.",
      button: "Jetzt anfragen",
    },
    about: {
      title: "Über uns",
      desc: "E-Vision GmbH – seit 2017 in Willich, Nordrhein-Westfalen.",
      introTitle: "Wer wir sind",
      intro1:
        "Die E-Vision GmbH ist ein diversifiziertes Dienstleistungsunternehmen mit Sitz in Deutschland. Wir arbeiten in energienahen Feldern und Industrieservices und bieten One-Stop-Lösungen für Unternehmen, die in Deutschland und den Nachbarländern Standorte aufbauen oder betreiben.",
      intro2:
        "Mit Branchenerfahrung, einem professionellen Team und praktischem Know-how vor Ort decken wir das gesamte Spektrum ab – von Engineering und Baumanagement über Beschaffung und Industrieservices bis zur Gefahrgutlagerung. Für einen verlässlichen, effizienten Support betreiben wir eigene Lagerstandorte und stellen eigene Serviceteams – vom Staplerfahrer und Montagehelfer bis zum Projektleiter.",
      factsTitle: "Auf einen Blick",
      facts: [
        {
          label: "Was wir tun",
          title: "Engineering, Industrieservices, Personal und Logistik",
          desc: "Energiespeicher, Projekt- und Baumanagement, Beschaffung, Personaldienstleistungen und Gefahrgutlagerung.",
        },
        {
          label: "Wen wir unterstützen",
          title: "Unternehmen, die in Europa aufbauen und produzieren",
          desc: "Hersteller, Energie- und Batterieunternehmen sowie deren Zulieferer in Deutschland und den Nachbarländern.",
        },
        {
          label: "Wie wir arbeiten",
          title: "Deutsch, Englisch und Chinesisch",
          desc: "Ein Ansprechpartner für das ganze Projekt – vor Ort in Deutschland, in der Sprache des Kunden und der Behörden.",
        },
      ],
      valuesTitle: "Warum E-Vision",
      values: [
        {
          title: "Professionelles Team",
          desc: "Ingenieure, Techniker, Projektleiter und Fachkräfte mit langjähriger Erfahrung – und den Sprachen, um mit chinesischen wie deutschen Partnern zu arbeiten.",
        },
        {
          title: "Aktuelle Technologie",
          desc: "Wir verfolgen die technologische Entwicklung der Branche und bringen aktuelle Prozesse und Ausrüstung in jedes Projekt ein.",
        },
        {
          title: "Schnelle Reaktion",
          desc: "Kundenorientiert von der Projektberatung bis zum After-Sales: ein Kontakt, schnelle Antworten, bei Bedarf vor Ort.",
        },
      ],
    },
    contact: {
      title: "Kontakt",
      desc: "Wir freuen uns auf Ihre Anfrage.",
      infoTitle: "So erreichen Sie uns",
      infoText:
        "Schreiben Sie uns über das Formular oder direkt per E-Mail – wir antworten in der Regel innerhalb eines Werktags.",
      registerLabel: "Handelsregister",
      form: {
        name: "Ihr Name",
        email: "E-Mail-Adresse",
        message: "Ihre Nachricht",
        submit: "Nachricht senden",
        sending: "Wird gesendet …",
        errName: "Bitte geben Sie Ihren Namen an.",
        errEmailEmpty: "Bitte geben Sie Ihre E-Mail-Adresse an.",
        errEmailInvalid: "Bitte geben Sie eine gültige E-Mail-Adresse an.",
        errMessage: "Bitte geben Sie eine Nachricht ein.",
        failed: "Etwas ist schiefgelaufen – bitte versuchen Sie es erneut.",
      },
    },
    footer: {
      profile: "Unternehmensprofil (PDF)",
      blurb:
        "Engineering, Industrieservices und Logistik in Deutschland – One-Stop-Lösungen aus einer Hand, seit 2017.",
      services: "Leistungen",
      company: "Unternehmen",
      contact: "Kontakt",
      rights: "Alle Rechte vorbehalten.",
    },
    meta: {
      home: {
        title: "Engineering, Industrieservices & Logistik",
        desc: "E-Vision GmbH, Willich: Energiespeichersysteme, Projekt- und Baumanagement, Beschaffung & Industrieservices, Lagerlogistik – One-Stop-Lösungen für Unternehmen in Deutschland und Europa.",
      },
      services: {
        title: "Leistungen",
        desc: "Vier Geschäftsfelder, ein Ansprechpartner: die Leistungen der E-Vision GmbH im Überblick.",
      },
      cases: {
        title: "Referenzen",
        desc: "Ausgewählte Projekte der E-Vision GmbH – von der Lagererschließung bis zur Produktionslinie.",
      },
      about: {
        title: "Über uns",
        desc: "Die E-Vision GmbH ist ein diversifiziertes Dienstleistungsunternehmen für Engineering, Industrieservices und Logistik mit Sitz in Willich – seit 2017.",
      },
      contact: {
        title: "Kontakt",
        desc: "Nehmen Sie Kontakt mit der E-Vision GmbH auf – wir freuen uns auf Ihre Anfrage.",
      },
    },
    notFound: {
      title: "Seite nicht gefunden",
      desc: "Die angeforderte Seite existiert nicht oder wurde verschoben.",
      home: "Zur Startseite",
    },
  },

  en: {
    nav: {
      home: "Home",
      services: "Services",
      cases: "References",
      about: "About",
      contact: "Contact",
    },
    hero: {
      kicker: "Engineering · Industrial Services · Logistics",
      title: "Your partner for engineering, industrial services and logistics in Germany",
      lead: "E-Vision GmbH is a diversified service company based in Germany. We work in energy-related fields and industrial services, offering one-stop solutions for companies setting up or running operations in Germany and neighbouring countries.",
      ctaPrimary: "Get in touch",
      ctaSecondary: "Our services",
    },
    stats: [
      { value: "2017", label: "Founded in Willich" },
      { value: "4", label: "Business areas" },
      { value: "4", label: "Warehouse locations in Germany" },
      { value: "52,000 m²+", label: "Storage capacity" },
    ],
    services: {
      kicker: "Services",
      title: "Four business areas, one contact",
      desc: "From energy storage systems and project & construction management to procurement, industrial services and warehousing & logistics.",
      readMore: "Learn more",
      otherServices: "Other services",
    },
    cases: {
      kicker: "References",
      title: "Projects that speak for us",
      desc: "Selected projects from our company profile – from warehouse set-up to the production line.",
      all: "View all references",
      client: "Client",
      sector: "Sector",
      location: "Location",
      services: "Services",
      back: "Back to references",
    },
    partners: {
      kicker: "Partners",
      title: "Long-term partnerships",
    },
    cta: {
      title: "Let's talk about your project",
      desc: "One contact for the whole project – on site in Germany, in your language and that of the local authorities.",
      button: "Send an inquiry",
    },
    about: {
      title: "About us",
      desc: "E-Vision GmbH – based in Willich, North Rhine-Westphalia, since 2017.",
      introTitle: "Who we are",
      intro1:
        "E-Vision GmbH is a diversified service company based in Germany. We work in energy-related fields and industrial services, offering one-stop solutions for companies setting up or running operations in Germany and neighbouring countries.",
      intro2:
        "With industry experience, a professional team and practical, on-site know-how, we cover the full range from engineering and construction management to procurement, industrial services and dangerous-goods warehousing. To give customers reliable, efficient support, we operate our own warehousing facilities and dedicated service teams – from forklift operators and assembly workers to project managers.",
      factsTitle: "At a glance",
      facts: [
        {
          label: "What we do",
          title: "Engineering, industrial services, labour and logistics",
          desc: "Energy storage, project and construction management, procurement, labour services and dangerous-goods warehousing.",
        },
        {
          label: "Who we serve",
          title: "Companies building and operating in Europe",
          desc: "Manufacturers, energy and battery companies and their suppliers setting up in Germany and neighbouring countries.",
        },
        {
          label: "How we work",
          title: "German, English and Chinese",
          desc: "One contact for the whole project, on site in Germany, in the language of the customer and the local authorities.",
        },
      ],
      valuesTitle: "Why E-Vision",
      values: [
        {
          title: "Professional team",
          desc: "Engineers, technicians, project managers and skilled workers with deep experience in their fields – and the languages to work with Chinese and German partners alike.",
        },
        {
          title: "Up-to-date technology",
          desc: "We follow the industry's technological development closely and bring current processes and equipment into every project.",
        },
        {
          title: "Responsive service",
          desc: "Customer-centric from project consulting to after-sales: one contact, quick answers, on site when needed.",
        },
      ],
    },
    contact: {
      title: "Contact",
      desc: "We are pleased to receive your inquiry.",
      infoTitle: "How to reach us",
      infoText:
        "Write to us via the form or directly by email – we usually reply within one business day.",
      registerLabel: "Commercial register",
      form: {
        name: "Your name",
        email: "Email address",
        message: "Your message",
        submit: "Send message",
        sending: "Sending …",
        errName: "Please provide your name.",
        errEmailEmpty: "Please provide your email address.",
        errEmailInvalid: "Please provide a valid email address.",
        errMessage: "Please enter your message.",
        failed: "Something went wrong – please try again.",
      },
    },
    footer: {
      profile: "Company Profile (PDF)",
      blurb:
        "Engineering, industrial services and logistics in Germany – one-stop solutions from a single source, since 2017.",
      services: "Services",
      company: "Company",
      contact: "Contact",
      rights: "All rights reserved.",
    },
    meta: {
      home: {
        title: "Engineering, Industrial Services & Logistics",
        desc: "E-Vision GmbH, Willich: energy storage system services, project & construction management, procurement & industrial services, warehousing & logistics – one-stop solutions for companies in Germany and Europe.",
      },
      services: {
        title: "Services",
        desc: "Four business areas, one contact: an overview of E-Vision GmbH's services.",
      },
      cases: {
        title: "References",
        desc: "Selected projects by E-Vision GmbH – from warehouse set-up to the production line.",
      },
      about: {
        title: "About us",
        desc: "E-Vision GmbH is a diversified service company for engineering, industrial services and logistics, based in Willich, Germany – since 2017.",
      },
      contact: {
        title: "Contact",
        desc: "Get in touch with E-Vision GmbH – we look forward to your inquiry.",
      },
    },
    notFound: {
      title: "Page not found",
      desc: "The page you requested does not exist or has been moved.",
      home: "Back to home",
    },
  },

  zh: {
    nav: {
      home: "首页",
      services: "业务领域",
      cases: "项目案例",
      about: "关于我们",
      contact: "联系我们",
    },
    hero: {
      kicker: "工程 · 工业服务 · 物流",
      title: "您在德国的工程、工业服务与物流合作伙伴",
      lead: "E-Vision GmbH 是一家总部位于德国的多元化服务企业，深耕能源相关领域与工业服务，为在德国及周边国家建厂和运营的企业提供一站式解决方案。",
      ctaPrimary: "联系我们",
      ctaSecondary: "了解业务",
    },
    stats: [
      { value: "2017", label: "成立于维利希" },
      { value: "4", label: "大业务板块" },
      { value: "4", label: "德国仓储基地" },
      { value: "52,000 m²+", label: "仓储总面积" },
    ],
    services: {
      kicker: "业务领域",
      title: "四大业务板块，一个对接人",
      desc: "从储能系统、项目与建设管理，到采购与工业服务、仓储物流。",
      readMore: "了解更多",
      otherServices: "其他业务",
    },
    cases: {
      kicker: "项目案例",
      title: "用项目说话",
      desc: "来自公司简介的精选项目——从仓库启用到生产线落地。",
      all: "查看全部案例",
      client: "客户",
      sector: "行业",
      location: "地点",
      services: "涉及业务",
      back: "返回案例列表",
    },
    partners: {
      kicker: "合作伙伴",
      title: "长期共赢的合作关系",
    },
    cta: {
      title: "聊聊您的项目",
      desc: "整个项目一个对接人——驻场德国，用您的语言，也用德国当地机构的语言。",
      button: "立即咨询",
    },
    about: {
      title: "关于我们",
      desc: "E-Vision GmbH——2017 年起立足北威州维利希。",
      introTitle: "我们是谁",
      intro1:
        "E-Vision GmbH 是一家总部位于德国的多元化服务企业。我们深耕能源相关领域与工业服务，为在德国及周边国家建厂和运营的企业提供一站式解决方案。",
      intro2:
        "凭借行业经验、专业团队和贴近现场的实操能力，我们的服务覆盖从工程与建设管理，到采购、工业服务和危险品仓储的全流程。为了给客户提供可靠高效的支持，我们运营自有仓储基地并配备自有服务团队——从叉车司机、装配工到项目经理。",
      factsTitle: "一览",
      facts: [
        {
          label: "我们做什么",
          title: "工程、工业服务、人力与物流",
          desc: "储能系统、项目与建设管理、采购、人力服务与危险品仓储。",
        },
        {
          label: "我们服务谁",
          title: "在欧洲建设与运营的企业",
          desc: "在德国及周边国家落地的制造企业、能源与电池企业及其供应商。",
        },
        {
          label: "我们怎么做",
          title: "德语、英语、中文",
          desc: "整个项目一个对接人，驻场德国，用客户的语言，也用当地机构的语言。",
        },
      ],
      valuesTitle: "为什么选择 E-Vision",
      values: [
        {
          title: "专业团队",
          desc: "工程师、技师、项目经理与技术工人经验深厚——并具备与中德双方伙伴顺畅协作的语言能力。",
        },
        {
          title: "紧跟技术前沿",
          desc: "我们密切关注行业技术发展，把最新的工艺与设备带入每一个项目。",
        },
        {
          title: "响应迅速",
          desc: "从项目咨询到售后全程以客户为中心：一个对接人、快速答复、需要时随时到场。",
        },
      ],
    },
    contact: {
      title: "联系我们",
      desc: "期待收到您的咨询。",
      infoTitle: "联系方式",
      infoText: "通过表单或直接发送邮件联系我们，我们通常在一个工作日内回复。",
      registerLabel: "商业登记号",
      form: {
        name: "您的姓名",
        email: "电子邮箱",
        message: "留言内容",
        submit: "发送消息",
        sending: "发送中……",
        errName: "请填写您的姓名。",
        errEmailEmpty: "请填写您的电子邮箱。",
        errEmailInvalid: "请填写有效的电子邮箱地址。",
        errMessage: "请填写留言内容。",
        failed: "发送失败，请稍后重试。",
      },
    },
    footer: {
      profile: "公司简介（PDF）",
      blurb: "立足德国的工程、工业服务与物流——2017 年至今，一站式交付。",
      services: "业务领域",
      company: "公司",
      contact: "联系方式",
      rights: "保留所有权利。",
    },
    meta: {
      home: {
        title: "工程、工业服务与物流",
        desc: "德国 E-Vision GmbH（维利希）：储能系统服务、项目与建设管理、采购与工业服务、仓储物流——为在德国及欧洲的企业提供一站式解决方案。",
      },
      services: {
        title: "业务领域",
        desc: "四大业务板块，一个对接人：E-Vision GmbH 业务领域总览。",
      },
      cases: {
        title: "项目案例",
        desc: "E-Vision GmbH 精选项目——从仓库启用到生产线落地。",
      },
      about: {
        title: "关于我们",
        desc: "E-Vision GmbH 是一家位于德国维利希的工程、工业服务与物流多元化服务企业，成立于 2017 年。",
      },
      contact: {
        title: "联系我们",
        desc: "联系 E-Vision GmbH，期待您的咨询。",
      },
    },
    notFound: {
      title: "页面不存在",
      desc: "您访问的页面不存在或已被移动。",
      home: "返回首页",
    },
  },
} as const;
