export const startDragging = (e, item, setMouseDown, setStartX, setscrollLeft) => {
    e.stopPropagation()
    setMouseDown(true);
    setStartX(e.pageX - item.offsetLeft)
    setscrollLeft(item.scrollLeft)

}

export const stopDragging = (e, setMouseDown) => {
    e.stopPropagation()
    setMouseDown(false);
}


export const move = (e, item, mouseDown, startX, scrollLeft) => {
    e.preventDefault();
       if (!mouseDown) { return; }
    const x = e.pageX - item.offsetLeft;
    const scroll = x - startX;
    item.scrollLeft = scrollLeft - scroll;
}



export const movementMouse=(slider,props,e,isLoading)=>{
    if(!isLoading){
    let {mouseDown,startX,scrollLeft}=props
    if(slider){
        slider.forEach((item) => {
            move(e, item, mouseDown, startX, scrollLeft)
         
          })
    }}
  
}


export const mouseDrag=(slider,props,e,isLoading)=>{
    if(!isLoading){
    let {setscrollLeft,setMouseDown,setStartX}=props
    if(slider){
        slider.forEach((item) => {
            startDragging(e, item, setMouseDown, setStartX, setscrollLeft)
            
          })
    }}
   
}
export const stopMouseDrag=(slider,props,e,isLoading)=>{
   if(!isLoading){
    let {setMouseDown}=props
    if(slider){
        slider.forEach((item) => {
            stopDragging(e, setMouseDown)
         
          })
    }
   }
   
   
}

