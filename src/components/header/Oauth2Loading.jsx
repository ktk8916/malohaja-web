import React, { useEffect } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { noTokenApi } from '../../services/apiClient';

const Oauth2Loading = () => {
  const [searchParams] = useSearchParams();
  const nav = useNavigate();
  const { provider } = useParams();

  const check = async () => {
    try {
      const { redirect, accessToken } = await noTokenApi(
        `/api/v1/auth/${provider}?code=${searchParams.get('code')}`,
        'GET',
      );
      console.log(redirect, accessToken);
      redirect === '/signup'
        ? signup(provider, accessToken)
        : login(accessToken);
    } catch (error) {
      alert('check oauth2 fail');
    }
  };

  const login = (accessToken) => {
    localStorage.setItem('accessToken', accessToken);
    nav('/');
  };

  const signup = (provider, accessToken) => {
    nav('/signup', { state: { accessToken } });
  };

  useEffect(() => {
    check();
  }, []);

  return <></>;
};

export default Oauth2Loading;
