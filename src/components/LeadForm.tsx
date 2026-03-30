import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import ReCAPTCHA from "react-google-recaptcha";

const services = [
  "Invisible Grills",
  "Pigeon Nets",
  "Safety Nets",
  "Cricket Nets",
  "Industrial Nets",
  "Cloth Hangers",
];

const LeadForm = () => {
  const [form, setForm] = useState({ name: "", phone: "", service: "" });
  const [captcha, setCaptcha] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  // reCAPTCHA is deferred until the user interacts with the form
  const [showCaptcha, setShowCaptcha] = useState(false);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const handleFocus = () => {
    if (!showCaptcha) setShowCaptcha(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name.trim() || !form.phone.trim() || !form.service) {
      toast.error("Please fill all fields");
      return;
    }

    if (!/^[6-9]\d{9}$/.test(form.phone.trim())) {
      toast.error("Enter a valid 10-digit phone number");
      return;
    }

    if (!captcha) {
      toast.error("Please verify captcha");
      return;
    }

    setLoading(true);

    try {
      await fetch(
        "https://docs.google.com/forms/d/e/1FAIpQLSf_VHvqY48Mj6x4GmW7JbDa-c9VfKR4pLgtinYDI3od_KOmeQ/formResponse",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams({
            "entry.1724429716": form.name,
            "entry.266790560": form.phone,
            "entry.1431851929": form.service,
          }).toString(),
        }
      );

      toast.success("Thank you! We'll call you shortly.");
      setForm({ name: "", phone: "", service: "" });
      setCaptcha(null);
      recaptchaRef.current?.reset();

    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-card rounded-2xl p-8 shadow-card max-w-md w-full mx-auto space-y-4"
    >
      <h3 className="text-xl font-bold text-foreground text-center">
        Get a Free Quote
      </h3>

      <input
        type="text"
        placeholder="Your Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        onFocus={handleFocus}
        maxLength={100}
        className="w-full px-4 py-3 rounded-xl bg-surface-elevated border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all focus:border-primary/50"
      />

      <input
        type="tel"
        placeholder="Phone Number"
        value={form.phone}
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
        onFocus={handleFocus}
        maxLength={10}
        className="w-full px-4 py-3 rounded-xl bg-surface-elevated border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all focus:border-primary/50"
      />

      <select
        value={form.service}
        onChange={(e) => setForm({ ...form, service: e.target.value })}
        onFocus={handleFocus}
        className="w-full px-4 py-3 rounded-xl bg-surface-elevated border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
      >
        <option value="">Select Service</option>
        {services.map((s) => (
          <option key={s} value={s}>
            {s}
          </option>
        ))}
      </select>

      {/* reCAPTCHA only loads after user interacts with the form */}
      {showCaptcha && (
        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
          onChange={(value) => setCaptcha(value)}
        />
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full py-3.5 rounded-xl bg-primary-gradient text-primary-foreground font-bold text-sm hover:brightness-110 transition-all shadow-lg active:scale-[0.98] disabled:opacity-70"
      >
        {loading ? "Submitting..." : "Request Free Quote"}
      </button>
    </motion.form>
  );
};

export default LeadForm;