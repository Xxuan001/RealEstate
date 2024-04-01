import React from 'react';
import Image from 'next/image';
import NavBar from './navbar'; // Make sure the path is correct

function Page() {
  return (
    <div className="flex justify-between p-4 bg-gray-500 text-white">
      <div className="flex items-center">
        <Image src="/logo-.svg" alt="logo" width={120} height={100} />
        <h1 className="ml-2 text-3xl font-bold">
          Real State Services
        </h1>
      </div>
      <NavBar />
    </div>
  );
}

export default Page;