import React, { useState, useEffect } from 'react';
import { BasePropertyProps } from 'admin-bro';
import { Box, Header } from '@admin-bro/design-system';
import axios from 'axios';

const ShowProducts: React.FC<BasePropertyProps> = (props) => {
  const { record } = props;
  const [images, setImages] = useState([]);

  const pageConfigs = {
    apiMasterKey: 12345678,
    resourceType: 'products',
    multiple: true,
  };

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
      <Header.H5>Listagem de Productos:</Header.H5>
      <ul>
        {images.map((product) => (
          <li>
            - <b>{product.description}</b> {product.qty}un
          </li>
        ))}
      </ul>
    </Box>
  );
};

export default ShowProducts;
