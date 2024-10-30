//=============================================================================
// Globals
//=============================================================================
const PixelTrail = {};

PixelTrail.defaultRowCount = 16;
PixelTrail.defaultColumnCount = 16;

PixelTrail.gridContainer = null;

//=============================================================================
// Setup
//=============================================================================

document.addEventListener("DOMContentLoaded", (event) => {
    PixelTrail.gridContainer = document.querySelector("#pixel-container");

    PixelTrail.resetGrid(
        PixelTrail.defaultColumnCount,
        PixelTrail.defaultRowCount
    );

    PixelTrail.gridContainer.addEventListener("mouseover", (event) => {
        if (event.target.classList.contains("pixel")) {
            PixelTrail.turnOnPixel(event.target);
        }
    })
})

//=============================================================================
// Grid Logic
//=============================================================================

PixelTrail.resetGrid = function(columnCount, rowCount) {
    // empty grid
    PixelTrail.gridContainer.replaceChildren();

    // repopulate grid
    for (let row = 0; row < rowCount; row++) {
        for (let col = 0; col < columnCount; col++) {
            let pixelNode = document.createElement("div");
            pixelNode.classList.add("pixel");
            PixelTrail.gridContainer.appendChild(pixelNode);
        }
    }
};

PixelTrail.turnOnPixel = function(pixelNode) {
    pixelNode.classList.add("on");
};