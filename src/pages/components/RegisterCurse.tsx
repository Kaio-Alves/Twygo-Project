import { Button, Input, Stack, Text } from '@chakra-ui/react';
import React, { ChangeEvent, useState } from 'react';

type RegisterCurseProps = {
  addCurse: (titulo: string, dataTermino: string, autor: string) => void;
}

const RegisterCurse: React.FC<RegisterCurseProps> = ({ addCurse }) => {
  const [titulo, setTitulo] = useState<string>('');
  const [dataTermino, setDataTermino] = useState<string>('');
  const [autor, setAutor] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>, setState: React.Dispatch<React.SetStateAction<string>>) => setState(e.target.value);

  const validateDate = (dateString: string) => {
    const regex = /^\d{2}\/\d{2}\/\d{4}$/; 
    return regex.test(dateString);
  };

  const handleSubmit = () => {
    if (!titulo) {
      setError('Por favor, insira o título do curso.');
      return;
    }
    if (!dataTermino) {
      setError('Por favor, insira a data de término.');
      return;
    }
    if (!autor) {
      setError('Por favor, insira o autor do curso.');
      return;
    }
    if (!validateDate(dataTermino)) {
      setError('Por favor, insira a data no formato dd/mm/aaaa.');
      return;
    }
    
    setError(''); 
    addCurse(titulo, dataTermino, autor);
    setTitulo('');
    setDataTermino('');
    setAutor('');
  };

  return (
    <Stack spacing={4} margin='30px'>
      <Input value={titulo} onChange={(e) => handleChange(e, setTitulo)} placeholder="Digite o título" />
      <Input value={dataTermino}  onChange={(e) => handleChange(e, setDataTermino)}  placeholder="Data de término (dd/mm/aaaa)" />
      <Input value={autor} onChange={(e) => handleChange(e, setAutor)}  placeholder="Autor" />
      {error && <Text color='red.500'>{error}</Text>}
      <Button onClick={handleSubmit}  _hover={{ background: '#9349DE', color: '#fff' }}  alignSelf='center'  margin='20px'> Cadastrar Curso</Button>
    </Stack>
  );
};

export default RegisterCurse;
