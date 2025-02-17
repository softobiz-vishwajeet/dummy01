import Link from 'next/link';

export default function Error() {
  return (
    <div className="min-vh-100 w-100 d-flex align-items-center justify-content-center overflow-hidden">
      <div className="bg-white py-3 px-4 rounded shadow-sm">
        <div className="mb-2 px-5 font-weight-bold">500 - Server error 😭</div>
        <div className="text-center">
          <Link href="/">Go Home</Link>
        </div>
      </div>
    </div>
  );
}
