
import React, {useState} from 'react'
import { motion } from 'framer-motion'
import ShareModal from './ShareModal'

export default function Hero(){
  const [open, setOpen] = useState(false)
  return (
    <section className="bg-gradient-to-br from-white to-gray-50 py-16">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
        <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.6}}>
          <h2 className="text-4xl font-extrabold leading-tight">Polite messages, instantly.</h2>
          <p className="mt-4 text-gray-600">Generate thoughtful feedback, emails, reviews, and apology notes in different tones. Copy, customize, and share — perfect for students and professionals.</p>
          <div className="mt-6 flex gap-4">
            <a href="#generator" className="btn bg-primary text-white">Try it now</a>
            <button onClick={()=>setOpen(true)} className="btn border">Share with friends</button>
          </div>
        </motion.div>
        <motion.div initial={{opacity:0, x:30}} animate={{opacity:1, x:0}} transition={{duration:0.7}} className="relative">
          <div className="p-6 rounded-3xl bg-gradient-to-tr from-primary/10 to-accent/5 border border-gray-100">
            <div className="text-sm text-gray-500">Example</div>
            <div className="mt-3 font-semibold">Thank you for your effort — I appreciated your timely support.</div>
            <div className="mt-2 text-xs text-gray-400">Generated in «Professional»</div>
          </div>
        </motion.div>
      </div>
      <ShareModal open={open} onClose={()=>setOpen(false)} />
    </section>
  )
}
