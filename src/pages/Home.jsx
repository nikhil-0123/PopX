
export default function Home() {

  return (
    <div className="min-h-screen flex flex-col items-center justify-center shadow-lg rounded-xl">
      <nav className=" w-full h-14 bg-white">
        <div className="pl-4 m-2">
          <h1 className="text-black text-xl">Account Settings</h1>
        </div>
      </nav>
      <div className="w-full bg-gray-200 min-h-[600px] flex flex-col justify-top p-4">
          <div className="w-full flex gap-5">
            <div className=" relative">
              <img id="profile" src={require('../assets/profile.png').default} alt="Profile" className="w-18 rounded-full" />
              <img id="camera" src={require('../assets/camera.png').default} alt="camera" className=" absolute w-6 h-6 bottom-0 right-0" />
            </div>
            <div className="w-full  flex-col">
              <h5 className="font-bold">Marry Doe</h5>
              <p className="text-[16px] text-gray-700">marrydoe@gmail.com</p>
            </div>
          </div>

          <div className="text-[14px] mt-7">
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing 
            Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut 
            Labore Et Dolore Magna Aliquyam Erat, Sed Diam
          </div>

          <div className="border-y-2  border-gray-400 border-spacing-6 mt-5 pb-96 border-dashed"> 

          </div>
      </div>
    </div>
  );
}