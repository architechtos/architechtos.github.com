
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'de';

type LocalizedContent = {
  en: Record<string, string>;
  de: Record<string, string>;
};

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const translations: LocalizedContent = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.shop": "Shop",
    "nav.contact": "Contact",
    "nav.forum": "Forum",
    "nav.login": "Login",
    "nav.signup": "Sign Up",
    "nav.cart": "Cart",
    "nav.logout": "Logout",
    
    // Home Page
    "home.welcome": "Welcome to LeafyTea",
    "home.subtitle": "Discover our premium organic teas",
    "home.featured": "Featured Products",
    "home.about": "About Us",
    "home.about.text": "At LeafyTea, we source the finest organic teas from around the world. Our commitment to quality and sustainability ensures that every cup you brew is not only delicious but also ethically produced.",
    
    // Products
    "product.addToCart": "Add to Cart",
    "product.details": "View Details",
    "product.price": "Price",
    "product.quantity": "Quantity",
    
    // Contact
    "contact.title": "Get in Touch",
    "contact.subtitle": "We'd love to hear from you",
    "contact.form.name": "Your Name",
    "contact.form.email": "Email Address",
    "contact.form.message": "Message",
    "contact.form.submit": "Send Message",
    "contact.address": "Address",
    "contact.phone": "Phone",
    "contact.email": "Email",
    
    // Forum
    "forum.title": "Customer Forum",
    "forum.subtitle": "Ask questions and share your experiences",
    "forum.newPost": "New Post",
    "forum.search": "Search Topics",
    "forum.uploadImage": "Upload Image",
    "forum.post": "Post",
    "forum.cancel": "Cancel",
    "forum.question": "Your Question",
    
    // Auth
    "auth.login": "Log In",
    "auth.signup": "Sign Up",
    "auth.email": "Email",
    "auth.password": "Password",
    "auth.confirmPassword": "Confirm Password",
    "auth.name": "Full Name",
    "auth.forgotPassword": "Forgot password?",
    "auth.noAccount": "Don't have an account?",
    "auth.hasAccount": "Already have an account?",
    
    // Cart
    "cart.title": "Your Cart",
    "cart.empty": "Your cart is empty",
    "cart.total": "Total",
    "cart.checkout": "Checkout",
    "cart.continue": "Continue Shopping",
    "cart.remove": "Remove"
  },
  de: {
    // Navigation
    "nav.home": "Startseite",
    "nav.shop": "Shop",
    "nav.contact": "Kontakt",
    "nav.forum": "Forum",
    "nav.login": "Anmelden",
    "nav.signup": "Registrieren",
    "nav.cart": "Warenkorb",
    "nav.logout": "Abmelden",
    
    // Home Page
    "home.welcome": "Willkommen bei LeafyTea",
    "home.subtitle": "Entdecken Sie unsere Premium Bio-Tees",
    "home.featured": "Empfohlene Produkte",
    "home.about": "Über Uns",
    "home.about.text": "Bei LeafyTea beziehen wir die feinsten Bio-Tees aus der ganzen Welt. Unser Engagement für Qualität und Nachhaltigkeit stellt sicher, dass jede Tasse, die Sie aufbrühen, nicht nur köstlich, sondern auch ethisch hergestellt ist.",
    
    // Products
    "product.addToCart": "In den Warenkorb",
    "product.details": "Details anzeigen",
    "product.price": "Preis",
    "product.quantity": "Menge",
    
    // Contact
    "contact.title": "Kontaktieren Sie uns",
    "contact.subtitle": "Wir freuen uns von Ihnen zu hören",
    "contact.form.name": "Ihr Name",
    "contact.form.email": "E-Mail-Adresse",
    "contact.form.message": "Nachricht",
    "contact.form.submit": "Nachricht senden",
    "contact.address": "Adresse",
    "contact.phone": "Telefon",
    "contact.email": "E-Mail",
    
    // Forum
    "forum.title": "Kunden-Forum",
    "forum.subtitle": "Stellen Sie Fragen und teilen Sie Ihre Erfahrungen",
    "forum.newPost": "Neuer Beitrag",
    "forum.search": "Themen durchsuchen",
    "forum.uploadImage": "Bild hochladen",
    "forum.post": "Veröffentlichen",
    "forum.cancel": "Abbrechen",
    "forum.question": "Ihre Frage",
    
    // Auth
    "auth.login": "Anmelden",
    "auth.signup": "Registrieren",
    "auth.email": "E-Mail",
    "auth.password": "Passwort",
    "auth.confirmPassword": "Passwort bestätigen",
    "auth.name": "Vollständiger Name",
    "auth.forgotPassword": "Passwort vergessen?",
    "auth.noAccount": "Noch kein Konto?",
    "auth.hasAccount": "Bereits ein Konto?",
    
    // Cart
    "cart.title": "Ihr Warenkorb",
    "cart.empty": "Ihr Warenkorb ist leer",
    "cart.total": "Gesamtsumme",
    "cart.checkout": "Zur Kasse",
    "cart.continue": "Weiter Einkaufen",
    "cart.remove": "Entfernen"
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage === 'en' || savedLanguage === 'de') {
      setLanguage(savedLanguage);
    } else {
      // Try to detect browser language
      const browserLang = navigator.language.split('-')[0];
      if (browserLang === 'de') {
        setLanguage('de');
      }
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
