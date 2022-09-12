import PropTypes from "prop-types";
import { NameAndDetails, Details } from "./CountryPageDetails.styles";

export default function CountryPageDetails({ countryInformation }) {
  return (
    <NameAndDetails>
      <h1>{countryInformation.name.common}</h1>
      <Details>
        <div>
          <p>
            <b>Native Name:</b> {countryInformation.name.official}
          </p>
          <p>
            <b>Population:</b>{" "}
            {new Intl.NumberFormat("en-EN").format(
              countryInformation.population
            )}
          </p>
          <p>
            <b>Region:</b> {countryInformation.region}
          </p>
          <p>
            <b>Sub Region:</b> {countryInformation.subregion}
          </p>
          <p>
            <b>Capital: </b> {countryInformation.capital}
          </p>
        </div>
        <div>
          <p>
            <b>Top Level Domain: </b> {countryInformation.tld}
          </p>
          <p>
            <b>Currencies:</b>{" "}
            {countryInformation.currencies &&
              Object.keys(countryInformation.currencies).join(", ")}
          </p>
          <p>
            <b>Languages:</b>{" "}
            {countryInformation.languages &&
              Object.values(countryInformation.languages).join(", ")}
          </p>
          <p>
            <b>Traffic:</b> {countryInformation.car.side}-handed
          </p>
        </div>
        <div>
          <p>
            <b>Lat:</b> {countryInformation.latlng[0]}&#176;
          </p>
          <p>
            <b>Long:</b> {countryInformation.latlng[1]}&#176;
          </p>
          <p>
            <b>Area:</b> {countryInformation.area} km<sup>2</sup>
          </p>
          <p>
            <b>Land locked:</b> {countryInformation.landlocked ? "Yes" : "No"}
          </p>
        </div>
      </Details>
    </NameAndDetails>
  );
}
CountryPageDetails.propTypes = {
  countryInformation: PropTypes.shape({
    borders: PropTypes.arrayOf(PropTypes.string),
    population: PropTypes.number,
    tld: PropTypes.arrayOf(PropTypes.string),
    name: PropTypes.shape({
      common: PropTypes.string,
    }),
    area: PropTypes.number,
    latlng: PropTypes.arrayOf(PropTypes.number),
    landlocked: PropTypes.bool,
    car: PropTypes.shape({
      side: PropTypes.string,
    }),
    languages: PropTypes.object,
    currenciess: PropTypes.arrayOf(PropTypes.string),
    capital: PropTypes.arrayOf(PropTypes.string),
    region: PropTypes.string,
    subregion: PropTypes.string,
  }),
};
