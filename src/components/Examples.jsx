
import React from 'react'

const EXAMPLES = [
  {title: 'Quick appreciation', text: 'Thanks a lot for your help with the project — your input made a big difference.'},
  {title: 'Professional apology', text: 'I apologize for missing the deadline. I take responsibility and will deliver the updated version by Friday.'},
  {title: 'Constructive feedback', text: 'I noticed the report lacked data visualization. A clearer chart would help communicate the insights.'},
  {title: 'Positive review', text: 'Great experience: fast delivery and friendly support. I especially liked the attention to detail.'},
  {title: 'Empathetic suggestion', text: 'I understand the constraints. Maybe consider breaking tasks into smaller milestones to improve delivery.'},
]

export default function Examples(){
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {EXAMPLES.map(e=> (
        <div key={e.title} className="p-4 bg-white rounded-2xl border shadow-sm">
          <div className="text-sm text-gray-500">{e.title}</div>
          <div className="mt-2">{e.text}</div>
        </div>
      ))}
    </div>
  )
}
