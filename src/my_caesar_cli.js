const { pipeline } = require("stream");
const { promisify } = require("util");

const { readStream, writeStream, transformStream } = require("./streams");

const pipelineAsync = promisify(pipeline);

(async () => {
  try {
    await pipelineAsync(readStream, transformStream, writeStream);
    process.stdout.write("Текст переведен");
  } catch (err) {
    process.stderr.write("Ошибка:", err);
  }
})();