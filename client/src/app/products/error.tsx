'use client';
import Link from 'next/link';
import React from 'react';

type ErrorPageProps = {
  error: Error & { digest?: string };
  reset?: () => void;
};

function ErrorPage({ error, reset }: ErrorPageProps) {
  return (
    <div>
      <h2>{error.digest ?? 'Something went wrong!'}</h2>
      <Link href='/'>Go back home</Link>
    </div>
  );
}

export default ErrorPage;
