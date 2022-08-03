import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { useUser } from '../../providers/UserProvider';

export const Register = () => {
  const { user, signup } = useUser();

  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [account, setAccount] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    if (signup) {
      signup({ name, email, cpf, birthdate, password });
      navigate('/extract');
    }
  };

  return (
    <div className="flex flex-col items-center w-screen h-screen">
      <img className="w-14 h-16 mt-9" src={logo} alt="" />
      <h1 className="font-brand-base text-brand-base font-medium text-base py-4">
        Alpha Bunker
      </h1>
      <h2 className="font-brand-base text-input-text dark:text-input-base font-medium text-xl mb-2">
        Crie sua Conta
      </h2>
      <div className="h-[292px] flex flex-col justify-between my-6">
        <Input
          type="text"
          placeholder="Digite seu Nome"
          onBlur={(e) => setName(e.target.value)}
        />
        <Input
          type="date"
          placeholder="Digite sua data de nascimento"
          onBlur={(e) => setBirthdate(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Digite seu CPF"
          onBlur={(e) => setCpf(e.target.value)}
        />
        <Input
          type="email"
          placeholder="Digite seu Email"
          onBlur={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Digite sua senha"
          onBlur={(e) => setPassword(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Confirme sua senha"
          onBlur={(e) => setPassword(e.target.value)}
        />
      </div>
      <Button
        type="button"
        label="Cadastrar"
        category="primary"
        onClick={handleSubmit}
      />
      <p
        className="text-sm text-input-text dark:text-paragraph-light-100 pt-2"
        onClick={() => navigate('/login')}
      >
        Crie sua conta
      </p>
    </div>
  );
};
