import React from "react";
import SingleCard from "./SingleCard";

export default function CardsDisplay(props) {
  return (
    <div>
      {props.filter == "nearest" ? (
        <>
          {props.array &&
            props.array.map((item) => (
              <SingleCard
                id={item.id}
                origin={item.origin_station_code}
                path={JSON.stringify(item.station_path)}
                date={item.date}
                distance={item.distance}
                city={item.city}
                state={item.state}
              />
            ))}
        </>
      ) : props.filter == "upcoming" ? (
        <>
          {props.uarr &&
            props.uarr.map((item) => (
              <SingleCard
                id={item.id}
                origin={item.origin_station_code}
                path={JSON.stringify(item.station_path)}
                date={item.date}
                distance={item.distance}
                city={item.city}
                state={item.state}
              />
            ))}
        </>
      ) : props.filter == "past" ? (
        <>
          {props.parr &&
            props.parr.map((item) => (
              <SingleCard
                id={item.id}
                origin={item.origin_station_code}
                path={JSON.stringify(item.station_path)}
                date={item.date}
                distance={item.distance}
                city={item.city}
                state={item.state}
              />
            ))}
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
