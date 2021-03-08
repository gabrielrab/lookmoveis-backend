import React, { useState, useEffect } from 'react';
import { BasePropertyProps } from 'admin-bro';
import { Box, Header, Button } from '@admin-bro/design-system';
import axios from 'axios';
import styled from 'styled-components';

const Input = styled.input`
  max-width: 500px;
  width: 80%;
  padding: 5px;
  box-sizing: border-box;
  color: #454655;
  background: transparent;
  border: 1px solid #c0c0ca;
  font-size: 14px;
  line-height: 24px;
  font-family: 'Roboto', sans-serif;
  outline: none;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 4px;
  padding-bottom: 4px;
  margin-bottom: 10px;
`;

const FormBox = styled.form`
  display: flex;
  flex-direction: column;
`;

const pageConfigs = {
  redirectPageAfterUpload: '/admin/resources/products',
  apiMasterKey: 12345678,
  imageResourceType: 'product',
  multiple: true,
};

const ShowImage: React.FC<BasePropertyProps> = (props) => {
  const { record } = props;
  const [formValues, setFormValues] = useState({});

  const handleChange = (event) => {
    const auxValues = { ...formValues };
    auxValues[event.target.name] = event.target.value;
    setFormValues(auxValues);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const attribute = await axios.post(
      '/products-attrs',
      {
        productId: record.id,
        ...formValues,
      },
      {
        headers: {
          apiKey: pageConfigs.apiMasterKey,
        },
      },
    );

    alert('Atributo adicionado com sucesso.');
    window.location.assign(pageConfigs.redirectPageAfterUpload);
  };

  return (
    <Box variant="gray">
      <Box variant="white">
        <Header.H4>Adicionar atributo ao pedido</Header.H4>
        <Box>
          <FormBox
            encType="multipart/form-data"
            onSubmit={handleSubmit}
          >
            <Input
              type="text"
              name="name"
              required
              placeholder="Nome do atributo"
              onChange={handleChange}
            />
            <Input
              type="text"
              name="value"
              required
              placeholder="Valor do atributo"
              onChange={handleChange}
            />
            <Box>
              <Button label="Cadastrar" />
            </Box>
          </FormBox>
        </Box>
      </Box>
    </Box>
  );
};

export default ShowImage;
