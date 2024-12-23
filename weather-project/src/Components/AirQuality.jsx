import { useState } from "react";

const AirQuality = () => {
  const [city, setCity] = useState("");
  const [aqi, setAqi] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const token = "8e3850be91f203688fe80c467b84530fc82abfd7";

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const fetchAirQuality = async () => {
    if (!city) return;

    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        `https://api.waqi.info/feed/${encodeURIComponent(city)}/?token=${token}`
      );

      const data = await response.json();

      if (data.status === "ok") {
        setAqi(data.data.aqi);
      } else {
        setError("Could not fetch data. Please try again later.");
      }
    } catch (err) {
      setError(
        "Error fetching data. Please check your connection or try again."
      );
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchAirQuality();
  };

  return (
    <div className="pollution-fact">
      <h2>Air Quality</h2>
      <div style={{ display: "flex", gap: "1rem" }}>
        <input
          type="text"
          value={city}
          onChange={handleCityChange}
          placeholder="Please enter a city name"
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
      <div style={{ marginTop: "0.5rem" }}>
        {loading && <p>Loading...</p>}

        {error && <p style={{ color: "red" }}>{error}</p>}

        {aqi && !loading && !error && (
          <div>
            <p>
              Air Quality Index (AQI) for {city} is {aqi}.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AirQuality;
