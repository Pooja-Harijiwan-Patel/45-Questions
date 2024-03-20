function make_shirt(size: string = "large", message: string = "I love TypeScript"): void {
    console.log(`You ordered a ${size} t-shirt with the message: "${message}"`);
  }
  

  make_shirt();
  make_shirt("medium");
  make_shirt("small", "I love Java too!"); 