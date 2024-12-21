type HexColorString = `#${string}`;
type RGBColorString = `rgb(${string})`;

class ColorRangeColor {
  public readonly r: number;
  public readonly g: number;
  public readonly b: number;

  constructor(hex: HexColorString) {
    this.r = parseInt(hex.slice(1, 3), 16);
    this.g = parseInt(hex.slice(3, 5), 16);
    this.b = parseInt(hex.slice(5, 7), 16);
  }

  public toString(): RGBColorString {
    return `rgb(${this.r}, ${this.g}, ${this.b})`;
  }
}

class ColorRange {
  private readonly colorRange: ColorRangeColor[];
  private readonly valueRange: number[];

  constructor(colorRange: HexColorString[], valueRange: number[]) {
    this.colorRange = this.transformColors(colorRange);
    this.valueRange = valueRange;
  }

  private transformColors(colors: HexColorString[]) {
    return colors.map((color) => new ColorRangeColor(color));
  }

  getColorFromRangeValue(value: number): RGBColorString {
    // If value is lower than the first range value, return the most left color
    if (value <= this.valueRange[0]) return this.colorRange[0].toString();

    // If value is higher than the last range value, return the most right color
    if (value >= this.valueRange[this.valueRange.length - 1])
      return this.colorRange[this.colorRange.length - 1].toString();

    // The value matches exactly one of the range values
    let matchIndex;
    if (~(matchIndex = this.valueRange.findIndex((v) => v === value))) {
      return this.colorRange[matchIndex].toString();
    }

    const leftN = this.valueRange.findLast((v) => value > v)!;
    const rightN = this.valueRange.find((v) => value < v)!;

    const colorLeft = this.colorRange[this.valueRange.indexOf(leftN)];
    const colorRight = this.colorRange[this.valueRange.indexOf(rightN)];

    const normalizedValue = (value - leftN) / (rightN - leftN);

    // Interpolate rgb values
    const r = colorLeft.r + (colorRight.r - colorLeft.r) * normalizedValue;
    const g = colorLeft.g + (colorRight.g - colorLeft.g) * normalizedValue;
    const b = colorLeft.b + (colorRight.b - colorLeft.g) * normalizedValue;

    return `rgb(${r},${g},${b})`;
  }
}

export default ColorRange;
