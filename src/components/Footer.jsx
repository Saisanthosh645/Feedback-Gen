
import React from 'react'
export default function Footer(){
  return (
    <footer className="border-t mt-12">
      <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        <div>© 2025 FeedbackGen — Built by Ramini Sai Santhosh</div>
        <div className="mt-3 md:mt-0">Made with React • Tailwind • Framer Motion</div>
        <div className="mt-3 md:mt-0"><a className="text-xs text-gray-400" href="#">Analytics (badge placeholder)</a></div>
      </div>
    </footer>
  )
}
