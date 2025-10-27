
import React, {useState} from 'react'
import copy from 'copy-to-clipboard'
import { FiCopy, FiShare2, FiDownload } from 'react-icons/fi'

const TEMPLATES = {
  'Appreciation': {
    Professional: "I would like to sincerely thank you for {reason}. Your effort made a significant difference.",
    Casual: "Thanks a lot for {reason}! I really appreciate it."
  },
  'Constructive': {
    Professional: "I noticed {issue}. A possible improvement would be {suggestion}. Happy to help implement this.",
    Empathetic: "I saw {issue} and I understand the constraints. Maybe try {suggestion}?"
  },
  'Apology': {
    Professional: "I apologize for {reason}. I take responsibility and will {fix}.",
    Casual: "Sorry about {reason}. I'll make it right by {fix}."
  },
  'Review': {
    Positive: "Great experience: {details}. I especially liked {highlight}.",
    Critical: "I had issues with {details}. It would help if {improvement}."
  }
}

export default function Generator(){
  const [category, setCategory] = useState('Appreciation')
  const [tone, setTone] = useState(Object.keys(TEMPLATES['Appreciation'])[0])
  const [fields, setFields] = useState({reason:'your timely help', suggestion:'a clearer roadmap', fix:'fixing it ASAP', details:'the service', highlight:'fast delivery', improvement:'better support', issue:'the deadline slipping'})
  const [output, setOutput] = useState('')
  const [toast, setToast] = useState('')

  function handleGenerate(){
    const template = TEMPLATES[category][tone]
    let text = template.replace(/\{(.*?)\}/g, (_, key)=> fields[key] || `{${key}}`)
    setOutput(text)
    setToast('Generated — copy or share!')
    setTimeout(()=>setToast(''), 2200)
  }

  function handleCopy(){
    if(!output) return alert('Generate a message first')
    copy(output)
    setToast('Copied to clipboard!')
    setTimeout(()=>setToast(''), 2000)
  }

  function handleShare(){
    if(navigator.share && output){
      navigator.share({text: output}).catch(()=>{})
    } else {
      alert('Share not available on this device. Try copy instead.')
    }
  }

  return (
    <div className="grid md:grid-cols-3 gap-6">
      <div className="p-6 bg-white rounded-2xl shadow">
        <label className="block text-sm text-gray-600">Category</label>
        <select value={category} onChange={e=>{setCategory(e.target.value); setTone(Object.keys(TEMPLATES[e.target.value])[0])}} className="w-full mt-2 p-2 border rounded">
          {Object.keys(TEMPLATES).map(k=> <option key={k} value={k}>{k}</option>)}
        </select>

        <label className="block text-sm text-gray-600 mt-4">Tone</label>
        <select value={tone} onChange={e=>setTone(e.target.value)} className="w-full mt-2 p-2 border rounded">
          {Object.keys(TEMPLATES[category]).map(t=> <option key={t} value={t}>{t}</option>)}
        </select>

        <div className="mt-4 space-y-3">
          {Array.from(new Set((TEMPLATES[category][tone].match(/\{(.*?)\}/g)||[]).map(s=>s.replace(/[{}]/g,'')))).map(key=> (
            <div key={key}>
              <label className="text-sm text-gray-600">{key}</label>
              <input value={fields[key]} onChange={e=>setFields({...fields, [key]: e.target.value})} className="w-full mt-1 p-2 border rounded" />
            </div>
          ))}
        </div>

        <div className="mt-4 flex gap-3">
          <button onClick={handleGenerate} className="btn bg-primary text-white"><FiShare2/> Generate</button>
          <button onClick={handleCopy} className="btn border"><FiCopy/> Copy</button>
        </div>
      </div>

      <div className="md:col-span-2 p-6 bg-white rounded-2xl shadow">
        <h3 className="text-lg font-semibold">Generated message</h3>
        <div className="mt-4 p-4 border rounded min-h-[140px] text-gray-800 whitespace-pre-wrap">{output || 'Your generated message will appear here.'}</div>

        <div className="mt-6 flex gap-3">
          <button onClick={handleShare} className="btn border">Share</button>
          <a className="btn bg-primary text-white" href={"data:text/plain;charset=utf-8,"+encodeURIComponent(output || '')} download="message.txt"><FiDownload/> Download</a>
        </div>

        <div className="mt-6 text-sm text-gray-500">Tips: Personalize placeholders to make messages feel genuine. Share to help others save time!</div>

        {toast && <div className="mt-4 p-3 bg-green-50 text-green-800 rounded">{toast}</div>}
      </div>
    </div>
  )
}
