// import React, { useState, useEffect } from 'react';
// import 'react-upload-gallery/dist/style.css';
// import RUG, { DragArea, DropArea } from 'react-upload-gallery';
// import tw from 'twin.macro';
// const Image = tw.img`h-20 w-20`;
// const Choose = tw.button` mt-2 py-2  px-5 bg-blue-600 text-sm text-black rounded-full font-bold  shadow-lg capitalize text-xs transition duration-200 transform focus:outline-none focus:outline-none hover:bg-blue-700  focus:-translate-y-px focus:shadow-xl`;
// const limit = 1;

// export const GalleryUpload = () => (
//   <RUG
//     onChange={(images) => {
//       //   setFiles((prev) => ({ ...prev, images, readyState: files.images.length < 1 }));
//     }}
//     header={false}
//     rules={{ limit }}
//     accept={['jpg', 'jpeg', 'png']}
//   >
//     {(images) => {
//       const { length } = images;

//       return (
//         <DropArea>
//           {(isDrag) => (
//             <div>
//               <div>
//                 <Choose type="button">Choose Image</Choose>
//               </div>

//               {length ? (
//                 <DragArea>
//                   {(image) => (
//                     <div>
//                       <Image src={image} alt="image" />
//                     </div>
//                   )}
//                 </DragArea>
//               ) : (
//                 <div>
//                   <h1 className="h1 text-base sm:text-lg lg:text-2xl text-center mb-8 mt-4 text-gray-700">
//                     Drop Image Here
//                   </h1>
//                 </div>
//               )}
//             </div>
//           )}
//         </DropArea>
//       );
//     }}
//   </RUG>
// );
