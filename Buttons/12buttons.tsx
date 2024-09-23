import { 
  ArrowRight, 
  Download, 
  Play, 
  Plus, 
  Share2, 
  ThumbsUp, 
  Trash2, 
  Upload, 
  UserPlus, 
  X,
  Bell,
  ShoppingCart
} from 'lucide-react'

export default function UniqueButtons() {
  return (
    <div className="flex flex-wrap gap-4 p-4">
      {/* 1. Gradient Button */}
      <button className="px-6 py-2 font-semibold text-white transition-all duration-300 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full hover:from-purple-600 hover:to-pink-600 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-75">
        Get Started
      </button>

      {/* 2. Outline Button with Hover Fill */}
      <button className="px-4 py-2 font-medium text-blue-500 transition-colors duration-300 border-2 border-blue-500 rounded-lg hover:bg-blue-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
        Learn More
      </button>

      {/* 3. Icon Button with Tooltip */}
      <button className="relative p-2 text-gray-600 transition-colors duration-300 bg-gray-200 rounded-full hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75 group">
        <Download className="w-5 h-5" />
        <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 px-2 py-1 text-xs text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Download
        </span>
      </button>

      {/* 4. Neumorphic Button */}
      <button className="px-6 py-2 font-medium text-gray-700 transition-all duration-300 bg-gray-200 rounded-lg shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff] hover:shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff] focus:outline-none">
        Click Me
      </button>

      {/* 5. Animated Arrow Button */}
      <button className="flex items-center px-4 py-2 font-medium text-white transition-all duration-300 bg-green-500 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 group">
        Next
        <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 transform group-hover:translate-x-1" />
      </button>

      {/* 6. Glowing Button */}
      <button className="px-6 py-2 font-semibold text-white transition-all duration-300 bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 animate-pulse">
        Pulsing Button
      </button>

      {/* 7. Social Share Button */}
      <button className="flex items-center px-4 py-2 font-medium text-white transition-all duration-300 bg-indigo-500 rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-75">
        <Share2 className="w-4 h-4 mr-2" />
        Share
      </button>

      {/* 8. Delete Button with Confirmation */}
      <button className="relative px-4 py-2 font-medium text-white transition-all duration-300 bg-red-500 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75 group">
        <Trash2 className="w-4 h-4 mr-2 inline" />
        Delete
        <span className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-red-600 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
          Are you sure?
        </span>
      </button>

      {/* 9. Toggle Button */}
      <button className="relative w-16 h-8 transition-colors duration-300 bg-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 peer">
        <span className="absolute left-1 top-1 w-6 h-6 bg-white rounded-full transition-transform duration-300 transform peer-checked:translate-x-8"></span>
        <input type="checkbox" className="sr-only peer" />
      </button>

      {/* 10. 3D Button */}
      <button className="px-6 py-2 font-semibold text-white transition-all duration-300 bg-yellow-500 rounded-lg shadow-[0_4px_0_#a16207] hover:shadow-[0_2px_0_#a16207] hover:translate-y-[2px] focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-75 active:shadow-none active:translate-y-[4px]">
        Press Me
      </button>

      {/* 11. Circular Progress Button */}
      <button className="relative w-12 h-12 text-white transition-all duration-300 bg-purple-500 rounded-full hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-75 group">
        <Upload className="w-6 h-6 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        <svg className="absolute top-0 left-0 w-12 h-12 transition-all duration-300 -rotate-90 opacity-0 group-hover:opacity-100" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="45" fill="none" stroke="#e9d5ff" strokeWidth="8" />
          <circle cx="50" cy="50" r="45" fill="none" stroke="#9333ea" strokeWidth="8" strokeDasharray="283" strokeDashoffset="283" className="transition-all duration-1000 group-hover:stroke-dashoffset-0" />
        </svg>
      </button>

      {/* 12. Floating Action Button */}
      <button className="fixed bottom-4 right-4 p-4 text-white bg-pink-500 rounded-full shadow-lg transition-all duration-300 hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-opacity-75 hover:scale-110">
        <Plus className="w-6 h-6" />
      </button>
    </div>
  )
}
