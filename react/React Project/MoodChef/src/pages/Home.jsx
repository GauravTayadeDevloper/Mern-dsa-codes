import Header from "../components/Header";
import MoodSelector from "../components/MoodSelector";
import RecipesList from "../components/RecipesList";
import { useState } from "react";
export default function Home() {
  const [activeMood, setActiveMood] = useState("");
  return (
    <div className="container">
      <Header />

      {/* Mood Selection Component */}
      <MoodSelector activeMood={activeMood} setActiveMood={setActiveMood}/>

      {/* Recipes List Component */}
      <RecipesList  activeMood={activeMood}/>
    </div>
  );
}
