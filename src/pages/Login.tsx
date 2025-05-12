
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import { useAuth } from "../contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Login = () => {
  const { language, t } = useLanguage();
  const { login, isLoading } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: ""
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
    const success = await login(formData.email, formData.password);
    if (success) {
      navigate('/');
    }
  };

  return (
    <div className="container max-w-md mx-auto px-4 py-16">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold mb-2">
          {t("auth.login")}
        </h1>
        <p className="text-muted-foreground">
          {language === 'en' 
            ? 'Welcome back! Please enter your details.' 
            : 'Willkommen zurück! Bitte geben Sie Ihre Daten ein.'}
        </p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
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
          <div className="flex justify-between items-center">
            <label htmlFor="password" className="text-sm font-medium">
              {t("auth.password")}
            </label>
            <Link to="#" className="text-xs text-tea-600 hover:underline">
              {t("auth.forgotPassword")}
            </Link>
          </div>
          <Input
            id="password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            required
            placeholder={language === 'en' ? 'Enter your password' : 'Passwort eingeben'}
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
              {language === 'en' ? 'Logging in...' : 'Anmelden...'}
            </div>
          ) : (
            t("auth.login")
          )}
        </Button>
        
        <div className="text-center text-sm">
          <p>
            {t("auth.noAccount")}{" "}
            <Link to="/signup" className="text-tea-600 hover:underline">
              {t("auth.signup")}
            </Link>
          </p>
        </div>
        
        {/* Demo credentials hint */}
        <div className="mt-8 p-4 bg-muted/50 rounded-md text-sm">
          <p className="font-medium mb-1">
            {language === 'en' ? 'Demo Credentials' : 'Demo-Anmeldedaten'}:
          </p>
          <p>
            {language === 'en' ? 'Email' : 'E-Mail'}: <span className="text-tea-600">test@example.com</span>
          </p>
          <p>
            {language === 'en' ? 'Password' : 'Passwort'}: <span className="text-tea-600">password</span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
