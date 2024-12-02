
import food from "/images/food.jpeg";
import covid from "/images/covid.jpeg";
import device from "/images/device.jpeg";
import product from "/images/products.jpeg";
import cyber from "/images/cyber.jpeg";
import media from "/images/media.jpeg";
import React from "react";
import Image from "next/image";

// Define types for the topics data
type Topic = {
  name: string;
  image: string;
  correct_percentage: number;
};

type TopicsData = {
  weakest: Topic[];
  strongest: Topic[];
};

const TopicsCard = ({ topics }: { topics: TopicsData }) => {
  const weekestimages = [food, covid, device];
  const strongestimages = [product, cyber, media];
  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Weakest Topics */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-bold text-gray-500 mb-4">Weakest Topics</h3>
        {topics.weakest.map((topic, index) => (
          <div key={index} className="flex items-center mb-4">
            <Image
            //   src={topic.image}
            src={
                index < weekestimages.length
                  ? weekestimages[index]
                  : topic.image
              }
              alt={topic.name}
              width={50}
              height={50}
              className="rounded-md"
            />
            <div className="ml-4 w-full">
              <div className="flex justify-between text-sm font-medium text-gray-700">
                <span>{topic.name}</span>
                <span>{topic.correct_percentage}% Correct</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                <div
                  className="bg-red-500 h-2 rounded-full"
                  style={{ width: `${topic.correct_percentage}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Strongest Topics */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-bold text-gray-500 mb-4">
          Strongest Topics
        </h3>
        {topics.strongest.map((topic, index) => (
          <div key={index} className="flex items-center mb-4">
            <Image
            //   src={topic.image}
            src={
                index < strongestimages.length
                  ? strongestimages[index]
                  : topic.image
              }
              alt={topic.name}
              width={50}
              height={50}
              className="rounded-md"
            />
            <div className="ml-4 w-full">
              <div className="flex justify-between text-sm font-medium text-gray-700">
                <span>{topic.name}</span>
                <span>{topic.correct_percentage}% Correct</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                <div
                  className="bg-green-500 h-2 rounded-full"
                  style={{ width: `${topic.correct_percentage}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopicsCard;
