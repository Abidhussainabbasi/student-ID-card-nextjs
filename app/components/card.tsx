import React from 'react';

interface CardProps {
  name: string;
  rollno: number;
  day: string;
}

const Card: React.FC<CardProps> = ({ name, rollno, day }) => {
  return (
    <div className="bg-blue-100 shadow-md rounded-lg p-6 max-w-sm my-4 border-l-4 border-blue-500">
      <h2 className="text-2xl font-bold text-blue-900">{name}</h2>
      <p className="text-lg text-blue-700">Roll No: {rollno}</p>
      <p className="text-lg text-blue-700">Day: {day}</p>
    </div>
  );
};

export default Card;

