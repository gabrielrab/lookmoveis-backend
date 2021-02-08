import React, { useState, useEffect } from 'react';
import { BasePropertyProps } from 'admin-bro';
import { Box } from '@admin-bro/design-system';
// import ProductController from '../../../controllers/ProductController';

const ShowImage: React.FC<BasePropertyProps> = (props) => {
  const { record } = props;
  const [images, setImages] = useState([]);

  const srcImg =
    'https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80';
  return (
    <Box>
      <h1>Hello World - Aprendendo esse AdminBro</h1>
      <p>
        Maluco, se pá tu vai ter que me ajudar a criar uns componentes
        aqui kkkkkkk
      </p>
      <img src={srcImg} width="200px" />
    </Box>
  );
};

export default ShowImage;
