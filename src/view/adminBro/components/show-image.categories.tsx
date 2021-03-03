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
  const newPage = window.open(`${url}`, '_blank');
  newPage.focus();
};

const ShowImage: React.FC<BasePropertyProps> = (props) => {
  const { record } = props;
  const [images, setImages] = useState<Images>();

  const pageConfigs = {
    apiMasterKey: 12345678,
    resourceType: 'categories',
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
      setImages(data.thumb);
    })();
  }, [record]);
  return (
    <Box variant="gray">
      <Label size="lg">Imagem da categoria</Label>
      {images && images.url ? (
        <ImageList>
          <ImageCard>
            <a onClick={() => openImage(images.url)}>
              <DropZoneItem
                src={`${images.url}`}
                filename={`Imagem da categoria - ${record.params.name}`}
              />
            </a>
          </ImageCard>
        </ImageList>
      ) : (
        <MessageBox
          message="Nenhuma imagem cadastrada para essa categoria até o momento."
          variant="info"
        />
      )}
    </Box>
  );
};

export default ShowImage;
