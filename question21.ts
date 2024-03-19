const countries: { name: string, capital: string, }[] = [
    {
      name: "Pakistan",
      capital: "Islamabad",
      
    },
    {
        name: "India",
        capital: "Delhi",
    },
    {
        name: "United States",
        capital: "Washington D.C",
    },
    {
        name: "Australia",
        capital: "Canberra",
    }
  ];
  
  console.log("Here are some countries and their capitals:");
  for (const country of countries) {
    console.log(`Country: ${country.name}`);
    console.log(`Capital: ${country.capital}`);
    console.log("------------------");
  }