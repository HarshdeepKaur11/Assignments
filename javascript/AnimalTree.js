const height = prompt("Enter Height (short/tall)");

if (height === "short") {
  const squeak = prompt("Can it squeak? (yes/no)");

  if (squeak === "yes") {
    alert("Might be a rat");
  } else if (squeak === "no") {
    alert("Might be a squirrel");
  } else {
    alert("Invalid input for squeak");
  }

} else if (height === "tall") {
  let neck = prompt("Enter size of neck (short/long)");

  if (neck === "short") {
    let nose = prompt("Enter nose size (short/long)");

    if (nose === "short") {
      let stay = prompt("Does it stay on land or in water? (land/water)");

      if (stay === "land") {
        alert("Might be a rhinoceros");
      } 
      else if (stay === "water") {
        alert("Might be a hippo");
      } else {
        alert("Invalid input for habitat");
      }

    } else if (nose === "long") {
      alert("Might be an elephant");
    } else {
      alert("Invalid input for nose size");
    }

  } else if (neck === "long") {
    alert("Might be a giraffe");
  } else {
    alert("Invalid input for neck size");
  }

} else {
  alert("Invalid height input");
}
