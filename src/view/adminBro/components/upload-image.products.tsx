import React, { useState, useCallback, useEffect } from 'react';
import { BasePropertyProps } from 'admin-bro';
import {
  Box,
  Header,
  Label,
  DropZone,
  DropZoneItem,
} from '@admin-bro/design-system';
import axios from 'axios';
import styled from 'styled-components';
import { set } from 'core-js/fn/reflect';
import { forEach } from 'core-js/fn/dict';

const Select = styled.select`
  max-width: 400px;
  width: 350px;
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
`;

const Option = styled.option`
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
`;

const StyledDropZone = styled.div`
  border: 1px dashed gray;
  position: relative;
  text-align: center;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

const UploadInput = styled.input`
  font-size: 100px;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
  bottom: 0;
  cursor: pointer;
  width: 100%;
`;

const optionsValues = [
  {
    value: 'product-decorated',
    label: 'Produto Decorado',
    hidden: true,
  },
  {
    value: 'product',
    label: 'Foto do produto',
    hidden: true,
  },
  {
    value: 'wood-type',
    label: 'Acabamento',
    hidden: false,
  },
  {
    value: 'category',
    label: 'Categoria do Produto',
    hidden: false,
  },
];

const ShowImage: React.FC<BasePropertyProps> = (props) => {
  const { record } = props;
  const [images, setImage] = useState({ preview: [] });
  const [data, setData] = useState([]);

  const onDrop = (event) => {
    event.preventDefault();
    const fileList =
      event.target.files.length > 0 ? event.target.files : [];

    for (let i = 0; i < fileList.length; i++) {
      const reader = new FileReader();
      reader.onload = (upload) => {
        setImage({
          preview: [upload.target.result],
        });
      };
      reader.readAsDataURL(fileList[i]);
    }
  };

  useEffect(() => {
    (() => {
      const result = [...data, ...images.preview];
      setData(result);
    })();
  }, [images]);

  const configs = {
    multiple: true,
  };

  return (
    <Box variant="gray">
      <Box variant="white">
        <Box>
          <form>
            <Header.H4>Selecione o tipo da Imagem</Header.H4>
            <Select>
              <Option hidden>Tipo da Imagem</Option>
              {optionsValues
                .filter((option) => option.hidden === true)
                .map((option, index) => (
                  <Option value={option.value} key={index}>
                    {option.label}
                  </Option>
                ))}
            </Select>
            <Header.H4>Faça o upload das imagens abaixo</Header.H4>
            <StyledDropZone>
              <UploadInput
                type="file"
                name="files[]"
                multiple={configs.multiple}
                onChange={(event): void => onDrop(event)}
              />
              Clique ou arraste aqui sua(as) imagens
            </StyledDropZone>
            {images &&
              data.map((image, index) => (
                <DropZoneItem src={image} key={index} />
              ))}
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default ShowImage;
