import { ArticlesSection, HeroSection, LessImportantSection } from '@/app/components';
import { Stack } from '@mui/material';


export default function Home() {
  return (
    <Stack component='main' sx={{ mt: 9, flexGrow: 1 }}>
      <HeroSection />
      <ArticlesSection />
      <LessImportantSection />
    </Stack>
  );
}
