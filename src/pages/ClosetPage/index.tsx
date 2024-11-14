import React, { useState } from 'react';
import Header from '../../components/Header';
import Card from '../../components/Card';
import { ClosetContainer, DeleteButton, CardContainer } from './style';
import AddClothesButton from '../../components/Button/AddClothesButton';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getCloset, deleteCloset } from '../../apis/closet';
import x from '../../assets/x.svg';
import { ReactComponent as Spinner } from '../../assets/spin.svg';

interface ClosetCardInfo {
  id: number;
  name: string;
  createDate: string;
  tagList: string[];
  imageUrl: string;
}

export default function ClosetPage() {
  const [showDeleteButton, setShowDeleteButton] = useState(false);
  const queryClient = useQueryClient();

  const { isLoading, isError, data, error } = useQuery<{
    clothes: ClosetCardInfo[];
  }>({
    queryFn: getCloset,
    queryKey: ['closet'],
  });

  const closetDelete = useMutation({
    mutationFn: (id: number) => deleteCloset(id),
    onSuccess: (_, id) => {
      queryClient.setQueryData(
        ['closet'],
        (oldData: { clothes: ClosetCardInfo[] } | undefined) =>
          oldData
            ? { clothes: oldData.clothes.filter(item => item.id !== id) }
            : undefined,
      );
      alert('옷장에서 삭제되었습니다.');
      console.log(data);
      setShowDeleteButton(false);
    },
    onError: error => {
      alert('옷장 삭제 중 오류가 발생했습니다.');
      console.log(data);
      console.log(error.message);
    },
  });
  if (isLoading) {
    return <div><Spinner/></div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <Header
        text="옷장"
        showDeleteButton={true}
        onClickDelete={() => setShowDeleteButton(true)}
      />
      <ClosetContainer>
        {data?.clothes?.map((item: ClosetCardInfo) => (
          <CardContainer key={item.id}>
            {showDeleteButton && (
              <DeleteButton onClick={() => closetDelete.mutate(item.id)}>
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
        <AddClothesButton linkTo="closet" />
      </ClosetContainer>
    </div>
  );
}
