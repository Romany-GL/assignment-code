'use client';
import Link from 'next/link';
import React from 'react';

type ErrorPageProps = {
  error: Error & { digest?: string };
};

function ErrorPage({ error }: ErrorPageProps) {
  return (
    <div>
      <h2>{`Something went wrong!`}</h2>
      <p> {`Ref: ${error.digest ?? 'unknown'}`}</p>
      <Link href='/'>Go back home</Link>
    </div>
  );
}

export default ErrorPage;
