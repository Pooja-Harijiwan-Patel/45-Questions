const travelWishList: string[] = [
    "Australia","Greece","South Korea","India","Maldives"];
  console.log("Original travel wish list:");
  console.log(travelWishList);
  
  
  const sortedCopy = travelWishList.slice(); 
  sortedCopy.sort();
  console.log("\nTravel wish list (alphabetical order - copy):");
  console.log(sortedCopy);
  
  
  console.log("\nOriginal travel wish list (unchanged):");
  console.log(travelWishList);
  
  
  sortedCopy.sort((a, b) => b.localeCompare(a)); 
  console.log("\nTravel wish list (reverse alphabetical order - copy):");
  console.log(sortedCopy);
  
  
  console.log("\nOriginal travel wish list (unchanged):");
  console.log(travelWishList);
  
  
  travelWishList.reverse();
  console.log("\nTravel wish list (reversed order):");
  console.log(travelWishList);
  
  
  travelWishList.reverse();
  console.log("\nTravel wish list (back to original order):");
  console.log(travelWishList);
  

  travelWishList.sort();
  console.log("\nTravel wish list (sorted alphabetically):");
  console.log(travelWishList);
  
  
  travelWishList.sort((a, b) => b.localeCompare(a));
  console.log("\nTravel wish list (sorted reverse alphabetically):");
  console.log(travelWishList);