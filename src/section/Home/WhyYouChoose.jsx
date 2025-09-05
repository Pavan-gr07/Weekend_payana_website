import React from 'react'
import { features } from '../../data/static_data'
import MainContainer from '../../components/MainContainer'

const WhyYouChoose = () => {
  return (
    <MainContainer>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Why Choose <span className="text-yellow-500">Weekend Payana</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We make travel dreams come true with our exceptional services and unforgettable experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:bg-yellow-50">
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-black mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </MainContainer>
  )
}

export default WhyYouChoose