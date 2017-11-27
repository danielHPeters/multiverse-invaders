"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TileSetMap = (function () {
    function TileSetMap(image, mapLayers, context, tileSize, tilesPerRow, tilesPerColumn, imageTilesPerRow) {
        this.image = image;
        this.mapLayers = mapLayers;
        this.context = context;
        this.tileSize = tileSize;
        this.tilesPerRow = tilesPerRow;
        this.tilesPerColumn = tilesPerColumn;
        this.imageTilesPerRow = imageTilesPerRow;
    }
    TileSetMap.prototype.drawLayer = function (layer) {
        for (var row = 0; row < this.imageTilesPerRow; row++) {
            for (var col = 0; col < this.tilesPerColumn; col++) {
                var tile = layer[row][col];
                var tileRow = (tile / this.imageTilesPerRow) | 0;
                var tileCol = (tile % this.imageTilesPerRow) | 0;
                this.context.drawImage(this.image, (tileCol * this.tileSize), (tileRow * this.tileSize), this.tileSize, this.tileSize, (col * this.tileSize), (row * this.tileSize), this.tileSize, this.tileSize);
            }
        }
    };
    TileSetMap.prototype.draw = function () {
        var _this = this;
        this.mapLayers.forEach(function (layer) { return _this.drawLayer(layer); });
    };
    return TileSetMap;
}());
exports.TileSetMap = TileSetMap;
//# sourceMappingURL=TileSetMap.js.map