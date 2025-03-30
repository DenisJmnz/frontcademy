import SvgIcon from '@mui/material/SvgIcon';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function SitemarkIcon() {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <SvgIcon sx={{ height: 32, width: 32, mr: 1 }}>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 6C4 4.89543 4.89543 4 6 4H18C19.1046 4 20 4.89543 20 6V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V6Z"
            fill="#4876EF"
            fillOpacity="0.1"
            stroke="#4876EF"
            strokeWidth="2"
          />
          <path
            d="M8 10L11 13L8 16"
            stroke="#4876EF"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13 16H16"
            stroke="#424242"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </SvgIcon>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Typography
          variant="h6"
          noWrap
          component="span"
          sx={{
            fontWeight: 800,
            letterSpacing: '.1rem',
            color: '#4876EF',
            fontFamily: 'Montserrat, sans-serif',
          }}
        >
          App
        </Typography>
        <Typography
          variant="h6"
          noWrap
          component="span"
          sx={{
            fontWeight: 800,
            letterSpacing: '.1rem',
            color: '#424242',
            fontFamily: 'Montserrat, sans-serif'
          }}
        >
          Cademy
        </Typography>
      </Box>
    </Box>
  );
}
