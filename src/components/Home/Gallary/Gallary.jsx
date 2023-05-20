// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const Gallary = () => {
    useEffect(() => {
        AOS.init({
            duration: 650,
            // once: true
          });
      }, [])
      return (
      <div className="my-10 sm:mx-20">
        <h2 className="text-4xl my-6 font-bold text-center">Gallery</h2>
        {/* col 1 */}
          <div className="grid grid-cols-1 grid-flow-row-dense sm:grid-cols-3 gap-x-2 gap-y-3">
           <div data-aos="fade-right" className=" rounded-lg shadow-xl min-h-[200px]">
            <img className="h-full" src="https://images.unsplash.com/photo-1542623024-a797a755b8d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bWFydmVsJTIwdG95fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="" />
           </div>
           <div data-aos="fade-down" className=" rounded-lg shadow-xl min-h-[200px] ">
            <img className="h-full" src="https://media.istockphoto.com/id/683821334/photo/sibling-warriors.jpg?s=612x612&w=0&k=20&c=N5E1D0ktdBTzmFD7eGCCFCq1Ep_ImVlU5r_rxT4xqwc=" alt="" />
           </div>
           <div data-aos="fade-left" className=" rounded-lg shadow-xl min-h-[200px] ">
            <img className='h-[300px] ' src="https://m.media-amazon.com/images/I/71zYfL6qnNL._AC_UL400_.jpg" alt="" />
           </div>
          </div>
          {/* col 2 */}
          <div  className="grid grid-cols-1 grid-flow-row-dense sm:grid-cols-4 my-4 gap-x-2 gap-y-3">
          <div data-aos="fade-down-right" className=" rounded-lg shadow-xl min-h-[200px] col-span-1">
            <img src="https://m.media-amazon.com/images/I/81ec9J+H0XL._AC_UL400_.jpg" className="h-[300px] w-full " alt="" />
          </div>
           <div data-aos="flip-down" className=" rounded-lg shadow-xl min-h-[200px] col-span-2">
            <img className="w-full h-[300px]" src="https://media.istockphoto.com/id/471592903/photo/superman-and-bent-metal.jpg?s=612x612&w=0&k=20&c=_wnlZ9iRug_2nTkNlicgiBOqCNr3ooDKNUeB3vBCASU=" alt="" />
           </div>
           <div data-aos="fade-down-left" className=" rounded-lg shadow-xl min-h-[200px] col-span-1">
             <img className=" h-[300px] w-full" src="https://m.media-amazon.com/images/I/61YzsFQ-NQL._AC_UL400_.jpg" alt="" />
           </div>
          </div>
          {/* col-3 */}
          <div className="grid grid-cols-1 grid-flow-row-dense sm:grid-cols-3 gap-x-2 gap-y-3">
          <div data-aos="zoom-out-right" className=" rounded-lg shadow-xl min-h-[200px]">
             <img className="h-[300px] w-full" src="https://media.istockphoto.com/id/683821284/photo/training.jpg?s=612x612&w=0&k=20&c=-cJ4UWcTWt_e8UUR6ZlqQ42Lfla9mLLcJLjvZHrCL5I=" alt="" />
          </div>
           <div data-aos="zoom-out-up" className="rounded-lg shadow-xl min-h-[200px]">
            <img className="h-[300px] w-full" src="https://images.unsplash.com/photo-1608889476561-6242cfdbf622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fG1hcnZlbCUyMHRveXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
           </div>
           <div data-aos="zoom-out-left" className="rounded-lg shadow-xl min-h-[200px]">
            <img className="h-[300px]" src="https://m.media-amazon.com/images/I/71QmDTMQBLL._AC_UL400_.jpg" alt="" />
           </div>
          </div>
      </div>
      );
    
};

export default Gallary;