import * as React from 'react';
import useSWR from 'swr';

export interface IStudentProps {
    studentId: string 
}
const MILLISECOND_PER_HOUR =60 * 60 * 1000
export function StudentDetail ({studentId}: IStudentProps) {
    const { data, error, mutate, isValidating } = useSWR(`https://jsonplaceholder.typicode.com/posts/1`,{
      revalidateOnFocus: false,
      // dedupingInterval : MILLISECOND_PER_HOUR
    })
    function handleMutateCLick(){
      mutate({title: 'Pending ...'},false)
    }
  return (
    <>
    <p>
     {JSON.stringify(data) } 
    </p>
    <button onClick={handleMutateCLick}>Mutate</button>
  </> 
    );
}
