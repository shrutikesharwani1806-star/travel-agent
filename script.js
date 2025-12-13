

let cityName = document.querySelector("#city")
let days = document.querySelector("#days")
let budget = document.querySelector("#budget")
let box = document.querySelector('#box')
let form = document.querySelector('form')
let p = document.querySelector('#generator')

const apiKey = 'AIzaSyB6qUzE9ed3MLSfBDvovk1GzUwPtAo8Q1c'


const generateAiTravelPlan = async (e) => {

   e.preventDefault()

   p.innerText = "Thniking..."


   const response = await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent", {
      method: 'POST',
      headers: {
         'x-goog-api-key': apiKey,
         'Content-Type': 'application/json'
      },
      body: JSON.stringify({
         contents: [{
            parts: [{
               text: `You are an expert travel planner.

Generate a detailed travel itinerary for a trip to ${cityName.value} for ${days.value} days with a total budget of ${budget.value} INR.

The output should be well-formatted and include:

1. 🗓️ **Trip Overview**  
   - City Name  
   - Duration (in days)  
   - Total Budget (INR)  
   - Best Time to Visit  
   - Travel Style (e.g., budget-friendly / luxury / moderate)

2. 📅 **Day-by-Day Itinerary**  
   For each day, list:  
   - Morning activities with timings  
   - Afternoon activities with timings  
   - Evening plans or nightlife  
   - Approx. cost of the day (in INR)  
   - Distance (in km) between places  
   - Recommended transport (auto, metro, cab, etc.)

3. 🍴 **Food & Dining Suggestions**  
   - 2–3 famous local food spots per day  
   - Average meal cost  

4. 🏨 **Stay Recommendations**  
   - 2–3 hotel or hostel suggestions (with approx. price per night)  
   - Preferably near major attractions or public transport hubs  

5. 💸 **Budget Breakdown**  
   - Accommodation total  
   - Food total  
   - Travel (local transport) total  
   - Sightseeing/entry tickets total  
   - Shopping or misc. total  

6. 🧳 **Additional Notes**  
   - Local tips, safety advice, or cultural do’s & don’ts  
   - Any day trips nearby (within 50–100 km radius)

**Formatting Requirements:**
- Use markdown for headings and tables.  
- Add emojis to make it engaging.  
- Keep tone friendly and easy to read.  
- Total should fit within the given budget.

Example Input:
city = "Jaipur", days = 3, budget = 15000

Example Output Format (short sample):
## 🏰 Jaipur Travel Itinerary (3 Days / ₹15,000)

### Day 1: Explore the Pink City
| Time | Activity | Cost | Distance | Mode |
|------|-----------|------|-----------|------|
| 9:00 AM | Visit Hawa Mahal | ₹200 | 1.5 km | Auto |
| 11:00 AM | City Palace Tour | ₹300 | 0.5 km | Walk |
...

---
`
            }]
         }]
      })
   });

   const data = await response.json();
   p.innerText = data.candidates[0].content.parts[0].text
   form.reset()
};





form.addEventListener("submit", generateAiTravelPlan)

