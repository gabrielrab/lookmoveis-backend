import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, H1, H2, H5, Text } from '@admin-bro/design-system';
import { BasePropertyProps } from 'admin-bro';

import styled from 'styled-components';
import './styles.css';

const pageHeaderHeight = 284;
const pageHeaderPaddingY = 74;
const pageHeaderPaddingX = 250;

const Card = styled(Box)`
  display: ${({ flex }): string => (flex ? 'flex' : 'block')};
  color: ${({ theme }): string => theme.colors.grey100};
  text-decoration: none;
  border: 1px solid transparent;
  &:hover {
    border: 1px solid
      ${({ theme }): string => theme.colors.primary100};
    box-shadow: ${({ theme }): string => theme.shadows.cardHover};
  }
`;

Card.defaultProps = {
  variant: 'white',
  boxShadow: 'card',
};

const Rounded = styled.div`
  width: 78px;
  height: 78px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;

  h1 {
    margin-bottom: 0 !important;
  }
`;

const DivRound = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px !important;

  h2 {
    margin-bottom: 0 !important;
    margin-top: 0 !important;
    margin-left: 10px !important;
  }
`;

const Dashboard: React.FC<BasePropertyProps> = () => {
  type InfoType = {
    clients: Number;
    products: Number;
    categories: Number;
    orders: Number;
  };

  const [infos, setInfos] = useState<InfoType>({
    clients: 0,
    products: 0,
    categories: 0,
    orders: 0,
  });

  useEffect(() => {
    (async () => {
      const config = {
        apiKey: 12345678,
      };

      const [
        products,
        clients,
        categories,
        orders,
      ] = await Promise.all([
        axios.get('https://backend.lookmoveiscajuru.com/products', {
          headers: config,
        }),
        axios.get('https://backend.lookmoveiscajuru.com/clients', {
          headers: config,
        }),
        axios.get('https://backend.lookmoveiscajuru.com/categories', {
          headers: config,
        }),
        axios.get('https://backend.lookmoveiscajuru.com/order', {
          headers: config,
        }),
      ]);

      setInfos({
        products: products.data.length,
        clients: clients.data.length,
        categories: categories.data.length,
        orders: orders.data.length,
      });
    })();
  }, []);

  type BoxType = {
    title: string;
    total: Number;
    subtitle: string;
    href: string;
  };

  const boxes: Array<BoxType> = [
    {
      title: 'Produtos',
      subtitle: 'Gerencie seus produtos aqui',
      href: 'https://adminbro.com/tutorial-passing-resources.html',
      total: infos.products,
    },
    {
      title: 'Categorias',
      subtitle: 'Gerencie suas categorias aqui',
      href:
        'https://adminbro.com/tutorial-customizing-resources.html',
      total: infos.categories,
    },
    {
      title: 'Pedidos',
      subtitle: 'Gerencie seus Pedidos aqui',
      href: 'https://adminbro.com/tutorial-actions.html',
      total: infos.orders,
    },
    {
      title: 'Clientes',
      subtitle: 'Gerencie seus Clientes',
      href: 'https://adminbro.com/tutorial-actions.html',
      total: infos.clients,
    },
  ];

  return (
    <Box>
      <Box position="relative" overflow="hidden">
        <Box
          position="absolute"
          top={50}
          left={-10}
          opacity={[0.2, 0.4, 1]}
          animate
        ></Box>
        <Box
          position="absolute"
          top={-70}
          right={-15}
          opacity={[0.2, 0.4, 1]}
          animate
        ></Box>
        <Box
          bg="hoverBg"
          height={pageHeaderHeight}
          py={pageHeaderPaddingY}
          px={['default', 'lg', pageHeaderPaddingX]}
        >
          <Text textAlign="center" color="white">
            <H2>Bem-vindo</H2>
            <Text opacity={0.8}>
              Explore o seu painel de administrador. Abaixo estão
              algumas estatísticas!
            </Text>
          </Text>
        </Box>
      </Box>

      <Box
        mt={['xl', 'xl', '-100px']}
        mb="xl"
        mx={[0, 0, 0, 'auto']}
        px={['default', 'lg', 'xxl', '0']}
        position="relative"
        flex
        flexDirection="row"
        flexWrap="wrap"
        width={[1, 1, 1, 1024]}
      >
        {boxes.map((box, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <Box key={index} width={[1, 1 / 2, 1 / 2, 1 / 3]} p="lg">
            <Card>
              <Text textAlign="center">
                <H5 mt="md">{box.title}</H5>
                <DivRound>
                  <Rounded>
                    <H1 mb="xs">{box.total}</H1>
                  </Rounded>
                </DivRound>
                <Text as="a" href={box.href}>
                  {box.subtitle}
                </Text>
              </Text>
            </Card>
          </Box>
        ))}
        <Box width={[1, 1, 1]} p="lg">
          <Card
            as="a"
            flex
            href="https://join.slack.com/t/adminbro/shared_invite/zt-djsqxxpz-_YCS8UMtQ9Ade6DPuLR7Zw"
          >
            <DivRound>
              <img
                src="https://lookmoveiscajuru.com/static/favilink.png"
                alt="logo"
              />
              <H2>Clique aqui para visualizar seu site</H2>
            </DivRound>
          </Card>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
