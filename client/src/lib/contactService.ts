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
    // Detect if we are in development (Vite) or production (Apache/PHP)
    // For local dev, we might still want to use the Vercel API or a mock.
    // Ideally, for the final build, this should point to contact.php.
    // Since the build is for production Apache, we use /contact.php.
    const endpoint = import.meta.env.DEV ? "/api/contact" : "/contact.php";

    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const text = await response.text();
      let errorMessage = "Error al enviar el formulario";
      try {
        const errorData = JSON.parse(text);
        if (errorData.error) errorMessage = errorData.error;
      } catch {
        console.error("Failed to parse error response:", text);
      }
      throw new Error(errorMessage);
    }

    return { success: true };
  } catch (error) {
    console.error("Error submitting contact form:", error);
    return { success: false, message: error instanceof Error ? error.message : "Error desconocido" };
  }
};
