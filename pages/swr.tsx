import { StudentDetail } from '@/components/swr';
import  React, { useState } from 'react';


export default function SWRPage () {

  const [detaitList , setDetailtList] = useState([1,1,1])
  function handleAddClick(){
    setDetailtList(prevList => [...prevList , 1])
  }

  return (
    <div>
      <h1>WSR playround</h1>
      <button onClick={handleAddClick}>Add detail</button>
      {
        detaitList.map((x, index)=>(<StudentDetail key={index} studentId='123'></StudentDetail>) )
      }
    </div>
  );
}
