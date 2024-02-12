function calculateTriangelArea(){
    //get triangle base value
    triangle_baseInput = document.getElementById('triangle_base');
    const triangle_baseText = triangle_baseInput.value;
    const bass = parseFloat(triangle_baseText)
    console.log(bass)

    // get triangle height value
    const triangle_heightInput = document.getElementById('triangle_height');
    const triangle_heightText = triangle_heightInput.value
    const height = parseFloat(triangle_heightText);
    console.log(height)

    // calculate area
    const area = 0.5 * bass * height;
    console.log(area)

    const triangleDisplay = document.getElementById('triangle_area');
    triangleDisplay.innerText = area
}
