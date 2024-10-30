//=============================================================================
// Globals
//=============================================================================
const PixelTrail = {};

PixelTrail.defaultRowCount = 16;
PixelTrail.defaultColumnCount = 16;

PixelTrail.gridContainer = document.querySelector("#pixel-container");

PixelTrail.widthInput = document.querySelector("input#grid-width");
PixelTrail.heightInput = document.querySelector("input#grid-height");
PixelTrail.resetButton = document.querySelector("button#reset");

//=============================================================================
// Grid Logic
//=============================================================================

PixelTrail.resetGrid = function(columnCount, rowCount) {
    // empty grid
    PixelTrail.gridContainer.replaceChildren();

    // Calculate widths
    PixelTrail.gridContainer.style.maxWidth =
        `calc(var(--main-height) * ${columnCount / rowCount})`;
    const pixelWidth = `${100 / columnCount}%`;

    // repopulate grid
    for (let row = 0; row < rowCount; row++) {
        for (let col = 0; col < columnCount; col++) {
            let pixelNode = document.createElement("div");
            pixelNode.classList.add("pixel");
            pixelNode.style.width = pixelWidth;
            PixelTrail.gridContainer.appendChild(pixelNode);
        }
    }
};

PixelTrail.turnOnPixel = function(pixelNode) {
    pixelNode.classList.add("on");
};

PixelTrail.darkenPixel = function(pixelNode) {
    if (!pixelNode.classList.contains("pixel")) {
        return; // This method is for pixel nodes only.
    }

    // Increase the opacity by 10%
    let opacity = Number.parseFloat(pixelNode.style.opacity || "0");
    if (opacity < 1) {
        opacity += 0.1;
        pixelNode.style.opacity = opacity;
    }
}

//=============================================================================
// Setup
//=============================================================================
// Grid Container
//-----------------------------------------------------------------------------

PixelTrail.resetGrid(
    PixelTrail.defaultColumnCount,
    PixelTrail.defaultRowCount
);

PixelTrail.gridContainer.addEventListener("mouseover", (event) => {
    PixelTrail.darkenPixel(event.target);
});

PixelTrail.gridContainer.addEventListener("click", (event) => {
    PixelTrail.darkenPixel(event.target);
})

//-----------------------------------------------------------------------------
// Grid Reset Controls
//-----------------------------------------------------------------------------

PixelTrail.widthInput.value = PixelTrail.defaultColumnCount;
PixelTrail.heightInput.value = PixelTrail.defaultRowCount;

PixelTrail.resetButton.addEventListener("click", (event) => {
    let width = Number.parseInt(PixelTrail.widthInput.value);
    let height = Number.parseInt(PixelTrail.heightInput.value);
    PixelTrail.resetGrid(width, height);
});
