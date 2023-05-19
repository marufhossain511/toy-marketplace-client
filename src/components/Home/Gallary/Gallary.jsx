
const Gallary = () => {
      return (
      <div className="my-10">
        <h2 className="text-4xl my-6 font-bold text-center">Gallery</h2>
          <div className="grid grid-cols-1 grid-flow-row-dense sm:grid-cols-3 gap-x-2 gap-y-3">
           <div className=" rounded-lg shadow-xl min-h-[200px]">
            <img className="h-full" src="https://images.unsplash.com/photo-1542623024-a797a755b8d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bWFydmVsJTIwdG95fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="" />
           </div>
           <div className=" rounded-lg shadow-xl min-h-[200px] ">
            <img className="h-full" src="https://media.istockphoto.com/id/683821334/photo/sibling-warriors.jpg?s=612x612&w=0&k=20&c=N5E1D0ktdBTzmFD7eGCCFCq1Ep_ImVlU5r_rxT4xqwc=" alt="" />
           </div>
           <div className=" rounded-lg shadow-xl min-h-[200px] ">
            <img src="https://images.unsplash.com/photo-1611604548018-d56bbd85d681?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFydmVsJTIwdG95fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="" />
           </div>
          </div>
          <div className="grid grid-cols-1 grid-flow-row-dense sm:grid-cols-4 my-4 gap-x-2 gap-y-3">
          <div className=" rounded-lg shadow-xl min-h-[200px] col-span-1">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBvTNG83yxxDl_FfQ4A2fTfc4ePUNkrvuYBg&usqp=CAU" className="h-[300px] w-full " alt="" />
          </div>
           <div className=" rounded-lg shadow-xl min-h-[200px] col-span-2">
            <img className="w-full h-[300px]" src="https://media.istockphoto.com/id/471592903/photo/superman-and-bent-metal.jpg?s=612x612&w=0&k=20&c=_wnlZ9iRug_2nTkNlicgiBOqCNr3ooDKNUeB3vBCASU=" alt="" />
           </div>
           <div className=" rounded-lg shadow-xl min-h-[200px] col-span-1">
             <img className="object-cover h-[300px] w-full" src="https://media.istockphoto.com/id/458603411/photo/the-dark-knight.jpg?s=612x612&w=0&k=20&c=lGWrMnSxDXBltD2tDTSyCasR21PtA7vt2H-ub1xtzfE=" alt="" />
           </div>
          </div>
          <div className="grid grid-cols-1 grid-flow-row-dense sm:grid-cols-3 gap-x-2 gap-y-3">
          <div className="bg-blue-500 rounded-lg shadow-xl min-h-[200px]">
             <img className="h-[300px] w-full" src="https://media.istockphoto.com/id/683821284/photo/training.jpg?s=612x612&w=0&k=20&c=-cJ4UWcTWt_e8UUR6ZlqQ42Lfla9mLLcJLjvZHrCL5I=" alt="" />
          </div>
           <div className="bg-indigo-500 rounded-lg shadow-xl min-h-[200px]">
            <img className="h-[300px] w-full" src="https://images.unsplash.com/photo-1608889476561-6242cfdbf622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fG1hcnZlbCUyMHRveXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
           </div>
           <div className="bg-pink-500 rounded-lg shadow-xl min-h-[200px]">
            <img className="h-full" src="https://media.istockphoto.com/id/458623537/photo/iron-man-will-save-us.jpg?s=612x612&w=0&k=20&c=VfKAC1rA0tvFeESsm8DHI8b72ZVxCaTeTCYh692UJSc=" alt="" />
           </div>
          </div>
      </div>
      );
    
};

export default Gallary;