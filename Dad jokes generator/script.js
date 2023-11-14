const para = document.getElementById("jokes-p");
para.style.display = "none";
function generate() {
  var limit = 1;
  const loading = document.getElementById("loading");
  loading.style.display = "block";

  $.ajax({
    method: "GET",
    url: "https://api.api-ninjas.com/v1/dadjokes?limit=" + limit,
    headers: { "X-Api-Key": "XJE54eDiasMJA+vE5tgm1A==MjXLv8Lny1Mvbr73" },
    contentType: "application/json",
    success: function (result) {
      const container = document.getElementById("container");

      result.forEach(function (joke) {
        const para = document.getElementById("jokes-p");
        para.innerText = joke.joke;
        para.style.display = "block";
        const btn = document.getElementById("joke-btn");
        btn.innerText = "Another";
        btn.style.backgroundColor = "#a501af";
        loading.style.display = "none";
      });
    },
    error: function ajaxError(jqXHR) {
      console.error("Error: ", jqXHR.responseText);
      alert("No Jokes Found !");
      return;
    },
  });
}
