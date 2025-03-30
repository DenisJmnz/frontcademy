import React from 'react';
import { 
  Card, 
  CardContent, 
  CardMedia, 
  Typography, 
  Box,
  Chip,
  Link
} from '@mui/material';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';

const BlogPost = ({ article }) => {
  // Si no hay artículo, no mostramos nada (sin mensaje de error)
  if (!article) return null;

  const defaultImage = 'https://images.unsplash.com/photo-1519389950473-47ba0277781c';
  
  return (
    <Card 
      elevation={0}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        borderRadius: 2,
        transition: 'all 0.3s ease-in-out',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
        },
        border: '1px solid',
        borderColor: 'grey.200',
        bgcolor: 'white'
      }}
    >
      <CardMedia
        component="img"
        height="200"
        image={article.urlToImage || defaultImage}
        alt={article.title}
        sx={{
          objectFit: 'cover'
        }}
      />
      <CardContent sx={{ flexGrow: 1, p: 3 }}>
        <Box sx={{ mb: 2 }}>
          <Chip 
            label={article.source.name}
            size="small"
            sx={{ 
              bgcolor: 'primary.lighter',
              color: 'primary.main',
              fontWeight: 500
            }}
          />
          <Typography 
            variant="caption" 
            sx={{ 
              ml: 1,
              color: 'text.secondary'
            }}
          >
            {format(new Date(article.publishedAt), "d 'de' MMMM, yyyy", { locale: es })}
          </Typography>
        </Box>
        
        <Typography 
          variant="h6" 
          component="h2"
          sx={{ 
            mb: 2,
            fontWeight: 'bold',
            lineHeight: 1.3
          }}
        >
          {article.title}
        </Typography>
        
        <Typography 
          variant="body2" 
          color="text.secondary"
          sx={{ mb: 2 }}
        >
          {article.description}
        </Typography>

        <Link
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            color: 'primary.main',
            textDecoration: 'none',
            fontWeight: 500,
            '&:hover': {
              textDecoration: 'underline'
            }
          }}
        >
          Leer más
        </Link>
      </CardContent>
    </Card>
  );
};

export default BlogPost; 