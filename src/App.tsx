import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient("https://hnvgibqnhpkqyiqpexfk.supabase.co", import.meta.env.VITE_SUPABASE_ANON_KEY);

function App() {
  const [countries, setCountries] = useState<{ name: string }[]>([]);

  useEffect(() => {
    getCountries();
  }, []);

  async function getCountries() {
    const { data } = await supabase.from("countries").select();
    setCountries(data);
  }

  return (
    <ul>
      {countries.map((country) => (
        <li key={country.name}>{country.name}</li>
      ))}
    </ul>
  );
}

export default App;