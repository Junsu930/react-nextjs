import Link from 'next/link';

export default function EachMealPage({ params }) {
  return (
    <main>
      <h1>Each Meal Page</h1>
      <p>{params.slug}</p>
      <p>
        <Link href="/meals">meals page</Link>
      </p>
    </main>
  );
}
