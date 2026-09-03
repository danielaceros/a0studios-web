"use server";

export type ContactState = {
  success: boolean;
  message: string;
  field?: "name" | "email" | "message";
} | null;

export async function submitContact(
  _prevState: ContactState,
  formData: FormData
): Promise<ContactState> {
  const name = (formData.get("name") as string)?.trim();
  const email = (formData.get("email") as string)?.trim();
  const phone = (formData.get("phone") as string)?.trim();
  const message = (formData.get("message") as string)?.trim();

  if (!name) {
    return { success: false, message: "El nombre es obligatorio.", field: "name" };
  }
  if (!email) {
    return { success: false, message: "El email es obligatorio.", field: "email" };
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { success: false, message: "Introduce un email válido.", field: "email" };
  }
  if (!message) {
    return { success: false, message: "El mensaje es obligatorio.", field: "message" };
  }

  // Placeholder: log the submission. Connect to Resend/Formspree later.
  console.log("Contact form submission:", { name, email, phone, message });

  return {
    success: true,
    message: "¡Gracias! Hemos recibido tu mensaje. Te contactaremos en menos de 24 horas.",
  };
}
