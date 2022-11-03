const API = 'https://youtube-v2.p.rapidapi.com/channel/videos?channel_id=UCAPByrKU5-R1emswVlyH_-g';

const content = null || document.getElementById('content');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'cf2f94428cmsh50ae6715638f428p1388c1jsn76b159539574',
		'X-RapidAPI-Host': 'youtube-v2.p.rapidapi.com'
	}
};

async function fetchData(urlApi) {
  const response = await fetch(urlApi, options);
  const data = await response.json();
  return data;
}

(async () => {
  try {
    const videos = await fetchData(API);

    let view = `
    ${videos.videos.map(video => `
    <a href="https://www.youtube.com/watch?v=${video.video_id}" target="_blank">
      <div class="group relative">
        <div
          class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
          <img src="${video.thumbnails[3].url}" alt="${video.title}" class="w-full">
        </div>
        <div class="mt-4 flex justify-between">
          <h3 class="text-sm text-gray-700">
            <span aria-hidden="true" class="absolute inset-0"></span>
            ${video.title}
          </h3>
        </div>
      </div>
    </a>
    `).slice(0,20).join('')}
    `;
    console.log(view)
    content.innerHTML = view
  } catch (error){
    console.log(error)
  }
})();