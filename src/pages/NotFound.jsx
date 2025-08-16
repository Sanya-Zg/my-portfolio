
const NotFound = () => {
   return (
     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
       <h1 className="text-6xl md:text-8xl font-bold mb-4">404</h1>
       <p className="text-xl md:text-2xl mb-8">You seem to be lost 🚀</p>
       <p className="mb-8 text-center max-w-md">
         The page you're looking for doesn't exist. Maybe try going back home?
       </p>
       <a
         href="/"
         className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded transition-colors"
       >
         Go Home
       </a>
     </div>
   );
}
export default NotFound