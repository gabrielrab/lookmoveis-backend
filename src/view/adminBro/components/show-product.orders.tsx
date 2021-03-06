import React, { useState, useEffect } from 'react';
import { BasePropertyProps } from 'admin-bro';
import { Box, ValueGroup } from '@admin-bro/design-system';
import styled from 'styled-components';
import axios from 'axios';

const ShowProducts: React.FC<BasePropertyProps> = (props) => {
  const { record } = props;
  const [images, setImages] = useState([]);

  const pageConfigs = {
    apiMasterKey: 12345678,
    resourceType: 'products',
    multiple: true,
  };

  const Product = styled.div`
    border: 1px solid #dddd;
    border-radius: 5px;
    padding: 10px;
    max-width: 300px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    flex-direction: column;
  `;

  const ProductTitle = styled.div`
    color: #5f5f5f;
    font-weight: bold;
    font-size: 18px;
    margin-bottom: 5px;
  `;

  const ProductUn = styled.label`
    font-size: 13px;
  `;

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`/order/${record.id}`, {
        headers: {
          apiKey: pageConfigs.apiMasterKey,
        },
      });
      setImages([...data.orderLines]);
    })();
  }, [record]);
  return (
    <Box variant="gray">
      <ValueGroup label="Produtos do pedido" />
      <ul>
        {images.map((product) => (
          <li>
            <Product>
              <ProductTitle>{product.description}</ProductTitle>
              <ProductUn>Quantidade: {product.qty} un</ProductUn>
            </Product>
          </li>
        ))}
      </ul>
    </Box>
  );
};

export default ShowProducts;
