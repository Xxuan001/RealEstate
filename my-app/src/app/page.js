import React from 'react';
import Image from 'next/image';
import NavBar from './navbar'; // Make sure the path is correct

function Page() {
  return (
    <div className="flex justify-between p-4 bg-gray-800 text-white">
      <div className="flex items-center">
        <button>
        <Image src="/logo_.png" alt="logo" width={130} height={130} />
        </button>
      </div>
      <NavBar />
    </div>
  );
}

export default Page;