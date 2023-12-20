class Game {
  private isCircleVisible: boolean;
  private snow: Snowflake[]; // Spara snöflingorna i en array.

  constructor() {
    this.isCircleVisible = false;
    this.snow = [];
  }

  public update() {
    this.isCircleVisible = mouseIsPressed;

    // if (mouseIsPressed) {
    //   if (!music.mystery.isPlaying()) {
    //     music.mystery.loop();
    //   }
    // } else {
    //   music.mystery.pause();
    // }

    this.snow.push(new Snowflake()); // Ta en snöflinga och pusha in det i arrayen.
    this.updateSnow();
  }

  // Med denna loopen så faller snöflingorna.
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
    background("black");
    this.drawText();
    this.drawSnow();

    if (this.isCircleVisible) {
      this.drawCircle();
    }
  }

  private drawSnow() {
    for (const flake of this.snow) {
      flake.draw(); // Säg till snöflingan att rita ut sig.
    }
  }

  public drawText() {
    push();
    fill("white");
    textSize(width * 0.1);
    textStyle("bold");
    textAlign("center");
    text("Click & Drag", width * 0.5, height * 0.5);
    pop();
  }

  public drawCircle() {
    push();
    fill(0, 255, 0, 200);
    stroke("white");
    strokeWeight(width * 0.01);
    circle(mouseX, mouseY, width * 0.2);
    pop();
  }
}
