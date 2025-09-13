function towerOfHanoi(n, source, auxiliary, destination) {
  if (n === 0) return;

  towerOfHanoi(n - 1, source, destination, auxiliary);
  console.log(`Move disk ${n} from ${source} to ${destination}`);
  towerOfHanoi(n - 1, auxiliary, source, destination);
}

towerOfHanoi(5,'A','B','C');