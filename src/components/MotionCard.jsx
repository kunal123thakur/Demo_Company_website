

import React from 'react'

import { AnimatedTestimonials } from '../ui/animated-testimonials'

const testimonials = [
  {
    quote: "This is an amazing product!",
    name: "John Doe",
    designation: "CEO, Example Co.",
    src: "./img/contact-1.webp",
  },
  {
    quote: "I highly recommend this service.",
    name: "Jane Smith yo",
    designation: "CTO, Tech Co.",
    src: "./public/img/sherry-christian-8Myh76_3M2U-unsplash.jpg",
  },
  {
    quote: "This is an amazing product!",
    name: "John Doe",
    designation: "CEO, Example Co.",
    src: "./img/swordman.webp",
  },
  {
    quote: "I highly recommend this service.",
    name: "Jane Smith yo",
    designation: "CTO, Tech Co.",
    src: "./public/img/sherry-christian-8Myh76_3M2U-unsplash.jpg",
  },
  // Add more testimonials here
];

const MotionCard = () => {
  return (
    <div className=' '>
       
            <div>
            
            <AnimatedTestimonials  testimonials={testimonials} autoplay={true} />
            </div>
       
    </div>
  )
}

export default MotionCard