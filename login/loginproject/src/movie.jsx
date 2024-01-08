import React from 'react'

function Movie() {
  return (
    <body class="bg-gray-900 text-white font-sans">

   
    <header class="bg-black p-4">
        <div class="container mx-auto flex justify-between items-center">
            <div class="text-2xl font-bold">MOVIE TIME</div>
            <nav>
                <ul class="flex space-x-4">
                    <li><a href="#" class="hover:text-gray-400">Home</a></li>
                    <li><a href="#" class="hover:text-gray-400">TV Shows</a></li>
                    <li><a href="#" class="hover:text-gray-400">Movies</a></li>
                    <li><a href="#" class="hover:text-gray-400">Latest</a></li>
                    <li><a href="#" class="hover:text-gray-400">My List</a></li>
                </ul>
            </nav>
        </div>
    </header>

   
    <section class="relative h-screen flex items-center">
        <div class="absolute inset-0 bg-black opacity-75"></div>
        <div class="container mx-auto z-10">
            <h1 class="text-4xl font-bold mb-4">Unlimited movies, TV shows, and more.</h1>
            <p class="text-lg mb-8">Watch anywhere. Cancel anytime.</p>
            <div class="flex space-x-4">
                <button class="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 rounded">
                    Watch Free For 30 Days
                </button>
                <button class="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
                   LEARN MORE
                </button>
            </div>
        </div>
    </section>

   
    <section class="container mx-auto mt-16">
        <h2 class="text-2xl font-bold mb-6">Featured Content</h2>
        <div class="flex">
            <div class="w-48 h-64 bg-gray-800 rounded overflow-hidden shadow-md">
                <img src="loginproject/src/assets/stranger.jpeg" alt="stranger things" class="w-full h-48 object-cover"></img>
                <div class="p-4">
                    <h3 class="text-lg font-bold mb-2">STRANGER THINGS</h3>
                    <p class="text-sm">SEASON 4</p>
                </div>
            </div>
           
        </div>
    </section>

  
    <footer class="bg-black p-4 mt-16">
        <div class="container mx-auto text-sm">
            <p>&copy; watch your movies here</p>
        </div>
    </footer>

</body>
  )
}

export default Movie