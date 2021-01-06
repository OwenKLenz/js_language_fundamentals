// Stuck on Page 18

// The following code is a simplified (and not so serious) model of how we read a software development book. But running this code results in a stack overflow. What is wrong?

const totalPages = 364;
let energy = 100;

function read2() {
  while (energy > 0 && currentPage < totalPages) {
    currentPage += 1;
    energy -= (5 + currentPage * 0.1);
  }

  `Made it to page ${String(currentPage)}.`;

  // Drink a cup of coffee.
  energy = 100;

  // Continue reading.
  if (currentPage < totalPages) {
    read2();
  } else {
    'Done!';
  }
}

let now = new Date();

for (let count = 0; count < 10000; count++) {
  currentPage = 1;
  read2();
}

console.log(`That took ${new Date() - now} ms`);

energy = 100;

function read(currentPage = 1) {
  while (energy > 0 && currentPage < totalPages) {
    currentPage += 1;
    energy -= (5 + currentPage * 0.1);
  }

  `Made it to page ${String(currentPage)}.`;

  // Drink a cup of coffee.
  energy = 100;

  // Continue reading.
  if (currentPage < totalPages) {
    read(currentPage);
  } else {
    'Done!';
  }
}

now = new Date();

for (let count = 0; count < 10000; count++) {
  read();
}

console.log(`That took ${new Date() - now} ms`);


// Whenever we enter another recursive call to read(), we lose sight of the old currentPage variable and a new currentPage is set 1 meaning that we'll never reach the final page and we'll be reading infinitely, or at least until the stack overflows.

// To fix this, we could pass the current page to each recursive call to read() so that we continue to track it with each new invocaiton of read().
