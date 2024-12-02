
import l1 from "/images/l1.png";
import l2 from "/images/l2.png";
import l3 from "/images/l3.png";
import l4 from "/images/l4.png";

import React from "react";
import Image from "next/image";

interface UserLeaderboard {
  name: string;
  image: string;
  points: number;
  accuracy_percentage: number;
  previous_accuracy_percentage: number;
}

interface GroupLeaderboard {
  group_name: string;
  points_per_user: number;
  accuracy_percentage: number;
  previous_accuracy_percentage: number;
}

interface LeaderboardProps {
  userLeaderboard: UserLeaderboard[];
  groupLeaderboard: GroupLeaderboard[];
}

const Leaderboard: React.FC<LeaderboardProps> = ({
  userLeaderboard,
  groupLeaderboard,
}) => {
  const leaderboardImages = [l1, l2, l3, l4];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* User Leaderboard */}
      <div className="p-4 bg-white shadow-md rounded-lg">
        <h2 className="text-lg font-semibold text-gray-500 mb-4">
          User Leaderboard
        </h2>
        <ul>
          {userLeaderboard.map((user, index) => (
            <li
              key={user.name}
              className="flex items-center justify-between py-2 border-b"
            >
              <div className="flex items-center">
                <Image
                  //   src={l1}
                  src={
                    index < leaderboardImages.length
                      ? leaderboardImages[index]
                      : user.image
                  }
                  alt={user.name}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-800">
                    {user.name}
                  </p>
                  <p className="text-xs text-gray-500">
                    {user.points} Points - {user.accuracy_percentage}% Correct
                  </p>
                </div>
              </div>
              <p
                className={`text-sm ${
                  user.accuracy_percentage > user.previous_accuracy_percentage
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {index + 1}{" "}
                {user.accuracy_percentage > user.previous_accuracy_percentage
                  ? "▲"
                  : "▼"}
              </p>
            </li>
          ))}
        </ul>
      </div>

      {/* Groups Leaderboard */}
      <div className="p-4 bg-white shadow-md rounded-lg">
        <h2 className="text-lg font-semibold text-gray-500 mb-4">
          Groups Leaderboard
        </h2>
        <ul>
          {groupLeaderboard.map((group, index) => (
            <li
              key={group.group_name}
              className="flex items-center justify-between py-2 border-b"
            >
              <div>
                <p className="text-sm font-medium text-gray-800">
                  {group.group_name}
                </p>
                <p className="text-xs text-gray-500">
                  {group.points_per_user} Points / User -{" "}
                  {group.accuracy_percentage}% Correct
                </p>
              </div>
              <p
                className={`text-sm ${
                  group.accuracy_percentage > group.previous_accuracy_percentage
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {index + 1}{" "}
                {group.accuracy_percentage > group.previous_accuracy_percentage
                  ? "▲"
                  : "▼"}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Leaderboard;
