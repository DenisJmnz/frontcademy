import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent, Typography, Avatar } from '@mui/material';

export const UserProfile = ({ user, onEdit }) => {
  if (!user) {
    return <Typography>No user data available</Typography>;
  }

  return (
    <Card>
      <CardContent>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <Avatar>{user.name[0]}</Avatar>
          <div>
            <Typography variant="h6">{user.name}</Typography>
            <Typography color="textSecondary">{user.email}</Typography>
            <Typography variant="body2">
              Role: {user.role}
            </Typography>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

UserProfile.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
  }),
  onEdit: PropTypes.func,
};

UserProfile.defaultProps = {
  onEdit: () => {},
}; 