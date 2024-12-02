// export default function Home() {
//   return (
//     <div className="bg-white min-h-screen">
      
//     </div>
//   );
// }
// 'use client'
// import { useRouter } from "next/navigation"; // Import from next/navigation

// export default function Home() {
//   const router = useRouter();

//   const navigateToDashboard = () => {
//     router.push("/dashboard"); // Navigate to /dashboard
//   };

//   return (
//     <div className="bg-white min-h-screen flex items-center justify-center">
//       <button
//         onClick={navigateToDashboard}
//         className="px-6 py-3 bg-blue-500 text-white font-medium text-lg rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
//       >
//         Dashboard
//       </button>
//     </div>
//   );
// }
'use client'
import { useEffect } from "react";
import { useRouter } from "next/navigation"; // Import from next/navigation

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the dashboard page immediately on loading the homepage
    router.push("/dashboard");
  }, [router]);

  return null; // Return null since it's just a redirect
}