window.onload = function () {
  //the code below is to read the URL
  if (window.location.href.includes("?type=")) {
    var urlinputequation = new URLSearchParams(window.location.search)
      .get("type")
      .toLowerCase();
    while (urlinputequation.includes(" ")) {
      urlinputequation = urlinputequation.replace(" ", "");
    }
    while (urlinputequation.includes("-")) {
      urlinputequation = urlinputequation.replace("-", "");
    }
  }
  // The code below is to navigate to the target URL
  console.log(window.location.href);
  if (window.location.href.includes("search")) {
    window.location.href = "https://richardliucode.github.io/calculator/search.html";
  } else if (!window.location.href.includes("?type=")) {
    window.location.href = "https://richardliucode.github.io/calculator/standard/calculator.html";
  } else if (window.location.href.includes("?")) {
    if (urlinputequation.includes("power")) {
      window.location.href =
        "https://richardliucode.github.io/calculator/powerCalculator.html";
    } else if (
      urlinputequation.includes("fourfunction") ||
      urlinputequation.includes("4function")
    ) {
      window.location.href =
        "https://richardliucode.github.io/calculator/fourFunctionCalculator.html";
    } else if (
      urlinputequation.includes("square") ||
      urlinputequation.includes("root")
    ) {
      window.location.href =
        "https://richardliucode.github.io/calculator/squareRootCalculator.html";
    } else if (urlinputequation.includes("factorial")) {
      window.location.href =
        "https://richardliucode.github.io/calculator/factorialCalculator.html";
    } else if (urlinputequation.includes("binary")) {
      window.location.href =
        "https://richardliucode.github.io/calculator/DecimalToBinaryCalculator.html";
    } else if (
      urlinputequation.includes("normal") ||
      urlinputequation.includes("standard") ||
      urlinputequation.includes("index") ||
      urlinputequation == "calculator"
    ) {
      window.location.href =
        "https://richardliucode.github.io/calculator/standard/calculator.html";
    } else if (urlinputequation == "") {
      window.location.href = "https://richardliucode.github.io/calculator/search.html";
    } else {
      window.location.href = "error.html?error=" + urlinputequation;
    }
  }
};
