function createAudioHTML(path) {
  return '<audio controls controlslist="nodownload" class="px-1"> <source src=' +
      path +
      ' type="audio/wav">Your browser does not support the audio element.</audio>';
}


function generateExampleRow(table_row, base_path, filename_ext, col_offset) {
  for (var i = 0; i < filename_ext.length; i++) {
    let p = base_path + filename_ext[i];
    let cell = table_row.cells[col_offset + i];
    // console.log(table_row.cells.length)
    if (p.endsWith('txt')) {
      var req = new XMLHttpRequest();
      req.open("GET", p, false);
      req.send(null);
      cell.innerHTML = '<font size="-1">' + req.responseText + '</font>';
    } else {
      cell.innerHTML = cell.innerHTML + createAudioHTML(p);
    }
  }
}

function generateDataExample(tableId) {
  let table = document.getElementById(tableId);
  let ext = ['.mp3', '_transcription.txt', '_context.txt', '_cot.txt', '_answer.txt'];
  for (var i = 0; i < 6; i++) {
    generateExampleRow(table.rows[1 + i], 'data/example_data/' + i, ext, 0);
  }
}

function generateThoughtTTS(tableId) {
  let table = document.getElementById(tableId);
  let ext = ['_transcription.txt', '_context.txt', '_cot.txt', '_answer.txt', '_prompt.mp3', '_generated.wav'];
  for (var i = 0; i < 4; i++) {
    generateExampleRow(table.rows[1 + i], 'data/thought-tts/' + (3-i), ext, 0);
  }
  table = document.getElementById(tableId);
  ext = ['_transcription.txt', '_context.txt', '_cot.txt', '_answer.txt', '_prompt2.mp3', '_generated2.wav'];
  for (var i = 0; i < 4; i++) {
    generateExampleRow(table.rows[1 + i], 'data/thought-tts/' + (3-i), ext, 0);
  }
}

function generateAblation(tableId) {
  let table = document.getElementById(tableId);
  let ext = ['_transcription.txt', '_context.txt', '_prompt.mp3', '_generated.wav', '_generated_wo_cot.wav'];
  for (var i = 0; i < 4; i++) {
    generateExampleRow(table.rows[1 + i], 'data/ablation/' + (3-i), ext, 0);
  }
  table = document.getElementById(tableId);
  ext = ['_transcription.txt', '_context.txt', '_prompt2.mp3', '_generated2.wav', '_generated2_wo_cot.wav'];
  for (var i = 0; i < 4; i++) {
    generateExampleRow(table.rows[1 + i], 'data/ablation/' + (3-i), ext, 0);
  }
}

function generateControl(tableId) {
  let table = document.getElementById(tableId);
  let ext = ['_transcription.txt', '_context.txt', '_cot.txt', '_answer.txt', '_prompt.wav', '_generated.wav'];
  for (var i = 0; i < 4; i++) {
    generateExampleRow(table.rows[1 + i], 'data/fine_grained_control/' + i, ext, 0);
  }
}


generateDataExample('data-example-table')
generateThoughtTTS('thought-tts-table')
generateAblation('ablation-table')
generateControl('control-table')


