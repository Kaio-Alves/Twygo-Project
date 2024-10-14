import { DeleteIcon } from '@chakra-ui/icons';
import { Box, Button, IconButton, Image, SimpleGrid, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { CurseListProps } from '../../props/CurseListProps';


const CurseList: React.FC<CurseListProps> = ({ curses, removeCurse }) => {
  const CurseForPage = 6;

  const [paginaAtual, setPaginaAtual] = useState(0);

  const iniciar = paginaAtual * CurseForPage;
  const finalizar = iniciar + CurseForPage;
  const cursesExibidos = curses.slice(iniciar, finalizar);

  const proximaPagina = () => {
    if (finalizar < curses.length) setPaginaAtual(paginaAtual + 1);
  };

  const paginaAnterior = () => {
    if (paginaAtual > 0) setPaginaAtual(paginaAtual - 1);
  };

  const isExpired = (dateString: string) => {
    const date = new Date(dateString);
    return date < new Date();
  };

  const styleTheme = {
    background: '#fff',
    color: 'black',
    padding: '4',
    marginTop: '150px',
  };

  return (
    <Box {...styleTheme}>
      <Box margin='50px' textAlign='center' fontSize='18px' fontStyle='oblique'>Cursos Disponíveis:</Box>
      {curses.length === 0 ? (
        <Text textAlign='center' fontSize='20px' color='gray.500'>Ainda não há nenhum curso disponível.</Text>
      ) : (
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          {cursesExibidos.map((item, index) => {
            const expired = isExpired(item.dataTermino);
            return (
              <Box  key={index}  p={5}  shadow="md"  borderWidth="1px"  position="relative"  display='flex'  opacity={expired ? 0.5 : 1}  filter={expired ? 'blur(2px)' : 'none'}>
                {expired && (
                  <Text position='absolute' top='10px' left='10px' color='red' fontSize='24px' fontWeight='bold'> Expirado</Text>
                )}
                <Image src='https://media.licdn.com/dms/image/v2/D4D0BAQElJMJvKQclmw/company-logo_200_200/company-logo_200_200/0/1714657315706?e=2147483647&v=beta&t=ibtSvNMsisNRh1NhjopPM9_m1xUYtgPKofxK-lxT5OY'  alt={item.titulo} boxSize="200px" objectFit="cover" 
                />
                <Text position='relative' fontWeight="bold" left='50px' fontSize='24px' color='#9349de'>{item.titulo}</Text>
                <Box position='relative' top='100px' right='20px'>
                  <Text>Data de Término: {item.dataTermino}</Text>
                  <Text>Autor: {item.autor}</Text>
                </Box>
                <IconButton icon={<DeleteIcon />}   aria-label="Excluir"   position="absolute" top="5px" right="5px"  onClick={() => removeCurse(iniciar + index)} />
              </Box>
            );
          })}
        </SimpleGrid>
      )}
      <Box mt={4} display="flex" justifyContent="space-between">
        <Button onClick={paginaAnterior} isDisabled={paginaAtual === 0}>Anterior</Button>
        <Button onClick={proximaPagina} isDisabled={finalizar >= curses.length}>Próxima</Button>
      </Box>
    </Box>
  );
};

export default CurseList;
