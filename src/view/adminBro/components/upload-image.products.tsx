import React, { useState, useEffect } from 'react';
import { BasePropertyProps } from 'admin-bro';
import {
  Box,
  Header,
  DropZoneItem,
  Button,
} from '@admin-bro/design-system';
import axios from 'axios';
import styled from 'styled-components';

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

const ImageList = styled.section`
  max-width: 920px;
  height: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 10px;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const ImageCard = styled.div`
  width: 300px;
  margin: 3px;

  @media (max-width: 800px) {
    width: auto;
  }
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

const pageConfigs = {
  redirectPageAfterUpload: '/admin/resources/products',
  apiMasterKey: 12345678,
  imageResourceType: 'product',
  multiple: true,
};

const ShowImage: React.FC<BasePropertyProps> = (props) => {
  const { record } = props;
  const [images, setImage] = useState({ preview: [] });
  const [data, setData] = useState([]);
  const [formValues, setFormValues] = useState({});
  const [onUpload, setOnUpload] = useState(false);

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

  const onRemove = (indexFromRemove) => {
    const filterData = data.filter(
      (values, index) => index !== indexFromRemove,
    );
    setData(filterData);
  };

  useEffect(() => {
    (() => {
      const resultPreview = [...data, ...images.preview];
      setData(resultPreview);
    })();
  }, [images]);

  const handleChange = (event) => {
    const auxValues = { ...formValues };
    auxValues[event.target.name] = event.target.value;
    setFormValues(auxValues);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setOnUpload(true);
    await Promise.all(
      data.map(async (currentImage) => {
        const request = await axios.post(
          `/imagesBase64`,
          {
            type: formValues.type || pageConfigs.imageResourceType,
            objectId: record.id,
            image: currentImage,
          },
          { headers: { apiKey: pageConfigs.apiMasterKey } },
        );
        return request;
      }),
    );

    alert('Envio de imagens realizado');
    window.location.assign(pageConfigs.redirectPageAfterUpload);
    setOnUpload(false);
  };

  return (
    <Box variant="gray">
      <Box variant="white">
        <Box>
          <form encType="multipart/form-data" onSubmit={handleSubmit}>
            <Header.H4>Selecione o tipo da Imagem</Header.H4>
            <Select required name="type" onChange={handleChange}>
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
                multiple={pageConfigs.multiple}
                onChange={(event): void => onDrop(event)}
              />
              Clique ou arraste aqui sua(as) imagens
            </StyledDropZone>
            <ImageList>
              {images &&
                data.map((image, index) => (
                  <ImageCard key={index}>
                    <DropZoneItem
                      src={image}
                      key={index}
                      filename={`Arquivo ${
                        index + 1
                      } carregado com sucesso.`}
                      onRemove={(): void => onRemove(index)}
                    />
                  </ImageCard>
                ))}
            </ImageList>

            <Button
              label={
                !onUpload
                  ? pageConfigs.multiple
                    ? `Enviar imagens`
                    : `Enviar imagem`
                  : 'Realizando o envio...'
              }
              disabled={onUpload}
            />
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default ShowImage;
