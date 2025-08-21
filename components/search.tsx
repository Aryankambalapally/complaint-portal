'use client';
import { useSearchParams } from 'next/navigation';

export default function SearchParamsComponent() {
  const searchParams = useSearchParams();
  const error = searchParams?.get('error');

  if (error) {
    return <p>An error occurred: {error}</p>;
  }
  return null;
}