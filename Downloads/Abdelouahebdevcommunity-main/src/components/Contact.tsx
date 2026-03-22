import { Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useState } from "react";
import { useLanguage } from "./LanguageProvider";

export function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50 dark:from-brand-dark dark:to-brand-darker">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="mb-4 bg-gradient-to-r from-brand-cyan to-brand-purple bg-clip-text text-transparent">{t('contactTitle')}</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-brand-cyan via-brand-green to-brand-purple mx-auto mb-6"></div>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-2">
              {t('contactDescription')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h3 className="mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-brand-cyan/20 to-brand-cyan/10 p-3 rounded-lg border border-brand-cyan/30">
                    <Mail className="h-6 w-6 text-brand-cyan" />
                  </div>
                  <div>
                    <div className="text-gray-700 dark:text-gray-300 mb-1">Email</div>
                    <a href="mailto:ben689533@gmail.com" className="text-brand-cyan hover:underline">
                      ben689533@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-brand-green/20 to-brand-green/10 p-3 rounded-lg border border-brand-green/30">
                    <Phone className="h-6 w-6 text-brand-green" />
                  </div>
                  <div>
                    <div className="text-gray-700 dark:text-gray-300 mb-1">Phone</div>
                    <a href="tel:+213553120173" className="text-brand-green hover:underline">
                      +213 553 120 173
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-brand-purple/20 to-brand-purple/10 p-3 rounded-lg border border-brand-purple/30">
                    <MapPin className="h-6 w-6 text-brand-purple" />
                  </div>
                  <div>
                    <div className="text-gray-700 dark:text-gray-300 mb-1">Location</div>
                    <div className="text-gray-600 dark:text-gray-400">Algiers, Algeria</div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-gradient-to-br from-brand-cyan via-brand-green to-brand-purple rounded-xl text-white shadow-lg">
                <h4 className="mb-2">Let's Connect</h4>
                <p className="mb-4">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                </p>
                <div className="text-white/90 bg-white/10 px-3 py-1 rounded-full inline-block">Available for freelance work</div>
              </div>
            </div>
            
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder={t('yourName')}
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder={t('yourEmail')}
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div>
                  <Textarea
                    name="message"
                    placeholder={t('yourMessage')}
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    required
                  />
                </div>
                
                <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-brand-cyan to-brand-green hover:from-brand-cyan/90 hover:to-brand-green/90 border-0">
                  <Send className="mr-2 h-4 w-4" />
                  {t('sendMessage')}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}