
export default function Home() {
  return (
    <>

      <nav>
        <ul className="flex justify-around  bg-green-200 p-3 m-3 rounded-lg group">
          <li className="bg-green-500 hover:bg-green-600  cursor-pointer text-white p-1.5 rounded-lg">Home</li>
          <li className="bg-green-500 hover:bg-green-600  cursor-pointer text-white p-1.5 rounded-lg">About Us</li>
          <li className="bg-green-500 hover:bg-green-600  cursor-pointer text-white p-1.5 rounded-lg">Contact</li>
          <li className="bg-green-500 hover:bg-green-600  cursor-pointer text-white p-1.5 rounded-lg">Reviews</li>
        </ul>
      </nav>
{/* TODO Remove those borders and background later */}
      <div className=" flex flex-wrap md:flex-nowrap justify-around items-center ">
        <section className="p-5 bg-green-200 m-4 rounded-md  flex flex-col items-center justify-center">
          <h1 className="p-2 text-center text-green-700 text-xl font-bold">Heading</h1>
          <p className="p-2 text-left text-green-950">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus temporibus sed soluta placeat. Rem ex voluptate necessitatibus aliquid. Porro, excepturi?</p>
          <button className="p-1.5 text-center bg-green-500 text-white hover:cursor-pointer hover:bg-green-800 rounded-md">More Info</button>
        </section>
        <section className="p-5 bg-green-200 m-4 rounded-md  flex flex-col items-center justify-center">
          <h1 className="p-2 text-center text-green-700 text-xl font-bold">Heading</h1>
          <p className="p-2 text-left text-green-950">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus temporibus sed soluta placeat. Rem ex voluptate necessitatibus aliquid. Porro, excepturi?</p>
          <button className="p-1.5 text-center bg-green-500 text-white hover:cursor-pointer hover:bg-green-800 rounded-md">More Info</button>
        </section>
        <section className="p-5 bg-green-200 m-4 rounded-md flex flex-col items-center justify-center">
          <h1 className="p-2 text-center text-green-700 text-xl font-bold">Heading</h1>
          <p className="p-2 text-left text-green-950">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus temporibus sed soluta placeat. Rem ex voluptate necessitatibus aliquid. Porro, excepturi?</p>
          <button className="p-1.5 text-center bg-green-500 text-white hover:cursor-pointer hover:bg-green-800 rounded-md">More Info</button>
        </section>
      </div>
    </>

  )
}
