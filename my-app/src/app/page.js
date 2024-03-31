import Image from "next/image";

export default function Home() {
  return (
    // create a navbar on top of the page
    <div className="flex justify-between p-4 bg-gray-800 text-white">
      <div className="flex items-center">
        <Image src="/vercel.svg" alt="logo" width={40} height={40} />
        <h1 className="ml-2 text-3xl font-bold">
          
          Real State Services</h1>
      </div>
      <div className="flex items-center bg-gray-800">
        <button className="ml-6 bg-gray-800 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">
          Home
        </button>

        <button className="ml-6 bg-gray-800 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">
          Buyers
        </button>

        <button className="ml-6 bg-gray-800 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">
          What's my home worth?
        </button>

        <button className="ml-6 bg-gray-800 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">
          Loan Pre-Approval
        </button>

        <button className="ml-6 bg-gray-800 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">
          Properties
        </button>
      </div>
    </div>
  );
}
