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

const openImage = (url: String) => {
  const newPage = window.open(`/static/${url}`, '_blank');
  newPage.focus();
};

const ShowImage: React.FC<BasePropertyProps> = (props) => {
  const { record } = props;
  const [images, setImages] = useState<Images[]>([]);
  console.log('[record]', record);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`/products/${record.id}`, {
        headers: {
          apiKey: 12345678,
        },
      });
      setImages([...data.images, ...data.imagesDecorated]);
    })();
  }, [record]);
  return (
    <Box variant="gray">
      <Label size="lg">Imagens do produto</Label>
      <ImageList>
        {images && images.length > 0 ? (
          images.map((image) => (
            <ImageCard>
              <a onClick={() => openImage(image.url)}>
                <DropZoneItem
                  src={`/static/${image.url}`}
                  filename={`Imagem do produto - ${
                    record.params.name
                  }${
                    image.type === 'product-decorated'
                      ? ' (decorado)'
                      : ''
                  }`}
                />
              </a>
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
