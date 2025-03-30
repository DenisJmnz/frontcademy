import React, { useState } from 'react';
import { 
  Container, 
  Typography, 
  Grid, 
  Box,
  Chip,
  Stack
} from '@mui/material';
import BlogPost from '../BlogPost/BlogPost';
import CodeIcon from '@mui/icons-material/Code';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SecurityIcon from '@mui/icons-material/Security';
import StorageIcon from '@mui/icons-material/Storage';
import { blogData } from '../../data/blogPosts.js';

const TechBlog = () => {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const allArticles = blogData.articles;

  // Si no hay artículos, no mostramos nada (sin mensaje de error)
  if (!allArticles || allArticles.length === 0) {
    return null;
  }

  const handleFilterChange = (filterId) => {
    setSelectedFilters(prev => {
      if (prev.includes(filterId)) {
        return [];
      }
      return [filterId];
    });
  };

  const filteredArticles = selectedFilters.length > 0
    ? allArticles.filter(article => article.category === selectedFilters[0])
    : allArticles;

  const filters = [
    { 
      id: 'ia', 
      label: 'Inteligencia Artificial', 
      icon: <PsychologyIcon />,
      color: '#7c3aed'
    },
    { 
      id: 'programacion', 
      label: 'Programación', 
      icon: <CodeIcon />,
      color: '#2563eb'
    },
    { 
      id: 'data', 
      label: 'Data Science', 
      icon: <StorageIcon />,
      color: '#E67E22'
    },
    { 
      id: 'cyber', 
      label: 'Ciberseguridad', 
      icon: <SecurityIcon />,
      color: '#dc2626'
    }
  ];

  return (
    <Box sx={{ 
      bgcolor: 'white',
      pb: 8,
      mt: '-64px'
    }}>
      <Container maxWidth="lg" sx={{ pt: 3 }}>
        <Typography 
          variant="h2" 
          data-aos="fade-down"
          data-aos-duration="800"
          sx={{ 
            mb: 3,
            textAlign: 'center',
            fontSize: { xs: '1.75rem', md: '2.25rem' },
            fontWeight: 'bold',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis'
          }}
        >
          <span>¡</span>Últimas tendencias en el mundo tecnológico<span>!</span>
        </Typography>

        <Stack 
          direction={{ xs: 'row', sm: 'row' }} 
          spacing={1} 
          sx={{ 
            mb: 4,
            flexWrap: 'wrap',
            gap: 1,
            justifyContent: 'center',
            width: '100%'
          }}
        >
          {filters.map((filter) => (
            <Chip
              key={filter.id}
              label={filter.label}
              icon={filter.icon}
              onClick={() => handleFilterChange(filter.id)}
              sx={{
                mb: { xs: 1, sm: 0 },
                fontSize: { xs: '0.8rem', sm: '0.875rem' },
                height: { xs: '32px', sm: '36px' },
                '& .MuiChip-icon': {
                  fontSize: { xs: '1.2rem', sm: '1.4rem' }
                },
                ...(selectedFilters.includes(filter.id) ? {
                  bgcolor: `${filter.color}10`,
                  color: filter.color,
                  borderColor: filter.color,
                  border: '1px solid',
                  '& .MuiChip-icon': {
                    color: filter.color
                  }
                } : {
                  bgcolor: 'white',
                  color: filter.color,
                  borderColor: filter.color,
                  border: '1px solid',
                  '& .MuiChip-icon': {
                    color: filter.color
                  }
                })
              }}
            />
          ))}
        </Stack>

        <Grid container spacing={4}>
          {filteredArticles.map((article, index) => (
            <Grid 
              item 
              xs={12}
              sm={6}
              md={4}
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              data-aos-duration="800"
            >
              <BlogPost article={article} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default TechBlog; 