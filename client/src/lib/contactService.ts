export interface ContactFormData {
  nombre: string;
  email: string;
  telefono: string;
  tipo?: string;
  municipio?: string;
  factura?: string;
}

export const sendContactForm = async (data: ContactFormData): Promise<{ success: boolean; message?: string }> => {
  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || "Error al enviar el formulario");
    }

    return { success: true };
  } catch (error) {
    console.error("Error submitting contact form:", error);
    return { success: false, message: error instanceof Error ? error.message : "Error desconocido" };
  }
};
