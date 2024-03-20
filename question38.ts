function describe_city(city: string = "Karachi", country: string = "Pakistan"): void {
    console.log(`${city} is in  "${country}"`);
  }
  

  describe_city();
  describe_city("Lahore");
  describe_city("Italy", "Paris"); 