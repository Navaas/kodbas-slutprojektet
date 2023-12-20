// Definiera hur du vill att snöflingan ska se ut.
class Snowflake {
  // Properties - Egenskaper
  public position: p5.Vector;
  private size: number;
  private velocity: p5.Vector;

  // Constructor. Hur snöflingan är uppbyggd. Bygga upp objektet, körs bara en gång.
  constructor() {
    this.position = createVector(random(0, width), 10);
    this.size = random(1, 5);
    this.velocity = createVector(
      random(-0.5, 0.5),
      random(0.3, 0.6) * this.size // Små flingor faller långsammare.
    ); // Flingorna fallar i sidled också.
  }

  // Methods - Metoder
  public update() {
    this.position.add(this.velocity);
  }

  // Ta för vana att alltid lägga till push och pop. Ta en ny pensen, släng penseln när du är klar.
  // Här målas snöflingan ut.
  public draw() {
    push();
    fill(255); // Detta blir vit färg
    stroke(255);
    circle(this.position.x, this.position.y, this.size);
    pop();
  }
}
