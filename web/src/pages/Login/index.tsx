import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { useUser } from '../../providers/UserProvider';

export const Login = () => {
  const navigate = useNavigate();

  const { user, login } = useUser();

  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    if (login) {
      login({ cpf, password });
    }
  };

  return (
    <div className="flex flex-col items-center w-screen h-screen">
      <img className="w-24 h-28 mt-20" src={logo} alt="" />
      <h1 className="font-brand-base text-brand-base font-medium text-xl mt-4">
        Alpha Bunker
      </h1>
      <h2 className="font-brand-base text-paragraph-dark dark:text-input-base font-medium text-xl mt-16">
        Login
      </h2>
      <div className="h-24 py-1 my-5 flex flex-col justify-between">
        <Input
          type="text"
          placeholder="Digite seu CPF"
          onBlur={(e) => setCpf(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Digite sua senha"
          onBlur={(e) => setPassword(e.target.value)}
        />
      </div>
      <Button
        type="button"
        label="Entrar"
        category="primary"
        onClick={() => navigate('')}
      />
      <p
        className="text-sm text-input-text dark:text-paragraph-light-100 pt-2"
        onClick={() => navigate('/register')}
      >
        Crie sua conta
      </p>
    </div>
  );
};
