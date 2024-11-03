import { ArticlesSection, HeroSection, LessImportantSection } from '@/app/components';
import { Stack } from '@mui/material';
import { HomeJsonLd } from '@/app/components';


export default function Home() {
  return (
    <>
      <HomeJsonLd />
      <Stack component='main' sx={{ mt: 9, flexGrow: 1 }}>
        <HeroSection />
        <ArticlesSection />
        <LessImportantSection />
      </Stack>
    </>
  );
}
