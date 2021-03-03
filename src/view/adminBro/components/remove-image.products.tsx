import React, { useState, useEffect } from 'react';
import { BasePropertyProps } from 'admin-bro';
import {
  Box,
  MessageBox,
  Label,
  DropZoneItem,
} from '@admin-bro/design-system';
import axios from 'axios';
import styled from 'styled-components';

interface Images {
  id: Number;
  url: String;
  type: String;
}

const ImageCard = styled.div`
  width: 300px;
  margin: 3px;

  @media (max-width: 800px) {
    width: auto;
  }
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

const ShowImage: React.FC<BasePropertyProps> = (props) => {
  const { record } = props;
  const [images, setImages] = useState<Images[]>([]);

  const pageConfigs = {
    apiMasterKey: 12345678,
    resourceType: 'products',
    multiple: true,
  };

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        `/${pageConfigs.resourceType}/${record.id}`,
        {
          headers: {
            apiKey: pageConfigs.apiMasterKey,
          },
        },
      );
      setImages([...data.images, ...data.imagesDecorated]);
    })();
  }, [record]);

  const onRemove = async (imageId) => {
    const request = await axios.delete(`/images/${imageId}`, {
      headers: {
        apiKey: pageConfigs.apiMasterKey,
      },
    });
    alert(
      request.status === 204
        ? 'Imagem removida com sucesso'
        : 'Erro ao remover a imgem. Tente mais tarde.',
    );
    window.location.reload();
  };
  return (
    <Box variant="gray">
      <Label size="lg">Imagens do produto</Label>
      <ImageList>
        {images && images.length > 0 ? (
          images.map((image) => (
            <ImageCard>
              <DropZoneItem
                src={`${image.url}`}
                filename={`Imagem do produto - ${record.params.name}${
                  image.type === 'product-decorated'
                    ? ' (decorado)'
                    : ''
                }`}
                onRemove={() => onRemove(image.id)}
              />
            </ImageCard>
          ))
        ) : (
          <MessageBox
            message="Nenhuma imagem cadastrada para esse produto até o momento."
            variant="info"
          />
        )}
      </ImageList>
    </Box>
  );
};

export default ShowImage;
