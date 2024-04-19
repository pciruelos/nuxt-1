<template>
  <div class="w-full min-h-screen bg-gray-100">
    <section class="text-center pt-7">
      <h1 class="text-3xl text-gray-500">Today App</h1>
    </section>
    <section class="w-9/12 max-w-lg mx-auto flex items-center justify-center mt-7 bg-white shadow-md rounded p-5">
      <form @submit.prevent>
        <input type="text" class="py-2 px-4 border focus:outline-blue-300 rounded" placeholder="add a task"/>
        <button class="transition-all duration-200 bg-green-100 py-2 px-4 ml-3 hover:bg-green-500 rounded">Add task</button>
      </form>
    </section>
  </div>
</template>
