import React from "react";
import {
    RiArrowDropLeftFill,
    RiArrowDropRightFill
} from "react-icons/ri";

const PhotosCarrousel = () => {
    const photos = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpeg', '8.jpg', '9.jpg', '10.jpeg', '11.jpeg', '12.jpeg', '13.jpeg', '14.jpeg', '15.jpeg', '16.jpeg', '17.jpeg', '18.jpeg', '19.jpeg']
    const links = ['']
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
        className="flex flex-col text-center items-center justify-center">
        <h1 className="text-[40px] font-bold text-sky-900  ">NUESTRO LABOR</h1>
        <div className="flex flex-col md:flex-row md:flex-wrap md:items-center items-center md:justify-between">
            <a href="https://www.facebook.com/profile.php?id=100085517293860" target="_blank">
                <iframe src="https://www.facebook.com/plugins/video.php?height=220&href=https%3A%2F%2Fwww.facebook.com%2F100085517293860%2Fvideos%2F498270235743378%2F&show_text=true&width=273&t=0" width="273" height="332" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>
            </a>
            <div className="py-12 flex flex-row md:flex-wrap md:items-center items-center">
                <button onClick={() => onPress(-1)}>
                    <RiArrowDropLeftFill className="text-sky-900 text-4xl rounded-full box-content" />
                </button>
                <img src={photos[selectedPhoto]} className="w-60 h-60 md:h-80  md:w-80" />
                <button onClick={() => onPress(1)}>
                    <RiArrowDropRightFill className="text-sky-900 text-4xl rounded-full box-content" />
                </button>
            </div>
        </div>
    </section >)

}

export default PhotosCarrousel