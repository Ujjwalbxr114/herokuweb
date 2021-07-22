getData();

async function getData() {
  const response = await fetch('/api');
  const data = await response.json();

  for (item of data) {
    const root = document.createElement('div');
    // root.setAttribute('class', 'col-6');
    root.style.display = 'row';
    root.style.flexDirection = 'column';
    // const mood = document.createElement('div');
    // const geo = document.createElement('div');
    const date = document.createElement('div');
    const image = document.createElement('img');

    // mood.textContent = `Name:: ${item.mood}`;
    // geo.textContent = `${item.lat}°, ${item.lon}°`;
    const dateString = new Date(item.timestamp).toLocaleString();
    date.textContent = dateString;
    image.src = item.image64;
    image.alt = 'Dan Shiffman making silly faces.';

    root.append(date, image);
    document.body.append(root);
  }
  console.log(data);
}
