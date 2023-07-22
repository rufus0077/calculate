function calculateArea(length, width) {
    if (typeof length !== 'number' || typeof width !== 'number' || length <= 0 || width <= 0) {
      return undefined; // Return undefined for invalid inputs (non-numeric values or non-positive numbers).
    }
  
    const area = length * width;
    return area;
  }
  console.log(calculateArea(5, 8)); 
  console.log(calculateArea(3.5, 6));
  console.log(calculateArea(0, 10)); 
  console.log(calculateArea(7, -2));
  console.log(calculateArea("3", 5)); 
  console.log(calculateArea(4, true));  