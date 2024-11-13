import React, { useState } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import Card from '../../components/Card';
import { WishContainer, DeleteButton, CardContainer } from './style';
import AddClothesButton from '../../components/Button/AddClothesButton';
import Header from '../../components/Header';
import x from '../../assets/x.svg';
import { deleteWish, getWish } from '../../apis/wish';

export default function WishPage() {
  const [showDeleteButton, setShowDeleteButton] = useState(false);

  interface WishItem {
    id: number;
    name: string;
    createDate: string;
    tagList: string[];
    imageUrl: string;
  }

  const { isLoading, isError, data, error } = useQuery<{
    data: { clothes: WishItem[] };
  }>({
    queryKey: ['wish'],
    queryFn: getWish,
  });
  console.log(data);

  const queryClient = useQueryClient();

  const wish = useMutation({
    mutationFn: (id: number) => deleteWish(id),
    onSuccess: (_, id) => {
      queryClient.setQueryData(
        ['getWish'],
        (oldData: { clothes: WishItem[] } | undefined) =>
          oldData
            ? { clothes: oldData.clothes.filter(item => item.id !== id) }
            : undefined,
      );
      alert('위시리스트에서 삭제되었습니다.');
    },
    onError: () => {
      alert('위시리스트 삭제 중 오류가 발생했습니다.');
    },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <Header
        text="위시리스트"
        showDeleteButton={true}
        onClickDelete={() => setShowDeleteButton(true)}
      />
      <WishContainer>
        {data?.data?.clothes?.map((item: WishItem) => (
          <CardContainer key={item.id}>
            {showDeleteButton && (
              <DeleteButton onClick={() => wish.mutate(item.id)}>
                <img src={x} alt="x" width="8px" />
              </DeleteButton>
            )}
            <Card
              title={item.name}
              date={item.createDate}
              tags={item.tagList}
              imageSrc={item.imageUrl}
            />
          </CardContainer>
        ))}
        <AddClothesButton linkTo="wish" />
      </WishContainer>
    </div>
  );
}
