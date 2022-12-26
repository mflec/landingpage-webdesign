import React from "react";
import {
    RiArrowDropLeftFill,
    RiArrowDropRightFill
} from "react-icons/ri";

const PhotosCarrousel = () => {
    const photos = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpeg', '8.jpg', '9.jpg', '10.jpeg', '11.jpeg', '12.jpeg', '13.jpeg', '14.jpeg', '15.jpeg', '16.jpeg', '17.jpeg', '18.jpeg', '19.jpeg']
    const [selectedPhoto, setSelectedPhoto] = React.useState(0)

    function onPress(position) {
        if (selectedPhoto == 0 && position == -1) {
            setSelectedPhoto(18)
        } else if (selectedPhoto == photos.length - 1 && position == 1) {
            setSelectedPhoto(0)
        } else {
            setSelectedPhoto(selectedPhoto + position)
        }
    }

    return (<section id="photos"
        className="py-8 flex flex-col text-center align-center justify-center">
        <h1 className="text-[40px] font-bold text-sky-900 mb-14 ">Nuestro trabajo</h1>
        <div className="flex flex-col md:flex-row md:flex-wrap md:items-center items-center	 md:justify-between">
            <button onClick={() => onPress(-1)}>
                <RiArrowDropLeftFill className="mx-[10%] text-sky-900 text-4xl rounded-full box-content" />
            </button>
            <img src={photos[selectedPhoto]} className="h-80" />
            <button onClick={() => onPress(1)}>
                <RiArrowDropRightFill className="mx-[10%] text-sky-900 text-4xl rounded-full box-content" />
            </button>
        </div>
    </section >)

}

export default PhotosCarrousel