import { CustomButton, CustomLink } from "@/app/components";
import { APP_ROUTES } from "@/app/components/constants";

export const ContactUsButton = () => {
  return (
      <CustomButton>
        <CustomLink href={APP_ROUTES.CONTACT_US}>
          Contact us
        </CustomLink>
      </CustomButton>

  );
}