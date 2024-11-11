export default function base64toFile(base_data: string, filename: string) {
  const arr = base_data.split(',');
  const match = arr[0].match(/:(.*?);/);
  const mime = match ? match[1] : '';
  const bstr = atob(arr[1]);
  const n = bstr.length;
  const u8arr = new Uint8Array(n);
  const fileType = mime.split('/')[1];

  for (let i = 0; i < n; i++) {
    u8arr[i] = bstr.charCodeAt(i);
  }

  return new File([u8arr], filename + `.${fileType}`, { type: mime });
}
