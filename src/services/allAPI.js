// define all api for projects, it calls commpmAPI function
import commonAPI from "./commonAPI"
import SERVER_URL from "./serverUrl"


// uploadVideo api- api must call by ADD COMPONENT
export const uploadVideoAPI = async (video) => {
    return await commonAPI("POST", `${SERVER_URL}/allVideos`, video)
}

// getAllVideoAPI - called by VIEW COMPONENT
export const getAllVideoAPI = async () => {
    return await commonAPI("GET", `${SERVER_URL}/allVideos`, "")
}

// saveHistoryAPI - called by VideoCard
export const saveHistoryAPI = async (videoDetails) => {
    return await commonAPI("POST", `${SERVER_URL}/history`, videoDetails)
}

// getHistoryAPI - called by history
export const getHistoryAPI = async () => {
    return await commonAPI("GET", `${SERVER_URL}/history`, "")
}

// removeHistoryAPI -called by history
export const removeHistoryAPI = async (id) => {
    return await commonAPI("DELETE", `${SERVER_URL}/history/${id}`, {}) //if there is no content in the body we can place it as an empty string or object bt in the case od delete, they will expect empty object as the the empty body
}

// removeVideoAPI -called by VideoCard
export const removeVideoAPI = async (id) => {
    return await commonAPI("DELETE", `${SERVER_URL}/allVideos/${id}`, {})
}

// addCategoryAPI - called by category
export const addCategoryAPI = async (categoryDetails) =>{
    return await commonAPI("POST", `${SERVER_URL}/categories`, categoryDetails)
}

// getAllCategoryAPI - called by category
export const getAllCategoryAPI = async () =>{
    return await commonAPI("GET", `${SERVER_URL}/categories`, "")
}

// removeCategoryAPI - called by category
export const removeCategoryAPI = async (id)=>{
    return await commonAPI("DELETE", `${SERVER_URL}/categories/${id}`, {})
}

// getSingleVideoAPI -called by category
export const getSingleVideoAPI = async (id)=>{
    return await commonAPI("GET", `${SERVER_URL}/allVideos/${id}`, "")
}

// updateCategoryAPI - called by category
export const updateCategoryAPI = async (categoryId,updateCategoryDetails) =>{ //categoryId is a string and updateCategoryDetails is a object coz categoryDetails is a object
    return await commonAPI("PUT", `${SERVER_URL}/categories/${categoryId}`, updateCategoryDetails)
}

// getSingleCategoryAPI - call by category
export const getSingleCategoryAPI = async (id)=>{
    return await commonAPI("GET", `${SERVER_URL}/categories/${id}`, "")
}