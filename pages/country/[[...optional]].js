import { useRouter } from 'next/router';
import React from 'react';

export default function Optional() {
  const router = useRouter();
  const { optional } = router.query;
  return <div>optional {optional}</div>;
}
