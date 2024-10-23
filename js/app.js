// Function to fetch weather data
async function fetchWeatherData(city) {
    const apiKey = 'f37c71d93e5ba4f3210877670ff4e8ea'; // API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(apiUrl);  // Fetch weather data from API
        if (!response.ok) {
            throw new Error('City not found');
        }
        const data = await response.json();
        console.log('Weather data:', data);

        // Update the DOM with weather information
document.getElementById('city-name').textContent = `City: ${data.name}`;
document.getElementById('temperature').textContent = `Temperature: ${data.main.temp}°C`;
document.getElementById('weather-description').textContent = `Weather: ${data.weather[0].description}`;

        
    } catch (error) {
        console.error('Error fetching weather data:', error);
        document.getElementById('city-name').textContent = `Error: ${error.message}`;
    }
}

// Event listener for the search button
document.getElementById('search-btn').addEventListener('click', function() {
    const city = document.getElementById('city-input').value;
    fetchWeatherData(city);
});
