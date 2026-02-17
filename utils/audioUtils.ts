
export type AudioWorkletNode = any;

export const blobToJSON = (blob: Blob): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === "string") {
        const data = reader.result.split(",")[1];
        resolve(data);
      } else {
        reject("result is not a string");
      }
    };
    reader.readAsDataURL(blob);
  });

export function base64ToFloat32Array(base64: string): Float32Array {
  const binaryString = atob(base64);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  
  // Convert Int16 (from API) to Float32 (for AudioContext)
  const int16Data = new Int16Array(bytes.buffer);
  const float32Data = new Float32Array(int16Data.length);
  for (let i = 0; i < int16Data.length; i++) {
    float32Data[i] = int16Data[i] / 32768.0;
  }
  return float32Data;
}

export function float32ArrayToBase64(data: Float32Array): string {
  const int16Data = new Int16Array(data.length);
  for (let i = 0; i < data.length; i++) {
    int16Data[i] = Math.max(-32768, Math.min(32767, data[i] * 32768));
  }
  const bytes = new Uint8Array(int16Data.buffer);
  let binary = '';
  const len = bytes.byteLength;
  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
}
