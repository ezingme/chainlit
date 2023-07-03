import { Stack, Typography } from '@mui/material';
import { Logo } from 'components/logo';

export default function WaterMark() {
  return (
    <Stack mx="auto">
      <a
        href="https://github.com/Chainlit/chainlit"
        target="_blank"
        style={{
          display: 'flex',
          alignItems: 'center',
          textDecoration: 'none'
        }}
      >
        <Typography fontSize="12px" color="text.secondary">
          Copyright © 2023 智谱沧渊
        </Typography>
      </a>
    </Stack>
  );
}
