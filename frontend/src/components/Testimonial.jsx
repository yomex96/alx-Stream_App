// import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const testimonials = [
    {
        name: "John Doe",
        title: "CEO at Company",
        message: "This product is amazing! It has changed the way we work.",
        image: "1.jpeg"
    },
    {
        name: "Jane Smith",
        title: "Marketing Manager",
        message: "Excellent service and support. Highly recommended!",
        image: "2.jpg"
    },
    {
        name: "Michael Johnson",
        title: "Product Designer",
        message: "Creative and innovative solutions. A pleasure to work with.",
        image: "3.jpeg"
    },
    {
        name: "Emily Brown",
        title: "Developer",
        message: "Efficient and reliable service with a personal touch.",
        image: "4.jpg"
    },
    {
        name: "Chris Davis",
        title: "UX Researcher",
        message: "The best experience we've had with any service provider.",
        image: "5.jpg"
    },
    {
        name: "Sarah Wilson",
        title: "Project Manager",
        message: "Great communication and execution on all fronts.",
        image: "6.jpg"
    },
    {
        name: "Prince Amuche",
        title: "Robotics Engineer",
        message: "Highly skilled and professional team. Top-notch results.",
        image: "7.JPG"
    },
    {
        name: "Sophia Martinez",
        title: "HR Manager",
        message: "Fantastic support and guidance throughout our project.",
        image: "8.jpeg"
    },
    {
        name: "Daniel Kim",
        title: "Business Analyst",
        message: "Impressed by their understanding and delivery of our needs.",
        image: "9.jpeg"
    },
    {
        name: "Laura Moses",
        title: "Content Strategist",
        message: "They go above and beyond to ensure satisfaction.",
        image: "10.jpg"
    }
];

const Testimonial = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000, // 3 seconds interval
        arrows: false
    };

    return (
        <div className="py-16 bg-gray-100">
            <h2 className="text-3xl font-bold text-center mb-8">What Other Viewers Say</h2>
            <Slider {...settings} className="max-w-3xl mx-auto">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                        <img 
                            src={testimonial.image} 
                            alt={`${testimonial.name}`} 
                            className="w-24 h-24 rounded-full mx-auto mb-4"
                        />
                        <h3 className="text-xl font-semibold mb-2">{testimonial.name}</h3>
                        <p className="text-gray-500 mb-4">{testimonial.title}</p>
                        <p className="italic text-gray-600">"{testimonial.message}"</p>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default Testimonial;
