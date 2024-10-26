import React,{useEffect, useState} from 'react'
import { Modal, Button, Form, FloatingLabel } from 'react-bootstrap'
import { addCategoryAPI, getAllCategoryAPI, getSingleVideoAPI, removeCategoryAPI, removeVideoAPI, updateCategoryAPI } from '../services/allAPI';
import VideoCard from './VideoCard';

const Category = ({setRemoveVideoResponseFromCategory,removeVideoResponseFromView}) => {
  // state to hold category name
  const [allCategories,setAllCategories] = useState([])
  const [categoryName,setCategoryName] = useState("")
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(()=>{
    getAllCategory()
  },[removeVideoResponseFromView])

  const handleAddCategory = async ()=>{
    if (categoryName) {
      const categoryDetails = {categoryName,allVideos:[]}
      await addCategoryAPI(categoryDetails)
      handleClose()
      setCategoryName("")
      getAllCategory()
    }else{
      alert("Please fill the form completely!!!")
    }
  }

  const getAllCategory = async ()=>{
    const response = await getAllCategoryAPI()
    setAllCategories(response.data)
  }

  // console.log(allCategories);

  const deleteCategory = async(id)=>{
    await removeCategoryAPI(id)
    getAllCategory()
  }

  const dragOverCategory = e=>{
    e.preventDefault()
  }

  const videoDropOverCategory = async (e,categoryId)=>{
   const videoId = e.dataTransfer.getData("id")
    // console.log(`Video with id ${videoId} dropped inside category id : ${categoryId}`);
    // add video into category 
    // get dropping video details
    const {data} = await getSingleVideoAPI(videoId)
    console.log(data);
    // get details of dropping category and insert videoDetails of category allVideos
    const selectedCategory = allCategories?.find(item=>item.id==categoryId)
    selectedCategory.allVideos.push(data)
    // console.log(selectedCategory);
    // update selectedCategory into json file - call api 
    await updateCategoryAPI(categoryId,selectedCategory)
    // remove video from allVideos permanently using (already existed)removeVideoAPI with id
    const response = await removeVideoAPI(videoId)
    // pass response to view component usinng state lifting
    setRemoveVideoResponseFromCategory(response)
    // get all updated categories
    getAllCategory()
  }

  const categoryVideoDragStart = (e,categoryId,video)=>{
    console.log(`Video with id : ${video.id} from category with id : ${categoryId} has started dragging`);
    let dataShare = {categoryId,video}
    e.dataTransfer.setData("dataShare",JSON.stringify(dataShare))
  }

  return (
    <>
    <div className="d-flex justify-content-around align-items-center">
      <h3>All Categories</h3>
      <button onClick={handleShow} className="btn btn-info rounded-circle fs-5">+</button>
    </div>

    <div className="container-fluid mt-3">
      {
        allCategories?.length>0?
        allCategories?.map(categoryDetails=>(
          <div droppable="true" onDragOver={dragOverCategory} onDrop={e=>videoDropOverCategory(e,categoryDetails?.id)}  className="border rounded p-3 mb-2">
          <div className="d-flex justify-content-between">
            <h5>{categoryDetails?.categoryName}</h5>
            <button onClick={()=>deleteCategory(categoryDetails?.id)} className='btn'><i className='fa-solid fa-trash text-danger'></i></button>
          </div>
          {/* each category videos */}
          <div className="row mt-2">
            {
              categoryDetails?.allVideos?.length>0 && 
              categoryDetails?.allVideos?.map(video=>(
                <div draggable={true} onDragStart={e=>categoryVideoDragStart(e,categoryDetails?.id,video)} key={video?.id} className="col-md-4">
                  <VideoCard displayData={video} insideCategory={true}/>
                </div>
              ))
            }
          </div>
        </div>
        ))
        :
        <div className='text-danger'>No categories added yet!!!</div>
      }
    </div>

    <Modal
    show={show}
    onHide={handleClose}
    backdrop="static"
    keyboard={false}
    centered
  >
    <Modal.Header closeButton>
      <Modal.Title>Category Details!!!</Modal.Title>
    </Modal.Header>
    <Modal.Body>
    <FloatingLabel controlId="floatingInputName" label="Category Name" className="mb-3">
        <Form.Control onChange={e=>setCategoryName(e.target.value)} type="text" placeholder="Category Name" />
      </FloatingLabel>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Cancel
      </Button>
      <Button onClick={handleAddCategory} className="btn btn-info">Add</Button>
    </Modal.Footer>
  </Modal>
  </>
  )
}

export default Category