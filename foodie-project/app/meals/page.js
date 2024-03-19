import Link from 'next/link';

export default function MealsPage() {
  return (
    <main>
      <h1>Meals Page</h1>
      <p>
        <Link href="/meals/share">share page</Link>
      </p>
      <p>
        <Link href="/">main page</Link>
      </p>
    </main>
  );
}
