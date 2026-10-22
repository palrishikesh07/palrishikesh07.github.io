export const getResumeFileName = (targetDate: Date = new Date()): string => {
  const day = String(targetDate.getDate()).padStart(2, '0');
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const month = monthNames[targetDate.getMonth()];
  return `Rishikesh_Pal_${day}_${month}.pdf`;
};

export const downloadResume = async (
  url: string = 'https://raw.githubusercontent.com/palrishikesh07/interview/main/Rishikesh_Pal.pdf',
  customFileName?: string
): Promise<void> => {
  const fileName = customFileName || getResumeFileName();
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Failed to download: ${response.statusText}`);

  const blob = await response.blob();
  const downloadUrl = window.URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = downloadUrl;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  window.URL.revokeObjectURL(downloadUrl);
};