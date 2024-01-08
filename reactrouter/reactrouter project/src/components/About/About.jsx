import React from 'react'
import { Link } from 'react-router-dom'


function About() {
  return (
    <body>
    <div class="antialiased bg-gradient-to-r from-indigo-600 to-pink-500 text-gray-900 px-6">
      <div class="max-w-xl mx-auto py-12 divide-y md:max-w-4xl">
        <div class="py-8">
          <h1 class="text-4xl font-bold">BHARATH Form</h1>
          <div class="mt-4 flex space-x-4">
            <a class="text-lg underline" href="https://github.com/tailwindlabs/tailwindcss-forms"
              >Documentation</a
            >
            <a class="text-lg underline" href="/kitchen-sink.html">YOUR DETAILS</a>
          </div>
        </div>
        <div class="py-12">
          <h2 class="text-2xl font-bold">FILL THE FORM</h2>
          <p class="mt-2 text-lg text-gray-800">FILL THE REQURIED DETAILS.</p>
          <div class="mt-8 max-w-md">
            <div class="grid grid-cols-1 gap-6">
              <label class="block">
                <span class="text-gray-900">Full name</span>
                <input type="text" class="mt-1 block w-full" placeholder="" />
              </label>
              <label class="block">
                <span class="text-gray-900">Email address</span>
                <input type="email" class="mt-1 block w-full" placeholder="" />
              </label>
              <label class="block">
                <span class="text-gray-900">DATE OF BIRTH</span>
                <input type="date" class="mt-1 block w-full" />
              </label>
              <label class="block">
                <span class="text-gray-900">COLLEGE</span>
                <select class="block w-full mt-1">
                  <option>SREC</option>
                  <option>KPR</option>
                  <option>PSG</option>
                  <option>Other</option>
                </select>
              </label>
              <label class="block">
                <span class="text-gray-900">Additional details</span>
                <textarea class="mt-1 block w-full" rows="3"></textarea>
              </label>
              <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 transform hover:scale-105 animate-scale-in">SUBMIT</button>
              </div>
              </div>
              </div>
              </div>
              </div>
             

              </body>
              
  )
}

export default About