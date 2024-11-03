type ContactProps = {
  name: string;
  email: string;
  message: string;
};

export const sentContactDetails = async (data: ContactProps) => {
  return await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/contact-us`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
};