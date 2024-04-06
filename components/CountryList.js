import CountryItem from './CountryItem';
import { Container } from './CountryList.styled';

export default function CountryList({ countries }) {
  return (
    <Container>
      {countries.map((country) => (
        <CountryItem key={country.code} {...country} />
      ))}
    </Container>
  );
}

CountryList.defaultProps = {
  countries: [],
};
