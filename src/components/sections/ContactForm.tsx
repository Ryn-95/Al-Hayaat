"use client";

import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/Button";

const requestTypes = [
  "Obsèques musulmanes",
  "Rapatriement de corps",
  "Toilette rituelle (ghusl)",
  "Demande de devis",
  "Renseignements généraux",
  "Autre",
];

export function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    requestType: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.firstName.trim()) newErrors.firstName = "Le prénom est requis";
    if (!formData.lastName.trim()) newErrors.lastName = "Le nom est requis";
    if (!formData.phone.trim()) newErrors.phone = "Le téléphone est requis";
    else if (!/^[\d\s+()-]{8,}$/.test(formData.phone)) newErrors.phone = "Numéro invalide";
    if (!formData.email.trim()) newErrors.email = "L'email est requis";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Email invalide";
    if (!formData.requestType) newErrors.requestType = "Veuillez sélectionner un type";
    if (!formData.message.trim()) newErrors.message = "Le message est requis";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    // In production, this would POST to /api/contact
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-primary-light border border-primary/20 rounded-card p-8 text-center">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#2B6140" strokeWidth="2" className="mx-auto mb-4">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
        <h3 className="font-playfair text-[1.4rem] text-primary mb-2">Message envoyé</h3>
        <p className="font-inter font-light text-text-secondary text-[14px]">
          Nous vous recontactons dans les plus brefs délais.
        </p>
      </div>
    );
  }

  return (
    <form action="https://formsubmit.co/pf.alhayaat@gmail.com" method="POST" className="space-y-5" id="contact-form">
      {/* Honeypot & Config FormSubmit */}
      <input type="hidden" name="_subject" value="Nouveau message depuis le site Al Hayaat" />
      <input type="text" name="_honey" style={{ display: 'none' }} />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_next" value="https://www.pompesfunebres-alhayaat.fr/merci" />
      
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-5">
        <div>
          <label htmlFor="firstName" className="block text-[13px] font-inter font-medium text-text-primary mb-1.5">Prénom</label>
          <input
            id="firstName" name="Prénom" type="text" value={formData.firstName}
            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
            className={`w-full px-4 py-3 md:py-3.5 rounded-button border ${errors.firstName ? "border-red-400" : "border-[rgba(43,97,64,0.15)]"} bg-cream font-inter text-[14px] md:text-[15px] focus:outline-none focus:border-primary transition-colors`}
            placeholder="Votre prénom"
            required
          />
          {errors.firstName && <p className="text-red-500 text-[12px] mt-1">{errors.firstName}</p>}
        </div>
        <div>
          <label htmlFor="lastName" className="block text-[13px] font-inter font-medium text-text-primary mb-1.5">Nom</label>
          <input
            id="lastName" name="Nom" type="text" value={formData.lastName}
            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
            className={`w-full px-4 py-3 md:py-3.5 rounded-button border ${errors.lastName ? "border-red-400" : "border-[rgba(43,97,64,0.15)]"} bg-cream font-inter text-[14px] md:text-[15px] focus:outline-none focus:border-primary transition-colors`}
            placeholder="Votre nom"
            required
          />
          {errors.lastName && <p className="text-red-500 text-[12px] mt-1">{errors.lastName}</p>}
        </div>
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-5">
        <div>
          <label htmlFor="phone" className="block text-[13px] font-inter font-medium text-text-primary mb-1.5">Téléphone</label>
          <input
            id="phone" name="Téléphone" type="tel" value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className={`w-full px-4 py-3 md:py-3.5 rounded-button border ${errors.phone ? "border-red-400" : "border-[rgba(43,97,64,0.15)]"} bg-cream font-inter text-[14px] md:text-[15px] focus:outline-none focus:border-primary transition-colors`}
            placeholder="06 XX XX XX XX"
            required
          />
          {errors.phone && <p className="text-red-500 text-[12px] mt-1">{errors.phone}</p>}
        </div>
        <div>
          <label htmlFor="email" className="block text-[13px] font-inter font-medium text-text-primary mb-1.5">Email</label>
          <input
            id="email" name="email" type="email" value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className={`w-full px-4 py-3 md:py-3.5 rounded-button border ${errors.email ? "border-red-400" : "border-[rgba(43,97,64,0.15)]"} bg-cream font-inter text-[14px] md:text-[15px] focus:outline-none focus:border-primary transition-colors`}
            placeholder="votre@email.com"
            required
          />
          {errors.email && <p className="text-red-500 text-[12px] mt-1">{errors.email}</p>}
        </div>
      </div>
      <div>
        <label htmlFor="requestType" className="block text-[13px] font-inter font-medium text-text-primary mb-1.5">Type de demande</label>
        <select
          id="requestType" name="Type de demande" value={formData.requestType}
          onChange={(e) => setFormData({ ...formData, requestType: e.target.value })}
          className={`w-full px-4 py-3 md:py-3.5 rounded-button border ${errors.requestType ? "border-red-400" : "border-[rgba(43,97,64,0.15)]"} bg-cream font-inter text-[14px] md:text-[15px] focus:outline-none focus:border-primary transition-colors appearance-none`}
          required
        >
          <option value="">Sélectionnez...</option>
          {requestTypes.map((type) => (<option key={type} value={type}>{type}</option>))}
        </select>
        {errors.requestType && <p className="text-red-500 text-[12px] mt-1">{errors.requestType}</p>}
      </div>
      <div>
        <label htmlFor="message" className="block text-[13px] font-inter font-medium text-text-primary mb-1.5">Message</label>
        <textarea
          id="message" name="Message" rows={5} value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className={`w-full px-4 py-3 md:py-3.5 rounded-button border ${errors.message ? "border-red-400" : "border-[rgba(43,97,64,0.15)]"} bg-cream font-inter text-[14px] md:text-[15px] focus:outline-none focus:border-primary transition-colors resize-none`}
          placeholder="Décrivez votre situation ou votre demande..."
          required
        />
        {errors.message && <p className="text-red-500 text-[12px] mt-1">{errors.message}</p>}
      </div>
      <button 
        type="submit" 
        id="contact-submit"
        className="w-full inline-flex items-center justify-center font-medium font-inter transition-all duration-200 bg-primary text-white hover:bg-primary-dark h-14 md:h-12 px-6 rounded-button text-[15px] md:text-[14px] mt-4 md:mt-2 shadow-sm"
      >
        Envoyer le message
      </button>
    </form>
  );
}
