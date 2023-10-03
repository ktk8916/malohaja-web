import React, { useState } from 'react';
import { useReactMediaRecorder } from 'react-media-recorder';

const AnswerRecord = () => {
  const [audioBlob, setAudioBlob] = useState(null);
  const { status, startRecording, stopRecording, mediaBlobUrl } =
    useReactMediaRecorder({
      audio: true,
      onDataAvailable: (audioBlob) => {
        setAudioBlob(audioBlob);
      },
    });

  return (
    <div>
      <div>
        <p>{status}</p>
        <button onClick={startRecording}>Start Recording</button>
        <button onClick={stopRecording}>Stop Recording</button>
        <audio src={mediaBlobUrl} controls />
      </div>
      <button onClick={() => console.log(audioBlob)}>dadad</button>
    </div>
  );
};

export default AnswerRecord;
