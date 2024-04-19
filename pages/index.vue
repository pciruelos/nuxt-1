<template>
  <div>
    <h1>Hola mundo</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
      repudiandae ullam maiores ut alias reprehenderit mollitia fugit
      consectetur rem at modi, sint facilis aut veritatis enim asperiores quae
      sunt repellendus?
    </p>
  </div>
</template>

<script setup>
import { useHead } from 'nuxt/app';

useHead({
  title: 'Nuxt App Pablo',
  meta: [
    {
      name: 'description',
      content: 'Website about post',
    },
  ],
  htmlAttrs: {
    lang: 'en',
  },
});
</script>
