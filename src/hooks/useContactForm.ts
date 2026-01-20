import { useState} from "react";
import type { FormEvent } from "react";
import emailjs from "@emailjs/browser";

export const useContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage("");

    const form = e.currentTarget;

    try {
      const result = await emailjs.sendForm(
        "service_gk4i69p",
        "template_xyzp4w9",
        form,
        "gdg92K_bOlI9gGQUA",
      );

      console.log("SUCCESS!", result.text);
      setMessage("¡Mensaje enviado exitosamente! Te contactaré pronto.");
      form.reset();
    } catch (error) {
      console.log("FAILED...", error);
      setMessage(
        "Hubo un error al enviar el mensaje. Por favor intenta de nuevo.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return { handleSubmit, isSubmitting, message };
};
