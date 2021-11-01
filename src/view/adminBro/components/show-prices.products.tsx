import React, { useState, useEffect } from 'react';
import { BasePropertyProps } from 'admin-bro';
import {
  Box,
  Label,
  MessageBox,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableHead,
} from '@admin-bro/design-system';
import axios from 'axios';

interface Product {
  variations: Array<any>;
}

const ShowImage: React.FC<BasePropertyProps> = (props) => {
  const { record } = props;
  const [product, setProduct] = useState<Product | undefined>();

  const pageConfigs = {
    apiMasterKey: 12345678,
    resourceType: 'products',
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
      setProduct(data);
    })();
  }, [record]);
  return (
    <Box variant="gray">
      <Label size="lg">Lista de Preços</Label>
      {product && product.variations.length > 0 ? (
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nome</TableCell>
              <TableCell>Descrição</TableCell>
              <TableCell>Preço</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {product.variations.map((variation) => (
              <TableRow>
                <TableCell>{variation.name}</TableCell>
                <TableCell>{variation.description}</TableCell>
                <TableCell>{variation.price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <MessageBox
          message="Nenhuma variação de preço cadastrada até o momento."
          variant="info"
        />
      )}
    </Box>
  );
};

export default ShowImage;
