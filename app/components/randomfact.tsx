// components/randomfact.tsx
"use client"

import { useState, useEffect } from 'react'

const facts = [
  'Solved 500+ algorithmic problems on LeetCode.',
  'Built an autonomous parking simulator in CARLA.',
  'Vim power user — I map custom plugins.',
  'Completed half marathon in under 2 hours.',
  'My GitHub repo has 100+ stars!',
  'I love dark mode more than light themes.',
]

export default function RandomFact() {
  const [fact, setFact] = useState(
    () => facts[Math.floor(Math.random() * facts.length)]
  )
  const [displayed, setDisplayed] = useState('')
  const [index, setIndex] = useState(0)

  // Reset typing when a new fact is chosen
  useEffect(() => {
    setDisplayed('')
    setIndex(0)
  }, [fact])

  // Typing effect
  useEffect(() => {
    if (index < fact.length) {
      const timer = setTimeout(() => {
        setDisplayed((prev) => prev + fact[index])
        setIndex((i) => i + 1)
      }, 40)
      return () => clearTimeout(timer)
    }
  }, [index, fact])

  // Auto-refresh fact every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setFact((prev) => {
        let next
        do {
          next = facts[Math.floor(Math.random() * facts.length)]
        } while (next === prev)
        return next
      })
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="mt-8 p-4 border rounded-lg">
      <p className="text-gray-800 dark:text-gray-200 font-mono">
        “{displayed}”<span className="inline-block animate-pulse">█</span>
      </p>
    </div>
  )
}
