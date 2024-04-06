import { useRouter } from 'next/router';
import React from 'react';

export default function Code() {
  const router = useRouter();
  const { code } = router.query;
  return <div>catch all router {code}</div>;
}
