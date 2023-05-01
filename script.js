const enChars = [
  '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
  'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', 'Delete',
  'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter',
  'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'ArrowUp', 'Shift', 'Ctrl',
  'Meta', 'Alt', ' ', 'Alt', 'Ctrl', 'ArrowLeft', 'ArrowDown', 'ArrowRight'];

const enCharsCodes = [
  'Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace',
  'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Delete',
  'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter',
  'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight', 'ControlLeft',
  'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight'];

const textArea = document.createElement('textarea');
const keyboard = document.createElement('div');

keyboard.classList.add('keyboard');
textArea.classList.add('text');

enChars.forEach((char, index) => {
  const key = document.createElement('button');
  key.classList.add('key');
  key.classList.add(enCharsCodes[index]);
  if (char === 'ArrowUp') key.innerHTML = '↑';
  else if (char === 'ArrowDown') key.innerHTML = '↓';
  else if (char === 'ArrowLeft') key.innerHTML = '←';
  else if (char === 'ArrowRight') key.innerHTML = '→';
  else key.innerHTML = char;
  keyboard.appendChild(key);
  if (char === ' ') {
    key.addEventListener('click', () => {
      textArea.value += ' ';
    });
  } else {
    key.addEventListener('click', () => {
      textArea.value += char;
    });
  }
});

textArea.addEventListener('keydown', (event) => {
  event.preventDefault();
});

document.addEventListener('keydown', (event) => {
  if (event.key !== 'Escape' && event.key !== 'Tab' && event.key !== 'CapsLock' && event.key !== 'Shift' && event.key !== 'Enter'
    && event.key !== 'Delete' && event.key !== 'Backspace' && event.key !== 'Alt' && event.key !== 'Meta' && event.key !== 'Control'
    && event.key !== 'Control' && event.key !== 'ArrowUp' && event.key !== 'ArrowDown' && event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') {
    textArea.value += event.key;
  }
  if (event.key === 'Backspace') {
    textArea.value = textArea.value.slice(0, -1);
  }
  if (event.key === 'Enter') {
    textArea.value += '\n';
  }
  if (event.key === 'Tab') {
    textArea.value += '\t';
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Delete') {
    const cursorPosition = textArea.selectionStart;
    const text = textArea.value;
    if (cursorPosition < text.length) {
      textArea.value = text.slice(0, cursorPosition) + text.slice(cursorPosition + 1);
    }
  }
});

document.addEventListener('keydown', (event) => {
  const key = document.querySelector(`.key.${event.code}`);
  if (key) {
    key.classList.add('pressed');
  }
});

document.addEventListener('keyup', (event) => {
  const key = document.querySelector(`.key.${event.code}`);
  if (key) {
    key.classList.remove('pressed');
  }
});
document.body.appendChild(textArea);
document.body.appendChild(keyboard);
