//@Lian@Matthew@Calvin
const sentence = "hello there from lighthouse labs";

const typewriter = function() {
  let sentenceArray = sentence.split('');
  for (let i = 0; i < sentence.length; i++) {
    setTimeout(() => {
      process.stdout.write(sentenceArray[i]);
      if (i === sentence.length - 1) {
        process.stdout.write('\n');
      }
    }, 50 * i);
  }
};

typewriter();
