// // /pages/dashboard.tsx
// "use client"
// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import taskData from './task-data.json';
// interface DashboardData {
//   activeUsers: number;
//   questionsAnswered: number;
//   averageSessionLength: string;
//   startingKnowledge: number;
//   currentKnowledge: number;
//   knowledgeGain: number;
//   activity: number[];
//   weakestTopics: { name: string; correct: number }[];
//   strongestTopics: { name: string; correct: number }[];
//   userLeaderboard: { name: string; points: number; correct: number }[];
//   groupLeaderboard: { name: string; pointsPerUser: number; correct: number }[];
//   api_secret: string;
// }

// export default function Dashboard() {
//   const [data, setData] = useState<DashboardData | null>(null);
//   // const groupNames = taskData.groups_leaderboard.map((group: any) => group.group_name);

//   // Console log the group names
//   // console.log('Group Names:', groupNames);
//   console.log(taskData)
//   const [data,setData]=useState(taskData)
//   useEffect(() => {
//     async function fetchData() {
//       const res = await fetch('./task-data.json');
//       const jsonData = await res.json();
//       setData(jsonData);
//       console.log(setData)
//     }
//     fetchData();
//   }, []);

//   const handleDownload = async () => {
//     if (!data) return;
//     const apiSecret = data.api_secret;

//     try {
//       const res = await axios.post('https://testd5-img.azurewebsites.net/api/imgdownload', {
//         api: apiSecret,
//       });
//       const base64Image = res.data; // Assume this is the Base64 string.
//       const link = document.createElement('a');
//       link.href = `data:image/png;base64,${base64Image}`;
//       link.download = 'dashboard-report.png';
//       link.click();
//     } catch (error) {
//       console.error('Error downloading the image:', error);
//     }
//   };

//   if (!data) return <div>Loading...</div>;

//   return (
//     <div className="p-4 md:p-8 bg-gray-50 min-h-screen">
//       <header className="flex justify-between items-center mb-8">
//         <h1 className="text-2xl font-semibold">Reports</h1>
//         <button
//           onClick={handleDownload}
//           className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
//         >
//           Download
//         </button>
//       </header>
//       <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {/* Render the cards */}
//         {/* <ReportsCard title="Active Users" value={`${data.activeUsers}/80`} />
//         <ReportsCard title="Questions Answered" value={data.questionsAnswered.toString()} />
//         <ReportsCard title="Av. Session Length" value={data.averageSessionLength} />
//         <ReportsCard title="Starting Knowledge" value={`${data.startingKnowledge}%`} />
//         <ReportsCard title="Current Knowledge" value={`${data.currentKnowledge}%`} />
//         <ReportsCard title="Knowledge Gain" value={`${data.knowledgeGain}%`} /> */}
//         {/* <Chart activity={data.activity} /> */}
//         {/* Render weakest and strongest topics */}
//         {/* <Leaderboard title="Weakest Topics" items={data.weakestTopics} />
//         <Leaderboard title="Strongest Topics" items={data.strongestTopics} />
//         <Leaderboard title="User Leaderboard" items={data.userLeaderboard} isUser />
//         <Leaderboard title="Groups Leaderboard" items={data.groupLeaderboard} isGroup /> */}

//       </main>
//     </div>
//   );
// }
"use client";

import { useEffect, useState } from "react";
import taskData from "./task-data.json";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import TimeFrame from "../components/TimeFrame";
import Topics from "../components/Topics";
import LeaderBoards from "../components/LeaderBoards";
// import TimeFrame from "../components/TimeFrame";
// import TimeFrame from "../components/TimeFrame";

// Define the interface for DashboardData
// interface DashboardData {
//   activeUsers: { current: number; total: number };
//   questionsAnswered: number;
//   averageSessionLengthSeconds: number;
//   startingKnowledgePercentage: number;
//   currentKnowledgePercentage: number;
//   activity: { month: string; value: number }[];
//   topics: {
//     weakest: { name: string; correctPercentage: number }[];
//     strongest: { name: string; correctPercentage: number }[];
//   };
//   userLeaderboard: {
//     name: string;
//     points: number;
//     accuracyPercentage: number;
//   }[];
//   groupsLeaderboard: {
//     group_name: string;
//     pointsPerUser: number;
//     accuracyPercentage: number;
//   }[];
//   api_secret: string;
// }
interface DashboardData {
  activeUsers: { current: number; total: number };
  questionsAnswered: number;
  averageSessionLengthSeconds: number;
  startingKnowledgePercentage: number;
  currentKnowledgePercentage: number;
  activity: { month: string; value: number }[];
  topics: {
    weakest: { name: string; correctPercentage: number }[];
    strongest: { name: string; correctPercentage: number }[];
  };
  userLeaderboard: {
    name: string;
    points: number;
    accuracyPercentage: number;
  }[];
  groupsLeaderboard: {
    groupName: string;
    pointsPerUser: number;
    accuracyPercentage: number;
  }[];
  apiSecret: string;
}
// console.log(taskData.metrics.active_users.current);
export default function Dashboard() {
  const [data, setData] = useState<DashboardData | null>(null);

  useEffect(() => {
    // Transform JSON data to match DashboardData interface
    const transformedData: DashboardData = {
      activeUsers: {
        current: taskData.metrics.active_users.current,
        total: taskData.metrics.active_users.total,
      },
      questionsAnswered: taskData.metrics.questions_answered,
      averageSessionLengthSeconds:
        taskData.metrics.average_session_length_seconds,
      startingKnowledgePercentage:
        taskData.metrics.starting_knowledge_percentage,
      currentKnowledgePercentage: taskData.metrics.current_knowledge_percentage,
      activity: taskData.activity.monthly.map((item) => ({
        month: item.month,
        value: item.value,
      })),
      topics: {
        weakest: taskData.topics.weakest.map((topic) => ({
          name: topic.name,
          correctPercentage: topic.correct_percentage,
        })),
        strongest: taskData.topics.strongest.map((topic) => ({
          name: topic.name,
          correctPercentage: topic.correct_percentage,
        })),
      },
      userLeaderboard: taskData.user_leaderboard.map((user) => ({
        name: user.name,
        points: user.points,
        accuracyPercentage: user.accuracy_percentage,
      })),
      groupsLeaderboard: taskData.groups_leaderboard.map((group) => ({
        groupName: group.group_name,
        pointsPerUser: group.points_per_user,
        accuracyPercentage: group.accuracy_percentage,
      })),
      apiSecret: taskData.api_secret,
    };

    // Update the state with the transformed data
    setData(transformedData);

    // Debugging log
    // console.log("Transformed Data:", transformedData);
  }, []);


  if (!data) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        {/* Loading Spinner */}
        <div className="animate-spin rounded-full h-16 w-16 border-4 border-t-4 border-blue-500 border-solid"></div>
      </div>
    );
  }
  // console.log(taskData.user_leaderboard);
  const userLeaderboard = taskData.user_leaderboard;
  // console.log(taskData.groups_leaderboard)
  const groupLeaderboard = taskData.groups_leaderboard;
  const topics=taskData.topics;
  return (
    <div className="bg-white min-h-screen">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/5 hidden md:block">
          <Sidebar />
        </div>
        <div className="w-full h-screen overflow-y-auto">
          <Header />
          <div className="mb-2">
            {" "}
            {/* Reduce margin-bottom */}
            <TimeFrame />
          </div>
          <div className="mt-2">
            {" "}
            {/* Reduce margin-top */}
            <Topics topics={topics}/>
          </div>
          <div className="min-h-screen bg-gray-100 p-6">
            {/* <h1 className="text-2xl font-bold text-gray-800 mb-6">
              Leaderboard
            </h1> */}
            <LeaderBoards
              userLeaderboard={userLeaderboard}
              groupLeaderboard={groupLeaderboard}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
{
  /* <h1>Dashboard</h1>
<p>Active Users: {data.activeUsers.current} / {data.activeUsers.total}</p>
<p>Questions Answered: {data.questionsAnswered}</p>
<p>Average Session Length: {data.averageSessionLengthSeconds} seconds</p>
<p>Starting Knowledge: {data.startingKnowledgePercentage}%</p>
<p>Current Knowledge: {data.currentKnowledgePercentage}%</p>
<p>Weakest Topics:</p>
<ul>
  {data.topics.weakest.map((topic, index) => (
    <li key={index}>{topic.name} - {topic.correctPercentage}%</li>
  ))}
</ul>
<p>Strongest Topics:</p>
<ul>
  {data.topics.strongest.map((topic, index) => (
    <li key={index}>{topic.name} - {topic.correctPercentage}%</li>
  ))}
</ul> */
}
