"use client"

import { useState, useEffect } from 'react'

const facts = [
  {
    concept: 'Backpropagation',
    definition: 'Like reflecting on your mistakes so you don’t repeat them next time.',
  },
  {
    concept: 'Gradient Descent',
    definition: 'Improving bit by bit, as long as you\'re moving in the right direction.',
  },
  {
    concept: 'Overfitting',
    definition: 'When you prepare so specifically for one situation, you\'re lost in a new one.',
  },
  {
    concept: 'Precision vs. Recall',
    definition: 'Do you want to be right less often, or miss fewer chances?',
  },
  {
    concept: 'Regularization',
    definition: 'Knowing when to stop adding more just because you can.',
  },
  {
    concept: 'Convolution',
    definition: 'Looking at the bigger picture, one small patch at a time.',
  },
  {
    concept: 'Dropout',
    definition: 'Sometimes the best way to grow is to stop relying on the same patterns.',
  },
  {
    concept: 'Batch Normalization',
    definition: 'A little consistency can go a long way in speeding up progress.',
  },
  {
    concept: 'Early Stopping',
    definition: 'Knowing when good enough is better than overdoing it.',
  },
  {
    concept: 'Learning Rate',
    definition: 'Go too fast, you’ll overshoot. Go too slow, you’ll never get there.',
  },
  {
    concept: 'Bias',
    definition: 'Assumptions built in before you’ve even started learning.',
  },
  {
    concept: 'Activation Function',
    definition: 'The moment a signal decides if it’s worth reacting to.',
  },
]

export default function RandomFact() {
  const [fact, setFact] = useState(() => {
    return facts[Math.floor(Math.random() * facts.length)]
  })
  const [displayed, setDisplayed] = useState('')
  const [index, setIndex] = useState(0)
  const [revealed, setRevealed] = useState(false)

  // Reset typing animation when fact changes
  useEffect(() => {
    setDisplayed('')
    setIndex(0)
    setRevealed(false)
  }, [fact])

  // Typing effect
  useEffect(() => {
    if (index < fact.definition.length) {
      const timer = setTimeout(() => {
        setDisplayed((prev) => prev + fact.definition[index])
        setIndex((i) => i + 1)
      }, 40)
      return () => clearTimeout(timer)
    }
  }, [index, fact.definition])

  // Auto-refresh every 10s
  useEffect(() => {
    const interval = setInterval(() => {
      setFact((prev) => {
        let next
        do {
          next = facts[Math.floor(Math.random() * facts.length)]
        } while (next.definition === prev.definition)
        return next
      })
    }, 10000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="mt-8 p-6 border rounded-xl shadow-md bg-white dark:bg-neutral-900">
      <h2 className="text-lg font-medium mb-2 text-center text-gray-800 dark:text-gray-200">
        What ML idea does this sound like?
      </h2>

      <p className="text-sm text-center text-gray-700 dark:text-gray-300 font-mono leading-relaxed">
        “{displayed}”<span className="inline-block animate-pulse">█</span>
      </p>

      <div className="mt-3 flex justify-center">
        {!revealed ? (
          <button
            onClick={() => setRevealed(true)}
            className="text-xs text-blue-600 dark:text-blue-400 hover:underline transition-all"
          >
            Reveal concept
          </button>
        ) : (
          <span className="text-xs text-gray-500 dark:text-gray-400">
            → {fact.concept}
          </span>
        )}
      </div>
    </div>
  )
}
