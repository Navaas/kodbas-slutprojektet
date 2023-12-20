class Snow {
  private snow: Snowflake[]; // Spara snöflingorna i en array.

  constructor() {
    this.snow = [];
  }

  public update() {
    this.snow.push(new Snowflake()); // Ta en snöflinga och pusha in det i arrayen.
    this.updateSnow();
  }

  private updateSnow() {
    for (const flake of this.snow) {
      flake.update();
      if (flake.positionY > height) {
        // Sätt * 0.5 så försvinner flingorna på halva skärmen
        const index = this.snow.indexOf(flake); // Hämta index i arrayen.
        this.snow.splice(index, 1); // Plocka bort sak i arrayen.
      }
    }
  }

  public draw() {
    for (const flake of this.snow) {
      flake.draw(); // Säg till snöflingan att rita ut sig.
    }
  }
}
