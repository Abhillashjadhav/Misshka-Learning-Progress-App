// Text-to-Speech utility for Nova's voice

export const speak = (text: string, rate: number = 1.0, pitch: number = 1.2) => {
  // Check if browser supports speech synthesis
  if (!('speechSynthesis' in window)) {
    console.warn('Speech synthesis not supported');
    return;
  }

  // Cancel any ongoing speech
  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);

  // Configure Nova's voice to sound friendly and child-appropriate
  utterance.rate = rate; // Speed (0.1 to 10)
  utterance.pitch = pitch; // Pitch (0 to 2) - higher for Nova
  utterance.volume = 1.0; // Volume (0 to 1)

  // Try to use a female voice if available
  const voices = window.speechSynthesis.getVoices();
  const femaleVoice = voices.find(voice =>
    voice.name.includes('Female') ||
    voice.name.includes('Samantha') ||
    voice.name.includes('Karen') ||
    voice.name.includes('Moira')
  );

  if (femaleVoice) {
    utterance.voice = femaleVoice;
  }

  window.speechSynthesis.speak(utterance);
};

// Speak with enthusiasm (for correct answers)
export const speakExcited = (text: string) => {
  speak(text, 1.1, 1.4);
};

// Speak encouragingly (for wrong answers)
export const speakEncouraging = (text: string) => {
  speak(text, 0.95, 1.2);
};

// Speak normally (for questions)
export const speakQuestion = (text: string) => {
  speak(text, 0.9, 1.2);
};

// Stop speaking
export const stopSpeaking = () => {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
};
