<script>
  const fonts = [
	  { name: 'Alegreya Variable', displayName: 'Alegreya', tags: ['variable', 'serif'], url: 'https://fontsource.org/fonts/alegreya' },
	  { name: 'Bitter Variable', displayName: 'Bitter', tags: ['variable', 'serif'], url: 'https://fontsource.org/fonts/bitter' },
	  { name: 'Crimson Pro Variable', displayName: 'Crimson Pro', tags: ['variable', 'serif'], url: 'https://fontsource.org/fonts/crimson-pro' },
	  { name: 'Edu SA Beginner Variable', displayName: 'Edu SA Beginner', tags: ['variable', 'handwriting'], url: 'https://fontsource.org/fonts/edu-sa-beginner' },
	  { name: 'Mulish Variable', displayName: 'Mulish', tags: ['variable', 'sans'], url: 'https://fontsource.org/fonts/mulish' },
	  { name: 'Nunito Variable', displayName: 'Nunito', tags: ['variable', 'sans'], url: 'https://fontsource.org/fonts/nunito' },
	  { name: 'Piazzolla Variable', displayName: 'Piazzolla', tags: ['variable', 'serif'], url: 'https://fontsource.org/fonts/piazzolla' },
	  { name: 'Playpen Sans Variable', displayName: 'Playpen Sans', tags: ['variable', 'handwriting'], url: 'https://fontsource.org/fonts/playpen-sans' },
  ];

  let sample = "Sphynx of black quartz, judge my vow.";
  let size = 24;
</script>

<div class="container mx-auto px-4 py-10 flex flex-col gap-10">
  <div>
    <div class="flex gap-4 items-center">
      <input type="range" min="10" max="50" bind:value={size}>
      <div>{size}px</div>
    </div>
  </div>

  <div class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
    {#each fonts as font}
      <div class="p-4 border border-gray-200 rounded">
        <textarea class="w-full h-32 md:h-40 lg:h-56" style={`font-family: '${font.name}'; font-size: ${size}px; resize: none`} bind:value={sample}></textarea>
        <div class="flex justify-between">
          <a href={font.url} class="font-bold text-gray-800 hover:text-indigo-700">{font.displayName}</a>
          <div>
            <div class="flex gap-1">
              {#each font.tags as tag}
                <div class="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">{tag}</div>
              {/each}
            </div>
          </div>
        </div>
      </div>
    {/each}
  </div>
</div>