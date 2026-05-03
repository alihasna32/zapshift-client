import React from 'react'

export const ReviewsCard = ({review}) => {
    const { userName, review: testimonial, user_photoURL } = review;
  return (
    <div class="max-w-sm p-6 bg-white shadow rounded-xl border border-gray-200">
      <div class="text-teal-300 text-4xl leading-none">“</div>

      <p class="text-gray-600 mt-3">{testimonial}</p>

      <div class="border-t border-dashed border-gray-300 my-5"></div>

      <div class="flex items-center gap-3">
        <div class="w-10 h-10 rounded-full bg-teal-800">
          <img src={user_photoURL} alt="" />
        </div>

        <div>
          <h4 class="font-semibold text-gray-900">{userName}</h4>
          <p class="text-gray-500 text-sm">Senior Product Designer</p>
        </div>
      </div>
    </div>
  );
}
