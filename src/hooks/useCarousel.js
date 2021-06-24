import {  useEffect } from 'react';

export  default  function useCarousel(carouselContainer) {

    useEffect(() => {
        setTimeout(() => {
         const owl = document.jQuery(carouselContainer)
            owl.owlCarousel();
        } )
    }, [])

}
