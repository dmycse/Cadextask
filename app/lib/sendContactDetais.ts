type ContactProps = {
  name: string;
  email: string;
  message: string;
};

let url = "https://cadextask.vercel.app/api/contact-us";

export const sentContactDetails = async (data: ContactProps) => {
  return await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
};