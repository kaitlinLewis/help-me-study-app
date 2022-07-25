//const AudioContext = window.AudioContext || window.webkitAudioContext;

//const audioContext = new AudioContext();

//var bufferSize = 2 * audioContext.sampleRate,
//  noiseBuffer = audioContext.createBuffer(
//    1,
//    bufferSize,
//    audioContext.sampleRate
//  ),
//  output = noiseBuffer.getChannelData(0);
//const randomSamples = for (var i = 0; i < bufferSize; i++) {
//  output[i] = Math.random() * 2 - 1;
//}

//class MakeNoise {
//  constructor(buffer, loop, start) {
//    (this.buffer = buffer), (this.loop = loop), (this.start = start);
//  }
//}

//let whiteNoise = new MakeNoise(noiseBuffer, true, 0);
//var whiteNoise = audioContext.createBufferSource();
//whiteNoise.buffer = noiseBuffer;
//whiteNoise.loop = true;
//whiteNoise.start(0);

//whiteNoise.connect(audioContext.destination);

//var pinkNoise = (function () {
//  var b0, b1, b2, b3, b4, b5, b6;
//  b0 = b1 = b2 = b3 = b4 = b5 = b6 = 0.0;
//  var node = audioContext.createScriptProcessor(bufferSize, 1, 1);
//  node.onaudioprocess = function (e) {
//    var output = e.outputBuffer.getChannelData(0);
//    for (var i = 0; i < bufferSize; i++) {
//      var white = Math.random() * 2 - 1;
//      b0 = 0.99886 * b0 + white * 0.0555179;
//      b1 = 0.99332 * b1 + white * 0.0750759;
//      b2 = 0.969 * b2 + white * 0.153852;
//      b3 = 0.8665 * b3 + white * 0.3104856;
//      b4 = 0.55 * b4 + white * 0.5329522;
//      b5 = -0.7616 * b5 - white * 0.016898;
//      output[i] = b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362;
//      output[i] *= 0.11; // (roughly) compensate for gain
//      b6 = white * 0.115926;
//    }
//  };
//  return node;
//})();

//pinkNoise.connect(audioContext.destination);

//var brownNoise = (function () {
//  var lastOut = 0.0;
//  var node = audioContext.createScriptProcessor(bufferSize, 1, 1);
//  node.onaudioprocess = function (e) {
//    var output = e.outputBuffer.getChannelData(0);
//    for (var i = 0; i < bufferSize; i++) {
//      var white = Math.random() * 2 - 1;
//      output[i] = (lastOut + 0.02 * white) / 1.02;
//      lastOut = output[i];
//      output[i] *= 3.5; // (roughly) compensate for gain
//    }
//  };
//  return node;
//})();

//brownNoise.connect(audioContext.destination);
