import Card from '../../components/Card';
import { WishContainer, DeleteButton, CardContainer } from './style';
import AddClothesButton from '../../components/Button/AddClothesButton';
import Header from '../../components/Header';
import { useState } from 'react';
import x from '../../assets/x.svg';
import { deleteWish } from '../../apis/wish';
import { useMutation } from '@tanstack/react-query';

export default function WishPage() {
  const [showDeleteButton, setShowDeleteButton] = useState(false);

  // 카드 데이터를 상태로 관리
  const [cardData, setCardData] = useState([
    {
      id: 1,
      title: '체크셔츠',
      date: '2024.09.22',
      tags: ['가을', '상의'],
      imageSrc:
        'https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-1430195_lifestyle?$rl_4x5_pdp$',
    },
    {
      id: 2,
      title: '패딩 재킷',
      date: '2024.01.12',
      tags: ['겨울'],
      imageSrc:
        'https://image.msscdn.net/thumbnails/images/goods_img/20240108/3780896/3780896_17065042559824_big.jpg?w=1200',
    },
    {
      id: 3,
      title: '반팔 티셔츠',
      date: '2024.06.15',
      tags: ['여름', '상의'],
      imageSrc:
        'https://image.msscdn.net/thumbnails/images/goods_img/20240430/4096643/4096643_17188607420995_big.jpg?w=1200',
    },
    {
      id: 4,
      title: '청바지',
      date: '2024.08.05',
      tags: ['여름', '하의'],
      imageSrc:
        'https://image.msscdn.net/thumbnails/images/goods_img/20240508/4114622/4114622_17168553676980_big.jpg?w=1200',
    },
  ]);

  const wish = useMutation({
    // useMutation 훅 사용
    mutationFn: (Id: number) => deleteWish(Id),
    onSuccess: (data, variables) => {
      alert('위시리스트에서 삭제되었습니다.');
      const updatedCards = cardData.filter(card => card.id !== variables);
      setCardData(updatedCards);
    },
    onError: () => {
      alert('위시리스트 삭제 중 오류가 발생했어요...');
    },
  });

  const onclick = () => {
    setShowDeleteButton(true);
  };

  return (
    <div>
      <Header
        text="위시리스트"
        showDeleteButton={true}
        onClickDelete={onclick}
      />
      <WishContainer>
        {cardData.map(item => (
          <CardContainer key={item.id}>
            {showDeleteButton && (
              <DeleteButton onClick={() => wish.mutate(item.id)}>
                <img src={x} alt="x" width="8px" />
              </DeleteButton>
            )}
            <Card
              title={item.title}
              date={item.date}
              tags={item.tags}
              imageSrc={item.imageSrc}
            />
          </CardContainer>
        ))}
        <AddClothesButton />
      </WishContainer>
    </div>
  );
}
