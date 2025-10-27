
import React from 'react'
import Hero from './components/Hero'
import Generator from './components/Generator'
import Footer from './components/Footer'
import Examples from './components/Examples'

export default function App(){
  return (
    <div className="min-h-screen flex flex-col">
      <header className="container mx-auto px-6 py-6 flex justify-between items-center">
        <h1 className="text-xl font-bold"><span className="text-primary">Feedback</span>Gen</h1>
        <nav className="text-sm text-gray-600 hidden md:flex gap-6">
          <a href="#generator">Generator</a>
          <a href="#examples">Examples</a>
        </nav>
      </header>
      <main className="flex-1">
        <Hero />
        <section id="generator" className="container mx-auto px-6 py-12">
          <Generator />
        </section>
        <section id="examples" className="container mx-auto px-6 py-12">
          <Examples />
        </section>
      </main>
      <Footer />
    </div>
  )
}
