const Carddesign = ({ icon, name, amt }) => {
    return (
      <div className="bg-white border-[1px] border-gray-400 rounded-lg shadow-md lg:w-[90%] w-full lg:h-[50vh] h-auto mb-4 lg:mb-0  p-8 inline-block items-center text-center">
        <div className="text-[#3aaced] rounded-full my-4 mb-10 flex items-center justify-center mr-4">
          {icon}
        </div>
        <div>
          <h2 className="text-[18px] font-bold text-[#183c7d] mb-5">{name}</h2>
          <p className="text-[#878c9f] text-[13px] w-[90%]">{amt}</p>
        </div>
      </div>
    );
  };
  
  export default Carddesign;