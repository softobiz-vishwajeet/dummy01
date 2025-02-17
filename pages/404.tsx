import Link from 'next/link';

export default function Custom404() {
  return (
    <div className="min-vh-100 w-100 d-flex align-items-center justify-content-center overflow-hidden">
      <div className="bg-white py-3 px-4 rounded shadow-sm">
        <div className="mb-2 font-weight-bold">404 - This page could not be found. 😅</div>
        <div className="text-center">
          <Link href="/">Go Home</Link>
        </div>
      </div>
    </div>
  );
}
