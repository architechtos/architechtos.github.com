
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import { useAuth } from "../contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const Signup = () => {
  const { language, t } = useLanguage();
  const { signup, isLoading } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      toast.error(language === 'en' 
        ? 'Passwords do not match' 
        : 'Passwörter stimmen nicht überein');
      return;
    }
    
    if (formData.password.length < 6) {
      toast.error(language === 'en'
        ? 'Password must be at least 6 characters long'
        : 'Passwort muss mindestens 6 Zeichen lang sein');
      return;
    }
    
    const success = await signup(formData.name, formData.email, formData.password);
    if (success) {
      navigate('/');
    }
  };

  return (
    <div className="container max-w-md mx-auto px-4 py-16">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold mb-2">
          {t("auth.signup")}
        </h1>
        <p className="text-muted-foreground">
          {language === 'en' 
            ? 'Create an account to get started' 
            : 'Erstellen Sie ein Konto, um loszulegen'}
        </p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium">
            {t("auth.name")}
          </label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder={language === 'en' ? 'Enter your full name' : 'Vollständigen Namen eingeben'}
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium">
            {t("auth.email")}
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder={language === 'en' ? 'Enter your email' : 'E-Mail-Adresse eingeben'}
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="password" className="text-sm font-medium">
            {t("auth.password")}
          </label>
          <Input
            id="password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            required
            minLength={6}
            placeholder={language === 'en' ? 'Create a password' : 'Passwort erstellen'}
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="confirmPassword" className="text-sm font-medium">
            {t("auth.confirmPassword")}
          </label>
          <Input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            placeholder={language === 'en' ? 'Confirm your password' : 'Passwort bestätigen'}
          />
        </div>
        
        <Button 
          type="submit" 
          className="w-full bg-tea-600 hover:bg-tea-700"
          disabled={isLoading}
        >
          {isLoading ? (
            <div className="flex items-center">
              <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></span>
              {language === 'en' ? 'Creating account...' : 'Konto erstellen...'}
            </div>
          ) : (
            t("auth.signup")
          )}
        </Button>
        
        <div className="text-center text-sm">
          <p>
            {t("auth.hasAccount")}{" "}
            <Link to="/login" className="text-tea-600 hover:underline">
              {t("auth.login")}
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Signup;
