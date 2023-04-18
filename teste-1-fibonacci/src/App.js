
let num = parseInt(prompt("Digite um número: "));
let antecessor = 0;
let sucessor = 1;
let proximo = antecessor + sucessor;
let isFibonacci = false;

while (proximo <= num) {
  if (proximo === num) {
    isFibonacci = true;
    break;
  }
  antecessor = sucessor;
  sucessor = proximo;
  proximo = antecessor + sucessor;
}

if (proximo > num) {
  isFibonacci = false;
}
function App() {
  return (
    <div >
        {isFibonacci ? (
        <p>{num} pertence à sequência de Fibonacci.</p>
      ) : (
        <p>{num} não pertence à sequência de Fibonacci.</p>
      )}
      
    </div>
  );
}

export default App;
