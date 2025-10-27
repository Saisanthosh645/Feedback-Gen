
import React from 'react'
import { FiTwitter, FiShare2, FiCopy } from 'react-icons/fi'
import copy from 'copy-to-clipboard'

export default function ShareModal({open, onClose}){
  if(!open) return null
  const url = typeof window !== 'undefined' ? window.location.href : 'https://your-site.vercel.app'
  const text = "Check out FeedbackGen — generate polite messages instantly: " + url
  function shareWhatsApp(){ window.open('https://wa.me/?text='+encodeURIComponent(text), '_blank') }
  function shareTelegram(){ window.open('https://t.me/share/url?url='+encodeURIComponent(url)+'&text='+encodeURIComponent(text), '_blank') }
  function shareTwitter(){ window.open('https://twitter.com/intent/tweet?text='+encodeURIComponent(text), '_blank') }
  function doCopy(){ copy(url); alert('Link copied!') }
  return (
    <div className="fixed inset-0 z-40 flex items-end md:items-center justify-center">
      <div className="absolute inset-0 bg-black/40" onClick={onClose}></div>
      <div className="relative bg-white w-full md:w-96 rounded-t-xl md:rounded-xl p-6 shadow-lg m-4">
        <h3 className="font-semibold">Share FeedbackGen</h3>
        <p className="text-sm text-gray-500 mt-2">Help it reach more people — copy or share on your favorite platform.</p>
        <div className="mt-4 grid grid-cols-2 gap-3">
          <button onClick={shareWhatsApp} className="btn border">WhatsApp</button>
          <button onClick={shareTelegram} className="btn border">Telegram</button>
          <button onClick={shareTwitter} className="btn border"><FiTwitter/> Twitter</button>
          <button onClick={doCopy} className="btn border"><FiCopy/> Copy link</button>
        </div>
        <div className="mt-4 text-right">
          <button onClick={onClose} className="text-sm text-gray-600">Close</button>
        </div>
      </div>
    </div>
  )
}
