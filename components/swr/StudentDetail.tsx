import * as React from 'react';
import useSWR from 'swr';

export interface IStudentProps {
    studentId: string 
}

export function StudentDetail ({studentId}: IStudentProps) {
    const { data } = useSWR(`https://jsonplaceholder.typicode.com/posts/1`)
    console.log(data)
  return (
    <p>
     {JSON.stringify(data) } 
    </p>
  );
}
