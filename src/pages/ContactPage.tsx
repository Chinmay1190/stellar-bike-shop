
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { BadgeIndianRupee, Mail, Phone, MapPin, Clock } from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Message Sent",
        description: "We have received your message and will get back to you soon.",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
    }, 1500);
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-racing mb-8">Contact Us</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Contact info */}
        <div>
          <div className="bg-card p-6 rounded-lg border shadow-sm mb-8">
            <div className="flex items-center justify-center mb-4">
              <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center">
                <BadgeIndianRupee className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h2 className="text-xl font-racing text-center mb-6">Stellar Bikes</h2>
            <p className="text-center text-muted-foreground mb-6">
              Contact our team for sales inquiries, service appointments, or general questions.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-primary mr-3 mt-0.5" />
                <div>
                  <h3 className="font-medium mb-1">Headquarters</h3>
                  <address className="not-italic text-muted-foreground">
                    123 Bike Street<br />
                    Mumbai, Maharashtra 400001<br />
                    India
                  </address>
                </div>
              </div>
              
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-primary mr-3" />
                <div>
                  <h3 className="font-medium mb-1">Phone</h3>
                  <p className="text-muted-foreground">+91 1234567890</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-primary mr-3" />
                <div>
                  <h3 className="font-medium mb-1">Email</h3>
                  <p className="text-muted-foreground">info@stellarbikes.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock className="h-5 w-5 text-primary mr-3 mt-0.5" />
                <div>
                  <h3 className="font-medium mb-1">Business Hours</h3>
                  <p className="text-muted-foreground">
                    Monday - Saturday: 10:00 AM - 7:00 PM<br />
                    Sunday: 11:00 AM - 4:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Map */}
          <div className="bg-card p-6 rounded-lg border shadow-sm">
            <h3 className="font-medium mb-4">Find Us</h3>
            <div className="aspect-[4/3] bg-muted rounded-md overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241316.6433229747!2d72.74110193076242!3d19.08252120057422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1715071427692!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Stellar Bikes Location"
              ></iframe>
            </div>
          </div>
        </div>
        
        {/* Contact form */}
        <div className="lg:col-span-2">
          <div className="bg-card p-6 rounded-lg border shadow-sm">
            <h2 className="text-xl font-medium mb-6">Send Us a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address
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
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
          
          {/* Locations */}
          <div className="mt-8">
            <h2 className="text-xl font-medium mb-6">Our Showrooms</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-card p-6 rounded-lg border shadow-sm">
                <h3 className="font-medium mb-3">Mumbai - Flagship Store</h3>
                <p className="text-muted-foreground mb-3">
                  123 Bike Street, Bandra West<br />
                  Mumbai, Maharashtra 400050
                </p>
                <p className="font-medium text-sm">Phone: +91 1234567890</p>
              </div>
              
              <div className="bg-card p-6 rounded-lg border shadow-sm">
                <h3 className="font-medium mb-3">Delhi</h3>
                <p className="text-muted-foreground mb-3">
                  456 Motorbike Avenue, Connaught Place<br />
                  New Delhi, Delhi 110001
                </p>
                <p className="font-medium text-sm">Phone: +91 2345678901</p>
              </div>
              
              <div className="bg-card p-6 rounded-lg border shadow-sm">
                <h3 className="font-medium mb-3">Bangalore</h3>
                <p className="text-muted-foreground mb-3">
                  789 Superbike Road, Indiranagar<br />
                  Bangalore, Karnataka 560038
                </p>
                <p className="font-medium text-sm">Phone: +91 3456789012</p>
              </div>
              
              <div className="bg-card p-6 rounded-lg border shadow-sm">
                <h3 className="font-medium mb-3">Chennai</h3>
                <p className="text-muted-foreground mb-3">
                  101 Motorcycle Lane, T. Nagar<br />
                  Chennai, Tamil Nadu 600017
                </p>
                <p className="font-medium text-sm">Phone: +91 4567890123</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
