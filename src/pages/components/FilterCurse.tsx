import { SearchIcon } from '@chakra-ui/icons';
import { Box, Button, Flex, IconButton, Input, Text } from '@chakra-ui/react';
import { FilterCurseProps } from '../../props/FilterCurseProps';

const FilterCurse: React.FC<FilterCurseProps> = ({ onSearchChange }) => {
    const styleTheme = {
        background: '#fff',
        color: 'black',
        padding: '150px 20px',
        height: '450px',
    };

    const styleSearchCurse = {
        border: '2px solid rgba(31, 32, 65, .08)',
        height: '55px',
        borderRadius: '14px',
        boxShadow: '0 2px 2px 0 rgba(31, 32, 65, .08)',
        margin: '40px auto', 
        display: 'flex',
        alignItems: 'center',
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onSearchChange(event.target.value);
    };

    const styleOptionsFilter ={
        background:'#fff',
        border:'2.3px solid rgba(31, 32, 65, .08)',
        margin:'5px',
    }
    
    return (
        <Box {...styleTheme}>
            <Text textAlign='center' fontSize='12px' color='black'>O que você está procurando?</Text>
            <Flex {...styleSearchCurse} maxWidth={{ base: '100%', md: '400px' }}>
                <Input onChange={handleInputChange} border='none'focusBorderColor='transparent' placeholder="Digite aqui"sx={{ '::placeholder': { color: '#fbfdf', fontSize: '12px' } }}/>
                <IconButton aria-label="Buscar"icon={<SearchIcon />} border='none'background='transparent'color='rgba(31, 32, 65, .38)'_hover={{ background: 'transparent', color: '#9349de' }}/>
            </Flex>
            <Flex direction={{ base: 'column', md: 'row' }} align="center" justify="center" wrap="wrap">
                <Flex direction={{ base: 'row', md: 'column' }}  justify="center" wrap="wrap">
                    <Button color='#d8a75d' {...styleOptionsFilter} _hover={{ background: '#d8a75d',color:'#fff' }}>Gestão de Pessoas</Button>
                    <Button color='#ef67b5' {...styleOptionsFilter} _hover={{ background: '#ef67b5',color:'#fff'  }}>Onboarding (Integração) de colaboradores</Button>
                    <Button color='#000' {...styleOptionsFilter} _hover={{ background: '#000',color:'#fff' }}>Sem Categoria</Button>
                    <Button color='#63b9e8' {...styleOptionsFilter} _hover={{ background: '#63b9e8',color:'#fff' }}>Tecnologia e Ensino</Button>
                </Flex>
                <Flex direction={{ base: 'row', md: 'column' }}  justify="center" wrap="wrap">
                    <Button color='#9349DE' {...styleOptionsFilter} _hover={{ background: '#9349DE' ,color:'#fff' }}>Treinamento e Desenvolvimento (T&D)</Button>
                    <Button color='#4fb5ad' {...styleOptionsFilter} _hover={{ background: '#4fb5ad',color:'#fff' }}>Treinamento de Clientes (CS)</Button>
                    <Button color='#3867c1' {...styleOptionsFilter} _hover={{ background: '#3867c1',color:'#fff' }}>Universidade Corporativa</Button>
                    <Button color='#8fc353'  {...styleOptionsFilter} _hover={{ background: '#8fc353',color:'#fff' }} >Vendas de Cursos</Button>
                </Flex>
            </Flex>
        </Box>
    );
};

export default FilterCurse;
