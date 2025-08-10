import React, { useEffect, useState } from "react"
import ReactStars from "react-rating-stars-component"
 
import { Swiper, SwiperSlide } from "swiper/react"  
import { Autoplay, FreeMode } from "swiper";              // Import Swiper React components
import "swiper/css"                                              // Import Swiper styles
import "swiper/css/free-mode"
import "swiper/css/pagination"
import "../../App.css"
import { FaStar } from "react-icons/fa"                         // Icons

import { apiConnector } from "../../services/apiconnector"          // Get apiFunction and the endpoint
import { ratingsEndpoints } from "../../services/apis"



function ReviewSlider(){

  const [reviews, setReviews] = useState([
  {
    user: { firstName: "John", lastName: "Doe", image: "" },
    course: { courseName: "Full Stack Web Development" },
    review: "EduSync has completely changed the way I study. The courses are well-structured, and the quizzes keep me engaged. Highly recommend!",
    rating: 5
  },
  {
    user: { firstName: "Sarah", lastName: "Lee", image: "" },
    course: { courseName: "Data Science Basics" },
    review: "Very helpful platform with a wide range of subjects. I just wish there were more interactive exercises for advanced topics.",
    rating: 4.5
  },
  {
    user: { firstName: "Michael", lastName: "Smith", image: "" },
    course: { courseName: "Machine Learning Essentials" },
    review: "I love how EduSync tracks my progress across all my courses. It motivates me to keep going every day.",
    rating: 5
  },
   {
    user: { firstName: "Priya", lastName: "Sharma", image: "" },
    course: { courseName: "Data Science with Python" },
    review: "The lessons are clear and practical. I especially like how EduSync includes real-world projects to practice what I’ve learned.",
    rating: 5
  },
  {
    user: { firstName: "Alex", lastName: "Williams", image: "" },
    course: { courseName: "UI/UX Design Fundamentals" },
    review: "I never thought online learning could be this engaging. The design course was easy to follow, and the feedback on my assignments was super helpful.",
    rating: 4
  },
  {
    user: { firstName: "Fatima", lastName: "Khan", image: "" },
    course: { courseName: "Digital Marketing Mastery" },
    review: "The course content is always up-to-date with the latest marketing trends. I’ve already applied strategies I learned here to my work.",
    rating: 5
  }
]);
  const truncateWords = 15


  // useEffect(() => {
  //   ;(async () => {
  //     const { data } = await apiConnector(
  //       "GET",
  //       ratingsEndpoints.REVIEWS_DETAILS_API
  //     )
  //     if (data?.success) {
  //       setReviews(data?.data)
  //     }

  //     // setReviews()
  //   })()
  // }, [])


  return (
    <div className="text-white">
      <div className="my-[50px] h-[184px] max-w-maxContentTab lg:max-w-maxContent">
        
        <Swiper  modules={[Autoplay, FreeMode]} className="w-full " slidesPerView={3} spaceBetween={25} loop={true} freeMode={true} autoplay={{delay: 2500,  disableOnInteraction: false, }} >

          {reviews.map((review, i) => {
            return (
              <SwiperSlide key = {i}>

                <div className="flex flex-col gap-3 bg-richblack-800 p-3 text-[14px] text-richblack-25">

                  <div className="flex items-center gap-4">
                    <img src = {review?.user?.image ? review?.user?.image : `https://api.dicebear.com/5.x/initials/svg?seed=${review?.user?.firstName} ${review?.user?.lastName}`}     
                        alt="" className="h-9 w-9 rounded-full object-cover" />        
                    
                    <div className="flex flex-col">
                      <h1 className="font-semibold text-richblack-5">{`${review?.user?.firstName} ${review?.user?.lastName}`}</h1>
                      <h2 className="text-[12px] font-medium text-richblack-500"> {review?.course?.courseName} </h2>
                    </div>
                  </div>

                  <p className="font-medium text-richblack-25">
                    {review?.review.split(" ").length > truncateWords ? `${review?.review.split(" ").slice(0, truncateWords).join(" ")} ...` : `${review?.review}`}
                  </p>

                  <div className="flex items-center gap-2 ">
                    <h3 className="font-semibold text-yellow-100"> {review.rating.toFixed(1)} </h3>
                    <ReactStars count={5} value={review.rating} size={20} edit={false} activeColor="#ffd700" emptyIcon={<FaStar />} fullIcon={<FaStar />} />
                  </div>

                </div>

              </SwiperSlide>
                  )})
              }

        </Swiper>

      </div>
    </div>

  
)}


export default ReviewSlider