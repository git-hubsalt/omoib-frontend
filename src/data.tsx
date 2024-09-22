import Cold from "./assets/faces/cold-face.svg";
import Tongue from "./assets/faces/face-with-tongue.svg";
import Hot from "./assets/faces/hot-face.svg";
import Hearts from "./assets/faces/smiling-face-with-hearts.svg";
import Smilling from "./assets/faces/smiling-face.svg";
import Unamused from "./assets/faces/unamused-face.svg";

export const recommendationData = [{
    id: 1,
    date: '2024.07.24',
    categories: [
      {
        category: '상의',
        items: [
          {
            name: '내가 좋아하는 후드티',
            tags: ['가을', '상의']
          }
        ]
      },
      {
        category: '하의',
        items: [
          {
            name: '맨날 입는 청바지',
            tags: ['가을', '하의']
          }
        ]
      },
      {
        category: '기타',
        items: [
          {
            name: '컨버스',
            tags: ['가을', '상의']
          },
          {
            name: '에어포스',
            tags: ['가을', '상의']
          }
        ]
      }
    ]
  },
  { 
    id: 2,
    date: '2024.07.27',
    categories: [
      {
        category: '상의',
        items: [
          {
            name: '후드티',
            tags: ['가을', '상의']
          }
        ]
      },
      {
        category: '하의',
        items: [
          {
            name: '청바지',
            tags: ['가을', '하의']
          }
        ]
      },
      {
        category: '기타',
        items: [
          {
            name: '컨버스',
            tags: ['가을', '상의']
          },
          {
            name: '에어포스',
            tags: ['가을', '상의']
          }
        ]
      }
    ]
  },
];


export const fittingData = [{
  id: 1,
  date: '2024.07.24',
  categories: [
    {
      category: '상의',
      items: [
        {
          name: '내가 좋아하는 후드티',
          tags: ['가을', '상의']
        }
      ]
    },
    {
      category: '하의',
      items: [
        {
          name: '맨날 입는 청바지',
          tags: ['가을', '하의']
        }
      ]
    },
    {
      category: '기타',
      items: [
        {
          name: '컨버스',
          tags: ['가을', '상의']
        },
        {
          name: '털모자',
          tags: ['겨울', '상의']
        }
      ]
    }
  ]
}];

export const ReviewData = {
  temperature: [
    { label: '추웠어요', emojiSrc: Cold },
    { label: '좋았어요', emojiSrc: Smilling },
    { label: '더웠어요', emojiSrc: Hot },
  ],
  likeability: [
    { label: '별로예요', emojiSrc: Unamused },
    { label: '좋았어요', emojiSrc: Tongue },
    { label: '다음에 또 입을래요', emojiSrc: Hearts },
  ],
};
