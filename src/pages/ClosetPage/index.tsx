import Card from '../../components/Card/Card'
export default function ClosetPage() {
  const tags = ['패션', '캐주얼', '2024'];
  return (
    <div>
      <h1>ClosetPage</h1>
      <Card title="체크셔츠" date="2024.09.22" tags={tags}/>
    </div>
  );
}