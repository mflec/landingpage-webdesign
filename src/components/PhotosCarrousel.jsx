import React from "react";
import { Carousel } from 'react-responsive-carousel';

const PhotosCarrousel = () => {
    const photos = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpeg', '11.jpeg', '12.jpeg', '13.jpeg', '14.jpeg', '15.jpeg', '16.jpeg', '17.jpeg', '18.jpeg', '19.jpeg', '20.jpeg']
    return (<section id="photos"
        className="p-16 flex flex-col text-center align-center justify-center">
        <h1 className="text-[40px] font-bold text-sky-900 ">Nuestro trabajo</h1>
        {/* {photos.map(photo => <div>
            <img src={photo} className="w-1/2" />
        </div>)} */}


    </section>)

}

export default PhotosCarrousel