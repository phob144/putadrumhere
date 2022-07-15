export const getFileExtension = (fileName: string) => {
    return fileName.substring(fileName.lastIndexOf('.') + 1);
};
