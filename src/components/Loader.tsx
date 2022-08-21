const Loader = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center my-8">
      <div className="flex gap-2">
        <div className="bg-indigo-600 p-2  w-4 h-4 rounded-full animate-bounce circle-one"></div>
        <div className="bg-indigo-600 p-2 w-4 h-4 rounded-full animate-bounce circle-two"></div>
        <div className="bg-indigo-600 p-2  w-4 h-4 rounded-full animate-bounce circle-three"></div>
      </div>
      <p>Loading</p>
    </div>
  );
};

export default Loader;
