import { StudentDetail } from '@/components/swr';
import * as React from 'react';


export default function SWRPage () {
  return (
    <div>
      <h1>WSR playround</h1>
      <StudentDetail studentId='123'></StudentDetail>
    </div>
  );
}
