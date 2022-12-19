function iniciar() {
  inicio.style = "display: none;";
  loding.style = "display: flex;";

  setTimeout(() => {
    window.location.href = "inicial.html";
  }, "2000");
}

function readMore1() {
  read1.style = "display: none;";
  hidden1.style = "overflow: auto;";
}

function readMore2() {
  read2.style = "display: none;";
  hidden2.style = "overflow: auto;";
}

function readMore3() {
  read3.style = "display: none;";
  hidden3.style = "overflow: auto;";
}
