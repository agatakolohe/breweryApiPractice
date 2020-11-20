export default class BreweryFinder {
  static async findBrewery(zipcode) {
    try {
      const response = await fetch(`https://api.openbrewerydb.org/breweries?by_postal=${zipcode}`);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    } catch(error) {
      return error.message;
    }
  }
}