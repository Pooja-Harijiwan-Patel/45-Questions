function make_shirt1(size: string = "large", message: string = "I love TypeScript"): void {
    console.log(`You ordered a ${size} t-shirt with the message: "${message}"`);
  }
  

  make_shirt1();
  make_shirt1("medium");
  make_shirt1("small", "I love Java too!"); 