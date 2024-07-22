"use client"
import { useRouter } from 'next/navigation';
import React from 'react';

interface ButtonProps {
  color: string;
  title: string;
  subtitle: string;
  action: string;
}

function ScheduleMeetingButton({ color, title, subtitle, action }: ButtonProps) {
  const router = useRouter()

  const handleButtonClick = () => {
       action == "email" ? window.location.href = "mailto:office@pango.at" : router.push("/templates")
  };


  const bgColor = color == 'red' ? 'bg-red' : 'bg-orange'

  return (
    <>
      <button onClick={handleButtonClick} 
            className={`w-[350px] xl:w-[400px] py-3 px-10 text-center rounded-[60px] cursor-pointer shadow-lg hover:shadow-xl hover:shadow-${color} transition-shadow ${bgColor}` }>
        <p className="text-sm xl:text-lg font-bold text-center capitalize text-white">
          {title}
        </p>
        <p className="h-5 opacity-70 text-sm text-center capitalize text-white">
          {subtitle}
        </p>
      </button>
    </>
  );
};

export default ScheduleMeetingButton;
