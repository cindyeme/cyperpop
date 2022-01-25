// import fileModel from "../models/file"

// const fileController = {
//     /**
//    * saveFile - upload file from object.
//    * @param obj - object that need to upload
//    * @returns {Promise<void>}
//    */

//     saveFile:async(obj:any)=>{
//         try {
//             let fileData = await new fileModel(obj)
//             await fileData.save()
//             return fileData;
//         } catch (error) {
//             throw error
//         }
//     },
//     /**
//    * getFile - get file from _id.
//    * @param _id - _id from which file to be found
//    * @returns {Promise<void>}
//    */
//     getFile:async(_id:any)=>{
//         try {
//             let fileData = await fileModel.findOne({_id})
//             return fileData
//         } catch (error) {
//             throw error
//         }
//     }

// }

// export default fileController