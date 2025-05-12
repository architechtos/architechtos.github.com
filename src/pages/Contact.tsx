
import { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const { language, t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    toast.success(language === 'en' 
      ? "Message sent successfully! We'll get back to you soon." 
      : "Nachricht erfolgreich gesendet! Wir werden uns bald bei Ihnen melden.");
    setFormData({
      name: "",
      email: "",
      message: ""
    });
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-2">
        {t("contact.title")}
      </h1>
      <p className="text-lg text-muted-foreground mb-12">
        {t("contact.subtitle")}
      </p>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Contact Information */}
        <div className="lg:col-span-1">
          <div className="bg-tea-50 p-6 rounded-lg h-full">
            <h2 className="text-xl font-semibold mb-6">
              {language === 'en' ? 'Contact Information' : 'Kontaktinformationen'}
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="text-tea-600 mr-3 mt-1" size={20} />
                <div>
                  <h3 className="font-medium text-sm text-muted-foreground mb-1">
                    {t("contact.address")}
                  </h3>
                  <p>123 Tea Garden Lane</p>
                  <p>Tea Valley, GR 12345</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="text-tea-600 mr-3 mt-1" size={20} />
                <div>
                  <h3 className="font-medium text-sm text-muted-foreground mb-1">
                    {t("contact.phone")}
                  </h3>
                  <p>+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="text-tea-600 mr-3 mt-1" size={20} />
                <div>
                  <h3 className="font-medium text-sm text-muted-foreground mb-1">
                    {t("contact.email")}
                  </h3>
                  <p>info@leafytea.com</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-tea-100">
              <h3 className="font-medium mb-4">
                {language === 'en' ? 'Business Hours' : 'Geschäftszeiten'}
              </h3>
              <div className="space-y-2 text-sm">
                <p className="flex justify-between">
                  <span>{language === 'en' ? 'Monday - Friday' : 'Montag - Freitag'}</span>
                  <span>9:00 - 18:00</span>
                </p>
                <p className="flex justify-between">
                  <span>{language === 'en' ? 'Saturday' : 'Samstag'}</span>
                  <span>10:00 - 16:00</span>
                </p>
                <p className="flex justify-between">
                  <span>{language === 'en' ? 'Sunday' : 'Sonntag'}</span>
                  <span>{language === 'en' ? 'Closed' : 'Geschlossen'}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Contact Form */}
        <div className="lg:col-span-2">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  {t("contact.form.name")}
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  {t("contact.form.email")}
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                {t("contact.form.message")}
              </label>
              <Textarea
                id="message"
                name="message"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                required
                className="resize-none"
              />
            </div>
            
            <div>
              <Button 
                type="submit" 
                className="bg-tea-600 hover:bg-tea-700 px-6"
              >
                {t("contact.form.submit")}
              </Button>
            </div>
          </form>
          
          {/* Map Placeholder */}
          <div className="mt-12 rounded-lg overflow-hidden h-64 bg-tea-50 border border-tea-100 flex items-center justify-center">
            <div className="text-tea-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <p className="text-center mt-2">
                {language === 'en' ? 'Map Placeholder' : 'Kartenplatzhalter'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
