//=============================================================================
// Globals
//=============================================================================
const PixelTrail = {};

PixelTrail.defaultRowCount = 16;
PixelTrail.defaultColumnCount = 16;

PixelTrail.gridContainer = null;

//=============================================================================
// Setup and Reset
//=============================================================================

document.addEventListener("DOMContentLoaded", (event) => {
    PixelTrail.gridContainer = document.querySelector("#pixel-container");
    PixelTrail.resetGrid(
        PixelTrail.defaultColumnCount,
        PixelTrail.defaultRowCount
    );
})

PixelTrail.resetGrid = function(columnCount, rowCount) {
    PixelTrail.gridContainer.replaceChildren();
    for (let row = 0; row < rowCount; row++) {
        for (let col = 0; col < columnCount; col++) {
            let pixelNode = document.createElement("div");
            pixelNode.classList.add("pixel");
            PixelTrail.gridContainer.appendChild(pixelNode);
        }
    }
}

//=============================================================================
// Pixel Interaction
//=============================================================================