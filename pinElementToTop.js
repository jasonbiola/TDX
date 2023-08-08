const rssUrl = 	http://status.biola.edu/history.rss; // Replace with your RSS feed URL
  const rssList = document.getElementById('rss-list');

  fetch(rssUrl)
    .then(response => response.text())
    .then(data => {
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(data, 'text/xml');
      const items = xmlDoc.querySelectorAll('item');

      let entryCount = 0;

      items.forEach(item => {
        if (entryCount < 8) {
          const title = item.querySelector('title').textContent;
          const description = item.querySelector('description').textContent;

          const li = document.createElement('li');
          li.className = 'rss-entry';

          const titleDiv = document.createElement('div');
          titleDiv.className = 'rss-title';
          titleDiv.textContent = title;

          const descriptionDiv = document.createElement('div');
          descriptionDiv.className = 'rss-description';
          descriptionDiv.textContent = description;

          li.appendChild(titleDiv);
          li.appendChild(descriptionDiv);

          rssList.appendChild(li);

          entryCount++;
        }
      });
    })
    .catch(error => console.error('Error fetching RSS feed:', error));

