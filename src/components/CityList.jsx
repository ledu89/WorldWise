import CityItem from "./CityItem";
import styles from "./CityList.module.css";
import Spinner from "./Spinner";
import Message from "./Message";
import { useCities } from "../context/CitiesContext";

function CityList() {
  const { cities, isLoading } = useCities();
  console.log(cities);
  if (isLoading) return <Spinner />;
  if (!cities.length)
    return (
      <Message message="Add your first city by clicking city on the map" />
    );
  return (
    <div>
      <ul className={styles.cityList}>
        {cities.map((city) => (
          <CityItem key={city.id} city={city} />
        ))}
      </ul>
    </div>
  );
}

export default CityList;
