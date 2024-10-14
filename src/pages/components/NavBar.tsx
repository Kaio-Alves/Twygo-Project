import { HamburgerIcon } from '@chakra-ui/icons';
import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerOverlay, Flex, IconButton, Image, useDisclosure } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
    const navigate = useNavigate();
    const { isOpen, onOpen, onClose } = useDisclosure();

    const handleCadastreCursos = () => {
        navigate('/cadastrar-cursos');
    };

    const handleHome = () => {
        navigate('/');
    };

    const styleTheme = {
        background: '#9349de',
        color: 'black',
        padding: '2.5',
    };

    const styleOptionsButtonsNavBar = {
        variant: 'outline',
        color: 'white',
        borderColor: "#9349de",
        px: "6",
        _hover: {
            bg: 'transparent',
            color: 'white',
            borderColor: "#9349de"
        },
    };

    const styleButtonNavBarRegisterCurse = {
        color: 'black',
        variant: 'outline',
        borderColor: '#ffd757',
        background: '#ffd757',
        borderRadius: "15px",
        fontSize: '14px',
        height: '50px',
        width: '140px',
        _hover: {
            bg: '#fcb900',
            color: 'white',
            borderColor: "#fcb900"
        },
    };

    const drawerStyle = {
        background: '#9349de', 
        color: 'black', 
    };

    return (
        <Box {...styleTheme}>
            <Flex align="center" justify="space-between" wrap="wrap">
                <Image onClick={handleHome} marginLeft={{ base: '20px', md: '70px' }} cursor='pointer' src="https://twygo.com/wp-content/themes/twygo//img/Logo-2.png" width={{ base: '100px', md: 'auto' }} />
                <Flex display={{ base: 'none', md: 'flex' }} right='380px'>
                    <Button {...styleOptionsButtonsNavBar}>Produtos</Button>
                    <Button {...styleOptionsButtonsNavBar}>Plataforma</Button>
                    <Button {...styleOptionsButtonsNavBar}>Conteúdos</Button>
                    <Button {...styleOptionsButtonsNavBar}>Planos</Button>
                    <Button {...styleOptionsButtonsNavBar}>Clientes</Button>
                </Flex>
                <Flex display={{ base: 'none', md: 'flex' }} right={{ base: '20px', md: '60px' }}>
                    <Button {...styleOptionsButtonsNavBar} marginRight='20px'>Solicitar demonstração</Button>
                    <Button {...styleButtonNavBarRegisterCurse} onClick={handleCadastreCursos}>Cadastre Cursos</Button>
                </Flex>
                <IconButton aria-label="Open menu" icon={<HamburgerIcon />} onClick={onOpen} display={{ base: 'flex', md: 'none' }} marginRight='20px' />
            </Flex>

            <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
                <DrawerOverlay />
                <DrawerContent {...drawerStyle}>
                    <DrawerCloseButton />
                    <DrawerBody>
                        <Flex direction="column" align="start" padding="20px">
                            <Button onClick={handleHome} {...styleOptionsButtonsNavBar}>Home</Button>
                            <Button {...styleOptionsButtonsNavBar}>Produtos</Button>
                            <Button {...styleOptionsButtonsNavBar}>Plataforma</Button>
                            <Button {...styleOptionsButtonsNavBar}>Conteúdos</Button>
                            <Button {...styleOptionsButtonsNavBar}>Planos</Button>
                            <Button {...styleOptionsButtonsNavBar}>Clientes</Button>
                            <Button {...styleOptionsButtonsNavBar}>Solicitar demonstração</Button>
                            <Button {...styleButtonNavBarRegisterCurse} onClick={handleCadastreCursos}>Cadastre um curso</Button>
                        </Flex>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Box>
    );
};

export default NavBar;
