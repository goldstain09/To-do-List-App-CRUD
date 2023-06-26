import React from 'react';
import Input from './Input';
import Lists from './Lists';
import './TodoHome.css';

export default function TodoHome() {
  return (
    <div className='container-fluid'>
        <div className='container'>
            <div className='row'>
            <Input  />
            <Lists  />
            </div>
        </div>
    </div>
  )
}

//  The difference in both projects is that if someone delete that particular to-do on the time of edit of same to-do 
//  it will append in the end on updating because it was deleted...