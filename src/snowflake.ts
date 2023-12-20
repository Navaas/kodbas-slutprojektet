// Definiera hur du vill att snöflingan ska se ut.
class Snowflake {
  // Properties - Egenskaper
  private positionX: number;
  public positionY: number;
  private size: number;
  private velocityY: number;

  // Constructor. Hur snöflingan är uppbyggd. Bygga upp objektet, körs bara en gång.
  constructor() {
    this.positionY = -10;
    this.positionX = random(0, width); // Det snöar på hela skärmen från sida till sida.
    this.size = random(1, 5);
    this.velocityY = random(1, 3);
    this.velocityY = random(0.3, 0.6) * this.size; // Små flingor faller långsammare.
  }

  // Methods - Metoder
  public update() {
    this.positionY += this.velocityY;
  }

  // Ta för vana att alltid lägga till push och pop. Ta en ny pensen, släng penseln när du är klar.
  // Här målas snöflingan ut.
  public draw() {
    push();
    fill(255); // Detta blir vit färg
    stroke(255);
    circle(this.positionX, this.positionY, this.size);
    pop();
  }
}
