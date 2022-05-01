function navbar(){
    return ` <h3>
    <a href="index.html">Home</a>
    </h3>
    <div id="options">
    <input type="text" oninput="searchfood()" placeholder="Search"/>
    <h3>
        <a href="random.html">Random-food</a>
    </h3>
    <h3>
      <a href="special.html">special</a>
     </h3>`;
}
export {navbar};