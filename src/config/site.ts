// Zentrale Stammdaten der Firma – Quelle: Company Profile 2026 (EVISION-INFO-2026.pdf)
export const site = {
  name: "E-Vision GmbH",
  domain: "https://www.e-vision-service.com",
  email: "y.ma@e-vision-service.com",
  contactPerson: "Yitao Ma",
  founded: 2017,
  registerNo: "HRB 18101",
  taxNo: "122/5719/5451",
  address: {
    street: "Linsellesstraße 142-156",
    zip: "47877",
    city: "Willich",
    country: "Deutschland",
  },
} as const;

export const addressLine = `${site.address.street}, ${site.address.zip} ${site.address.city}, ${site.address.country}`;
