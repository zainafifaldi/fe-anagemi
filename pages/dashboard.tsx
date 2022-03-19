import Link from 'next/link';

export default function Dashboard() {
  return (
    <>
      <h1>Dashboard</h1>
      Back To {' '}
      <Link href="/auth/signin"><a className="abcd">Sign In</a></Link>
    </>
  );
}
