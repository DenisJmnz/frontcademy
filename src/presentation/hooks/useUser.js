import { useState, useEffect } from 'react';
import { GetUserUseCase } from '../../core/application/use-cases/GetUserUseCase';

export const useUser = (userId, userRepository) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);
        const getUserUseCase = new GetUserUseCase(userRepository);
        const userData = await getUserUseCase.execute(userId);
        setUser(userData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (userId) {
      fetchUser();
    }
  }, [userId, userRepository]);

  return { user, loading, error };
}; 