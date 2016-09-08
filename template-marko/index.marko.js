function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXml = __helpers.x;

  return function render(data, out) {
    out.w("<!DOCTYPE html><html lang=\"en\"><head><meta charset=\"UTF-8\"><title>Marko Streaming Results</title></head><body><h1>Marko Streaming Results</h1><p>Hello " +
      escapeXml(data.name) +
      "!</p></body></html>");
  };
}

(module.exports = require("marko").c(__filename)).c(create);
