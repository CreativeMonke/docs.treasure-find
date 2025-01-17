import React from 'react';
import Switch from '@mui/joy/Switch';
import { useTranslation } from 'react-i18next';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const isRo = i18n.language.startsWith('ro');

  const toggleLanguage = () => {
    const newLang = isRo ? 'en' : 'ro';
    i18n.changeLanguage(newLang);
    window.location.reload();
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
      <Typography>EN</Typography>
      <Switch checked={isRo} onChange={toggleLanguage} />
      <Typography>RO</Typography>
    </Box>
  );
};

export default LanguageSwitcher;
