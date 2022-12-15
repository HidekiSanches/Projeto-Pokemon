function iniciar(){
    inicio.style="display: none;"
    loding.style="display: flex;"

    setTimeout(() => {
        loding.style = `display: none;`;
        header.style = `display: flex;`;
      }, "2000");
}